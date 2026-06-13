import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tag, Zap, Star, ShieldCheck, Plus, X, Footprints, MoreVertical, Waves, Sparkles, ShirtIcon, BedDouble } from 'lucide-react';

const Services = () => {
  // 1. STATE MASTER DATA (Dikasih ID supaya bisa diklik ke detail)
  const [serviceList, setServiceList] = useState([
    { id: 'cuci-kering', name: 'Cuci Kering', price: '7.000', unit: 'Kg', icon: <Waves className="text-[#1678F3]" /> },
    { id: 'cuci-setrika', name: 'Cuci Setrika', price: '10.000', unit: 'Kg', icon: <ShirtIcon className="text-orange-400" /> },
    { id: 'express-6-jam', name: 'Express 6 Jam', price: '15.000', unit: 'Kg', icon: <Zap className="text-amber-400" /> },
    { id: 'bed-cover', name: 'Bed Cover', price: '35.000', unit: 'Pcs', icon: <BedDouble className="text-emerald-400" /> },
    { id: 'cuci-sepatu', name: 'Cuci Sepatu', price: '25.000', unit: 'Pasang', icon: <Footprints className="text-pink-400" /> },
  ]);

  // 2. LOGIKA MODAL TAMBAH LAYANAN
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newService, setNewService] = useState({ name: '', price: '', unit: 'Kg' });

  const handleAddService = (e) => {
    e.preventDefault();
    // Generate ID sederhana dari nama
    const generatedId = newService.name.toLowerCase().replace(/ /g, '-');
    
    setServiceList([...serviceList, { 
        ...newService, 
        id: generatedId, 
        icon: <Sparkles className="text-blue-500" /> 
    }]);
    
    setIsModalOpen(false); 
    setNewService({ name: '', price: '', unit: 'Kg' }); 
  };

  return (

    <div className="h-full flex flex-col gap-8">
      
      {/* --- HEADER SECTION (STYLE SINKRON SAMA HISTORY & ROLE) --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 px-2">
        <div className="flex items-center gap-4">
          {/* Garis Aksen Biru Wajib TA BrightWash */}
          <div className="w-2 h-10 bg-[#1678F3] rounded-full"></div>
          <div>
            <h2 className="text-4xl font-black text-[#1678F3] tracking-tighter uppercase italic leading-none">
              Layanan <span className="text-[#4DBAE9]">& Harga</span>
            </h2>
            <p className="text-[#4DBAE9] text-[10px] font-black uppercase tracking-[0.4em] mt-1">
              Daftar Tarif Premium BrightWash
            </p>
          </div>
        </div>

        {/* Tombol Tambah Layanan */}
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="self-start md:self-auto bg-[#1678F3] text-white px-6 py-4 rounded-[22px] font-black italic flex items-center gap-2 shadow-xl shadow-blue-200 hover:scale-105 active:scale-95 transition-all uppercase text-[10px] tracking-widest border-b-4 border-blue-700"
        >
          <Plus size={18} strokeWidth={4} /> Tambah Layanan
        </button>
      </div>

      {/* --- GRID KARTU LAYANAN --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {serviceList.map((s, i) => (
          <Link 
            to={`/services/${s.id}`} 
            key={i} 
            className="group block relative bg-gradient-to-br from-[#1678F3] to-[#4DBAE9] rounded-[45px] p-8 text-white shadow-2xl shadow-blue-100 hover:-translate-y-3 transition-all duration-500 overflow-hidden border-b-8 border-blue-600/20"
          >
            {/* Background Decor */}
            <Waves className="absolute -right-8 -bottom-8 text-white/10 scale-[2.5] pointer-events-none group-hover:rotate-12 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="bg-white/90 backdrop-blur-md w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(s.icon, { size: 22, strokeWidth: 2.5 })}
                </div>
                <button className="text-white/40 hover:text-white" onClick={(e) => e.preventDefault()}>
                  <MoreVertical size={18} />
                </button>
              </div>

              <div>
                <h4 className="font-black text-white text-sm uppercase italic tracking-tight mb-1">{s.name}</h4>
                <p className="text-[9px] font-black text-white/60 uppercase tracking-widest mb-6 italic">Premium Quality</p>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black italic text-white leading-none">Rp {s.price}</span>
                  <span className="text-[10px] font-black text-white/50 uppercase">/{s.unit}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* --- MODAL FORM TAMBAH LAYANAN (HAPUS TOTAL ANIMASI JEDUG INSTAN) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-[#1678F3]/20 backdrop-blur-sm">
          <div className="relative bg-white w-full max-w-md rounded-[50px] shadow-2xl p-10">
            <button onClick={() => setIsModalOpen(false)} className="absolute right-10 top-10 text-gray-300 hover:text-rose-500 transition-colors">
              <X size={24} strokeWidth={3} />
            </button>

            <h3 className="text-2xl font-black text-[#1678F3] italic uppercase tracking-tighter mb-8">Tambah Layanan</h3>
            
            <form onSubmit={handleAddService} className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-[0.2em]">Nama Layanan</label>
                <input 
                  required type="text" placeholder="Misal: Cuci Boneka" 
                  className="w-full bg-gray-50 border-none p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#1678F3] text-sm font-bold text-[#1678F3] mt-2"
                  onChange={(e) => setNewService({...newService, name: e.target.value})} 
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-[0.2em]">Harga (Rp)</label>
                <input 
                  required type="text" placeholder="25.000" 
                  className="w-full bg-gray-50 border-none p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#1678F3] text-sm font-bold text-[#1678F3] mt-2"
                  onChange={(e) => setNewService({...newService, price: e.target.value})} 
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2 tracking-[0.2em]">Satuan</label>
                <select 
                  className="w-full bg-gray-50 border-none p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#1678F3] text-sm font-black italic uppercase text-[#1678F3] mt-2 cursor-pointer appearance-none"
                  onChange={(e) => setNewService({...newService, unit: e.target.value})}
                >
                  <option value="Kg">Per Kg</option>
                  <option value="Pcs">Per Pcs</option>
                  <option value="Pasang">Per Pasang</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-[#1678F3] text-white py-5 rounded-[25px] font-black italic uppercase text-xs shadow-xl shadow-blue-100 hover:brightness-110 transition-all mt-4 border-b-4 border-blue-700">
                Simpan Layanan Baru
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;