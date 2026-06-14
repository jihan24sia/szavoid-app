import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Plus, X, Footprints, MoreVertical, Waves, Sparkles, Shirt, BedDouble, Droplets } from 'lucide-react';

// --- IMPORT KOMPONEN INTERNAL MASTER ---
import SectionHeader from '../components/SectionHeader';

const Services = () => {
  // 1. STATE MASTER DATA
  const [serviceList, setServiceList] = useState([
    { id: 'cuci-kering', name: 'Cuci Komplit (Cuci + Setrika)', price: '10.000', unit: 'Kg', icon: <Droplets className="text-blue-600" />, bgColor: 'bg-blue-50' },
    { id: 'cuci-setrika', name: 'Setrika Saja (Kiloan)', price: '7.000', unit: 'Kg', icon: <Shirt className="text-orange-500" />, bgColor: 'bg-orange-50' },
    { id: 'express-6-jam', name: 'Super Express 3 Jam', price: '15.000', unit: 'Kg', icon: <Zap className="text-amber-500" />, bgColor: 'bg-amber-50' },
    { id: 'bed-cover', name: 'Bedcover & Blanket', price: '25.000', unit: 'Kg', icon: <BedDouble className="text-emerald-500" />, bgColor: 'bg-emerald-50' },
    { id: 'cuci-sepatu', name: 'Premium Shoes Clean', price: '35.000', unit: 'Pasang', icon: <Footprints className="text-rose-500" />, bgColor: 'bg-rose-50' },
    { id: 'jas-gaun', name: 'Premium Satuan (Jas/Gaun)', price: 'Mulai Rp 15k', unit: 'Pcs', icon: <Sparkles className="text-rose-500" />, bgColor: 'bg-rose-50' },
  ]);

  // 2. LOGIKA MODAL TAMBAH LAYANAN
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newService, setNewService] = useState({ name: '', price: '', unit: 'Kg' });

  const handleAddService = (e) => {
    e.preventDefault();
    const generatedId = newService.name.toLowerCase().replace(/ /g, '-');

    setServiceList([...serviceList, {
      ...newService,
      id: generatedId,
      icon: <Sparkles className="text-indigo-600" />,
      bgColor: 'bg-indigo-50'
    }]);

    setIsModalOpen(false);
    NewService({ name: '', price: '', unit: 'Kg' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased p-2 flex flex-col gap-8">

      {/* --- 1. HEADER SECTION (MENGGUNAKAN KOMPONEN RESMI) --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">

        <SectionHeader
          title="Layanan & Harga"
          subtitle="Daftar konfigurasi tarif katalog pengerjaan laundry premium BrightWash."
          variant="default"
        />

        {/* Tombol Tambah Layanan */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-6 py-3.5 rounded-2xl font-black flex items-center gap-2 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-blue-900/10 uppercase text-xs tracking-widest shrink-0"
        >
          <Plus size={16} /> Tambah Layanan
        </button>
      </div>

      {/* --- 2. GRID KARTU LAYANAN (MODERN CLEAN WHITE STYLE) --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {serviceList.map((s, i) => (
          <Link
            to={`/services/${s.id}`}
            key={i}
            className="group block relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            {/* Ambient Water Waves Icon Decor di Background */}
            <Waves className="absolute -right-6 -bottom-6 text-slate-100/40 scale-[2] pointer-events-none group-hover:text-blue-50/50 group-hover:scale-[2.2] transition-all duration-500" />

            <div className="relative z-10 flex flex-col justify-between h-full min-h-[160px]">
              <div className="flex justify-between items-start">
                {/* Badge Icon Pastel Container */}
                <div className={`${s.bgColor} w-11 h-11 rounded-xl flex items-center justify-center border border-transparent group-hover:scale-105 transition-transform`}>
                  {React.cloneElement(s.icon, { size: 18, strokeWidth: 2.5 })}
                </div>

                {/* Action Trigger */}
                <button
                  className="text-slate-300 hover:text-slate-600 p-1 rounded-lg transition-colors"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                >
                  <MoreVertical size={16} />
                </button>
              </div>

              {/* Detail Teks Informasi Produk */}
              <div className="mt-6">
                <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                  {s.name}
                </h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                  Premium Wash
                </p>

                <div className="flex items-baseline gap-0.5 mt-4 pt-3 border-t border-slate-50">
                  <span className="text-xl font-black tracking-tight text-slate-900">Rp {s.price}</span>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase">/{s.unit}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* --- 3. MODAL FORM TAMBAH LAYANAN --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 backdrop-blur-md bg-slate-900/40">
          <div className="bg-white w-full max-w-sm rounded-[32px] shadow-2xl p-8 relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-6 top-6 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Tambah Layanan</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Buat Katalog Tarif Baru</p>

            <form onSubmit={handleAddService} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 ml-1">Nama Layanan</label>
                <input
                  required
                  type="text"
                  placeholder="Misal: Cuci Karpet"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white p-3.5 rounded-xl outline-none text-xs font-semibold text-slate-800 transition-all"
                  onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 ml-1">Harga (Rp)</label>
                  <input
                    required
                    type="text"
                    placeholder="25.000"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white p-3.5 rounded-xl outline-none text-xs font-semibold text-slate-800 transition-all"
                    onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 ml-1">Satuan</label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl outline-none text-xs font-black uppercase text-slate-700 focus:bg-white focus:border-blue-600 transition-all cursor-pointer"
                    onChange={(e) => setNewService({ ...newService, unit: e.target.value })}
                  >
                    <option value="Kg">Per Kg</option>
                    <option value="Pcs">Per Pcs</option>
                    <option value="Pasang">Per Pasang</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest shadow-md shadow-blue-900/10 transition-all mt-4"
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