import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import PremiumLaundryImg from '../assets/premiumlaundry.jpg';
import CuciSetrikaImg from '../assets/cucisetrika.jpg';
import BedCoverImg from '../assets/bedcover.jpg';
import CuciSepatuImg from '../assets/cucisepatu.jpg';

export default function GuestPageV1() {
  const navigate = useNavigate();

  const services = [
    {
      name: 'Cuci Komplit',
      desc: 'Cuci, kering, dan setrika rapi untuk kebutuhan harian pelanggan.',
      price: 'Rp 10.000/Kg',
      time: '2-3 Hari',
      image: CuciSetrikaImg,
    },
    {
      name: 'Express 3 Jam',
      desc: 'Layanan cepat untuk pelanggan yang membutuhkan hasil di hari yang sama.',
      price: 'Rp 15.000/Kg',
      time: '3 Jam',
      image: PremiumLaundryImg,
    },
    {
      name: 'Bedcover & Blanket',
      desc: 'Perawatan cucian besar dengan proses higienis dan pewangi tahan lama.',
      price: 'Rp 25.000/Kg',
      time: '3-4 Hari',
      image: BedCoverImg,
    },
    {
      name: 'Shoes Clean',
      desc: 'Perawatan sepatu canvas, suede, dan leather dengan treatment khusus.',
      price: 'Rp 35.000/Psg',
      time: '5 Hari',
      image: CuciSepatuImg,
    },
  ];

  const highlights = [
    {
      icon: <Users size={22} />,
      title: 'Customer Database',
      desc: 'Data pelanggan tersusun rapi untuk kebutuhan follow-up dan loyalty.',
    },
    {
      icon: <BarChart3 size={22} />,
      title: 'Order Monitoring',
      desc: 'Status order dapat dipantau dari antrian sampai selesai.',
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Higienis & Aman',
      desc: 'Proses laundry dibuat terpisah agar cucian pelanggan tidak tertukar.',
    },
  ];

  const testimonials = [
    {
      name: 'Jihan Zahra',
      role: 'Pelanggan VIP',
      text: 'Order mudah dipantau, hasil cucian rapi, dan admin cepat merespons.',
    },
    {
      name: 'Budi Santoso',
      role: 'Pelanggan Reguler',
      text: 'Harga jelas dari awal dan status cucian gampang dicek.',
    },
    {
      name: 'Siti Rahma',
      role: 'Pelanggan Express',
      text: 'Layanan express sangat membantu saat butuh pakaian cepat selesai.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-sm font-black tracking-[0.22em] text-blue-400">BRIGHTWASH</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">CRM Landing V1</p>
            </div>
          </div>

          <div className="hidden items-center gap-7 text-[11px] font-black uppercase tracking-widest text-slate-400 md:flex">
            <a href="#layanan" className="hover:text-white">Layanan</a>
            <a href="#crm" className="hover:text-white">CRM</a>
            <a href="#testimoni" className="hover:text-white">Testimoni</a>
            <a href="#kontak" className="hover:text-white">Kontak</a>
          </div>

          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-black uppercase tracking-widest text-white transition hover:bg-blue-500"
          >
            Masuk
            <ArrowRight size={15} />
          </button>
        </div>
      </nav>

      <main>
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-blue-300">
                <CheckCircle2 size={14} />
                PRD V1 - Basic Landing Page
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  Landing Page CRM untuk Laundry Premium yang Rapi dan Mudah Dipantau
                </h1>
                <p className="max-w-2xl text-sm font-medium leading-7 text-slate-400 md:text-base">
                  Versi pertama fokus pada tampilan publik: pengenalan layanan,
                  ringkasan fitur CRM, daftar harga, testimoni, dan kontak utama.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => navigate('/login')}
                  className="rounded-xl bg-blue-600 px-7 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
                >
                  Mulai Order
                </button>
                <a
                  href="#layanan"
                  className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-center text-xs font-black uppercase tracking-widest text-white transition hover:bg-white/10"
                >
                  Lihat Layanan
                </a>
              </div>

              <div className="grid max-w-xl grid-cols-3 gap-3 pt-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-2xl font-black text-blue-300">4.9</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Rating</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-2xl font-black text-cyan-300">500+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Order</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-2xl font-black text-amber-300">3 Jam</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Express</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900 p-3 shadow-2xl shadow-blue-950/30">
                <img
                  src={PremiumLaundryImg}
                  alt="BrightWash laundry premium"
                  className="h-[520px] w-full rounded-[24px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/90 p-5 shadow-2xl backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                    <Clock size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-black">Monitoring order lebih jelas</p>
                    <p className="mt-1 text-xs text-slate-400">Dari masuk, proses, selesai, sampai pembayaran.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="crm" className="bg-slate-50 px-6 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">CRM Core</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Fitur Dasar yang Ditampilkan di V1</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Pada tahap pertama, landing page cukup menjelaskan nilai CRM tanpa integrasi backend kompleks.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="layanan" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Layanan & Harga</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Paket Laundry Utama</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-400">
                Data pada V1 masih statis agar tampilan dasar bisa dievaluasi dulu sebelum masuk tahap integrasi.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article key={service.name} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                  <img src={service.image} alt={service.name} className="h-44 w-full object-cover" />
                  <div className="space-y-4 p-5">
                    <div>
                      <h3 className="text-sm font-black">{service.name}</h3>
                      <p className="mt-2 min-h-16 text-xs leading-5 text-slate-400">{service.desc}</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-xs font-black text-blue-300">{service.price}</span>
                      <span className="rounded-lg bg-white/10 px-2 py-1 text-[10px] font-bold text-slate-300">{service.time}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimoni" className="bg-slate-50 px-6 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">Testimoni</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Respon Pelanggan</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={15} className="fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm leading-6 text-slate-600">"{item.text}"</p>
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-sm font-black">{item.name}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontak" className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-6 rounded-[32px] border border-white/10 bg-slate-900 p-8 md:grid-cols-3 md:p-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Kontak</p>
              <h2 className="mt-3 text-2xl font-black">Hubungi BrightWash</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">Siap menerima order dan pertanyaan pelanggan.</p>
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

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</p>
        <p className="mt-1 text-xs font-bold text-white">{value}</p>
      </div>
    </div>
  );
}
