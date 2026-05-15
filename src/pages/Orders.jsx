import React, { useState } from 'react';
import { 
  ClipboardList, Search, Filter, MoreVertical, 
  Clock, CheckCircle2, AlertCircle, Waves 
} from 'lucide-react';

const Orders = ({ orders = [] }) => { 
  const [searchTerm, setSearchTerm] = useState("");

  // STYLE STATUS: Pakai Biru & Hijau Cerah (No Purple!)
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Antri': return 'bg-orange-50 text-orange-500 border-orange-100';
      case 'Proses': return 'bg-blue-50 text-[#1678F3] border-blue-100';
      case 'Selesai': return 'bg-green-50 text-green-500 border-green-100';
      case 'Diambil': return 'bg-gray-50 text-gray-400 border-gray-100';
      default: return 'bg-blue-50 text-[#4DBAE9]';
    }
  }

  const filteredOrders = orders.filter(o => 
    o.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
    o.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-700 h-full flex flex-col gap-8">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-2 h-10 bg-[#1678F3] rounded-full"></div>
          <div>
            <h2 className="text-4xl font-black text-[#1678F3] tracking-tighter uppercase italic leading-none">Order Management</h2>
            <p className="text-[10px] font-black text-[#4DBAE9] tracking-[0.4em] uppercase mt-1">Pantau & Update Status Cucian</p>
          </div>
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-80 group">
            <input 
              type="text" 
              placeholder="Cari ID Pelanggan / Nama..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/80 backdrop-blur-md border-2 border-transparent focus:border-blue-100 rounded-[25px] py-4 pl-12 pr-6 text-xs shadow-xl shadow-blue-100/20 outline-none transition-all font-bold text-[#1678F3]"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1678F3] transition-colors" size={18} />
          </div>
          <button className="bg-white p-4 rounded-[22px] text-[#1678F3] shadow-lg shadow-blue-100/50 hover:scale-105 active:scale-95 transition-all">
            <Filter size={22} />
          </button>
        </div>
      </div>

      {/* --- KARTU RINGKASAN STATUS --- */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Antrean', count: orders.filter(o => o.status === 'Antri').length, icon: <Clock size={22}/>, color: 'text-orange-400', bg: 'bg-orange-50' },
          { label: 'Proses', count: orders.filter(o => o.status === 'Proses').length, icon: <AlertCircle size={22}/>, color: 'text-[#1678F3]', bg: 'bg-blue-50' },
          { label: 'Selesai', count: orders.filter(o => o.status === 'Selesai').length, icon: <CheckCircle2 size={22}/>, color: 'text-green-500', bg: 'bg-green-50' },
          { label: 'Total', count: orders.length, icon: <ClipboardList size={22}/>, color: 'text-[#4DBAE9]', bg: 'bg-cyan-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white/80 backdrop-blur-sm border border-white p-6 rounded-[40px] shadow-xl shadow-blue-100/30 flex items-center gap-5 hover:translate-y-[-5px] transition-all">
            <div className={`p-4 rounded-[22px] shadow-inner ${stat.bg} ${stat.color}`}>{stat.icon}</div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
              <h4 className="text-2xl font-black text-[#1678F3] italic leading-none">{stat.count}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* --- TABEL ORDER (GEMOY STYLE) --- */}
      <div className="bg-white/70 backdrop-blur-md border border-white rounded-[50px] overflow-hidden shadow-2xl shadow-blue-100/50 flex-1">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#F8FAFC]/50 text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
              <tr>
                <th className="px-10 py-7">Order ID</th>
                <th className="px-10 py-7">Pelanggan</th>
                <th className="px-10 py-7">Layanan</th>
                <th className="px-10 py-7">Berat</th>
                <th className="px-10 py-7 text-center">Status</th>
                <th className="px-10 py-7">Total</th>
                <th className="px-10 py-7"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="group hover:bg-white transition-all cursor-pointer">
                    <td className="px-10 py-6">
                      <span className="text-[11px] font-black text-[#1678F3] bg-blue-50 px-4 py-2 rounded-[12px] border border-blue-100 shadow-sm group-hover:bg-[#1678F3] group-hover:text-white transition-all">
                        {order.id}
                      </span>
                    </td>
                    <td className="px-10 py-6">
                      <p className="text-sm font-black text-[#1678F3] uppercase italic tracking-tighter group-hover:scale-105 transition-transform origin-left">{order.customer}</p>
                      <p className="text-[10px] font-bold text-gray-400 mt-0.5 uppercase tracking-widest">{order.date}</p>
                    </td>
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-2">
                        <Waves size={14} className="text-[#4DBAE9]" />
                        <span className="text-xs font-black text-gray-500 uppercase tracking-tight">{order.service}</span>
                      </div>
                    </td>
                    <td className="px-10 py-6">
                      <span className="text-xs font-black text-[#1678F3]">{order.weight}</span>
                    </td>
                    <td className="px-10 py-6 text-center">
                      <span className={`px-5 py-2 rounded-full text-[9px] font-black uppercase border shadow-sm ${getStatusStyle(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-10 py-6">
                      <span className="text-sm font-black text-[#1678F3] italic leading-none">
                        {order.total}
                      </span>
                    </td>
                    <td className="px-10 py-6 text-right">
                      <button className="p-3 text-gray-200 hover:text-[#1678F3] hover:bg-blue-50 rounded-2xl transition-all">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-10 py-20 text-center">
                    <div className="flex flex-col items-center gap-3 opacity-30">
                      <Search size={40} />
                      <p className="font-black italic uppercase text-lg">Ups! Orderan tidak ketemu...</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;