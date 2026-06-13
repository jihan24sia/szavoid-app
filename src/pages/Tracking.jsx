import React, { useState } from 'react';
import { Search, Truck, CheckCircle2, Clock, Package, MapPin, Waves, Navigation } from 'lucide-react';

const Tracking = () => {
  const [orderId, setOrderId] = useState('BW-9178');

  // Data dummy status dengan warna yang sudah disesuaikan
  const trackingSteps = [
    { status: 'Selesai', desc: 'Laundry telah diambil oleh pelanggan', time: '04 Mei, 09:30', icon: <CheckCircle2 />, active: true, color: 'bg-green-500' },
    { status: 'Pengiriman', desc: 'Kurir dalam perjalanan menuju lokasi Anda', time: '04 Mei, 08:15', icon: <Truck />, active: true, color: 'bg-[#1678F3]' },
    { status: 'Siap Kirim', desc: 'Pakaian telah rapi dan siap dikirim', time: '03 Mei, 21:00', icon: <Package />, active: true, color: 'bg-[#4DBAE9]' },
    { status: 'Proses Cuci', desc: 'Pakaian sedang dalam tahap pembersihan premium', time: '03 Mei, 14:00', icon: <Clock />, active: false, color: 'bg-gray-200' },
  ];

 return (
  
    <div className="h-full flex flex-col gap-8">
      {/* Header Halaman */}
      <div className="mb-10 flex items-center gap-4">
        <div className="w-2 h-10 bg-[#1678F3] rounded-full"></div>
        <div>
          <h2 className="text-4xl font-black text-[#1678F3] tracking-tighter uppercase italic leading-none">Tracking Status</h2>
          <p className="text-[#4DBAE9] font-black text-[10px] uppercase tracking-[0.4em] mt-1">Lacak posisi pakaian secara real-time</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* SISI KIRI: Input ID & Info Utama */}
        <div className="col-span-12 lg:col-span-5 space-y-8">
          <div className="bg-white/80 backdrop-blur-md border border-white p-10 rounded-[50px] shadow-xl shadow-blue-100/50">
            <label className="text-[10px] uppercase font-black text-gray-400 tracking-[0.2em] ml-2">Masukkan Order ID</label>
            <div className="relative mt-3 group">
              <input 
                type="text" 
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-blue-100 rounded-[25px] py-5 pl-7 pr-16 font-black text-[#1678F3] outline-none shadow-inner transition-all uppercase"
                placeholder="Contoh: BW-1234"
              />
              <button className="absolute right-2.5 top-2.5 bg-[#1678F3] p-3.5 rounded-[20px] text-white shadow-lg shadow-blue-200 hover:scale-105 active:scale-95 transition-all">
                <Search size={22} />
              </button>
            </div>
          </div>

          {/* Info Card Pelanggan (Biru Bold) */}
          <div className="bg-gradient-to-br from-[#1678F3] to-[#4DBAE9] rounded-[55px] p-10 text-white shadow-2xl relative overflow-hidden group">
            <Waves className="absolute -right-10 -top-10 text-white/10 scale-[3] pointer-events-none group-hover:rotate-12 transition-transform duration-1000" />
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] opacity-70 font-black uppercase tracking-[0.2em]">Customer Name</p>
                  <h3 className="text-3xl font-black mt-1 italic tracking-tighter uppercase">Jihan Zahra</h3>
                </div>
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                   <Navigation size={24} className="text-white" />
                </div>
              </div>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-[30px] border border-white/10 group-hover:bg-white/20 transition-all">
                  <MapPin size={20} className="text-white shrink-0 mt-1" />
                  <p className="text-xs font-bold leading-relaxed">
                    Jl. Premium Wash No. 99, Cluster Glass, Jakarta Selatan
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-5 border-t border-white/20">
                  <div>
                    <p className="text-[9px] font-black opacity-60 uppercase tracking-widest">Estimasi Selesai</p>
                    <p className="font-black text-sm italic">05 MEI 2026</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black opacity-60 uppercase tracking-widest">Metode</p>
                    <p className="font-black text-sm italic">ANTAR JEMPUT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SISI KANAN: Timeline Status */}
        <div className="col-span-12 lg:col-span-7 bg-white/70 backdrop-blur-md border border-white rounded-[60px] p-12 shadow-2xl shadow-blue-100/50 flex flex-col">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-xl font-black text-[#1678F3] uppercase tracking-tighter italic">Status Perjalanan</h3>
            <span className="px-6 py-2 bg-blue-50 text-[#1678F3] border border-blue-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
              On Progress
            </span>
          </div>

          <div className="relative ml-6 flex-1">
            {/* Garis Tengah Timeline (Dashed Style) */}
            <div className="absolute left-[23px] top-4 bottom-4 w-1 border-l-4 border-dashed border-blue-50"></div>

            <div className="space-y-14">
              {trackingSteps.map((step, index) => (
                <div key={index} className="relative flex gap-10 items-start group">
                  {/* Dot Icon */}
                  <div className={`relative z-10 w-12 h-12 rounded-[22px] flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover:rotate-6 ${step.active ? `${step.color} scale-110` : 'bg-gray-100 text-gray-400'}`}>
                    {React.cloneElement(step.icon, { size: 22 })}
                  </div>

                  {/* Konten Text */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className={`font-black text-sm uppercase tracking-tight italic ${step.active ? 'text-[#1678F3]' : 'text-gray-300'}`}>
                        {step.status}
                      </h4>
                      <div className="flex items-center gap-2">
                        <Clock size={12} className="text-gray-300" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{step.time}</span>
                      </div>
                    </div>
                    <p className={`text-xs mt-1.5 leading-relaxed max-w-md ${step.active ? 'text-gray-500 font-bold' : 'text-gray-300 font-medium'}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Preview Placeholder (Warna Biru Muda) */}
          <div className="mt-12 bg-blue-50/50 rounded-[40px] border-4 border-dashed border-blue-100 h-40 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-blue-50 transition-all">
            <div className="bg-white p-3 rounded-full shadow-lg text-[#1678F3] group-hover:animate-bounce">
              <MapPin size={24} />
            </div>
            <p className="text-[10px] font-black text-[#1678F3] uppercase tracking-[0.4em] italic">Live Tracking Map API Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;