import React from 'react';
import { 
  LayoutGrid, Shirt, User, ShoppingCart, Settings, 
  UserCircle, LogOut, Wallet, FileSpreadsheet, ChevronRight, Wind, Clock
} from 'lucide-react';

const DashboardAdmin = () => {
  // --- DATA ISI RECENT ORDER ---
  const orders = [
    { id: '#BW-001', name: 'Jihan Zahra', package: 'Cuci Setrika', weight: '5kg', date: '05 Mei 2026', status: 'On Progress' },
    { id: '#BW-002', name: 'Budi Santoso', package: 'Dry Cleaning', weight: '2kg', date: '05 Mei 2026', status: 'Completed' },
    { id: '#BW-003', name: 'Siti Aminah', package: 'Cuci Kering', weight: '7kg', date: '04 Mei 2026', status: 'Received' },
    { id: '#BW-004', name: 'Agus Pratama', package: 'Express 6h', weight: '3kg', date: '04 Mei 2026', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen flex bg-[#EDF2F6] font-sans text-[#4DBAE9]">
      
     

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard Admin</h1>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">BrightWash Management System</p>
          </div>
         
        </header>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 flex flex-col gap-8">
            
            {/* CATEGORY CARDS */}
            <div className="grid grid-cols-4 gap-6">
              {[
                { name: 'Cuci Kering', icon: <Shirt size={28} />, color: 'bg-[#64A6F9]' },
                { name: 'Cuci Setrika', icon: <Wind size={28} />, color: 'bg-[#64A6F9]' },
                { name: 'Express 6 jam', icon: <Clock size={28} />, color: 'bg-[#64A6F9]' },
                { name: 'Lainnya', icon: <LayoutGrid size={28} />, color: 'bg-[#4DBAE9]' },
              ].map((item, i) => (
                <div key={i} className={`${item.color} text-white p-8 rounded-[24px] shadow-lg shadow-blue-100 flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-all`}>
                  {item.icon}
                  <span className="text-xs font-bold uppercase tracking-wider">{item.name}</span>
                </div>
              ))}
            </div>

            {/* RECENT ORDER BOX (SUDAH ADA ISINYA) */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-50">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-[#1678F3] font-bold text-xl">Recent Order</h3>
                <button className="text-[10px] font-black text-[#1678F3] uppercase bg-blue-50 px-4 py-2 rounded-lg">View All</button>
              </div>
              
              <div className="space-y-4">
                {orders.map((order, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:border-blue-200 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#64A6F9] font-bold text-xs">
                        {order.id.split('-')[1]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#4DBAE9]">{order.name}</p>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase">{order.package} • {order.weight}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-gray-400 mb-1">{order.date}</p>
                      <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KOLOM KANAN */}
          <div className="col-span-4 flex flex-col gap-8">
            {/* BALANCE CARD */}
            <div className="bg-[#4DBAE9] rounded-[32px] p-8 text-white shadow-xl relative overflow-hidden">
               <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full" />
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-bold text-white uppercase tracking-widest">Total Balance</span>
                <Wallet className="text-blue-300" size={24} />
              </div>
              <h2 className="text-4xl font-bold mb-2 tracking-tight">Rp 2.450.000</h2>
              <span className="text-xs font-bold text-green-400">+12.5% This Month</span>
            </div>

            {/* REPORT SUMMARY (SUDAH ADA ANGKA) */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-50 flex-1">
              <div className="flex justify-between items-center mb-10 border-b-2 border-blue-50 pb-4">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Quick Report</h3>
                <FileSpreadsheet className="text-[#64A6F9]" size={20} />
              </div>
              <div className="space-y-8">
                {[
                  { label: 'Total Order', val: '1.240', color: 'text-blue-500' },
                  { label: 'Received', val: '850', color: 'text-[#4DBAE9]' },
                  { label: 'On Progress', val: '320', color: 'text-orange-500' },
                  { label: 'Completed', val: '1.070', color: 'text-green-500' },
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-400">{stat.label}</span>
                    <span className={`text-2xl font-black ${stat.color}`}>{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardAdmin;