import React from 'react';
import { CreditCard, ArrowUpRight, ArrowDownLeft, DollarSign, Search, Filter, MoreVertical } from 'lucide-react';

const Payments = () => {
  const transactions = [
    { id: 'PAY-102', customer: 'Jihan Zahra', amount: 'Rp 21.000', method: 'Transfer OVO', date: 'Today, 14:00', status: 'Verified' },
    { id: 'PAY-101', customer: 'Max Stone', amount: 'Rp 45.000', method: 'Cash', date: 'Today, 10:30', status: 'Verified' },
    { id: 'PAY-099', customer: 'Grisha Jack', amount: 'Rp 35.000', method: 'Transfer BCA', date: 'Yesterday', status: 'Pending' },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-[#2B3674] tracking-tight uppercase italic">Pembayaran</h2>
        <p className="text-gray-400 font-medium text-sm">Monitor arus kas masuk BrightWash</p>
      </div>

      {/* Financial Stats Grid */}
      <div className="grid grid-cols-12 gap-6 mb-10">
        <div className="col-span-4 bg-[#6259E8] rounded-[45px] p-8 text-white shadow-2xl relative overflow-hidden">
          <p className="text-xs font-bold opacity-70 uppercase tracking-widest">Total Revenue</p>
          <h3 className="text-4xl font-black italic mt-2">Rp 12.450k</h3>
          <div className="mt-6 flex items-center gap-2 text-[10px] font-bold bg-white/10 w-fit px-3 py-1 rounded-full">
            <ArrowUpRight size={14} /> +12% dari bulan lalu
          </div>
          <div className="absolute -right-5 -bottom-5 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="col-span-4 bg-[#FF71A4] rounded-[45px] p-8 text-white shadow-xl relative overflow-hidden">
          <p className="text-xs font-bold opacity-70 uppercase tracking-widest">Unpaid Orders</p>
          <h3 className="text-4xl font-black italic mt-2">Rp 2.100k</h3>
          <p className="mt-6 text-[10px] font-bold opacity-80 uppercase tracking-tighter">8 Pesanan belum lunas</p>
          <div className="absolute -right-5 -bottom-5 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="col-span-4 bg-white/40 border border-white rounded-[45px] p-8 shadow-sm flex items-center gap-6">
          <div className="w-16 h-16 bg-indigo-100 rounded-3xl flex items-center justify-center text-[#6259E8]">
            <CreditCard size={32} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">E-Wallet Link</p>
            <p className="text-lg font-black text-[#2B3674]">Active (3)</p>
          </div>
        </div>
      </div>

      {/* Transaction List */}
      <div className="bg-white/40 border border-white rounded-[50px] p-10 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-black text-[#2B3674] uppercase tracking-tighter italic">Transaksi Terbaru</h3>
          <div className="flex gap-3">
            <div className="relative">
              <input type="text" placeholder="Cari transaksi..." className="bg-white rounded-xl py-2 px-10 text-xs outline-none shadow-inner w-64" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
            </div>
            <button className="p-2 bg-white rounded-xl text-gray-400 border border-gray-100 hover:text-[#6259E8] transition-all">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {transactions.map((t, i) => (
            <div key={i} className="bg-white/60 p-6 rounded-[30px] border border-white flex items-center justify-between group hover:scale-[1.01] transition-all">
              <div className="flex items-center gap-5">
                <div className={`p-4 rounded-2xl ${t.status === 'Verified' ? 'bg-green-100 text-green-500' : 'bg-orange-100 text-orange-500'}`}>
                  <DollarSign size={20} />
                </div>
                <div>
                  <h4 className="font-black text-[#2B3674] text-sm">{t.customer}</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">{t.method} • {t.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className="font-black text-[#2B3674]">{t.amount}</p>
                  <p className={`text-[9px] font-black uppercase tracking-widest ${t.status === 'Verified' ? 'text-green-500' : 'text-orange-500'}`}>
                    {t.status}
                  </p>
                </div>
                <MoreVertical size={18} className="text-gray-300 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payments;