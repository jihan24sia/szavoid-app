import React from 'react';
import { 
  Bell, Clock, AlertCircle, ShoppingBag, Waves, ShieldQuestion, 
  MessageSquare, Star, FileText, LifeBuoy, CheckCircle2 
} from 'lucide-react';

const Interactions = () => {
  // Data diubah menjadi Riwayat Interaksi & Aktivitas
  const interactions = [
    {
      id: 1,
      category: "COMPLAINT",
      title: "Komplain: Baju Tertukar (#BW-9178)",
      desc: "Pelanggan Jihan melaporkan 1 kemeja putih tertukar. Admin perlu verifikasi CCTV area packing.",
      time: "2 Menit yang lalu",
      icon: <AlertCircle className="text-red-500" />,
      bg: "bg-red-50",
      isNew: true
    },
    {
      id: 2,
      category: "SUPPORT TICKET",
      title: "Tiket Bantuan: Kendala Pickup",
      desc: "Tiket #HELP-002: Kurir tidak menemukan alamat pelanggan. Sudah dihubungi via WhatsApp.",
      time: "15 Menit yang lalu",
      icon: <LifeBuoy className="text-orange-500" />,
      bg: "bg-orange-50",
      isNew: true
    },
    {
      id: 3,
      category: "FEEDBACK",
      title: "Review Bintang 5! ⭐⭐⭐⭐⭐",
      desc: "Pelanggan memberikan review: 'Hasil setrika sangat rapi dan wangi parfumnya tahan lama!'.",
      time: "1 Jam yang lalu",
      icon: <Star className="text-yellow-500" />,
      bg: "bg-yellow-50",
      isNew: false
    },
    {
      id: 4,
      category: "ADMIN NOTE",
      title: "Catatan Internal: Preferensi Wangi",
      desc: "Admin Jihan menambahkan catatan: 'Pelanggan atas nama Budi alergi pewangi Rose, gunakan Ocean Fresh'.",
      time: "5 Jam yang lalu",
      icon: <FileText className="text-[#1678F3]" />,
      bg: "bg-blue-50",
      isNew: false
    },
    {
      id: 5,
      category: "CHAT LOG",
      title: "Chat Selesai: Tanya Harga",
      desc: "Interaksi chat dengan pelanggan baru mengenai paket Express 6 Jam telah ditutup oleh CS.",
      time: "1 Hari yang lalu",
      icon: <MessageSquare className="text-green-500" />,
      bg: "bg-green-50",
      isNew: false
    }
  ];

return (
    <div className="h-full flex flex-col gap-8">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-2 h-10 bg-[#1678F3] rounded-full"></div>
          <div>
            <h2 className="text-4xl font-black text-[#1678F3] tracking-tighter uppercase italic leading-none">Interactions</h2>
            <p className="text-[#4DBAE9] font-black text-[10px] uppercase tracking-[0.4em] mt-1">Pusat Kendali Interaksi BrightWash</p>
          </div>
        </div>
        <button className="text-[10px] font-black uppercase tracking-widest text-[#1678F3] bg-white border-2 border-blue-50 px-8 py-4 rounded-[22px] shadow-xl shadow-blue-100/20 hover:bg-blue-50 transition-all italic">
          Arsip Semua Interaksi
        </button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Kolom Log Interaksi (Kiri) */}
        <div className="col-span-12 lg:col-span-8 space-y-5">
          {interactions.map((n) => (
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
                  <div className="flex flex-col">
                    <span className={`text-[7px] font-black tracking-[0.2em] mb-1 px-2 py-0.5 rounded-full w-fit ${n.isNew ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {n.category}
                    </span>
                    <h4 className={`font-black uppercase italic tracking-tight text-sm ${n.isNew ? 'text-[#1678F3]' : 'text-gray-500'}`}>
                      {n.title}
                    </h4>
                  </div>
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
                   <span className="text-[8px] font-black text-[#4DBAE9] uppercase tracking-tighter">Urgent</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Box Samping (Kanan) */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Card Statistik Cepat */}
          <div className="bg-white/80 border border-white p-10 rounded-[50px] shadow-xl">
             <h4 className="font-black text-[#1678F3] text-[10px] uppercase tracking-[0.3em] mb-8 italic">Interaction Stats</h4>
             <div className="space-y-4">
                <StatLine label="Pending Complaint" value="1" color="text-red-500" />
                <StatLine label="Open Tickets" value="3" color="text-orange-500" />
                <StatLine label="Total Reviews" value="128" color="text-[#1678F3]" />
             </div>
          </div>

          {/* Pusat Bantuan Card */}
          <div className="bg-gradient-to-br from-[#1678F3] to-[#4DBAE9] rounded-[50px] p-10 text-white shadow-2xl relative overflow-hidden group">
            <Waves className="absolute -right-10 -top-10 text-white/10 scale-[3] pointer-events-none group-hover:rotate-12 transition-transform duration-1000" />
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-[25px] flex items-center justify-center mx-auto mb-6">
                <ShieldQuestion size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-3">Butuh Bantuan?</h3>
              <p className="text-xs leading-relaxed opacity-80 mb-8 font-medium">
                Ada kendala dalam menangani komplain? Tanya tim senior.
              </p>
              <button
                onClick={() => window.open("https://wa.me/6285159941023", "_blank")}
                className="w-full bg-white text-[#1678F3] py-5 rounded-[25px] font-black text-xs shadow-xl hover:scale-105 active:scale-95 transition-all uppercase tracking-[0.2em] italic"
              >
                KONSULTASI ADMIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-komponen untuk statistik ringkas
const StatLine = ({ label, value, color }) => (
  <div className="flex justify-between items-center border-b border-gray-50 pb-3">
    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</span>
    <span className={`text-lg font-black italic ${color}`}>{value}</span>
  </div>
);

export default Interactions;