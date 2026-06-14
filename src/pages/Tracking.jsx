import React, { useState } from 'react';
import { Search, Truck, CheckCircle2, Clock, Package, MapPin, Waves, Navigation } from 'lucide-react';

// --- IMPORT KOMPONEN INTERNAL MASTER ---
import SectionHeader from '../components/SectionHeader';

const Tracking = () => {
  const [orderId, setOrderId] = useState('BW-9178');

  // Data dummy status dengan styling warna premium ala GuestPage
  const trackingSteps = [
    { status: 'Selesai', desc: 'Laundry telah diambil oleh pelanggan', time: '04 Mei, 09:30', icon: <CheckCircle2 />, active: true, color: 'bg-emerald-500 text-white shadow-emerald-100' },
    { status: 'Pengiriman', desc: 'Kurir dalam perjalanan menuju lokasi Anda', time: '04 Mei, 08:15', icon: <Truck />, active: true, color: 'bg-blue-600 text-white shadow-blue-100' },
    { status: 'Siap Kirim', desc: 'Pakaian telah rapi dan siap dikirim', time: '03 Mei, 21:00', icon: <Package />, active: true, color: 'bg-sky-500 text-white shadow-sky-100' },
    { status: 'Proses Cuci', desc: 'Pakaian sedang dalam tahap pembersihan premium', time: '03 Mei, 14:00', icon: <Clock />, active: false, color: 'bg-slate-100 text-slate-400 shadow-transparent' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased p-2 flex flex-col gap-8">
      
      {/* 1. HEADER SECTION (MENGGUNAKAN KOMPONEN RESMI - LIVE MONITORING STYLE) */}
      <div className="w-full bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
        <SectionHeader 
          title="Tracking Status"
          subtitle="Lacak posisi dan progres pembersihan pakaian Anda secara real-time."
          variant="default"
        />
      </div>

      {/* 2. CORE GRID LAYOUT */}
      <div className="grid grid-cols-12 gap-8">
        
        {/* --- SISI KIRI: INPUT ID & USER CARD --- */}
        <div className="col-span-12 lg:col-span-5 space-y-8">
          
          {/* INPUT ORDER ID */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
            <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest ml-1">Masukkan Order ID</label>
            <div className="relative mt-3 group">
              <input 
                type="text" 
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full bg-slate-50/80 border border-slate-100 rounded-2xl py-4 pl-6 pr-16 font-mono font-black text-blue-600 outline-none shadow-inner focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all uppercase text-sm"
                placeholder="Contoh: BW-1234"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-xl text-white shadow-md shadow-blue-200 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* CUSTOMER INFO CARD (PREMIUM DEEP SLATE / BLUE) */}
          <div className="bg-slate-900 rounded-[32px] p-8 text-white shadow-xl relative overflow-hidden group border border-slate-800">
            {/* Ambient Water Waves Effect */}
            <Waves className="absolute -right-16 -top-16 text-white/5 scale-[3.5] pointer-events-none group-hover:rotate-6 transition-transform duration-1000" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Nama Pelanggan</p>
                  <h3 className="text-2xl font-black mt-1 tracking-tight text-white uppercase">Jihan Zahra</h3>
                </div>
                <div className="bg-slate-800 text-blue-400 p-3 rounded-xl border border-slate-700/50">
                  <Navigation size={18} />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 bg-slate-800/40 p-4 rounded-2xl border border-slate-800/50 hover:bg-slate-800/60 transition-all">
                  <MapPin size={18} className="text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    Jl. Premium Wash No. 99, Cluster Glass, Pekanbaru
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Estimasi Selesai</p>
                    <p className="font-black text-xs text-white mt-0.5">05 Juni 2026</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Metode Layanan</p>
                    <p className="font-black text-xs text-blue-400 mt-0.5">ANTAR JEMPUT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SISI KANAN: TIMELINE STATUS & MAP --- */}
        <div className="col-span-12 lg:col-span-7 bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Status Perjalanan</h3>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
                On Progress
              </span>
            </div>

            <div className="relative ml-4 mt-2">
              {/* Garis Vertikal Tengah Timeline */}
              <div className="absolute left-[19px] top-3 bottom-3 w-[2px] bg-slate-100"></div>

              <div className="space-y-8">
                {trackingSteps.map((step, index) => (
                  <div key={index} className="relative flex gap-6 items-start group">
                    {/* Lingkaran Icon */}
                    <div className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm ${step.color} ${step.active ? 'scale-105' : ''}`}>
                      {React.cloneElement(step.icon, { size: 18 })}
                    </div>

                    {/* Teks Deskripsi */}
                    <div className="flex-1 pt-1">
                      <div className="flex justify-between items-center gap-4">
                        <h4 className={`font-black text-xs uppercase tracking-wider ${step.active ? 'text-slate-900' : 'text-slate-300'}`}>
                          {step.status}
                        </h4>
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <Clock size={12} />
                          <span className="text-[10px] font-bold">{step.time}</span>
                        </div>
                      </div>
                      <p className={`text-xs mt-1 leading-relaxed ${step.active ? 'text-slate-500 font-medium' : 'text-slate-300 font-normal'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MAP PREVIEW COMPONENT CONTAINER */}
          <div className="mt-8 bg-slate-50 border border-slate-100 rounded-2xl h-36 flex flex-col items-center justify-center gap-1.5 group cursor-pointer hover:bg-blue-50/50 hover:border-blue-100 transition-all duration-300">
            <div className="bg-white p-2.5 rounded-xl shadow-sm text-blue-600 border border-slate-100 group-hover:scale-110 transition-transform">
              <MapPin size={18} />
            </div>
            <p className="text-[9px] font-black text-slate-400 group-hover:text-blue-600 uppercase tracking-widest transition-colors">
              Live Tracking Map API Active
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Tracking;