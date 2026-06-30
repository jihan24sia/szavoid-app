import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PremiumLaundryImg from '../assets/premiumlaundry.jpg';
import CuciSetrikaImg from '../assets/cucisetrika.jpg';
import BedCoverImg from '../assets/bedcover.jpg';
import CuciSepatuImg from '../assets/cucisepatu.jpg';
import JasGaunImg from '../assets/jaslaundru.jpg';
import {
  ArrowRight, Sparkles, Phone, Mail, MapPin, Star, Zap, Droplet, 
  CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, Award, 
  HeartHandshake, Smile, MessageSquareQuote, Flame, Leaf, 
  ShieldAlert, Send, Truck, QrCode, ClipboardCheck, Sparkle, ShoppingBag
} from 'lucide-react';

export default function GuestPage() {
  const navigate = useNavigate();
  
  // State Interaktif Internal
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(!formData.nama || !formData.pesan) return;
    
    // Simulasi pengiriman data ke server database internal website
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nama: '', email: '', pesan: '' });
      alert("Pesan Anda berhasil terkirim ke Dashboard Admin BrightWash! Tim CS kami akan membalas via email.");
    }, 1500);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const steps = [
    { icon: Truck, title: "Penjemputan / Drop-off", desc: "Kurir menjemput langsung ke depan rumah Anda setelah Anda melakukan konfirmasi order via Dashboard, atau Anda bawa langsung ke outlet BrightWash." },
    { icon: ClipboardCheck, title: "Tagging & Digital Scanning", desc: "Pakaian dihitung secara mendetail oleh staf, difoto, lalu diberi barcode unik anti-tertukar sebelum masuk ke sistem antrean otomatis komputer." },
    { icon: Droplet, title: "Pencucian Higienis Terpisah", desc: "Pakaian masuk mesin khusus berteknologi mutakhir. Aturan mutlak: 1 Nota = 1 Mesin. Air disaring melalui 3 lapis filter mikro karbon." },
    { icon: Flame, title: "Setrika Uap & QC Ketat", desc: "Disetrika menggunakan uap boiler murni agar halus sempurna, disemprot wangi parfum grade A eksklusif, dan wajib lolos Quality Control 2 tahap." }
  ];

  const faqs = [
    { q: "Apakah pakaian saya akan dicampur dengan milik pelanggan lain?", a: "Sama sekali TIDAK. Kami menerapkan kebijakan ketat '1 Nota 1 Mesin Cuci & 1 Mesin Pengering' demi menjaga higienitas murni dan mencegah pakaian tertukar." },
    { q: "Berapa lama durasi pengerjaan reguler dan express?", a: "Layanan reguler selesai dalam 2-3 hari. Untuk kebutuhan darurat, kami menyediakan layanan Super Express otomatis yang selesai hanya dalam waktu 3 jam saja." },
    { q: "Bagaimana cara melacak pakaian yang sedang dicuci?", a: "Sangat mudah! Setelah masuk ke akun Anda, Anda bisa memantau status cucian secara realtime melalui menu 'Lacak Pesanan' di dalam sistem website ini." },
    { q: "Bagaimana jika pakaian saya rusak atau hilang?", a: "Setiap helai pakaian Anda dilindungi asuransi internal BrightWash. Jika terbukti rusak atau hilang di gudang kami, kami berikan ganti rugi penuh secara instan sesuai regulasi." }
  ];

  const reviews = [
    { name: "Andi Saputra", role: "Pelanggan Tetap", text: "Sistem monitoringnya juara. Kerjaan beres tepat waktu dan wangi pakaiannya eksklusif banget, beda dari laundry kiloan biasa.", rating: 5 },
    { name: "Siti Rahma", role: "Pengusaha", text: "Sangat terbantu sama layanan super express 3 jam. Jas dan gaun di-treatment sangat hati-hati, rapi tanpa cacat sedikitpun.", rating: 5 },
    { name: "Budi Setiawan", role: "Karyawan Swasta", text: "Detergennya ramah di kulit anak saya yang sensitif. Bersih berkilau dan harganya sangat bersahabat untuk kualitas se-premium ini.", rating: 5 },
    { name: "dr. Amanda Putri", role: "Tenaga Medis", text: "Higienitasnya terjamin karena 1 nota 1 mesin. Sangat krusial untuk sterilisasi pakaian kerja medis saya sehari-hari.", rating: 5 },
    { name: "Rian Hidayat", role: "Mahasiswa UIR", text: "Layanan regulernya murah tapi pengerjaan gak asal-asalan. Kamarnya jadi ikutan wangi gara-gara parfum laundry BrightWash.", rating: 5 },
    { name: "Mega Utami", role: "Ibu Rumah Tangga", text: "Bedcover tebal pulang-pulang jadi super lembut dan mengembang sempurna. Gak bau apek sama sekali walau Pekanbaru lagi mendung.", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased scroll-smooth relative selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* KONDIMEN UTAMA: GLOBAL STYLES DAN EFEK ANIMASI NGAMBANG */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes marquee { 
          0% { transform: translateX(0%); } 
          100% { transform: translateX(-50%); } 
        }
        .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
        .animate-marquee { display: flex; width: max-content; animation: marquee 35s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
        .mask-gradient { mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
        .grid-bg { background-image: linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 40px 40px; }
      `}</style>

      {/* ESTETIK GRID LINES OVERLAY */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />

      {/* BACKGROUND GLOW RADIAL */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* 1. PREMIUM GLASS NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/85 border-b border-white/[0.05] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform duration-300">
              <Sparkles size={18} className="animate-pulse" />
            </div>
            <span className="font-black text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 font-mono">BRIGHTWASH</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-wider text-slate-400">
            {['home', 'tentang', 'alur', 'layanan', 'ulasan', 'faq', 'kontak'].map(item => (
              <a key={item} href={`#${item}`} className="hover:text-blue-400 transition-all duration-300 hover:translate-y-[-2px] block relative group/link">
                {item === 'home' ? 'Home' : item === 'tentang' ? 'Kelebihan' : item === 'alur' ? 'Alur Kerja' : item === 'layanan' ? 'Katalog' : item === 'ulasan' ? 'Review' : item === 'faq' ? 'FAQ' : 'Kontak'}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover/link:w-full"></span>
              </a>
            ))}
          </div>

          <button
            onClick={() => navigate('/login')}
            className="bg-white/[0.03] hover:bg-blue-600 text-white text-xs font-extrabold uppercase tracking-wide px-5 py-2.5 rounded-xl border border-white/[0.08] hover:border-blue-500 shadow-md transition-all duration-300 flex items-center gap-2 group hover:scale-105 active:scale-95"
          >
            Masuk Sistem
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative pt-44 pb-24 px-6 min-h-screen flex items-center z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] text-blue-400 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-inner">
              <Sparkle size={12} className="text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} /> LAUNDRY AUTOMATION SYSTEM v2.4
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.12]">
              Urus Cucian Tanpa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Ribet, Semua Otomatis</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed font-medium">
              BrightWash menghadirkan platform cuci premium terotomatisasi di Pekanbaru. Cukup pesan lewat website, kurir menjemput, dan Anda dapat memantau pergerakan pakaian secara *realtime*.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => navigate('/login')} 
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <ShoppingBag size={14} /> BUAT PESANAN SEKARANG
              </button>
              <a href="#layanan" className="bg-white/[0.03] hover:bg-white/[0.08] text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-xl border border-white/[0.08] transition-all duration-300 text-center flex items-center justify-center hover:border-blue-500/40 hover:scale-105">
                LIHAT DAFTAR HARGA
              </a>
            </div>

            {/* ESTETIK FLOATING STATS */}
            <div className="inline-flex flex-wrap items-center gap-6 bg-slate-900/60 border border-white/[0.05] p-4 rounded-2xl backdrop-blur-sm shadow-xl animate-float-medium hover:scale-105 transition-transform duration-300 cursor-default">
              <div>
                <span className="text-[9px] font-extrabold text-slate-500 block uppercase tracking-wider">TARIF MULAI</span>
                <span className="text-lg font-black text-cyan-400">Rp 7.000<span className="text-xs text-slate-500 font-normal">/Kg</span></span>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <span className="text-lg font-black text-amber-400 flex items-center gap-1">4.9 <Star size={15} className="fill-amber-400 text-amber-400" /></span>
                <span className="text-[9px] font-bold text-slate-500 block uppercase tracking-wider">500+ Review Google</span>
              </div>
            </div>
          </div>

          {/* ESTETIK PERMANENT FLOATING HERO IMAGE */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[36px] blur-2xl opacity-20 animate-pulse pointer-events-none" />
            <div className="relative w-full max-w-[340px] aspect-[4/5] bg-slate-900 rounded-[32px] overflow-hidden shadow-2xl border border-white/[0.05] p-2 animate-float-slow hover:scale-105 transition-transform duration-500 cursor-pointer">
              <img src={PremiumLaundryImg} alt="Premium Laundry BrightWash" className="w-full h-full object-cover rounded-[24px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING MEMO GARANSI BAR */}
      <div className="max-w-7xl mx-auto px-6 -mt-4 relative z-20">
        <div className="w-full bg-slate-900/80 border border-blue-500/20 rounded-3xl p-6 backdrop-blur-md shadow-2xl animate-float-medium hover:border-blue-500/40 transition-colors" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                <ShieldCheck size={24} className="animate-pulse" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white">Garansi Higienitas Steril Murni</h4>
                <p className="text-xs text-slate-400 mt-0.5">Sistem memisahkan pengerjaan otomatis tiap 1 Nota = 1 Mesin. Pakaian Anda 100% aman tidak dicampur baju orang lain.</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/login')}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-xl shadow-md transition-all duration-300 whitespace-nowrap w-full sm:w-auto text-center hover:scale-105 active:scale-95"
            >
              Uji Coba Sistem
            </button>
          </div>
        </div>
      </div>

      {/* 3. ABOUT US (KELEBIHAN DENGAN STYLE BARU) */}
      <section id="tentang" className="bg-white text-slate-900 py-24 px-6 scroll-mt-24 transition-all duration-500 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest block">SYSTEM BENEFITS</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">Kelebihan Ekosistem BrightWash</h2>
            <p className="text-slate-600 text-xs font-medium">Bukan sekadar jasa cuci biasa, kami merawat pakaian dengan komputasi modern terintegrasi.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Droplet, title: "Sistem Multi-Filter Air", desc: "Air diproses ketat melalui filter karbon mikro menghilangkan zat besi tinggi agar baju putih tidak kusam kekuningan." },
              { icon: Award, title: "Detergen Premium Alami", desc: "Formula khusus ampuh menghempas noda membandel tanpa merusak struktur benang, sangat ramah kulit sensitif." },
              { icon: HeartHandshake, title: "Setrika Uap Boiler Murni", desc: "Menggunakan tekanan uap panas konstan tinggi. Pakaian licin sempurna, halus, tahan lama dan anti bercak gosong." },
              { icon: Smile, title: "Barcode Tracking Realtime", desc: "Setiap baju dipasangi tag pemindai digital unik, memperkecil total risiko pakaian tertukar atau terselip di gudang." }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="w-11 h-11 bg-blue-600 text-white rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                  <item.icon size={18} />
                </div>
                <h4 className="font-extrabold text-sm text-slate-950 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-slate-200 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest block">WORK INTEGRITY</span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">Menjaga Kepercayaan Penuh</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Kami memahami baju Anda adalah penunjang produktivitas harian Anda. Platform internal BrightWash memadukan standarisasi operasional hotel dengan kemudahan teknologi digital.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { value: "15K+", label: "Baju Selesai" },
                  { value: "3.2K+", label: "User Aktif" },
                  { value: "99.8%", label: "Skor Kepuasan" }
                ].map(stat => (
                  <div key={stat.label} className="bg-white border border-slate-200 p-3 rounded-2xl text-center shadow-md hover:scale-105 transition-transform duration-300">
                    <span className="block text-lg font-black text-blue-600">{stat.value}</span>
                    <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {[
                { icon: Flame, title: "Zero Bacteria Treatment (Thermal Disinfection)", desc: "Proses pengeringan mekanis suhu tinggi konstan untuk mematikan tungau, debu mikro, dan sisa bakteri jahat." },
                { icon: Leaf, title: "Eco-Friendly Waste Filter System", desc: "Sisa pembuangan limbah air sabun disaring melalui tangki netralisasi khusus demi kelestarian alam Pekanbaru." },
                { icon: ShieldAlert, title: "Jaminan Asuransi Kehilangan & Kerusakan", desc: "Komitmen ganti rugi bernilai penuh secara instan jika terbukti terjadi kelalaian operasional dalam sistem tracking." }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer">
                  <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-slate-950">{item.title}</h5>
                    <p className="text-slate-600 text-[11px] mt-0.5 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (ALUR KERJA INTERNAL BERKELAS) */}
      <section id="alur" className="py-24 px-6 border-t border-white/[0.05] relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest block">DIGITAL MANAGEMENT</span>
            <h3 className="text-white font-black text-3xl md:text-4xl tracking-tight">4 Tahapan Alur Kerja Sistem</h3>
            <p className="text-slate-400 text-xs font-medium">Proses transparan bagaimana baju berharga Anda dikelola dari awal hingga kembali rapi.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              {steps.map((step, idx) => {
                const IconComp = step.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${activeStep === idx ? 'bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-500 text-white shadow-xl scale-105' : 'bg-slate-900/40 border-white/[0.05] text-slate-400 hover:bg-slate-900'}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${activeStep === idx ? 'bg-white text-blue-600' : 'bg-slate-800 text-slate-300'}`}>
                      <IconComp size={18} />
                    </div>
                    <div>
                      <span className="text-[9px] block font-black uppercase opacity-60">TAHAPAN 0{idx+1}</span>
                      <h4 className="font-bold text-xs md:text-sm text-white">{step.title}</h4>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="lg:col-span-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-white/[0.05] rounded-3xl p-8 min-h-[260px] flex flex-col justify-center space-y-4 shadow-2xl animate-float-medium relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs font-black uppercase tracking-wider">
                <QrCode size={16} /> MONITOR DATA STEP_0{activeStep + 1}.LOG
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white">{steps[activeStep].title}</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">{steps[activeStep].desc}</p>
              <div className="pt-2 flex items-center gap-2 text-[11px] font-bold text-emerald-400">
                <CheckCircle2 size={14} /> Terverifikasi otomatis oleh enkripsi server internal.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MAIN SERVICES (KATALOG DIGITAL SYSTEM) */}
      <section id="layanan" className="py-24 px-6 border-t border-white/[0.05] relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest block">ONLINE SERVICE SELECTION</span>
            <h3 className="text-white font-black text-3xl md:text-4xl tracking-tight">Katalog Layanan & Tarif Transparan</h3>
            <p className="text-slate-400 text-xs font-medium max-w-md mx-auto leading-relaxed">
              Pilih jenis pengerjaan sesuai kebutuhan Anda. Proses transaksi, estimasi biaya, dan pembayaran diolah aman di dalam dashboard akun.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: CuciSetrikaImg, title: "Cuci Komplit (Reguler)", desc: "Dicuci bersih dengan air filter, dikeringkan mesin penuh, setrika uap rapi.", badge: "Populer", status: "Ready", time: "2-3 Hari Selesai", price: "10.000", unit: "Kg" },
              { img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=400&q=80", title: "Super Express 3 Jam", desc: "Layanan kilat cuci, kering, setrika selesai hitungan jam untuk situasi darurat harian.", badge: "Super Fast", status: "Instan", time: "3 Jam Langsung Siap", price: "15.000", unit: "Kg" },
              { img: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=400&q=80", title: "Setrika Uap Premium Saja", desc: "Khusus jasa setrika memakai uap boiler murni agar serat kemeja rapi presisi.", badge: "Iron Only", status: "Ready", time: "1-2 Hari Selesai", price: "7.000", unit: "Kg" },
              { img: BedCoverImg, title: "Bedcover & Blanket Clean", desc: "Pembersihan menyeluruh dakron menggunakan mesin besar berputar agar tidak menggumpal.", badge: "Spesial", status: "Ready", time: "3-4 Hari Selesai", price: "25.000", unit: "Pcs" },
              { img: CuciSepatuImg, title: "Premium Shoes Deep Clean", desc: "Treatment pencucian higienis khusus menjaga keutuhan warna kanvas, suede, dan kulit asli.", badge: "Care Pro", status: "Slot Terbatas", time: "5 Hari Selesai", price: "35.000", unit: "Pasang" },
              { img: JasGaunImg, title: "Premium Satuan (Jas / Gaun)", desc: "Metode *dry treatment* khusus busana pesta mewah, payet, kebaya, dan jas formal.", badge: "Luxury Care", status: "Ready", time: "3 Hari Selesai", price: "15.000", unit: "Pcs", prefix: "Mulai " },
            ].map((service, idx) => (
              <div 
                key={idx} 
                onClick={() => navigate('/login')}
                className="bg-slate-900/40 rounded-3xl border border-white/[0.05] p-5 flex flex-col justify-between gap-5 transition-all duration-300 hover:scale-105 hover:border-blue-500/30 hover:bg-slate-900 shadow-xl cursor-pointer group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="h-44 rounded-2xl bg-slate-800 overflow-hidden relative">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider text-white bg-blue-600 px-2.5 py-1 rounded-md shadow-md">{service.badge}</span>
                    
                    {/* KONDIMEN RADAR PULSE AMBIENT */}
                    <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[8px] font-black uppercase tracking-wider text-slate-300">{service.status}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-sm text-white group-hover:text-blue-400 transition-colors">{service.title}</h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed font-medium">{service.desc}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between gap-2">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">{service.time}</span>
                  <span className="text-xs font-black text-blue-400 bg-blue-950/40 border border-blue-900/30 px-3 py-1.5 rounded-xl">
                    {service.prefix || ''}Rp {service.price}<span className="text-[10px] font-normal text-slate-500">/{service.unit}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS (MARQUEE SLIDER) */}
      <section id="ulasan" className="bg-slate-100 text-slate-900 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest block">SYSTEM REVIEWS</span>
            <h2 className="text-3xl font-black text-slate-950 tracking-tight">Kepuasan Pengguna Aplikasi</h2>
            <p className="text-slate-600 text-xs font-medium">Ulasan otentik real dari pelanggan di Pekanbaru yang terbantu oleh kemudahan sistem kami.</p>
          </div>

          <div className="relative w-full overflow-x-hidden mask-gradient py-2">
            <div className="animate-marquee gap-6">
              {[...reviews, ...reviews].map((rev, idx) => (
                <div key={idx} className="w-[300px] bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between gap-4 shadow-md shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="space-y-2">
                    <div className="flex gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-xs leading-relaxed font-medium italic">"{rev.text}"</p>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-extrabold text-xs text-slate-950">{rev.name}</h5>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">{rev.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION INTERAKTIF */}
      <section id="faq" className="py-24 px-6 border-t border-white/[0.05] relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest block">KNOWLEDGE BASE</span>
            <h3 className="text-white font-black text-3xl tracking-tight">Pertanyaan Umum</h3>
            <p className="text-slate-400 text-xs font-medium">Informasi mendasar seputar regulasi, garansi, dan integrasi penanganan cucian.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-900/30 border border-white/[0.05] rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 text-white hover:bg-slate-900/60 transition-colors"
                >
                  <span className="font-bold text-xs md:text-sm">{faq.q}</span>
                  {activeFaq === index ? <ChevronUp size={16} className="text-blue-400" /> : <ChevronDown size={16} className="text-slate-500" />}
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out px-6 border-t border-white/[0.02] bg-slate-900/10 text-slate-400 text-xs leading-relaxed font-medium ${activeFaq === index ? 'py-5 max-h-[200px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION (MURNI TERINTEGRASI DASHBOARD DATABASE INTERNAL) */}
      <section id="kontak" className="py-24 px-6 border-t border-white/[0.05] relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest block">SUPPORT TICKET</span>
            <h3 className="text-white font-black text-3xl md:text-4xl tracking-tight">Butuh Bantuan Teknis Khusus?</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-lg">
              Kirimkan kritik, saran, kendala sistem, atau permohonan kerja sama korporasi (B2B). Tiket pesan yang dikirim lewat formulir akan langsung didata oleh tim Admin Gudang Pusat.
            </p>
            <div className="space-y-4 text-xs font-medium pt-2 text-slate-300">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-blue-500 shrink-0" />
                <span>+62 812-3456-7890 (Kantor Operasional Pekanbaru)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-blue-500 shrink-0" />
                <span>helpdesk@brightwash.id</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-blue-500 shrink-0" />
                <span>Jl. Utama No. 45, Simpang Tiga, Pekanbaru</span>
              </div>
            </div>
          </div>

          {/* FORM DIGITAL INTERNAL WEBSITE */}
          <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 border border-white/[0.05] shadow-2xl animate-float-medium relative overflow-hidden" style={{ animationDelay: '0.4s' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
            <h4 className="text-base font-black mb-4 text-white">Buat Tiket Pesan Masuk</h4>
            
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <input 
                type="text" 
                placeholder="Nama Lengkap Anda" 
                required
                value={formData.nama}
                onChange={e => setFormData({...formData, nama: e.target.value})}
                className="w-full bg-slate-800/60 border border-white/[0.08] px-4 py-3 text-xs rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-slate-600 transition-all"
              />
              <input 
                type="email" 
                placeholder="Alamat Email Valid" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-slate-800/60 border border-white/[0.08] px-4 py-3 text-xs rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-slate-600 transition-all"
              />
              <textarea 
                placeholder="Tuliskan kendala akun, komplain kualitas layanan, atau pesan khusus Anda di sini..." 
                rows={4} 
                required
                value={formData.pesan}
                onChange={e => setFormData({...formData, pesan: e.target.value})}
                className="w-full bg-slate-800/60 border border-white/[0.08] px-4 py-3 text-xs rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-slate-600 resize-none transition-all"
              ></textarea>
              
              <button 
                type="submit" 
                disabled={isSubmitted}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 disabled:from-slate-800 disabled:to-slate-800 text-white text-xs font-black uppercase tracking-wider py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 disabled:pointer-events-none"
              >
                {isSubmitted ? 'MEMPROSES TIKET...' : 'KIRIM KE DASHBOARD SERVER'} 
                <Send size={12} className={isSubmitted ? 'animate-ping' : ''} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. PREMIUM FOOTER */}
      <footer className="border-t border-white/[0.05] text-slate-600 py-12 px-6 text-xs bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Sparkles size={14} />
            </div>
            <span className="font-bold text-slate-300">BrightWash Dashboard</span>
          </div>
          <p className="text-center font-medium text-slate-500">
            &copy; {new Date().getFullYear()} BrightWash Premium Laundry Core System. All Rights Reserved. <br/> Pekanbaru, Riau.
          </p>
          <div className="flex gap-5 font-semibold">
            {['Privacy Policy', 'System Terms'].map(item => (
              <a key={item} href="#" className="hover:text-blue-400 transition-all">{item}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}