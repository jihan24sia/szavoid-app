import React from 'react';
import { useNavigate } from 'react-router-dom';
import PremiumLaundryImg from '../assets/premiumlaundry.jpg';
import CuciSetrikaImg from '../assets/cucisetrika.jpg';
import BedCoverImg from '../assets/bedcover.jpg';
import CuciSepatuImg from '../assets/cucisepatu.jpg';
import JasGaunImg from '../assets/jaslaundru.jpg';
import {
  ArrowRight, Sparkles, Clock, Phone, Mail, MapPin,
  Star, Zap, Droplet, Wind, LayoutGrid, CheckCircle2,
  ShieldCheck, Award, HeartHandshake, Smile, MessageSquareQuote,
  Flame, Leaf, ShieldAlert
} from 'lucide-react';

export default function GuestPage() {
  const navigate = useNavigate();

  const reviews = [
    { name: "Andi Saputra", role: "Pelanggan Tetap", text: "Sistem monitoringnya juara. Kerjaan beres tepat waktu dan wangi pakaiannya eksklusif banget, beda dari laundry kiloan biasa.", rating: 5 },
    { name: "Siti Rahma", role: "Pengusaha", text: "Sangat terbantu sama layanan super express 6 jam. Jas dan gaun di-treatment sangat hati-hati, rapi tanpa cacat sedikitpun.", rating: 5 },
    { name: "Budi Setiawan", role: "Karyawan Swasta", text: "Detergennya ramah di kulit anak saya yang sensitif. Bersih berkilau dan harganya sangat bersahabat untuk kualitas se-premium ini.", rating: 5 },
    { name: "dr. Amanda Putri", role: "Tenaga Medis", text: "Higienitasnya terjamin karena 1 nota 1 mesin. Sangat krusial untuk sterilisasi pakaian kerja medis saya sehari-hari.", rating: 5 },
    { name: "Rian Hidayat", role: "Mahasiswa UIR", text: "Layanan regulernya murah tapi pengerjaan gak asal-asalan. Kamarnya jadi ikutan wangi gara-gara parfum laundry BrightWash.", rating: 5 },
    { name: "Mega Utami", role: "Ibu Rumah Tangga", text: "Bedcover tebal pulang-pulang jadi super lembut dan mengembang sempurna. Gak bau apek sama sekali walau Pekanbaru lagi mendung.", rating: 5 },
    { name: "Hendra Wijaya", role: "Eksekutif Muda", text: "Setrika uap boilernya rapi banget, lipatan kemeja presisi dan kain gak gampang tipis atau rusak. Recommended buat baju kantoran.", rating: 5 },
    { name: "Dina Mariana", role: "Pecinta Kebaya", text: "Awalnya ragu laundry gaun payet di sini, pas balik hasilnya bersih total dan payet aman gak ada yang lepas satu pun. Top!", rating: 5 },
    { name: "Ferry Irawan", role: "Pecinta Olahraga", text: "Jersey bola original saya aman dicuci di sini. Sablonan gak pecah, teknologi mesinnya bener-bener ramah serat kain.", rating: 5 },
    { name: "Salsabila", role: "Hijab Influencer", text: "Paling suka karena airnya difilter. Hijab warna pastel dan putih koleksi saya warnanya tetep cerah gak gampang menguning.", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased scroll-smooth">

      {/* 1. FIXED GLASS NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 animate-pulse">
              <Sparkles size={18} />
            </div>
            <span className="font-black text-xl tracking-wider text-blue-500 font-mono">BRIGHTWASH</span>
          </div>

          {/* Menu Navigasi Tengah (Tanpa Harga) */}
          <div className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-wider text-slate-400">
            <a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a>
            <a href="#tentang" className="hover:text-blue-400 transition-colors duration-300">Tentang Kami</a>
            <a href="#layanan" className="hover:text-blue-400 transition-colors duration-300">Layanan & Harga</a>
            <a href="#ulasan" className="hover:text-blue-400 transition-colors duration-300">Review</a>
            <a href="#kontak" className="hover:text-blue-400 transition-colors duration-300">Kontak</a>
          </div>

          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold uppercase tracking-wide px-5 py-2.5 rounded-xl border border-blue-500 shadow-lg shadow-blue-500/20 transition-all duration-300 flex items-center gap-2 group"
          >
            Masuk Akun
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 pt-32 pb-24 px-6 overflow-hidden min-h-screen flex items-center scroll-mt-24">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest animate-pulse">
              <Zap size={12} className="fill-blue-400" /> GET LUXURY & COMFORT
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.15]">
              The Best Coolest Place Where <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Luxury Meets Affordability</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed font-medium">
              BrightWash hadir memberikan standar baru pencucian pakaian premium. Bersih berkilau, wangi elegan tahan lama, dan diproses dengan teknologi modern yang menjaga serat kain tetap sempurna.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => navigate('/login')}
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                BOOK NOW
              </button>
              <a href="#layanan" className="bg-white/5 hover:bg-white/10 text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-xl border border-white/10 transition-all duration-300 text-center flex items-center justify-center hover:border-blue-500/50">
                EXPLORE NOW
              </a>
            </div>

            <div className="inline-flex flex-wrap items-center gap-6 bg-slate-900/60 border border-slate-800 p-4 rounded-2xl backdrop-blur-sm">
              <div>
                <span className="text-[10px] font-extrabold text-slate-500 block uppercase tracking-wider">PRICE STARTS FROM</span>
                <span className="text-xl font-black text-cyan-400">Rp 7.000<span className="text-xs text-slate-500 font-normal">/Kg</span></span>
              </div>
              <div className="w-px h-8 bg-slate-800"></div>
              <div>
                <span className="text-xl font-black text-amber-400 flex items-center gap-1">4.9 <Star size={16} className="fill-amber-400" /></span>
                <span className="text-[10px] font-bold text-slate-500 block uppercase tracking-wider">From 500+ Google Business</span>
              </div>
            </div>
          </div>

          {/* GANTI DARI SINI */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] bg-slate-900 rounded-[32px] overflow-hidden shadow-2xl border border-slate-800 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500 group">

              {/* PENGGANTIAN TAG IMG KELAS PREMIUM */}
              <img
                src={PremiumLaundryImg}
                alt="Premium Laundry BrightWash"
                className="w-full h-full object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING MEMO GARANSI BAR */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-md shadow-xl hover:border-blue-500/40 transition-colors duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center shadow-inner shrink-0 animate-pulse">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white">Garansi Higienitas Murni 100%</h4>
                <p className="text-xs text-slate-400 mt-0.5">Satu nota diproses mandiri dalam satu mesin terpisah, pakaian Anda dijamin aman dan tidak akan pernah dicampur baju pelanggan lain.</p>
              </div>
            </div>
            <button onClick={() => navigate('/login')} className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-xl border border-blue-500 transition-all duration-300 whitespace-nowrap w-full sm:w-auto text-center shadow-md hover:shadow-blue-600/20">
              Order Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* 3. ABOUT US SECTION (EXPANDED CONTENT) */}
      <section id="tentang" className="bg-slate-50 text-slate-900 py-24 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Sub-Section Kepala */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest block">ABOUT BRIGHTWASH</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">Kenapa Harus Memilih Layanan Kami?</h2>
            <p className="text-slate-600 text-xs md:text-sm font-medium">Kami memberikan standar perawatan sandang profesional berkelas untuk menjaga kualitas pakaian Anda tetap maksimal.</p>
          </div>

          {/* Grid Fitur Utama */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center"><Droplet size={20} /></div>
              <h4 className="font-extrabold text-base text-slate-950">Sistem Multi-Filter Air</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">Air tanah disaring ketat menghilangkan kandungan zat besi tinggi sehingga pakaian putih kesayangan Anda tidak gampang kusam atau menguning.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center"><Award size={20} /></div>
              <h4 className="font-extrabold text-base text-slate-950">Detergen Hypoallergenic</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">Menggunakan formula detergen berkelas yang ampuh menggilas noda membandel tanpa merusak tekstur benang, serta aman bagi kulit sensitif anak.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center"><HeartHandshake size={20} /></div>
              <h4 className="font-extrabold text-base text-slate-950">Setrika Uap Boiler Murni</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">Menghindari setrika listrik biasa yang rawan bikin gosong. Tekanan uap panas tinggi merapikan kerutan pakaian secara halus dan presisi.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center"><Smile size={20} /></div>
              <h4 className="font-extrabold text-base text-slate-950">Digital Tracking Realtime</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">Setiap alur penanganan termonitor lewat sistem aplikasi komputer gudang, meminimalkan risiko baju tertukar atau terselip.</p>
            </div>
          </div>

          {/* KONTEN TAMBAHAN TENTANG KAMI: 3 Pilar Operasional & Statistik */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 items-center border-t border-slate-200">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest block">OUR WORK ETHIX</span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">Menjaga Kepercayaan Sepenuh Hati</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Kami percaya laundry bukan sekadar mencuci baju kotor, melainkan seni merawat serat kain investasi sandang Anda. BrightWash memadukan standarisasi ketat dengan pelayanan personal yang bersahabat.
              </p>

              {/* Statistik Mini */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-white border border-slate-200 p-3.5 rounded-2xl text-center shadow-sm">
                  <span className="block text-xl font-black text-blue-600">15K+</span>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Helai Pakaian</span>
                </div>
                <div className="bg-white border border-slate-200 p-3.5 rounded-2xl text-center shadow-sm">
                  <span className="block text-xl font-black text-cyan-600">3.2K+</span>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">User Aktif</span>
                </div>
                <div className="bg-white border border-slate-200 p-3.5 rounded-2xl text-center shadow-sm">
                  <span className="block text-xl font-black text-purple-600">99.8%</span>
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Puas Total</span>
                </div>
              </div>
            </div>

            {/* List Pilar Tambahan */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex gap-4 p-5 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center shrink-0"><Flame size={18} /></div>
                <div>
                  <h5 className="font-extrabold text-sm text-slate-950">Zero Bacteria Treatment (Thermal Disinfection)</h5>
                  <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">Pengeringan dengan temperatur optimal yang telah diuji klinis sanggup melumpuhkan sisa tungau, bakteri jahat, dan kuman yang menempel di saku kain.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0"><Leaf size={18} /></div>
                <div>
                  <h5 className="font-extrabold text-sm text-slate-950">Green Environment & Eco-Friendly Waste</h5>
                  <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">Seluruh sisa pembuangan limbah air detergen kami diproses terlebih dahulu melalui filtrasi netralisasi mandiri, menjamin kelestarian lingkungan tanah Pekanbaru.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
                <div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center shrink-0"><ShieldAlert size={18} /></div>
                <div>
                  <h5 className="font-extrabold text-sm text-slate-950">Loss & Damage Insurance Plan</h5>
                  <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">Ketenangan pikiran total untuk Anda. Kami menyediakan skema ganti rugi penuh instan jika terjadi kehilangan atau kerusakan pakaian yang tervalidasi sistem.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MAIN SERVICES & INTEGRATED PRICING */}
      {/* 4. MAIN SERVICES & INTEGRATED PRICING */}
      <section id="layanan" className="bg-slate-950 text-slate-100 py-24 px-6 scroll-mt-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* JUDUL SECTION DI TENGAH (CENTERED LAYOUT) */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest block">OUR PRICING PLAN</span>
            <h3 className="text-white font-black text-3xl md:text-4xl tracking-tight">
              Katalog Layanan & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Price List Spesialis</span>
            </h3>
            <p className="text-slate-400 text-xs md:text-sm font-medium max-w-md mx-auto leading-relaxed">
              Penanganan eksklusif transparan dengan pilihan durasi yang bisa disesuaikan dengan kebutuhan harian Anda.
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto mt-4"></div>
          </div>

          {/* Grid Layanan + Harga Terintegrasi (Diubah jadi 5 atau 6 Kolom Sejajar) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">

            {/* 1. Cuci Komplit */}
            <div className="bg-slate-900/40 rounded-3xl border border-slate-800 p-4 flex flex-col justify-between gap-5 group hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300">
              <div className="space-y-4">
                <div className="h-36 rounded-2xl bg-slate-800 overflow-hidden relative">
                  {/* PENGGANTIAN TAG IMG KELAS PREMIUM */}
                  <img
                    src={CuciSetrikaImg}
                    alt="Premium Laundry BrightWash"
                    className="w-full h-full object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider text-white bg-cyan-600 px-2.5 py-1 rounded-md">Best Seller</span>
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-extrabold text-xs text-white">Cuci Komplit (Cuci + Setrika)</h4>
                  <p className="text-slate-400 text-[10px] leading-relaxed">Paket lengkap pakaian harian. Dicuci bersih air filter, dikeringkan mesin, lalu disetrika rapi.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">2-3 Hari</div>
                <span className="text-xs font-black text-cyan-400 bg-cyan-950/40 border border-cyan-900/50 px-2 py-1 rounded-xl text-center">Rp 10.000 <span className="text-[9px] font-normal text-slate-400">/Kg</span></span>
              </div>
            </div>

            {/* 2. Express 3 Jam */}
            <div className="bg-slate-900/40 rounded-3xl border border-slate-800 p-4 flex flex-col justify-between gap-5 group hover:border-amber-500/40 hover:bg-slate-900/80 transition-all duration-300">
              <div className="space-y-4">
                <div className="h-36 rounded-2xl bg-slate-800 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=400&q=80" alt="Express" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider text-white bg-amber-600 px-2.5 py-1 rounded-md">Super Fast</span>
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-extrabold text-xs text-white">Super Express 3 Jam</h4>
                  <p className="text-slate-400 text-[10px] leading-relaxed">Layanan kilat anti-panik. Cuci, ngering, setrika selesai super cepat dalam hitungan jam.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">3 Jam Selesai</div>
                <span className="text-xs font-black text-amber-400 bg-amber-950/40 border border-amber-900/50 px-2 py-1 rounded-xl text-center">Rp 15.000 <span className="text-[9px] font-normal text-slate-400">/Kg</span></span>
              </div>
            </div>

            {/* 3. Setrika Saja */}
            <div className="bg-slate-900/40 rounded-3xl border border-slate-800 p-4 flex flex-col justify-between gap-5 group hover:border-blue-500/40 hover:bg-slate-900/80 transition-all duration-300">
              <div className="space-y-4">
                <div className="h-36 rounded-2xl bg-slate-800 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=400&q=80" alt="Setrika" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider text-white bg-blue-600 px-2.5 py-1 rounded-md">Ironing</span>
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-extrabold text-xs text-white">Setrika Saja (Kiloan)</h4>
                  <p className="text-slate-400 text-[10px] leading-relaxed">Pakaian sudah dicuci sendiri di rumah? Serahkan ke kami untuk disetrika uap boiler murni biar rapi presisi.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">1-2 Hari</div>
                <span className="text-xs font-black text-blue-400 bg-blue-950/40 border border-blue-900/50 px-2 py-1 rounded-xl text-center">Rp 7.000 <span className="text-[9px] font-normal text-slate-400">/Kg</span></span>
              </div>
            </div>

            {/* 4. Bedcover Bulu */}
            <div className="bg-slate-900/40 rounded-3xl border border-slate-800 p-4 flex flex-col justify-between gap-5 group hover:border-purple-500/40 hover:bg-slate-900/80 transition-all duration-300">
              <div className="space-y-4">
                <div className="h-36 rounded-2xl bg-slate-800 overflow-hidden relative">
                  <img
                    src={BedCoverImg}
                    alt="Bedcover & Blanket"
                    className="w-full h-full object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider text-white bg-purple-600 px-2.5 py-1 rounded-md">Large Item</span>
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-extrabold text-xs text-white">Bedcover & Blanket</h4>
                  <p className="text-slate-400 text-[10px] leading-relaxed">Pencucian mendalam selimut tebal pakai mesin ekstra besar agar serat dakron tidak menggumpal dan wangi.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">3-4 Hari</div>
                <span className="text-xs font-black text-purple-400 bg-purple-950/40 border border-purple-900/50 px-2 py-1 rounded-xl text-center">Rp 25.000 <span className="text-[9px] font-normal text-slate-400">/Kg</span></span>
              </div>
            </div>

            {/* 5. Sepatu */}
            <div className="bg-slate-900/40 rounded-3xl border border-slate-800 p-4 flex flex-col justify-between gap-5 group hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-300">
              <div className="space-y-4">
                <div className="h-36 rounded-2xl bg-slate-800 overflow-hidden relative">
                  <img
                    src={CuciSepatuImg}
                    alt="Sepatu"
                    className="w-full h-full object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider text-white bg-emerald-600 px-2.5 py-1 rounded-md">Shoes Care</span>
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-extrabold text-xs text-white">Premium Shoes Clean</h4>
                  <p className="text-slate-400 text-[10px] leading-relaxed">Cuci detail khusus sepatu canvas, suede, atau leather memakai cairan khusus pencegah pudar warna.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">5 Hari</div>
                <span className="text-xs font-black text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-2 py-1 rounded-xl text-center">Rp 35.000 <span className="text-[9px] font-normal text-slate-400">/Psg</span></span>
              </div>
            </div>

            {/* 6. Premium Satuan */}
            <div className="bg-slate-900/40 rounded-3xl border border-slate-800 p-4 flex flex-col justify-between gap-5 group hover:border-rose-500/40 hover:bg-slate-900/80 transition-all duration-300">
              <div className="space-y-4">
                <div className="h-36 rounded-2xl bg-slate-800 overflow-hidden relative">
                   <img
                    src={JasGaunImg}
                    alt="Jas/Gaun"
                    className="w-full h-full object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider text-white bg-rose-600 px-2.5 py-1 rounded-md">Luxury Cloth</span>
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-extrabold text-xs text-white">Premium Satuan (Jas/Gaun)</h4>
                  <p className="text-slate-400 text-[10px] leading-relaxed">Treatment khusus kain sensitif seperti Jas blazer, kebaya, gaun mewah pesta, hijab sutra, dan batik tulis.</p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">3 Hari</div>
                <span className="text-xs font-black text-rose-400 bg-rose-950/40 border border-rose-900/50 px-2 py-1 rounded-xl text-center">Mulai Rp 15k <span className="text-[9px] font-normal text-slate-400">/Pcs</span></span>
              </div>
            </div>

          </div>
          {/* TOMBOL KALKULASI DIBAWAH GRID BIAR LEBIH RAPI & SEIMBANG */}
          <div className="flex justify-center pt-4">
            <button onClick={() => navigate('/login')} className="bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-0.5">
              Order Sekarang
            </button>
          </div>

        </div>
      </section>

      {/* 5. TESTIMONIALS / REVIEWS CUSTOMER (10 REVIEWS WITH MARQUEE ANIMATION) */}
      <section id="ulasan" className="bg-slate-50 text-slate-900 py-24 px-6 scroll-mt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest block">CUSTOMER TESTIMONIALS</span>
            <h2 className="text-3xl font-black text-slate-950 tracking-tight">Suara Kepuasan Pelanggan</h2>
            <p className="text-slate-600 text-xs font-medium">Ulasan otentik dari warga Pekanbaru yang telah memercayakan pakaiannya pada kami.</p>
          </div>

          {/* Tambahan Style CSS Marquee via React Inline Style untuk Animasi Berjalan Otomatis */}
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 35s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Container Pembungkus Marquee Flex */}
          <div className="relative w-full overflow-x-hidden mask-gradient py-4">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

            <div className="animate-marquee gap-6">
              {/* Loop Pertama */}
              {reviews.map((rev, idx) => (
                <div key={`rev-1-${idx}`} className="w-[320px] bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between gap-4 relative shadow-sm shrink-0">
                  <div className="absolute top-5 right-5 text-slate-100">
                    <MessageSquareQuote size={28} />
                  </div>
                  <div className="space-y-2 relative z-10">
                    <div className="flex gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 text-xs font-medium leading-relaxed italic">
                      "{rev.text}"
                    </p>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <span className="font-extrabold text-xs text-slate-950 block">{rev.name}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">{rev.role}</span>
                  </div>
                </div>
              ))}
              {/* Duplikasi Loop Kedua agar Infinite Scroll Terlihat Sempurna Saling Menyambung */}
              {reviews.map((rev, idx) => (
                <div key={`rev-2-${idx}`} className="w-[320px] bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between gap-4 relative shadow-sm shrink-0">
                  <div className="absolute top-5 right-5 text-slate-100">
                    <MessageSquareQuote size={28} />
                  </div>
                  <div className="space-y-2 relative z-10">
                    <div className="flex gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 text-xs font-medium leading-relaxed italic">
                      "{rev.text}"
                    </p>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <span className="font-extrabold text-xs text-slate-950 block">{rev.name}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">{rev.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            💡 Arahkan kursor / sentuh ulasan untuk menjeda putaran animasi
          </div>
        </div>
      </section>

      {/* 6. DETAILED KONTAK & HUBUNGI KAMI */}
      <section id="kontak" className="bg-slate-950 text-slate-100 py-24 px-6 scroll-mt-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-slate-900 to-blue-950 border border-slate-800 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest block">WORKPLACE HUB</span>
            <h3 className="text-white font-black text-2xl tracking-tight">Hubungi & Kunjungi Kami</h3>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Punya cucian menumpuk atau butuh info kurir jemput pakaian? Jangan ragu hubungi saluran respons cepat admin kami.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3.5 bg-slate-950/80 p-4 rounded-xl border border-slate-800/60 hover:border-blue-500/30 transition-colors">
              <div className="w-9 h-9 bg-blue-500/10 rounded-lg text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20"><Phone size={15} /></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase">WhatsApp Hotline</span>
                <span className="text-xs font-black text-white">+62 812-3556-6441</span>
              </div>
            </div>
            <div className="flex items-center gap-3.5 bg-slate-950/80 p-4 rounded-xl border border-slate-800/60 hover:border-blue-500/30 transition-colors">
              <div className="w-9 h-9 bg-blue-500/10 rounded-lg text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20"><Mail size={15} /></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Email Support</span>
                <span className="text-xs font-black text-white">support@brightwash.id</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-start gap-3.5 bg-slate-950/80 p-4 rounded-xl border border-slate-800/60 h-full hover:border-blue-500/30 transition-colors">
            <div className="w-9 h-9 bg-blue-500/10 rounded-lg text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20 mt-0.5"><MapPin size={15} /></div>
            <div className="text-xs font-medium text-slate-400 leading-relaxed">
              <span className="font-black text-white block text-xs uppercase mb-1">Alamat Utama Workshop</span>
              Jl. Arifin Ahmad Gg. Damai, Marpoyan Damai, Pekanbaru, Riau.
            </div>
          </div>
        </div>
      </section>

      {/* 7. PREMIUM DARK FOOTER */}
      <footer className="bg-slate-950 text-slate-500 pt-16 pb-8 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-900 text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Sparkles size={16} />
              </div>
              <span className="font-black text-lg tracking-wider font-mono text-blue-500">BRIGHTWASH</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Penyedia layanan pencucian baju dan perawatan kain eksklusif dengan sistem monitoring digital real-time pertama di Pekanbaru.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-white text-xs font-black uppercase tracking-wider">Jam Operasional</h4>
            <p className="text-xs text-slate-500">Senin - Sabtu: <span className="text-slate-300 font-bold">07.00 - 21.00 WIB</span></p>
            <p className="text-xs text-slate-500">Minggu / Libur: <span className="text-slate-300 font-bold">09.00 - 17.00 WIB</span></p>
          </div>

          <div className="space-y-2">
            <h4 className="text-white text-xs font-black uppercase tracking-wider">Keamanan Data</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Seluruh rekam transaksi pemesanan aman terenkripsi di dalam server database terpusat Brightwash.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-bold tracking-wider text-slate-600 gap-4">
          <p>© 2026 BRIGHTWASH PEKANBARU. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}