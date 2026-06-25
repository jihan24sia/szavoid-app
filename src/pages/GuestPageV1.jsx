import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
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
      desc: 'Paket cuci, kering, dan setrika untuk pakaian harian.',
      price: 'Rp 10.000/Kg',
      time: '2-3 Hari',
      image: CuciSetrikaImg,
    },
    {
      name: 'Express 3 Jam',
      desc: 'Layanan cepat untuk pelanggan yang butuh pakaian selesai segera.',
      price: 'Rp 15.000/Kg',
      time: '3 Jam',
      image: PremiumLaundryImg,
    },
    {
      name: 'Bedcover & Blanket',
      desc: 'Perawatan cucian besar agar tetap bersih, lembut, dan wangi.',
      price: 'Rp 25.000/Kg',
      time: '3-4 Hari',
      image: BedCoverImg,
    },
    {
      name: 'Cuci Sepatu',
      desc: 'Treatment sepatu canvas, suede, dan leather dengan cairan khusus.',
      price: 'Rp 35.000/Psg',
      time: '5 Hari',
      image: CuciSepatuImg,
    },
  ];

  const testimonials = [
    {
      name: 'Jihan Zahra',
      role: 'Pelanggan VIP',
      text: 'Cuciannya rapi, wangi, dan selesai sesuai estimasi. Adminnya juga cepat respons.',
    },
    {
      name: 'Budi Santoso',
      role: 'Pelanggan Reguler',
      text: 'Harga jelas dari awal dan hasilnya konsisten. Cocok untuk cucian mingguan.',
    },
    {
      name: 'Siti Rahma',
      role: 'Pelanggan Express',
      text: 'Layanan express sangat membantu saat butuh pakaian cepat untuk kerja.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 px-5 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-sm font-black tracking-[0.22em] text-blue-400">BRIGHTWASH</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Landing Page V1</p>
            </div>
          </div>

          <div className="hidden items-center gap-7 text-[11px] font-black uppercase tracking-widest text-slate-400 md:flex">
            <a href="#layanan" className="hover:text-blue-300">Layanan</a>
            <a href="#testimoni" className="hover:text-blue-300">Testimoni</a>
            <a href="#kontak" className="hover:text-blue-300">Kontak</a>
          </div>

          <button
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-black uppercase tracking-widest text-white transition hover:bg-blue-500"
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
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-blue-300">
                <CheckCircle2 size={14} />
                PRD V1 - Landing Page Dasar
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  Laundry Premium yang Bersih, Rapi, dan Mudah Dipesan
                </h1>
                <p className="max-w-2xl text-sm font-medium leading-7 text-slate-400 md:text-base">
                  BrightWash menyediakan layanan laundry harian, express, bedcover,
                  dan sepatu dengan harga jelas, proses higienis, serta hasil cucian
                  yang wangi dan rapi.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => navigate('/login')}
                  className="rounded-xl bg-blue-600 px-7 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
                >
                  Order Sekarang
                </button>
                <a
                  href="#layanan"
                  className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-center text-xs font-black uppercase tracking-widest text-white transition hover:border-blue-400/40 hover:bg-white/10"
                >
                  Lihat Layanan
                </a>
              </div>

              <div className="grid max-w-xl grid-cols-3 gap-3 pt-2">
                <StatCard value="4.9/5" label="Rating" />
                <StatCard value="500+" label="Order" />
                <StatCard value="3 Jam" label="Express" />
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-blue-950/40">
                <img
                  src={PremiumLaundryImg}
                  alt="BrightWash premium laundry"
                  className="h-[500px] w-full rounded-[22px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-black">Garansi proses higienis</p>
                    <p className="mt-1 text-xs text-slate-400">Cucian diproses rapi dan tidak dicampur sembarangan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="layanan" className="bg-slate-50 px-5 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Layanan & Harga"
              title="Paket Laundry Utama"
              desc="PRD V1 fokus menampilkan informasi layanan yang paling sering dibutuhkan pelanggan."
              dark={false}
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article key={service.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <img src={service.image} alt={service.name} className="h-44 w-full object-cover" />
                  <div className="space-y-4 p-5">
                    <div>
                      <h3 className="text-sm font-black">{service.name}</h3>
                      <p className="mt-2 min-h-16 text-xs leading-5 text-slate-600">{service.desc}</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs font-black text-blue-600">{service.price}</span>
                      <span className="rounded-lg bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500">{service.time}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            <FeatureCard
              icon={<Sparkles size={22} />}
              title="Bersih dan Wangi"
              desc="Pakaian dicuci dengan proses yang menjaga kenyamanan dan kualitas hasil."
            />
            <FeatureCard
              icon={<Clock size={22} />}
              title="Estimasi Jelas"
              desc="Setiap layanan memiliki durasi pengerjaan agar pelanggan lebih mudah menunggu."
            />
            <FeatureCard
              icon={<MessageCircle size={22} />}
              title="Kontak Mudah"
              desc="Informasi WhatsApp, email, dan alamat tersedia jelas untuk pelanggan."
            />
          </div>
        </section>

        <section id="testimoni" className="bg-slate-50 px-5 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Testimoni"
              title="Respon Pelanggan"
              desc="Review singkat untuk membangun kepercayaan calon pelanggan."
              dark={false}
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
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

        <section id="kontak" className="px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-300">Kontak</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Hubungi BrightWash</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Hubungi admin untuk informasi layanan, estimasi, pickup, atau bantuan order.
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

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xl font-black text-blue-300">{value}</p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</p>
    </div>
  );
}

function SectionTitle({ eyebrow, title, desc, dark = true }) {
  return (
    <div className="max-w-2xl">
      <p className={`text-[10px] font-black uppercase tracking-widest ${dark ? 'text-blue-300' : 'text-blue-600'}`}>
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
      <p className={`mt-3 text-sm leading-6 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
        {icon}
      </div>
      <h3 className="text-base font-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</p>
        <p className="mt-1 text-xs font-bold text-white">{value}</p>
      </div>
    </div>
  );
}
