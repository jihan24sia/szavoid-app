import React from 'react';
import { 
  LayoutGrid, Shirt, User, Wallet, FileSpreadsheet, 
  Wind, Clock, Waves, Droplets, Bell, Search, MoreHorizontal
} from 'lucide-react';

const DashboardAdmin = () => {
  const orders = [
    { id: '#BW-001', name: 'Jihan Zahra', package: 'Cuci Setrika', weight: '5kg', date: '05 Mei 2026', status: 'On Progress' },
    { id: '#BW-002', name: 'Budi Santoso', package: 'Dry Cleaning', weight: '2kg', date: '05 Mei 2026', status: 'Completed' },
    { id: '#BW-003', name: 'Siti Aminah', package: 'Cuci Kering', weight: '7kg', date: '04 Mei 2026', status: 'Received' },
    { id: '#BW-004', name: 'Agus Pratama', package: 'Express 6h', weight: '3kg', date: '04 Mei 2026', status: 'Completed' },
  ];

  return (
    // BACKGROUND GRADIENT: Mengganti abu-abu dengan gradasi biru air yang seger
    <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#E0F2FE] font-sans p-6 lg:p-10 text-[#1678F3]">
      
      {/* WRAPPER UTAMA DENGAN GLASSMORPHISM */}
      <div className="max-w-[1600px] mx-auto">
        
        {/* --- HEADER AREA --- */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex items-center gap-5">
            <div className="bg-[#1678F3] p-4 rounded-[28px] shadow-xl shadow-blue-200 text-white rotate-3">
              <Waves size={35} />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tighter uppercase italic leading-none text-[#1678F3]">
                BrightWash
              </h1>
              <p className="text-[10px] text-[#4DBAE9] font-black uppercase tracking-[0.4em] mt-1">
                Management System
              </p>
            </div>
          </div>

          {/* PROFILE & NOTIF BULAT */}
          <div className="flex items-center gap-4 bg-white/60 backdrop-blur-md p-2 pr-6 rounded-full border border-white shadow-sm">
            <div className="w-12 h-12 bg-[#4DBAE9] rounded-full border-2 border-white shadow-md flex items-center justify-center text-white font-black">
              J
            </div>
            <div className="hidden sm:block">
              <p className="text-[11px] font-black uppercase tracking-tighter text-[#1678F3]">Admin Jihan</p>
              <p className="text-[9px] text-green-500 font-bold uppercase tracking-widest">Active Now</p>
            </div>
            <div className="ml-4 p-2 bg-white rounded-full text-gray-400 hover:text-[#1678F3] cursor-pointer transition-colors">
              <Bell size={20} />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
          
          {/* --- SISI KIRI (Grid 8) --- */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
            
            {/* CATEGORY CARDS - Corner Bulat Banget */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Cuci Kering', icon: <Droplets size={26} />, color: 'bg-[#64A6F9]' },
                { name: 'Cuci Setrika', icon: <Wind size={26} />, color: 'bg-[#64A6F9]' },
                { name: 'Express 6h', icon: <Clock size={26} />, color: 'bg-[#64A6F9]' },
                { name: 'Lainnya', icon: <LayoutGrid size={26} />, color: 'bg-[#4DBAE9]' },
              ].map((item, i) => (
                <div key={i} className={`${item.color} group p-8 rounded-[40px] shadow-xl shadow-blue-100 flex flex-col items-center gap-4 cursor-pointer hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}>
                  <div className="absolute -top-2 -right-2 p-4 opacity-10 group-hover:rotate-45 transition-transform duration-700">
                     <Waves size={80} />
                  </div>
                  <div className="bg-white/20 p-4 rounded-[22px] backdrop-blur-md text-white shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest leading-tight text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            {/* RECENT ORDER BOX - Background Putih Bersih Corner Gede */}
            <div className="bg-white/80 backdrop-blur-sm rounded-[50px] p-10 shadow-xl shadow-blue-100/50 border border-white">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-[#1678F3] rounded-full"></div>
                    <h3 className="text-[#1678F3] font-black text-2xl tracking-tighter uppercase italic">Antrian Pesanan</h3>
                </div>
                <button className="text-[10px] font-black text-white uppercase bg-[#1678F3] px-8 py-3 rounded-full shadow-lg shadow-blue-200 active:scale-95 transition-all">
                  Lihat Semua
                </button>
              </div>
              
              <div className="space-y-4">
                {orders.map((order, i) => (
                  <div key={i} className="flex flex-wrap items-center justify-between p-6 bg-white rounded-[32px] border border-transparent hover:border-blue-100 hover:shadow-lg transition-all group">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-[#EDF2F6] rounded-[22px] flex items-center justify-center text-[#1678F3] font-black text-xs group-hover:bg-[#1678F3] group-hover:text-white transition-colors">
                        {order.id.split('-')[1]}
                      </div>
                      <div>
                        <p className="text-lg font-black text-[#1678F3] tracking-tighter uppercase italic">{order.name}</p>
                        <div className="flex gap-2 items-center mt-1">
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{order.package}</span>
                            <span className="w-1 h-1 bg-blue-200 rounded-full"></span>
                            <span className="text-[9px] font-black text-[#4DBAE9] uppercase tracking-widest">{order.weight}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-10">
                      <div className="text-right hidden sm:block">
                        <p className="text-[10px] font-black text-gray-300 mb-1 uppercase tracking-widest">{order.date}</p>
                        <span className={`text-[9px] font-black uppercase px-5 py-2 rounded-full ${
                          order.status === 'Completed' ? 'bg-green-500 text-white shadow-md shadow-green-100' : 'bg-orange-400 text-white shadow-md shadow-orange-100'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <MoreHorizontal className="text-gray-200 cursor-pointer hover:text-[#1678F3]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- SISI KANAN (Grid 4) --- */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
            
            {/* BALANCE CARD - Biru Solid Corner Gede */}
            <div className="bg-gradient-to-br from-[#1678F3] to-[#4DBAE9] rounded-[50px] p-10 text-white shadow-2xl relative overflow-hidden group">
              <Waves className="absolute -bottom-6 -right-6 text-white/10 scale-[4] rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-10">
                    <span className="text-[10px] font-black text-blue-100 uppercase tracking-[0.4em]">Total Saldo</span>
                    <Wallet size={28} className="text-white/80" />
                </div>
                <p className="text-[11px] font-bold text-white/60 uppercase mb-1">IDR Currency</p>
                <h2 className="text-5xl font-black mb-4 tracking-tighter italic leading-none">2.450.000</h2>
                <div className="bg-white/20 backdrop-blur-md inline-block px-5 py-2 rounded-full border border-white/20">
                    <span className="text-[10px] font-black text-green-300 uppercase tracking-widest">+12.5% Up</span>
                </div>
              </div>
            </div>

            {/* QUICK REPORT - Putih Corner Gede */}
            <div className="bg-white/80 backdrop-blur-sm rounded-[50px] p-10 shadow-xl shadow-blue-100/50 border border-white flex-1">
              <div className="flex justify-between items-center mb-12">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.4em]">Laporan Kilat</h3>
                <div className="p-3 bg-blue-50 rounded-2xl">
                    <FileSpreadsheet className="text-[#1678F3]" size={22} />
                </div>
              </div>
              <div className="space-y-8">
                {[
                  { label: 'Total Order', val: '1.240', color: 'text-[#1678F3]' },
                  { label: 'Diterima', val: '850', color: 'text-[#4DBAE9]' },
                  { label: 'Proses Cuci', val: '320', color: 'text-orange-400' },
                  { label: 'Selesai', val: '1.070', color: 'text-green-500' },
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-blue-50/50 pb-5 group cursor-pointer hover:border-[#1678F3] transition-colors">
                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest group-hover:text-[#1678F3]">
                        {stat.label}
                    </span>
                    <span className={`text-4xl font-black tracking-tighter italic leading-none ${stat.color}`}>
                        {stat.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;