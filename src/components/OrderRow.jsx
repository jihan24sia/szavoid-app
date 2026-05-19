import React from 'react';
import OrderStatusBadge from './OrderStatusBadge'; // Import badges-nya

const OrderRow = ({ order }) => {
  return (
    <div className="group flex items-center justify-between bg-white p-6 rounded-[30px] border border-transparent hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
      <div className="flex items-center gap-6">
        {/* ID Pesanan */}
        <div className="w-16 h-16 bg-blue-50 rounded-[22px] flex items-center justify-center text-[10px] font-black text-[#1678F3] group-hover:bg-[#1678F3] group-hover:text-white transition-colors">
          {order.id}
        </div>
        
        {/* Nama & Paket */}
        <div>
          <h4 className="font-black text-[#1678F3] uppercase italic tracking-tighter text-lg">
            {order.name}
          </h4>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
            {order.package} <span className="w-1 h-1 bg-gray-300 rounded-full"></span> {order.weight}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        {/* Tanggal */}
        <div className="text-right hidden md:block">
          <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Diterima</p>
          <p className="text-sm font-black text-[#1678F3] italic">{order.date}</p>
        </div>

        {/* STATUS (Dulu teks biasa, sekarang pakai BADGES) */}
        <div className="min-w-[120px] flex justify-end">
          <OrderStatusBadge status={order.status} />
        </div>
      </div>
    </div>
  );
};

export default OrderRow;