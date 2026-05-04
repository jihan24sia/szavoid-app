import React, { useState } from 'react';
import { Search, Filter, Eye, CheckCircle2, XCircle, Clock } from 'lucide-react';

const History = () => {
    // Data dummy untuk riwayat order & pembayaran
    const [orders, setOrders] = useState([
        { id: 'ORD-001', customer: 'Budi Santoso', service: 'Cuci Setrika', weight: '5kg', total: 35000, status: 'Completed', payment: 'Paid', date: '2024-03-20' },
        { id: 'ORD-002', customer: 'Siti Aminah', service: 'Cuci Selimut', weight: '2kg', total: 20000, status: 'In Progress', payment: 'Unpaid', date: '2024-03-21' },
        { id: 'ORD-003', customer: 'Agus Rumbai', service: 'Setrika Saja', weight: '10kg', total: 50000, status: 'Pending', payment: 'Unpaid', date: '2024-03-21' },
    ]);

    // Fungsi ganti status pembayaran (Basic Recording)
    const togglePayment = (id) => {
        setOrders(orders.map(order => 
            order.id === id 
            ? { ...order, payment: order.payment === 'Paid' ? 'Unpaid' : 'Paid' } 
            : order
        ));
    };

    return (
        <div className="animate-in fade-in duration-500 h-full flex flex-col gap-6 p-2">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-black text-[#2B3674] tracking-tight uppercase italic">Order History</h2>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Manajemen Riwayat & Pembayaran</p>
                </div>

                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                        <input 
                            type="text" 
                            placeholder="Cari Order ID / Nama..." 
                            className="pl-10 pr-4 py-2 bg-white rounded-xl border-none shadow-sm text-xs w-64 outline-none focus:ring-2 focus:ring-[#6358DC]"
                        />
                    </div>
                    <button className="bg-white p-2 rounded-xl shadow-sm text-[#2B3674] hover:bg-gray-50">
                        <Filter size={18} />
                    </button>
                </div>
            </div>

            {/* TABEL RIWAYAT */}
            <div className="bg-white/60 backdrop-blur-md rounded-[35px] border border-white shadow-xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#6358DC]/5">
                            <th className="p-5 text-[10px] font-black uppercase tracking-widest text-[#2B3674] opacity-60">Order ID</th>
                            <th className="p-5 text-[10px] font-black uppercase tracking-widest text-[#2B3674] opacity-60">Customer</th>
                            <th className="p-5 text-[10px] font-black uppercase tracking-widest text-[#2B3674] opacity-60">Layanan</th>
                            <th className="p-5 text-[10px] font-black uppercase tracking-widest text-[#2B3674] opacity-60">Total</th>
                            <th className="p-5 text-[10px] font-black uppercase tracking-widest text-[#2B3674] opacity-60">Status Order</th>
                            <th className="p-5 text-[10px] font-black uppercase tracking-widest text-[#2B3674] opacity-60">Pembayaran</th>
                            <th className="p-5 text-[10px] font-black uppercase tracking-widest text-[#2B3674] opacity-60 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-white/40 transition-colors group">
                                <td className="p-5 text-xs font-black text-[#6358DC] italic">{order.id}</td>
                                <td className="p-5">
                                    <p className="text-xs font-black text-[#2B3674]">{order.customer}</p>
                                    <p className="text-[10px] font-bold text-gray-400">{order.date}</p>
                                </td>
                                <td className="p-5">
                                    <span className="text-[10px] font-black bg-indigo-50 text-[#6358DC] px-2 py-1 rounded-lg uppercase">{order.service} ({order.weight})</span>
                                </td>
                                <td className="p-5 text-xs font-black text-[#2B3674]">Rp {order.total.toLocaleString()}</td>
                                <td className="p-5">
                                    <div className="flex items-center gap-2">
                                        {order.status === 'Completed' ? <CheckCircle2 size={14} className="text-green-500" /> : <Clock size={14} className="text-orange-400" />}
                                        <span className={`text-[10px] font-black uppercase ${order.status === 'Completed' ? 'text-green-500' : 'text-orange-400'}`}>{order.status}</span>
                                    </div>
                                </td>
                                <td className="p-5">
                                    <button 
                                        onClick={() => togglePayment(order.id)}
                                        className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-tighter transition-all ${
                                            order.payment === 'Paid' 
                                            ? 'bg-green-100 text-green-600 border border-green-200' 
                                            : 'bg-red-100 text-red-600 border border-red-200 animate-pulse'
                                        }`}
                                    >
                                        {order.payment === 'Paid' ? '✓ Sudah Bayar' : '✕ Belum Bayar'}
                                    </button>
                                </td>
                                <td className="p-5">
                                    <div className="flex justify-center gap-2">
                                        <button className="p-2 bg-white rounded-xl shadow-sm text-gray-400 hover:text-[#6358DC] transition-all">
                                            <Eye size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;