import React, { useState } from 'react';
import { Search, Filter, Eye, CheckCircle2, XCircle, Clock, CalendarDays, Wallet } from 'lucide-react';

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

    <div className="h-full flex flex-col gap-8">
            
            {/* HEADER SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 px-2">
                <div className="flex items-center gap-4">
                    <div className="w-2 h-10 bg-[#1678F3] rounded-full"></div>
                    <div>
                        <h2 className="text-4xl font-black text-[#1678F3] tracking-tighter uppercase italic leading-none">Order History</h2>
                        <p className="text-[#4DBAE9] text-[10px] font-black uppercase tracking-[0.4em] mt-1">Laporan Riwayat Transaksi</p>
                    </div>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-72 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1678F3] transition-colors" size={16} />
                        <input 
                            type="text" 
                            placeholder="Cari Order ID / Nama..." 
                            className="w-full pl-12 pr-4 py-3.5 bg-white/80 backdrop-blur-md rounded-2xl border-none shadow-xl shadow-blue-100/20 text-xs font-bold text-[#1678F3] outline-none focus:ring-2 focus:ring-[#1678F3]/20 transition-all"
                        />
                    </div>
                    <button className="bg-white p-3.5 rounded-2xl shadow-xl shadow-blue-100/20 text-[#1678F3] hover:bg-blue-50 transition-all border border-blue-50">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            {/* TABEL RIWAYAT */}
            <div className="bg-white/70 backdrop-blur-md rounded-[45px] border border-white shadow-2xl shadow-blue-100/40 overflow-hidden flex-1">
                <div className="overflow-x-auto h-full custom-scrollbar">
                    <table className="w-full text-left border-collapse">
                        <thead className="sticky top-0 bg-[#F8FAFC]/90 backdrop-blur-md z-10">
                            <tr className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                                <th className="px-8 py-6">Order ID</th>
                                <th className="px-8 py-6">Customer</th>
                                <th className="px-8 py-6 text-center">Service</th>
                                <th className="px-8 py-6">Bill</th>
                                <th className="px-8 py-6 text-center">Status</th>
                                <th className="px-8 py-6">Payment</th>
                                <th className="px-8 py-6 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-50/50">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-white/50 transition-all group">
                                    <td className="px-8 py-6">
                                        <span className="text-xs font-black text-[#1678F3] italic bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100">
                                            {order.id}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex flex-col">
                                            <p className="text-sm font-black text-[#1678F3] uppercase italic tracking-tighter">{order.customer}</p>
                                            <div className="flex items-center gap-1.5 text-gray-400 mt-1">
                                                <CalendarDays size={10} />
                                                <p className="text-[9px] font-bold uppercase tracking-widest">{order.date}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <span className="text-[10px] font-black bg-[#F8FAFC] text-gray-500 border border-gray-100 px-3 py-2 rounded-xl uppercase tracking-tighter">
                                            {order.service} <span className="text-[#4DBAE9]">({order.weight})</span>
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 font-black text-[#1678F3] text-sm italic">
                                        Rp {order.total.toLocaleString('id-ID')}
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center justify-center gap-2">
                                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                                                order.status === 'Completed' ? 'bg-emerald-50' : 'bg-orange-50'
                                            }`}>
                                                {order.status === 'Completed' 
                                                    ? <CheckCircle2 size={12} className="text-emerald-500" /> 
                                                    : <Clock size={12} className="text-orange-400" />
                                                }
                                                <span className={`text-[9px] font-black uppercase tracking-widest ${
                                                    order.status === 'Completed' ? 'text-emerald-500' : 'text-orange-400'
                                                }`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <button 
                                            onClick={() => togglePayment(order.id)}
                                            className={`w-full group/btn flex items-center justify-center gap-2 px-4 py-2.5 rounded-[18px] text-[10px] font-black uppercase tracking-tighter transition-all ${
                                                order.payment === 'Paid' 
                                                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-100 hover:scale-105 active:scale-95' 
                                                : 'bg-white text-rose-500 border-2 border-rose-100 hover:bg-rose-50 animate-pulse hover:animate-none'
                                            }`}
                                        >
                                            {order.payment === 'Paid' ? (
                                                <><CheckCircle2 size={12} strokeWidth={3} /> Paid</>
                                            ) : (
                                                <><Wallet size={12} strokeWidth={3} /> Mark as Paid</>
                                            )}
                                        </button>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex justify-center">
                                            <button className="p-3 bg-white rounded-2xl shadow-sm text-gray-300 hover:text-[#1678F3] hover:shadow-md transition-all border border-gray-50">
                                                <Eye size={18} />
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