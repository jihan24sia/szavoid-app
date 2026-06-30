import React, { useState, useEffect } from 'react';
import { Search, Filter, Eye, CheckCircle2, Clock, CalendarDays, Wallet, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient'; 

// --- IMPORT KOMPONEN INTERNAL MASTER ---
import SectionHeader from '../components/SectionHeader';

const History = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(""); 

    // 🌟 1. AMBIL DATA AWAL DARI SUPABASE (KOLOM SUDAH DISTERILKAN)
    const fetchOrders = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('orders')
                // 🛠️ Hanya mengambil kolom-kolom yang VALID ada di DB kamu
                .select('id, customer_name, service_name, qty, total_price, status, created_at')
                .order('created_at', { ascending: false });

            if (error) throw error;

            if (data) {
                const formattedOrders = data.map(order => ({
                    id: order.id,
                    customer: order.customer_name || 'No Name',
                    service: order.service_name || 'Custom Service',
                    weight: order.qty ? `${order.qty}kg` : '-',
                    total: order.total_price || 0,
                    status: order.status || 'Pending',
                    // 💡 Karena kolom payment_status ga ada, kita fallback ke logic: 
                    // Jika status-nya 'Selesai'/'Completed', kita anggap 'Paid', sisanya 'Unpaid'.
                    // SIlakan ganti logic ini sesuai nama kolom asli di DB-mu nanti!
                    payment: (order.status === 'Completed' || order.status === 'Selesai') ? 'Paid' : 'Unpaid',
                    date: order.created_at ? new Date(order.created_at).toISOString().split('T')[0] : '-'
                }));
                setOrders(formattedOrders);
            }
        } catch (err) {
            console.error("Gagal memuat riwayat order:", err.message);
        } finally {
            setLoading(false);
        }
    };

    // 🌟 2. SETUP REALTIME LISTENER & INITIAL FETCH
    useEffect(() => {
        fetchOrders();

        const ordersChannel = supabase
            .channel('public:orders')
            .on('postgres_changes', { event: '*', scheme: 'public', table: 'orders' }, () => {
                fetchOrders();
            })
            .subscribe();

        return () => {
            supabase.removeChannel(ordersChannel);
        };
    }, []);

    // 🌟 3. FUNGSI UPDATE STATUS (Menyesuaikan kolom status yang ada)
    const togglePayment = async (id, currentPaymentStatus) => {
        const nextPayment = currentPaymentStatus === 'Paid' ? 'Unpaid' : 'Paid';
        // Karena kolom payment_status ga ada, kita ubah status ordernya saja sebagai penanda
        const nextStatus = nextPayment === 'Paid' ? 'Completed' : 'Antri';
        
        try {
            // Optimistic Update UI
            setOrders(prev => prev.map(o => o.id === id ? { ...o, payment: nextPayment, status: nextStatus } : o));

            const { error } = await supabase
                .from('orders')
                .update({ status: nextStatus }) // Mengubah kolom 'status' karena kolom payment tidak ada
                .eq('id', id);

            if (error) throw error;
        } catch (err) {
            alert("Gagal memperbarui status: " + err.message);
            fetchOrders(); 
        }
    };

    // 🌟 4. FILTER PENCARIAN
    const filteredOrders = orders.filter(order => 
        String(order.id).toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased p-2 flex flex-col gap-8">
            
            {/* --- 1. HEADER SECTION --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                
                <SectionHeader 
                    title="Order History"
                    subtitle="Manajemen pencatatan invoice masuk, status pengerjaan laundry, dan verifikasi kasir secara real-time."
                    variant="default"
                />

                {/* Search & Filter Bar */}
                <div className="flex gap-3 w-full md:w-auto shrink-0">
                    <div className="relative flex-1 md:w-72 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={15} />
                        <input 
                            type="text" 
                            placeholder="Cari Order ID / Nama..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl text-xs font-semibold text-slate-800 outline-none transition-all"
                        />
                    </div>
                    <button className="bg-white p-3 rounded-xl text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                        <Filter size={16} />
                    </button>
                </div>
            </div>

            {/* --- 2. PREMIUM DATA TABLE CONTAINER --- */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex-1 flex flex-col min-h-[400px]">
                <div className="overflow-x-auto h-full custom-scrollbar">
                    {loading && orders.length === 0 ? (
                        <div className="p-20 flex flex-col items-center justify-center gap-3 text-slate-400 text-xs font-bold">
                            <Loader2 className="animate-spin text-blue-600" size={24} />
                            Menghubungkan ke Realtime Supabase...
                        </div>
                    ) : filteredOrders.length === 0 ? (
                        <div className="p-20 text-center text-slate-400 text-xs font-semibold">
                            Tidak ada riwayat order yang ditemukan.
                        </div>
                    ) : (
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/70 border-b border-slate-100 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                                    <th className="px-6 py-4">Order ID</th>
                                    <th className="px-6 py-4">Customer</th>
                                    <th className="px-6 py-4">Service Package</th>
                                    <th className="px-6 py-4">Total Bill</th>
                                    <th className="px-6 py-4 text-center">Work Status</th>
                                    <th className="px-6 py-4">Payment</th>
                                    <th className="px-6 py-4 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                                        {/* Order ID Badge */}
                                        <td className="px-6 py-5.5">
                                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1.5 rounded-lg border border-blue-100">
                                                {order.id}
                                            </span>
                                        </td>
                                        
                                        {/* Customer & Date */}
                                        <td className="px-6 py-5.5">
                                            <div className="flex flex-col">
                                                <p className="text-sm font-bold text-slate-900 tracking-tight">{order.customer}</p>
                                                <div className="flex items-center gap-1 text-slate-400 mt-1">
                                                    <CalendarDays size={11} className="text-slate-300" />
                                                    <p className="text-[10px] font-medium">{order.date}</p>
                                                </div>
                                            </div>
                                        </td>
                                        
                                        {/* Service Details */}
                                        <td className="px-6 py-5.5">
                                            <div className="inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200/60 px-2.5 py-1.5 rounded-lg">
                                                <span>{order.service}</span>
                                                <span className="text-blue-500 font-bold">({order.weight})</span>
                                            </div>
                                        </td>
                                        
                                        {/* Total Financial Bill */}
                                        <td className="px-6 py-5.5 font-bold text-slate-900 text-sm">
                                            Rp {order.total.toLocaleString('id-ID')}
                                        </td>
                                        
                                        {/* Badge Status Pengerjaan */}
                                        <td className="px-6 py-5.5">
                                            <div className="flex items-center justify-center">
                                                <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[10px] font-bold uppercase tracking-wider ${
                                                    order.status === 'Completed' || order.status === 'Selesai'
                                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                                                    : order.status === 'In Progress' || order.status === 'Proses' || order.status === 'Antri'
                                                    ? 'bg-blue-50 text-blue-700 border-blue-100'
                                                    : 'bg-amber-50 text-amber-700 border-amber-100'
                                                }`}>
                                                    {order.status === 'Completed' || order.status === 'Selesai' ? (
                                                        <CheckCircle2 size={12} className="text-emerald-600" />
                                                    ) : (
                                                        <Clock size={12} className={order.status === 'In Progress' || order.status === 'Proses' ? 'text-blue-600' : 'text-amber-600'} />
                                                    )}
                                                    <span>{order.status}</span>
                                                </div>
                                            </div>
                                        </td>
                                        
                                        {/* Action Toggle Status Pembayaran */}
                                        <td className="px-6 py-5.5">
                                            <button 
                                                onClick={() => togglePayment(order.id, order.payment)}
                                                className={`w-full max-w-[130px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-wide transition-all border ${
                                                    order.payment === 'Paid' 
                                                    ? 'bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700 shadow-sm shadow-emerald-900/10' 
                                                    : 'bg-white text-rose-600 border-rose-200 hover:bg-rose-50'
                                                }`}
                                            >
                                                {order.payment === 'Paid' ? (
                                                    <><CheckCircle2 size={12} strokeWidth={3} /> Paid</>
                                                ) : (
                                                    <><Wallet size={12} strokeWidth={2.5} /> Mark Paid</>
                                                )}
                                            </button>
                                        </td>
                                        
                                        {/* Detail Eye Button */}
                                        <td className="px-6 py-5.5">
                                            <div className="flex justify-center">
                                                <button className="p-2 bg-white text-slate-400 hover:text-blue-600 rounded-xl border border-slate-200 hover:border-blue-100 hover:shadow-sm transition-all">
                                                    <Eye size={15} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default History;