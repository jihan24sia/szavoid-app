import { Waves } from 'lucide-react';

const Header = () => (
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
);

export default Header;