import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Clock,
  Database,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  WalletCards,
} from 'lucide-react';
import PremiumLaundryImg from '../assets/premiumlaundry.jpg';
import CuciSetrikaImg from '../assets/cucisetrika.jpg';
import BedCoverImg from '../assets/bedcover.jpg';
import CuciSepatuImg from '../assets/cucisepatu.jpg';
import JasGaunImg from '../assets/jaslaundru.jpg';

export default function GuestPageV2() {
  const navigate = useNavigate();

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
      name: 'Express 3 Jam',
      desc: 'Layanan prioritas untuk pelanggan yang membutuhkan hasil cepat.',
      price: 'Rp 15.000/Kg',
      time: '3 Jam',
      badge: 'Fast Track',
      image: PremiumLaundryImg,
    },
    {
      name: 'Bedcover & Blanket',
      desc: 'Treatment cucian besar dengan pencatatan order yang jelas.',
      price: 'Rp 25.000/Kg',
      time: '3-4 Hari',
      badge: 'Large Item',
      image: BedCoverImg,
    },
    {
      name: 'Premium Shoes Clean',
      desc: 'Perawatan sepatu dengan tracking status dari terima sampai selesai.',
      price: 'Rp 35.000/Psg',
      time: '5 Hari',
      badge: 'Shoes Care',
      image: CuciSepatuImg,
    },
    {
      name: 'Jas & Gaun',
      desc: 'Perawatan satuan untuk kain khusus, acara formal, dan pakaian premium.',
      price: 'Mulai Rp 15.000/Pcs',
      time: '3 Hari',
      badge: 'Premium',
      image: JasGaunImg,
    },
  ];

  const features = [
    {
      icon: <Database size={22} />,
      title: 'Database Pelanggan',
      desc: 'Profil pelanggan, nomor WhatsApp, status loyalty, dan riwayat order disiapkan sebagai kebutuhan data utama.',
    },
    {
      icon: <PackageCheck size={22} />,
      title: 'Order Pipeline',
      desc: 'Setiap order punya status yang mudah dipahami: antri, proses, selesai, dan dibayar.',
    },
    {
      icon: <ReceiptText size={22} />,
      title: 'Riwayat Transaksi',
      desc: 'Data order dan nominal pembayaran dirancang agar bisa dipakai untuk laporan operasional.',
    },
    {
      icon: <Headphones size={22} />,
      title: 'Interaksi Pelanggan',
      desc: 'Keluhan, catatan preferensi, dan feedback pelanggan mulai ditampilkan sebagai bagian CRM.',
    },
  ];

  const pipeline = [
    { label: 'Order Masuk', value: '24', color: 'text-blue-300' },
    { label: 'Diproses', value: '16', color: 'text-amber-300' },
    { label: 'Siap Ambil', value: '9', color: 'text-cyan-300' },
    { label: 'Selesai', value: '128', color: 'text-emerald-300' },
  ];

  const testimonials = [
    {
      name: 'Jihan Zahra',
      role: 'Pelanggan VIP',
      text: 'Status cucian lebih jelas dan admin cepat memberi update kalau order sudah selesai.',
    },
    {
      name: 'Budi Santoso',
      role: 'Pelanggan Reguler',
      text: 'Harga, estimasi waktu, dan prosesnya transparan. Jadi lebih percaya untuk repeat order.',
    },
    {
      name: 'Siti Rahma',
      role: 'Pelanggan Express',
      text: 'Butuh cepat, langsung masuk prioritas. Cocok untuk kerja dan acara mendadak.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-sm font-black tracking-[0.22em] text-cyan-300">BRIGHTWASH</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">CRM Landing V2</p>
            </div>
          </div>

          <div className="hidden items-center gap-7 text-[11px] font-black uppercase tracking-widest text-slate-400 md:flex">
            <a href="#evaluasi" className="hover:text-white">Evaluasi</a>
            <a href="#crm" className="hover:text-white">CRM</a>
            <a href="#layanan" className="hover:text-white">Layanan</a>
            <a href="#kontak" className="hover:text-white">Kontak</a>
          </div>

          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-xs font-black uppercase tracking-widest text-slate-950 transition hover:bg-cyan-300"
          >
            Masuk CRM
            <ArrowRight size={15} />
          </button>
        </div>
      </nav>

      <main>
        <section className="px-6 py-18 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-cyan-200">
                <CheckCircle2 size={14} />
                PRD V2 - Landing CRM + Operational Preview
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  Landing Page yang Mulai Menjelaskan Sistem CRM, Bukan Cuma Promosi Laundry
                </h1>
                <p className="max-w-2xl text-sm font-medium leading-7 text-slate-400 md:text-base">
                  Versi kedua menambahkan konteks operasional: database pelanggan,
                  pipeline order, ringkasan transaksi, dan interaksi pelanggan sebagai
                  fondasi CRM BrightWash.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => navigate('/login')}
                  className="rounded-xl bg-cyan-400 px-7 py-4 text-xs font-black uppercase tracking-widest text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
                >
                  Buka CRM
                </button>
                <a
                  href="#crm"
                  className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-center text-xs font-black uppercase tracking-widest text-white transition hover:bg-white/10"
                >
                  Lihat Alur
                </a>
              </div>

              <div className="grid max-w-2xl grid-cols-2 gap-3 pt-3 md:grid-cols-4">
                {pipeline.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className={`text-2xl font-black ${item.color}`}>{item.value}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-slate-900 p-4 shadow-2xl shadow-cyan-950/20">
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={PremiumLaundryImg}
                  alt="BrightWash CRM landing preview"
                  className="h-56 w-full object-cover"
                />
              </div>
              <div className="space-y-4 p-3 pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Operational Snapshot</p>
                    <h2 className="mt-1 text-xl font-black">Today CRM Board</h2>
                  </div>
                  <div className="rounded-xl bg-emerald-400/10 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-emerald-300">
                    Live Preview
                  </div>
                </div>

                <div className="grid gap-3">
                  <DashboardRow icon={<Users size={18} />} label="Pelanggan aktif" value="3.2K" />
                  <DashboardRow icon={<WalletCards size={18} />} label="Estimasi omzet hari ini" value="Rp 2.450.000" />
                  <DashboardRow icon={<TrendingUp size={18} />} label="Repeat order bulan ini" value="68%" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="evaluasi" className="bg-slate-50 px-6 py-16 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-cyan-700">Evaluasi PRD</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Perubahan dari V1 ke V2</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                V2 mulai memperjelas arah produk CRM, belum masuk integrasi Supabase final.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <EvaluationCard title="V1" desc="Landing publik dasar: hero, layanan, testimoni, kontak." />
              <EvaluationCard title="V2" desc="Ditambah konteks CRM: pipeline, database, transaksi, dan interaksi pelanggan." active />
              <EvaluationCard title="V3 Nanti" desc="Masuk integrasi Supabase, skema database, RLS, dan data dinamis." />
            </div>
          </div>
        </section>

        <section id="crm" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-cyan-300">CRM Modules</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Kebutuhan CRM yang Sudah Terlihat di V2</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Section ini membantu user memahami bahwa BrightWash bukan hanya landing page,
                tapi pintu masuk ke sistem operasional laundry.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {features.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="layanan" className="bg-slate-50 px-6 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-cyan-700">Service Catalog</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Paket Layanan Lebih Lengkap</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                V2 memperluas katalog layanan agar calon pelanggan melihat variasi produk lebih jelas.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {services.map((service) => (
                <article key={service.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative">
                    <img src={service.image} alt={service.name} className="h-40 w-full object-cover" />
                    <span className="absolute left-3 top-3 rounded-lg bg-slate-950 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-white">
                      {service.badge}
                    </span>
                  </div>
                  <div className="space-y-4 p-5">
                    <div>
                      <h3 className="text-sm font-black">{service.name}</h3>
                      <p className="mt-2 min-h-20 text-xs leading-5 text-slate-600">{service.desc}</p>
                    </div>
                    <div className="border-t border-slate-100 pt-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-black text-cyan-700">{service.price}</span>
                        <span className="rounded-lg bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500">{service.time}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-cyan-300">Customer Voice</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Testimoni yang Mengarah ke Value CRM</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Testimoni V2 tidak hanya bicara hasil laundry, tapi juga transparansi proses.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
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

        <section id="kontak" className="bg-slate-50 px-6 py-20 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-6 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-3 md:p-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-cyan-700">Contact Center</p>
              <h2 className="mt-3 text-2xl font-black">Hubungi BrightWash</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Kontak dibuat lebih siap untuk diarahkan menjadi data lead di tahap berikutnya.
              </p>
            </div>
            <div className="space-y-3">
              <InfoRow icon={<Phone size={18} />} label="WhatsApp" value="+62 812-3556-6441" />
              <InfoRow icon={<Mail size={18} />} label="Email" value="support@brightwash.id" />
            </div>
            <div className="space-y-3">
              <InfoRow icon={<MapPin size={18} />} label="Alamat" value="Jl. Arifin Ahmad, Pekanbaru" />
              <InfoRow icon={<MessageCircle size={18} />} label="Jam Operasional" value="07.00 - 21.00 WIB" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function DashboardRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
          {icon}
        </div>
        <p className="text-xs font-bold text-slate-400">{label}</p>
      </div>
      <p className="text-sm font-black text-white">{value}</p>
    </div>
  );
}

function EvaluationCard({ title, desc, active = false }) {
  return (
    <div className={`rounded-2xl border p-6 ${active ? 'border-cyan-200 bg-cyan-50' : 'border-slate-200 bg-white'}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-black">{title}</h3>
        {active ? <ChevronRight size={18} className="text-cyan-700" /> : null}
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
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
