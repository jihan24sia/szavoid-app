import React from 'react';

const ServiceOption = ({ service, isSelected, onSelect }) => {
  // Pemetaan manual warna gradien agar Tailwind tidak melakukan 'purge' pada class warna
  const getColorClass = (colorString) => {
    switch (colorString) {
      case 'from-blue-500 to-cyan-500': return 'bg-gradient-to-br from-blue-500 to-cyan-500';
      case 'from-indigo-500 to-purple-500': return 'bg-gradient-to-br from-indigo-500 to-purple-500';
      case 'from-amber-500 to-orange-500': return 'bg-gradient-to-br from-amber-500 to-orange-500';
      case 'from-emerald-500 to-teal-500': return 'bg-gradient-to-br from-emerald-500 to-teal-500';
      case 'from-rose-500 to-pink-500': return 'bg-gradient-to-br from-rose-500 to-pink-500';
      case 'from-violet-500 to-fuchsia-500': return 'bg-gradient-to-br from-violet-500 to-fuchsia-500';
      default: return 'bg-blue-600'; // Warna fallback jika tidak cocok
    }
  };

  return (
    <div 
      onClick={() => onSelect(service.id)}
      className={`cursor-pointer p-6 rounded-3xl transition-all duration-300 border-4 flex flex-col items-center text-center justify-center group relative overflow-hidden ${
        isSelected 
          ? 'border-[#1678F3] bg-white shadow-xl scale-[1.02]' 
          : 'border-slate-100 bg-[#F8FAFC] hover:bg-white hover:border-blue-200 hover:shadow-md'
      }`}
    >
      {/* Container Ikon */}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md transition-transform group-hover:scale-110 group-hover:rotate-6 shrink-0 ${getColorClass(service.color)}`}>
        {service.icon}
      </div>
      
      {/* Nama Layanan */}
      <p className="font-black text-[#1678F3] text-sm uppercase tracking-tight line-clamp-2 min-h-[40px] flex items-center justify-center">
        {service.name}
      </p>
      
      {/* Harga */}
      <p className="text-[11px] text-slate-400 font-extrabold mt-2 uppercase tracking-wider">
        Rp {(service.price || 0).toLocaleString('id-ID')}/kg
      </p>
    </div>
  );
};

export default ServiceOption;