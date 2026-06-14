import React from 'react';
import { 
  Clock, AlertCircle, Waves, ShieldQuestion, 
  MessageSquare, Star, FileText, LifeBuoy 
} from 'lucide-react';

// --- IMPORT KOMPONEN INTERNAL MASTER ---
import SectionHeader from '../components/SectionHeader';

const Interactions = () => {
  // Data log riwayat aktivitas & interaksi dengan skema warna terkalibrasi
  const interactions = [
    {
      id: 1,
      category: "COMPLAINT",
      title: "Komplain: Baju Tertukar (#BW-9178)",
      desc: "Pelanggan Jihan melaporkan 1 kemeja putih tertukar. Admin perlu verifikasi CCTV area packing.",
      time: "2 Menit yang lalu",
      icon: <AlertCircle className="text-rose-600" />,
      bg: "bg-rose-50 border-rose-100",
      badgeStyle: "bg-rose-50 text-rose-600 border-rose-200",
      isNew: true
    },
    {
      id: 2,
      category: "SUPPORT TICKET",
      title: "Tiket Bantuan: Kendala Pickup",
      desc: "Tiket #HELP-002: Kurir tidak menemukan alamat pelanggan. Sudah dihubungi via WhatsApp.",
      time: "15 Menit yang lalu",
      icon: <LifeBuoy className="text-amber-600" />,
      bg: "bg-amber-50 border-amber-100",
      badgeStyle: "bg-amber-50 text-amber-600 border-amber-200",
      isNew: true
    },
    {
      id: 3,
      category: "FEEDBACK",
      title: "Review Bintang 5! ⭐⭐⭐⭐⭐",
      desc: "Pelanggan memberikan review: 'Hasil setrika sangat rapi dan wangi parfumnya tahan lama!'.",
      time: "1 Jam yang lalu",
      icon: <Star className="text-yellow-500" />,
      bg: "bg-yellow-50/50 border-yellow-100",
      badgeStyle: "bg-yellow-50 text-yellow-600 border-yellow-200",
      isNew: false
    },
    {
      id: 4,
      category: "ADMIN NOTE",
      title: "Catatan Internal: Preferensi Wangi",
      desc: "Admin Jihan menambahkan catatan: 'Pelanggan atas nama Budi alergi pewangi Rose, gunakan Ocean Fresh'.",
      time: "5 Jam yang lalu",
      icon: <FileText className="text-blue-600" />,
      bg: "bg-blue-50 border-blue-100",
      badgeStyle: "bg-blue-50 text-blue-600 border-blue-200",
      isNew: false
    },
    {
      id: 5,
      category: "CHAT LOG",
      title: "Chat Selesai: Tanya Harga",
      desc: "Interaksi chat dengan pelanggan baru mengenai paket Express 6 Jam telah ditutup oleh CS.",
      time: "1 Hari yang lalu",
      icon: <MessageSquare className="text-emerald-600" />,
      bg: "bg-emerald-50 border-emerald-100",
      badgeStyle: "bg-emerald-50 text-emerald-600 border-emerald-200",
      isNew: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased p-2 flex flex-col gap-8">
      
      {/* --- 1. HEADER SECTION (MENGGUNAKAN KOMPONEN RESMI) --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
        
        <SectionHeader 
          title="Interactions Log"
          subtitle="Pusat kendali umpan balik, keluhan pelanggan, tiket bantuan, dan catatan internal admin."
          variant="default"
        />

        <button className="text-[10px] font-black uppercase tracking-widest text-slate-600 bg-white border border-slate-200 px-5 py-3.5 rounded-xl hover:bg-slate-50 active:scale-[0.98] transition-all shadow-sm shrink-0">
          Arsip Semua Interaksi
        </button>
      </div>

      {/* --- 2. LAYOUT GRID CORE --- */}
      <div className="grid grid-cols-12 gap-8">
        
        {/* KOLOM LOG LIST (KIRI) */}
        <div className="col-span-12 lg:col-span-8 space-y-4">
          {interactions.map((n) => (
            <div
              key={n.id}
              className={`group flex items-start gap-5 p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                n.isNew 
                ? 'bg-white border-blue-100 shadow-sm shadow-blue-100/30' 
                : 'bg-white/70 border-slate-100 opacity-90 hover:opacity-100 hover:bg-white'
              }`}
            >
              {/* Container Box Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${n.bg} transition-transform group-hover:scale-105`}>
                {React.cloneElement(n.icon, { size: 20, strokeWidth: 2.5 })}
              </div>

              {/* Konten Detail Data */}
              <div className="flex-1 pt-0.5">
                <div className="flex justify-between items-start gap-4 mb-1">
                  <div className="flex flex-col gap-1.5">
                    <span className={`text-[8px] font-black tracking-widest px-2 py-0.5 rounded border w-fit ${n.badgeStyle}`}>
                      {n.category}
                    </span>
                    <h4 className={`font-black uppercase tracking-tight text-sm ${n.isNew ? 'text-slate-900' : 'text-slate-700'}`}>
                      {n.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 shrink-0">
                    <Clock size={12} className="text-slate-300" />
                    <span className="text-[10px] font-semibold">{n.time}</span>
                  </div>
                </div>
                <p className={`text-xs leading-relaxed mt-2 ${n.isNew ? 'text-slate-600 font-medium' : 'text-slate-400 font-normal'}`}>
                  {n.desc}
                </p>
              </div>

              {/* Status Urgent Indicator Dot */}
              {n.isNew && (
                <div className="flex flex-col items-center justify-center gap-1 shrink-0 pt-1">
                   <div className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse"></div>
                   <span className="text-[8px] font-black text-rose-500 uppercase tracking-wide">Urgent</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* KOLOM METRICS & ACTION (KANAN) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* CARD MINI STATUS STATISTICS */}
          <div className="bg-white border border-slate-100 p-6 rounded-[24px] shadow-sm">
             <h4 className="font-black text-slate-900 text-xs uppercase tracking-wider mb-6">Interaction Stats</h4>
             <div className="space-y-1">
                <StatLine label="Pending Complaint" value="1" color="text-rose-600" />
                <StatLine label="Open Support Tickets" value="3" color="text-amber-600" />
                <StatLine label="Total Customer Reviews" value="128" color="text-slate-900" />
             </div>
          </div>

          {/* CARD PUSAT BANTUAN LAYANAN (DARK PREMIUM GUEST STYLE) */}
          <div className="bg-slate-900 rounded-[32px] p-8 text-white shadow-xl relative overflow-hidden group border border-slate-800">
            <Waves className="absolute -right-12 -top-12 text-white/5 scale-[3.5] pointer-events-none group-hover:rotate-6 transition-transform duration-1000" />
            
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-800 text-blue-400 rounded-xl flex items-center justify-center border border-slate-700/50 mb-4 shadow-inner">
                <ShieldQuestion size={22} />
              </div>
              <h3 className="text-xl font-black tracking-tight mb-1.5 text-white">Butuh Bantuan?</h3>
              <p className="text-xs leading-relaxed text-slate-400 mb-6 font-normal max-w-[240px]">
                Ada kendala teknis atau ragu dalam menangani keluhan komplain pelanggan?
              </p>
              <button
                onClick={() => window.open("https://wa.me/6285159941023", "_blank")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-black text-xs shadow-md shadow-blue-900/10 transition-all uppercase tracking-widest"
              >
                Konsultasi Admin Senior
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Sub-komponen penampil baris statistik minimalis
const StatLine = ({ label, value, color }) => (
  <div className="flex justify-between items-center border-b border-slate-50 py-3 last:border-0 last:pb-0">
    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">{label}</span>
    <span className={`text-base font-black tracking-tight ${color}`}>{value}</span>
  </div>
);

export default Interactions;