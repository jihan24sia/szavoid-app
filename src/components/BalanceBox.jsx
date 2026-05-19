import { Wallet, Waves } from 'lucide-react';

const BalanceBox = ({ amount }) => (
  <div className="bg-gradient-to-br from-[#1678F3] to-[#4DBAE9] rounded-[50px] p-10 text-white shadow-2xl relative overflow-hidden group">
    <Waves className="absolute -bottom-6 -right-6 text-white/10 scale-[4] rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
    <div className="relative z-10">
      <div className="flex justify-between items-center mb-10">
        <span className="text-[10px] font-black text-blue-100 uppercase tracking-[0.4em]">Total Saldo</span>
        <Wallet size={28} className="text-white/80" />
      </div>
      <p className="text-[11px] font-bold text-white/60 uppercase mb-1">IDR Currency</p>
      <h2 className="text-5xl font-black mb-4 tracking-tighter italic leading-none">{amount}</h2>
      <div className="bg-white/20 backdrop-blur-md inline-block px-5 py-2 rounded-full border border-white/20">
        <span className="text-[10px] font-black text-green-300 uppercase tracking-widest">+12.5% Up</span>
      </div>
    </div>
  </div>
);

export default BalanceBox;