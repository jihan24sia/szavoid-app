import React, { useState } from 'react';
import { Search, Filter, Eye, CheckCircle2, Clock, CalendarDays, Wallet } from 'lucide-react';

// --- IMPORT KOMPONEN INTERNAL MASTER ---
import SectionHeader from '../components/SectionHeader';

const History = () => {
    // Data dummy untuk riwayat order & pembayaran
    const [orders, setOrders] = useState([
        { id: 'ORD-001', customer: 'Budi Santoso', service: 'Cuci Setrika', weight: '5kg', total: 35000, status: 'Completed', payment: 'Paid', date: '2024-03-20' },
        { id: 'ORD-002', customer: 'Siti Aminah', service: 'Cuci Selimut', weight: '2kg', total: 20000, status: 'In Progress', payment: 'Unpaid', date: '2024-03-21' },
        { id: 'ORD-003', customer: 'Agus Rumbai', service: 'Setrika Saja', weight: '10kg', total: 50000, status: 'Pending', payment: 'Unpaid', date: '2024-03-21' },
    ]);

    // Fungsi ganti status pembayaran
    const togglePayment = (id) => {
        setOrders(orders.map(order => 
            order.id === id 
            ? { ...order, payment: order.payment === 'Paid' ? 'Unpaid' : 'Paid' } 
            : order
        ));
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased p-2 flex flex-col gap-8">
            
            {/* --- 1. HEADER SECTION (MENGGUNAKAN KOMPONEN RESMI) --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                
                <SectionHeader 
                    title="Order History"
                    subtitle="Manajemen pencatatan invoice masuk, status pengerjaan laundry, dan verifikasi kasir."
                    variant="default"
                />

                {/* Search & Filter Bar */}
                <div className="flex gap-3 w-full md:w-auto shrink-0">
                    <div className="relative flex-1 md:w-72 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={15} />
                        <input 
                            type="text" 
                            placeholder="Cari Order ID / Nama..." 
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl text-xs font-semibold text-slate-800 outline-none transition-all"
                        />
                    </div>
                    <button className="bg-white p-3 rounded-xl text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                        <Filter size={16} />
                    </button>
                </div>
            </div>

            {/* --- 2. PREMIUM DATA TABLE CONTAINER --- */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex-1">
                <div className="overflow-x-auto h-full custom-scrollbar">
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
                            {orders.map((order) => (
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
                                                order.status === 'Completed' 
                                                ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                                                : order.status === 'In Progress'
                                                ? 'bg-blue-50 text-blue-700 border-blue-100'
                                                : 'bg-amber-50 text-amber-700 border-amber-100'
                                            }`}>
                                                {order.status === 'Completed' ? (
                                                    <CheckCircle2 size={12} className="text-emerald-600" />
                                                ) : (
                                                    <Clock size={12} className={order.status === 'In Progress' ? 'text-blue-600' : 'text-amber-600'} />
                                                )}
                                                <span>{order.status}</span>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    {/* Action Toggle Status Pembayaran */}
                                    <td className="px-6 py-5.5">
                                        <button 
                                            onClick={() => togglePayment(order.id)}
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
                </div>
            </div>
        </div>
    );
};

export default History;