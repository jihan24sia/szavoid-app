import React, { useState } from 'react';
import { Tag, Zap, Star, ShieldCheck, Plus, X, Footprints } from 'lucide-react';

const Services = () => {
  // State untuk menyimpan daftar layanan (termasuk Cuci Sepatu)
  const [serviceList, setServiceList] = useState([
    { name: 'Cuci Kering', price: '7.000', unit: 'Kg', color: 'bg-[#6259E8]', icon: <Tag /> },
    { name: 'Cuci Setrika', price: '10.000', unit: 'Kg', color: 'bg-[#FF71A4]', icon: <Star /> },
    { name: 'Express 6 Jam', price: '15.000', unit: 'Kg', color: 'bg-[#8C83FF]', icon: <Zap /> },
    { name: 'Bed Cover', price: '35.000', unit: 'Pcs', color: 'bg-[#6259E8]', icon: <ShieldCheck /> },
    { name: 'Cuci Sepatu', price: '25.000', unit: 'Pasang', color: 'bg-[#FF71A4]', icon: <Footprints /> }, // Layanan baru
  ]);

  // State untuk kontrol Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newService, setNewService] = useState({ name: '', price: '', unit: 'Kg', color: 'bg-[#6259E8]' });

  const handleAddService = (e) => {
    e.preventDefault();
    // Logika menambah layanan baru ke list
    setServiceList([...serviceList, { ...newService, icon: <Tag /> }]);
    setIsModalOpen(false);
    setNewService({ name: '', price: '', unit: 'Kg', color: 'bg-[#6259E8]' });
  };

  return (
    <div className="animate-in fade-in duration-500 relative">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-black text-[#2B3674] tracking-tight uppercase italic">Layanan & Harga</h2>
          <p className="text-gray-400 font-medium text-sm">Kelola daftar harga BrightWash</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#6259E8] text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-200 hover:scale-105 transition-all"
        >
          <Plus size={18} /> Tambah Layanan
        </button>
      </div>

      {/* GRID LAYANAN */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceList.map((s, i) => (
          <div key={i} className={`${s.color} rounded-[45px] p-8 text-white shadow-xl relative overflow-hidden group hover:scale-105 transition-all cursor-pointer`}>
            <div className="relative z-10">
              <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h4 className="font-bold text-lg opacity-90">{s.name}</h4>
              <div className="mt-4">
                <span className="text-3xl font-black italic">Rp {s.price}</span>
                <span className="text-xs opacity-60 ml-1">/{s.unit}</span>
              </div>
            </div>
            {/* Dekorasi lingkaran di background */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-all"></div>
          </div>
        ))}
      </div>

      {/* MODAL FORM TAMBAH LAYANAN */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay blur */}
          <div className="absolute inset-0 bg-[#2B3674]/20 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative bg-white w-full max-w-md rounded-[40px] shadow-2xl p-10 animate-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute right-8 top-8 text-gray-300 hover:text-red-500 transition-colors"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-black text-[#2B3674] italic uppercase mb-6">Tambah Layanan</h3>
            
            <form onSubmit={handleAddService} className="space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-[#6259E8] ml-2 tracking-widest">Nama Layanan</label>
                <input 
                  required
                  type="text"
                  placeholder="Misal: Cuci Karpet"
                  className="w-full bg-gray-50 border-none p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#6259E8] text-sm font-bold"
                  onChange={(e) => setNewService({...newService, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-[#6259E8] ml-2 tracking-widest">Harga (Rp)</label>
                <input 
                  required
                  type="text"
                  placeholder="20.000"
                  className="w-full bg-gray-50 border-none p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#6259E8] text-sm font-bold"
                  onChange={(e) => setNewService({...newService, price: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-[#6259E8] ml-2 tracking-widest">Satuan</label>
                <select 
                  className="w-full bg-gray-50 border-none p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#6259E8] text-sm font-bold appearance-none cursor-pointer"
                  onChange={(e) => setNewService({...newService, unit: e.target.value})}
                >
                  <option value="Kg">Per Kg</option>
                  <option value="Pcs">Per Pcs</option>
                  <option value="Pasang">Per Pasang</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#6259E8] text-white py-5 rounded-2xl font-black italic uppercase text-xs shadow-xl shadow-indigo-100 hover:brightness-110 transition-all mt-4"
              >
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