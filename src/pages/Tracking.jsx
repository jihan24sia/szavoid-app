import React, { useState } from 'react';
import { Search, Truck, CheckCircle2, Clock, Package, MapPin } from 'lucide-react';

const Tracking = () => {
  const [orderId, setOrderId] = useState('BW-9178');

  // Data dummy status perjalanan laundry
  const trackingSteps = [
    { status: 'Selesai', desc: 'Laundry telah diambil oleh pelanggan', time: '04 Mei, 09:30', icon: <CheckCircle2 />, active: true, color: 'bg-green-500' },
    { status: 'Pengiriman', desc: 'Kurir dalam perjalanan menuju lokasi Anda', time: '04 Mei, 08:15', icon: <Truck />, active: true, color: 'bg-[#6259E8]' },
    { status: 'Siap Kirim', desc: 'Pakaian telah rapi dan siap dikirim', time: '03 Mei, 21:00', icon: <Package />, active: true, color: 'bg-[#FF71A4]' },
    { status: 'Proses Cuci', desc: 'Pakaian sedang dalam tahap pembersihan premium', time: '03 Mei, 14:00', icon: <Clock />, active: false, color: 'bg-gray-300' },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Halaman */}
      <div className="mb-10">
        <h2 className="text-3xl font-black text-[#2B3674] tracking-tight uppercase italic">Tracking Status</h2>
        <p className="text-gray-400 font-medium text-sm">Lacak posisi pakaian Anda secara real-time</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* SISI KIRI: Input ID & Info Utama */}
        <div className="col-span-5 space-y-6">
          <div className="bg-white/40 border border-white p-8 rounded-[40px] shadow-sm backdrop-blur-md">
            <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest ml-1">Masukkan Order ID</label>
            <div className="relative mt-2">
              <input 
                type="text" 
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-5 pr-14 font-bold text-[#2B3674] outline-none shadow-inner"
                placeholder="Contoh: BW-1234"
              />
              <button className="absolute right-2 top-2 bg-[#6259E8] p-2.5 rounded-xl text-white shadow-lg shadow-indigo-200">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Info Card Pelanggan */}
          <div className="bg-[#6259E8] rounded-[45px] p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs opacity-70 font-bold uppercase tracking-widest">Customer Details</p>
              <h3 className="text-2xl font-black mt-2 italic">Jihan Zahra</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                  <MapPin size={18} className="text-[#FF71A4]" />
                  <p className="text-xs font-medium leading-relaxed opacity-90">Jl. Premium Wash No. 99, Cluster Glass, Jakarta</p>
                </div>
                <div className="flex justify-between text-xs font-bold pt-4 border-t border-white/20">
                  <span>Estimasi Selesai</span>
                  <span className="text-[#FF71A4]">05 Mei 2026</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-5 -bottom-5 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* SISI KANAN: Timeline Status */}
        <div className="col-span-7 bg-white/40 border border-white rounded-[50px] p-10 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-black text-[#2B3674] uppercase tracking-tighter italic">Status Perjalanan</h3>
            <span className="px-4 py-1.5 bg-[#FF71A4]/10 text-[#FF71A4] rounded-full text-[10px] font-black uppercase tracking-widest">On Progress</span>
          </div>

          <div className="relative ml-4">
            {/* Garis Tengah Timeline */}
            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gray-100"></div>

            <div className="space-y-12">
              {trackingSteps.map((step, index) => (
                <div key={index} className="relative flex gap-8 items-start group">
                  {/* Dot Icon */}
                  <div className={`relative z-10 w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 ${step.color}`}>
                    {React.cloneElement(step.icon, { size: 18 })}
                  </div>

                  {/* Konten Text */}
                  <div className="flex-1 pt-0.5">
                    <div className="flex justify-between items-start">
                      <h4 className={`font-black text-sm uppercase tracking-tight ${step.active ? 'text-[#2B3674]' : 'text-gray-400'}`}>
                        {step.status}
                      </h4>
                      <span className="text-[10px] font-bold text-gray-400 italic">{step.time}</span>
                    </div>
                    <p className={`text-xs mt-1 leading-relaxed ${step.active ? 'text-gray-500 font-medium' : 'text-gray-300'}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Preview Placeholder */}
          <div className="mt-12 bg-indigo-50/50 rounded-[35px] border-2 border-dashed border-indigo-100 h-32 flex items-center justify-center">
            <p className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.3em] italic">Live Tracking Map API</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;