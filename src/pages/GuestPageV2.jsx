import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  WashingMachine,
  Zap,
} from 'lucide-react';
import PremiumLaundryImg from '../assets/premiumlaundry.jpg';
import CuciSetrikaImg from '../assets/cucisetrika.jpg';
import BedCoverImg from '../assets/bedcover.jpg';
import CuciSepatuImg from '../assets/cucisepatu.jpg';
import JasGaunImg from '../assets/jaslaundru.jpg';

export default function GuestPageV2() {
  const navigate = useNavigate();

  const stats = [
    { value: '15K+', label: 'Pakaian dirawat' },
    { value: '3.2K+', label: 'Pelanggan aktif' },
    { value: '4.9/5', label: 'Rating layanan' },
    { value: '99%', label: 'Tepat estimasi' },
  ];

  const features = [
    {
      icon: <ShieldCheck size={22} />,
      title: 'Higienis Terpisah',
      desc: 'Cucian pelanggan diproses dengan pencatatan jelas agar lebih aman dan tidak mudah tertukar.',
    },
    {
      icon: <Award size={22} />,
      title: 'Kualitas Premium',
      desc: 'Pewangi, detergen, dan proses finishing dibuat untuk menjaga pakaian tetap nyaman dipakai.',
    },
    {
      icon: <Clock3 size={22} />,
      title: 'Estimasi Transparan',
      desc: 'Setiap paket punya durasi pengerjaan yang jelas sehingga pelanggan tahu kapan order selesai.',
    },
    {
      icon: <HeartHandshake size={22} />,
      title: 'Layanan Responsif',
      desc: 'Admin siap membantu pertanyaan layanan, estimasi, pickup, dan status cucian pelanggan.',
    },
  ];

  const services = [
    {
      name: 'Cuci Komplit',
      desc: 'Cuci, kering, dan setrika rapi untuk pakaian harian pelanggan.',
      price: 'Rp 10.000/Kg',
      time: '2-3 Hari',
      badge: 'Best Seller',
      image: CuciSetrikaImg,
    },
    {
      name: 'Super Express',
      desc: 'Layanan cepat untuk pelanggan yang membutuhkan hasil di hari yang sama.',
      price: 'Rp 15.000/Kg',
      time: '3 Jam',
      badge: 'Fast Track',
      image: PremiumLaundryImg,
    },
    {
      name: 'Bedcover & Blanket',
      desc: 'Perawatan cucian besar agar bersih, lembut, dan tidak berbau apek.',
      price: 'Rp 25.000/Kg',
      time: '3-4 Hari',
      badge: 'Large Item',
      image: BedCoverImg,
    },
    {
      name: 'Premium Shoes Clean',
      desc: 'Treatment sepatu canvas, suede, dan leather menggunakan cairan khusus.',
      price: 'Rp 35.000/Psg',
      time: '5 Hari',
      badge: 'Shoes Care',
      image: CuciSepatuImg,
    },
    {
      name: 'Jas & Gaun',
      desc: 'Layanan satuan untuk pakaian formal, kebaya, jas, dan kain sensitif.',
      price: 'Mulai Rp 15.000/Pcs',
      time: '3 Hari',
      badge: 'Premium',
      image: JasGaunImg,
    },
  ];

  const steps = [
    {
      icon: <MessageCircle size={22} />,
      title: 'Pilih Layanan',
      desc: 'Pelanggan memilih paket laundry sesuai kebutuhan dan estimasi waktu.',
    },
    {
      icon: <Truck size={22} />,
      title: 'Antar atau Pickup',
      desc: 'Cucian bisa diantar ke workshop atau dijadwalkan untuk pickup.',
    },
    {
      icon: <WashingMachine size={22} />,
      title: 'Diproses',
      desc: 'Pakaian dicatat, dicuci, dikeringkan, dan disetrika sesuai jenis layanan.',
    },
    {
      icon: <CheckCircle2 size={22} />,
      title: 'Selesai',
      desc: 'Order dikemas rapi dan siap diambil atau dikirim kembali ke pelanggan.',
    },
  ];

  const testimonials = [
    {
      name: 'Jihan Zahra',
      role: 'Pelanggan VIP',
      text: 'Tampilannya jelas, harga mudah dibaca, dan saya langsung tahu layanan mana yang cocok.',
    },
    {
      name: 'Budi Santoso',
      role: 'Pelanggan Reguler',
      text: 'Informasi layanan lebih lengkap. Estimasi waktu dan kontak admin gampang ditemukan.',
    },
    {
      name: 'Siti Rahma',
      role: 'Pelanggan Express',
      text: 'Bagian express-nya jelas, jadi enak kalau butuh layanan cepat untuk pakaian kerja.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 px-5 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-sm font-black tracking-[0.22em] text-cyan-300">BRIGHTWASH</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Landing Page V2</p>
            </div>
          </div>

          <div className="hidden items-center gap-7 text-[11px] font-black uppercase tracking-widest text-slate-400 md:flex">
            <a href="#keunggulan" className="hover:text-cyan-300">Keunggulan</a>
            <a href="#layanan" className="hover:text-cyan-300">Layanan</a>
            <a href="#proses" className="hover:text-cyan-300">Proses</a>
            <a href="#testimoni" className="hover:text-cyan-300">Testimoni</a>
            <a href="#kontak" className="hover:text-cyan-300">Kontak</a>
          </div>

          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-xs font-black uppercase tracking-widest text-slate-950 transition hover:bg-cyan-300"
          >
            Masuk Akun
            <ArrowRight size={15} />
          </button>
        </div>
      </nav>

      <main>
        <section className="px-5 pb-16 pt-28 md:pb-24 md:pt-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-cyan-200">
                <CheckCircle2 size={14} />
                PRD V2 - Landing Page Lebih Lengkap
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  Laundry Premium dengan Informasi Layanan yang Lebih Jelas
                </h1>
                <p className="max-w-2xl text-sm font-medium leading-7 text-slate-400 md:text-base">
                  BrightWash membantu pelanggan memilih layanan laundry dengan
                  informasi harga, estimasi, keunggulan, dan kontak yang lebih
                  mudah dipahami sejak halaman pertama.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => navigate('/login')}
                  className="rounded-xl bg-cyan-400 px-7 py-4 text-xs font-black uppercase tracking-widest text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
                >
                  Order Sekarang
                </button>
                <a
                  href="#layanan"
                  className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-center text-xs font-black uppercase tracking-widest text-white transition hover:border-cyan-400/40 hover:bg-white/10"
                >
                  Lihat Paket
                </a>
              </div>

              <div className="grid max-w-2xl grid-cols-2 gap-3 pt-2 md:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xl font-black text-cyan-300">{item.value}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-cyan-950/30">
                <img
                  src={PremiumLaundryImg}
                  alt="BrightWash premium laundry"
                  className="h-[500px] w-full rounded-[22px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Zap size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-black">Super Express 3 Jam</p>
                    <p className="mt-1 text-xs text-slate-400">Pilihan cepat untuk kebutuhan mendadak.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="keunggulan" className="bg-slate-50 px-5 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Keunggulan"
              title="Konten Utama yang Diperjelas pada V2"
              desc="Versi ini menambahkan highlight layanan agar calon pelanggan lebih cepat memahami nilai BrightWash."
              dark={false}
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {features.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="layanan" className="px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Layanan & Harga"
              title="Katalog Layanan Lebih Lengkap"
              desc="V2 menambah variasi layanan, badge layanan, estimasi, dan informasi harga yang lebih mudah discan."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {services.map((service) => (
                <article key={service.name} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                  <div className="relative">
                    <img src={service.image} alt={service.name} className="h-40 w-full object-cover" />
                    <span className="absolute left-3 top-3 rounded-lg bg-slate-950/90 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-white">
                      {service.badge}
                    </span>
                  </div>
                  <div className="space-y-4 p-5">
                    <div>
                      <h3 className="text-sm font-black">{service.name}</h3>
                      <p className="mt-2 min-h-20 text-xs leading-5 text-slate-400">{service.desc}</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-xs font-black text-cyan-300">{service.price}</span>
                      <span className="rounded-lg bg-white/10 px-2 py-1 text-[10px] font-bold text-slate-300">{service.time}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proses" className="bg-slate-50 px-5 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Cara Order"
              title="Alur Pemesanan Lebih Mudah Dipahami"
              desc="V2 menambahkan proses singkat agar calon pelanggan tahu langkah order dari awal sampai selesai."
              dark={false}
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((item, index) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                      {item.icon}
                    </div>
                    <span className="text-3xl font-black text-slate-100">0{index + 1}</span>
                  </div>
                  <h3 className="text-base font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimoni" className="px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Testimoni"
              title="Ulasan yang Lebih Informatif"
              desc="Testimoni V2 diarahkan untuk menonjolkan kejelasan harga, estimasi, dan layanan."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="mb-4 flex gap-1 text-amber-300">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={15} className="fill-amber-300" />
                    ))}
                  </div>
                  <p className="text-sm leading-6 text-slate-300">"{item.text}"</p>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-sm font-black">{item.name}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontak" className="bg-slate-50 px-5 py-20 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-cyan-700">Kontak</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Hubungi Admin BrightWash</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Kontak utama dibuat lebih terlihat agar calon pelanggan mudah bertanya dan mulai order.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <InfoRow icon={<Phone size={18} />} label="WhatsApp" value="+62 812-3556-6441" />
              <InfoRow icon={<Mail size={18} />} label="Email" value="support@brightwash.id" />
              <InfoRow icon={<MapPin size={18} />} label="Workshop" value="Jl. Arifin Ahmad, Pekanbaru" />
              <InfoRow icon={<MessageCircle size={18} />} label="Operasional" value="07.00 - 21.00 WIB" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionTitle({ eyebrow, title, desc, dark = true }) {
  return (
    <div className="max-w-2xl">
      <p className={`text-[10px] font-black uppercase tracking-widest ${dark ? 'text-cyan-300' : 'text-cyan-700'}`}>
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
      <p className={`mt-3 text-sm leading-6 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</p>
        <p className="mt-1 text-xs font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
