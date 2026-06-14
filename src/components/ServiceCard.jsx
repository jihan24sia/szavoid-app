import { Waves } from 'lucide-react';

// Menambahkan prop onClick ke dalam destrukturisasi argumen komponen
const ServiceCard = ({ name, icon, color, onClick }) => (
  <div 
    onClick={onClick} // Pasang handler onClick di elemen pembungkus utama ini
    className={`${color} group p-8 rounded-[40px] shadow-xl shadow-blue-100 flex flex-col items-center gap-4 cursor-pointer hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
  >
    <div className="absolute -top-2 -right-2 p-4 opacity-10 group-hover:rotate-45 transition-transform duration-700">
      <Waves size={80} />
    </div>
    <div className="bg-white/20 p-4 rounded-[22px] backdrop-blur-md text-white shadow-inner">
      {icon}
    </div>
    <span className="text-[10px] font-black text-white uppercase tracking-widest leading-tight text-center">
      {name}
    </span>
  </div>
);

export default ServiceCard;