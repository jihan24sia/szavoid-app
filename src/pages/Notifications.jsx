import React from 'react';
import { Bell, Check, Clock, Package, AlertCircle, ShoppingBag } from 'lucide-react';

const Notifications = () => {
  const notifs = [
    {
      id: 1,
      title: "Pembayaran Berhasil",
      desc: "Pembayaran untuk Order #BW-9178 sebesar Rp 21.000 telah dikonfirmasi.",
      time: "2 Menit yang lalu",
      icon: <Check className="text-green-500" />,
      bg: "bg-green-100",
      isNew: true
    },
    {
      id: 2,
      title: "Kurir Menuju Lokasi",
      desc: "Kurir Junaedi sedang menuju lokasi Anda untuk menjemput pakaian.",
      time: "15 Menit yang lalu",
      icon: <ShoppingBag className="text-[#6259E8]" />,
      bg: "bg-indigo-100",
      isNew: true
    },
    {
      id: 3,
      title: "Cucian Selesai",
      desc: "Order #BW-9001 sudah selesai diproses dan sedang dalam pengemasan.",
      time: "1 Jam yang lalu",
      icon: <Package className="text-[#FF71A4]" />,
      bg: "bg-pink-100",
      isNew: false
    },
    {
      id: 4,
      title: "Promo Terbatas!",
      desc: "Dapatkan diskon 20% untuk layanan Cuci Setrika hanya hari ini.",
      time: "5 Jam yang lalu",
      icon: <AlertCircle className="text-orange-500" />,
      bg: "bg-orange-100",
      isNew: false
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-black text-[#2B3674] tracking-tight uppercase italic">Notifikasi</h2>
          <p className="text-gray-400 font-medium text-sm">Pantau aktivitas terbaru laundry Anda</p>
        </div>
        <button className="text-xs font-bold text-[#6259E8] bg-white px-6 py-3 rounded-2xl shadow-sm border border-white hover:bg-indigo-50 transition-all">
          Tandai Semua Dibaca
        </button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Kolon Notifikasi */}
        <div className="col-span-8 space-y-4">
          {notifs.map((n) => (
            <div
              key={n.id}
              className={`group flex items-center gap-6 p-6 rounded-[35px] border border-white transition-all duration-300 cursor-pointer ${n.isNew ? 'bg-white/60 shadow-xl' : 'bg-white/30 opacity-80 hover:opacity-100'
                }`}
            >
              <div className={`w-14 h-14 rounded-[22px] flex items-center justify-center shrink-0 ${n.bg} shadow-inner`}>
                {n.icon}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-black text-[#2B3674] text-sm tracking-tight">{n.title}</h4>
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Clock size={12} />
                    <span className="text-[10px] font-bold italic">{n.time}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{n.desc}</p>
              </div>

              {n.isNew && (
                <div className="w-2.5 h-2.5 bg-[#FF71A4] rounded-full shadow-lg shadow-pink-200"></div>
              )}
            </div>
          ))}
        </div>

        {/* Info Box Samping */}
        <div className="col-span-4 space-y-6">
          <div className="bg-[#6259E8] rounded-[45px] p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <Bell className="mb-4 opacity-50" size={32} />
              <h3 className="text-xl font-black italic mb-2">Pusat Bantuan</h3>
              <p className="text-xs leading-relaxed opacity-80 mb-6">
                Ada kendala dengan pesanan atau notifikasi yang tidak masuk?
              </p>
              {/* Ganti baris button ini di dalam file Notifications.jsx */}
              <button
                onClick={() => window.open("https://wa.me/6285159941023?text=Halo%20Admin%20BrightWash,%20saya%20butuh%20bantuan%20terkait%20pesanan...", "_blank")}
                className="w-full bg-[#FF71A4] py-4 rounded-[25px] font-black text-xs shadow-lg hover:scale-105 active:scale-95 transition-all uppercase tracking-widest"
              >
                HUBUNGI ADMIN
              </button>
            </div>
            <div className="absolute -right-5 -bottom-5 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="bg-white/40 border border-white p-8 rounded-[40px] shadow-sm">
            <h4 className="font-black text-[#2B3674] text-xs uppercase tracking-widest mb-4 opacity-50">Pengaturan</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="text-xs font-bold text-gray-600">Email Notif</span>
                <div className="w-8 h-4 bg-green-500 rounded-full relative"><div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div></div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="text-xs font-bold text-gray-600">WhatsApp Notif</span>
                <div className="w-8 h-4 bg-green-500 rounded-full relative"><div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;