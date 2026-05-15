import React from 'react';
import { Bell, Check, Clock, Package, AlertCircle, ShoppingBag, Waves, ShieldQuestion } from 'lucide-react';

const Notifications = () => {
  const notifs = [
    {
      id: 1,
      title: "Pembayaran Berhasil",
      desc: "Pembayaran untuk Order #BW-9178 sebesar Rp 21.000 telah dikonfirmasi.",
      time: "2 Menit yang lalu",
      icon: <Check className="text-green-500" />,
      bg: "bg-green-50",
      isNew: true
    },
    {
      id: 2,
      title: "Kurir Menuju Lokasi",
      desc: "Kurir Junaedi sedang menuju lokasi Anda untuk menjemput pakaian.",
      time: "15 Menit yang lalu",
      icon: <ShoppingBag className="text-[#1678F3]" />,
      bg: "bg-blue-50",
      isNew: true
    },
    {
      id: 3,
      title: "Cucian Selesai",
      desc: "Order #BW-9001 sudah selesai diproses dan sedang dalam pengemasan.",
      time: "1 Jam yang lalu",
      icon: <Package className="text-[#4DBAE9]" />,
      bg: "bg-sky-50",
      isNew: false
    },
    {
      id: 4,
      title: "Promo Terbatas!",
      desc: "Dapatkan diskon 20% untuk layanan Cuci Setrika hanya hari ini.",
      time: "5 Jam yang lalu",
      icon: <AlertCircle className="text-orange-500" />,
      bg: "bg-orange-50",
      isNew: false
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-2 h-10 bg-[#1678F3] rounded-full"></div>
          <div>
            <h2 className="text-4xl font-black text-[#1678F3] tracking-tighter uppercase italic leading-none">Notifications</h2>
            <p className="text-[#4DBAE9] font-black text-[10px] uppercase tracking-[0.4em] mt-1">Aktivitas Terbaru BrightWash</p>
          </div>
        </div>
        <button className="text-[10px] font-black uppercase tracking-widest text-[#1678F3] bg-white border-2 border-blue-50 px-8 py-4 rounded-[22px] shadow-xl shadow-blue-100/20 hover:bg-blue-50 transition-all italic">
          Tandai Semua Dibaca
        </button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Kolom Notifikasi (Kiri) */}
        <div className="col-span-12 lg:col-span-8 space-y-5">
          {notifs.map((n) => (
            <div
              key={n.id}
              className={`group flex items-center gap-6 p-6 rounded-[40px] border border-white transition-all duration-500 cursor-pointer backdrop-blur-md ${
                n.isNew 
                ? 'bg-white/80 shadow-2xl shadow-blue-100/50 scale-[1.02]' 
                : 'bg-white/40 opacity-80 hover:opacity-100 hover:bg-white/60'
              }`}
            >
              {/* Icon Box */}
              <div className={`w-16 h-16 rounded-[25px] flex items-center justify-center shrink-0 ${n.bg} shadow-inner transition-transform group-hover:rotate-6`}>
                {React.cloneElement(n.icon, { size: 24, strokeWidth: 2.5 })}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className={`font-black uppercase italic tracking-tight text-sm ${n.isNew ? 'text-[#1678F3]' : 'text-gray-500'}`}>
                    {n.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Clock size={12} />
                    <span className="text-[10px] font-black italic uppercase">{n.time}</span>
                  </div>
                </div>
                <p className={`text-xs leading-relaxed ${n.isNew ? 'text-gray-600 font-bold' : 'text-gray-400 font-medium'}`}>
                  {n.desc}
                </p>
              </div>

              {/* Status Dot */}
              {n.isNew && (
                <div className="flex flex-col items-center gap-1">
                   <div className="w-3 h-3 bg-[#4DBAE9] rounded-full animate-pulse shadow-lg shadow-blue-200"></div>
                   <span className="text-[8px] font-black text-[#4DBAE9] uppercase tracking-tighter">New</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Box Samping (Kanan) */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Pusat Bantuan Card */}
          <div className="bg-gradient-to-br from-[#1678F3] to-[#4DBAE9] rounded-[50px] p-10 text-white shadow-2xl relative overflow-hidden group">
            <Waves className="absolute -right-10 -top-10 text-white/10 scale-[3] pointer-events-none group-hover:rotate-12 transition-transform duration-1000" />
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-[25px] flex items-center justify-center mx-auto mb-6">
                <ShieldQuestion size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-3">Butuh Bantuan?</h3>
              <p className="text-xs leading-relaxed opacity-80 mb-8 font-medium">
                Ada kendala dengan pesanan? Tim admin kami siap membantu kamu 24/7.
              </p>
              <button
                onClick={() => window.open("https://wa.me/6285159941023?text=Halo%20Admin%20BrightWash...", "_blank")}
                className="w-full bg-white text-[#1678F3] py-5 rounded-[25px] font-black text-xs shadow-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-[0.2em] italic"
              >
                HUBUNGI ADMIN
              </button>
            </div>
          </div>

          {/* Pengaturan Ringkas */}
          <div className="bg-white/70 backdrop-blur-md border border-white p-10 rounded-[50px] shadow-xl shadow-blue-100/20">
            <h4 className="font-black text-[#1678F3] text-[10px] uppercase tracking-[0.3em] mb-8 italic flex items-center gap-2">
              <Bell size={14} /> Quick Settings
            </h4>
            <div className="space-y-6">
              {[
                { label: "Email Alert", status: true },
                { label: "WhatsApp Alert", status: true },
                { label: "Sound Effect", status: false }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group cursor-pointer">
                  <span className="text-xs font-black text-gray-500 uppercase tracking-tighter group-hover:text-[#1678F3] transition-colors">{item.label}</span>
                  <div className={`w-10 h-5 rounded-full relative transition-colors ${item.status ? 'bg-[#1678F3]' : 'bg-gray-200'}`}>
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${item.status ? 'right-1' : 'left-1'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;