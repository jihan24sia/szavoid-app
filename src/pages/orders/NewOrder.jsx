import React, { useState } from 'react';
import { Shirt, Clock, Zap, ChevronRight, Waves, Droplets, Footprints, User, BedDouble, Sparkles } from 'lucide-react';

// --- IMPORT KOMPONEN INTERNAL MASTER ---
import SectionHeader from '../../components/SectionHeader';
import ServiceOption from '../../components/ServiceOption';
import FormInput from '../../components/FormInput';
import SummaryItem from '../../components/SummaryItem';
import ServiceHighlight from '../../components/ServiceHighlight';

const NewOrder = ({ onAddOrder }) => {
  const [selectedService, setSelectedService] = useState('cuci-kering');
  const [weight, setWeight] = useState(0);
  const [customerName, setCustomerName] = useState("");

  const services = [
    { id: 'cuci-kering', name: 'Cuci Komplit (Cuci + Setrika)', price: 10000, icon: <Droplets size={22} />, color: 'bg-sky-500' },
    { id: 'cuci-setrika', name: 'Setrika Saja', price: 7000, icon: <Shirt size={22} />, color: 'bg-blue-600' },
    { id: 'express', name: 'Super Express 3 Jam', price: 15000, icon: <Zap size={22} />, color: 'bg-amber-500' },
    { id: 'bed-cover', name: 'Bedcover & Blanket', price: 25000, icon: <BedDouble size={22} />, color: 'bg-emerald-500' },
    { id: 'cuci-sepatu', name: 'Premium Shoes Clean', price: 35000, icon: <Footprints size={22} />, color: 'bg-rose-500' },
     { id: 'jas-gaun', name: 'Premium Satuan (Jas/Gaun)', price: 15000 , icon: <Sparkles size={22} />, color: 'bg-violet-500' },
  ];

  const currentService = services.find(s => s.id === selectedService);
  const subtotal = weight * currentService.price;

  const handleConfirm = () => {
    if (!customerName || weight <= 0) {
      return alert("Isi nama dan berat dulu ya Jihan!");
    }

    onAddOrder({
      id: `#BW-${Math.floor(1000 + Math.random() * 9000)}`,
      customer: customerName,
      service: currentService.name,
      weight: `${weight}kg`,
      total: `Rp ${subtotal.toLocaleString('id-ID')}`,
      status: "Antri",
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    });

    alert("Mantap! Order berhasil dibuat.");
    setCustomerName("");
    setWeight(0);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased p-2 flex flex-col gap-8">
      
      {/* 1. HEADER SECTION (MENGGUNAKAN KOMPONEN RESMI - GUEST/WORKSPACE STYLE) */}
      <div className="w-full bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
        <SectionHeader 
          title="Buat Order Baru" 
          subtitle="Input data cucian pelanggan dan tentukan jenis paket secara presisi." 
          variant="default" 
        />
      </div>

      {/* 2. CORE GRID CONTENT */}
      <div className="grid grid-cols-12 gap-8">
        
        {/* --- SISI KIRI: INPUT DATA --- */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          
          {/* SELEKSI LAYANAN LAUNDRY */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Waves size={16} className="text-blue-600" /> Pilih Layanan Premium
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {services.map((s) => (
                <ServiceOption
                  key={s.id}
                  service={s}
                  isSelected={selectedService === s.id}
                  onSelect={setSelectedService}
                />
              ))}
            </div>
          </div>

          {/* DETAIL FORM PELANGGAN */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative overflow-hidden">
            {/* Dekorasi Aksen Gradient Lembut ala Guest Card */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 to-sky-400"></div>
            
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <User size={16} className="text-blue-600" /> Detail Informasi Pesanan
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <FormInput
                  label="Nama Pelanggan"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Contoh: Jihan Zahra"
                />
              </div>
              <div className="space-y-2 ">
                <FormInput
                  label="Estimasi Berat (Kg)"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- SISI KANAN: RINGKASAN HARGA & SUBMIT --- */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-slate-900 text-white rounded-[32px] border border-slate-800 p-8 shadow-xl flex flex-col justify-between h-full min-h-[460px] relative overflow-hidden">
            
            {/* Dekorasi Ombak Air Transparan Samping */}
            <div className="absolute -right-16 -top-16 w-36 h-36 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              {/* Header Summary */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Order Summary</h3>
                <span className="p-2 bg-slate-800 text-blue-400 rounded-xl"><Clock size={16} /></span>
              </div>

              {/* Detail Ringkasan Item */}
              <div className="space-y-4">
                <ServiceHighlight label="Layanan Terpilih" serviceName={currentService.name} />

                <div className="bg-slate-800/50 p-4 rounded-2xl space-y-3 border border-slate-800/40">
                  <SummaryItem
                    label="Harga per kg"
                    value={`Rp ${currentService.price.toLocaleString('id-ID')}`}
                  />
                  <SummaryItem
                    label="Jumlah Berat"
                    value={`${weight} kg`}
                  />
                </div>
              </div>
            </div>

            {/* Bagian Total Akhir & Tombol Aksi */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-5">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Total Pembayaran</span>
                <span className="text-3xl font-black tracking-tight text-white italic">
                  Rp {subtotal.toLocaleString('id-ID')}
                </span>
              </div>

              <button 
                onClick={handleConfirm} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-2xl font-black shadow-lg shadow-blue-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase text-xs tracking-widest"
              >
                KONFIRMASI ORDER <ChevronRight size={16} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default NewOrder;