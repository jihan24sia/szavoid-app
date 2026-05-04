import React, { useState } from 'react';
import { 
  ClipboardList, Search, Filter, MoreVertical, 
  Clock, CheckCircle2, AlertCircle 
} from 'lucide-react';

const Orders = ({ orders }) => { // Menangkap data orders dari props App.jsx
  const [searchTerm, setSearchTerm] = useState("");

  // Fungsi Warna Status (Pindahkan ke luar atau pastikan strukturnya benar)
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Antri': return 'bg-orange-100 text-orange-600 border-orange-200';
      case 'Proses': return 'bg-indigo-100 text-[#6358DC] border-indigo-200';
      case 'Selesai': return 'bg-green-100 text-green-600 border-green-200';
      case 'Diambil': return 'bg-gray-100 text-gray-500 border-gray-200';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  // Filter pencarian berdasarkan nama pelanggan atau ID
  const filteredOrders = orders.filter(o => 
    o.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
    o.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-in fade-in duration-700 h-full flex flex-col gap-6">
      
      {/* --- HEADER --- */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-black text-[#2B3674] tracking-tight uppercase italic">Order Management</h2>
          <p className="text-[11px] font-bold text-gray-400 tracking-[0.3em] uppercase mt-1">Pantau & Update Status Cucian</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative w-64">
            <input 
              type="text" 
              placeholder="Cari Order ID / Nama..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-none rounded-2xl py-3 pl-10 pr-4 text-xs shadow-sm focus:ring-2 focus:ring-[#6358DC] outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
          </div>
          <button className="bg-white p-3 rounded-2xl text-gray-400 hover:text-[#6358DC] shadow-sm transition-all">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* --- KARTU RINGKASAN STATUS --- */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Antrean', count: orders.filter(o => o.status === 'Antri').length, icon: <Clock size={20}/>, color: 'text-orange-500' },
          { label: 'Dalam Proses', count: orders.filter(o => o.status === 'Proses').length, icon: <AlertCircle size={20}/>, color: 'text-[#6358DC]' },
          { label: 'Selesai', count: orders.filter(o => o.status === 'Selesai').length, icon: <CheckCircle2 size={20}/>, color: 'text-green-500' },
          { label: 'Total Order', count: orders.length, icon: <ClipboardList size={20}/>, color: 'text-pink-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white/50 border border-white p-5 rounded-[35px] shadow-sm flex items-center gap-4 hover:scale-105 transition-all">
            <div className={`p-3 rounded-2xl bg-white shadow-sm ${stat.color}`}>{stat.icon}</div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
              <h4 className="text-xl font-black text-[#2B3674] italic">{stat.count}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* --- TABEL ORDER --- */}
      <div className="bg-white/40 border border-white rounded-[45px] overflow-hidden shadow-sm backdrop-blur-md flex-1">
        <table className="w-full text-left border-collapse">
          <thead className="bg-white/30 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
            <tr>
              <th className="px-8 py-5">Order ID</th>
              <th className="px-8 py-5">Pelanggan</th>
              <th className="px-8 py-5">Layanan</th>
              <th className="px-8 py-5">Berat/Qty</th>
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5">Total</th>
              <th className="px-8 py-5"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/50">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr key={order.id} className="group hover:bg-white/50 transition-all cursor-pointer">
                  <td className="px-8 py-5">
                    <span className="text-xs font-black text-[#6358DC] bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-100">
                      {order.id}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-sm font-black text-[#2B3674]">{order.customer}</p>
                    <p className="text-[10px] font-bold text-gray-400">{order.date}</p>
                  </td>
                  <td className="px-8 py-5 text-xs font-bold text-gray-600">{order.service}</td>
                  <td className="px-8 py-5 text-xs font-black text-[#2B3674]">{order.weight}</td>
                  <td className="px-8 py-5">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase border ${getStatusStyle(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-black text-[#FF71A4] italic">{order.total}</td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 text-gray-300 hover:text-[#6358DC] transition-all">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-8 py-10 text-center text-gray-400 font-bold italic">Belum ada order masuk...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;