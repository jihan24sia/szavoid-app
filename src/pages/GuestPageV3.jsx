import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Shirt,
  Sparkles,
  Star,
  Truck,
  Users,
  WashingMachine,
  Zap,
} from 'lucide-react';
import PremiumLaundryImg from '../assets/premiumlaundry.jpg';
import CuciSetrikaImg from '../assets/cucisetrika.jpg';
import BedCoverImg from '../assets/bedcover.jpg';
import CuciSepatuImg from '../assets/cucisepatu.jpg';
import JasGaunImg from '../assets/jaslaundru.jpg';

export default function GuestPageV3() {
  const navigate = useNavigate();

  const stats = [
    { value: '15K+', label: 'Pakaian dirawat' },
    { value: '3.2K+', label: 'Pelanggan aktif' },
    { value: '4.9/5', label: 'Rating layanan' },
    { value: '99%', label: 'Order tepat waktu' },
  ];

  const benefits = [
    {
      icon: <ShieldCheck size={22} />,
      title: 'Satu Nota Satu Proses',
      desc: 'Cucian pelanggan dipisahkan agar lebih higienis dan meminimalkan risiko tertukar.',
    },
    {
      icon: <Clock3 size={22} />,
      title: 'Estimasi Jelas',
      desc: 'Setiap layanan punya durasi pengerjaan yang jelas sejak order dibuat.',
    },
    {
      icon: <Sparkles size={22} />,
      title: 'Wangi Premium',
      desc: 'Menggunakan pewangi pilihan yang tahan lama tanpa membuat pakaian terasa menyengat.',
    },
    {
      icon: <HeartHandshake size={22} />,
      title: 'Admin Responsif',
      desc: 'Pelanggan bisa bertanya, request layanan, dan menerima update lewat kontak resmi.',
    },
  ];

  const services = [
    {
      name: 'Cuci Komplit',
      desc: 'Cuci, kering, dan setrika rapi untuk pakaian harian.',
      price: 'Rp 10.000/Kg',
      time: '2-3 Hari',
      badge: 'Best Seller',
      image: CuciSetrikaImg,
    },
    {
      name: 'Super Express',
      desc: 'Layanan cepat untuk kebutuhan mendadak dan jadwal padat.',
      price: 'Rp 15.000/Kg',
      time: '3 Jam',
      badge: 'Fast Track',
      image: PremiumLaundryImg,
    },
    {
      name: 'Bedcover & Blanket',
      desc: 'Perawatan cucian besar agar bersih, lembut, dan tidak bau apek.',
      price: 'Rp 25.000/Kg',
      time: '3-4 Hari',
      badge: 'Large Item',
      image: BedCoverImg,
    },
    {
      name: 'Premium Shoes Clean',
      desc: 'Treatment sepatu canvas, suede, dan leather dengan cairan khusus.',
      price: 'Rp 35.000/Psg',
      time: '5 Hari',
      badge: 'Shoes Care',
      image: CuciSepatuImg,
    },
    {
      name: 'Jas & Gaun',
      desc: 'Layanan satuan untuk pakaian formal dan kain sensitif.',
      price: 'Mulai Rp 15.000/Pcs',
      time: '3 Hari',
      badge: 'Premium',
      image: JasGaunImg,
    },
  ];

  const steps = [
    {
      icon: <MessageCircle size={22} />,
      title: 'Hubungi Admin',
      desc: 'Pilih layanan, tanyakan estimasi, atau buat order melalui akun pelanggan.',
    },
    {
      icon: <Truck size={22} />,
      title: 'Antar atau Pickup',
      desc: 'Pelanggan dapat mengantar cucian ke workshop atau mengatur jadwal pickup.',
    },
    {
      icon: <WashingMachine size={22} />,
      title: 'Diproses Rapi',
      desc: 'Cucian ditimbang, dicatat, dicuci, dikeringkan, dan disetrika sesuai layanan.',
    },
    {
      icon: <PackageCheck size={22} />,
      title: 'Siap Diambil',
      desc: 'Order selesai dikemas rapi dan pelanggan menerima informasi pengambilan.',
    },
  ];

  const testimonials = [
    {
      name: 'Jihan Zahra',
      role: 'Pelanggan VIP',
      text: 'Hasil cucian rapi, wangi, dan prosesnya jelas dari awal sampai selesai.',
    },
    {
      name: 'Budi Santoso',
      role: 'Pelanggan Reguler',
      text: 'Harga transparan, admin ramah, dan pakaian selalu selesai sesuai estimasi.',
    },
    {
      name: 'Siti Rahma',
      role: 'Pelanggan Express',
      text: 'Layanan express sangat membantu saat butuh pakaian cepat untuk kerja.',
    },
  ];

  const faqs = [
    {
      question: 'Apakah bisa order layanan express?',
      answer: 'Bisa. Layanan Super Express tersedia untuk cucian tertentu dengan estimasi selesai 3 jam.',
    },
    {
      question: 'Apakah pakaian pelanggan dicampur?',
      answer: 'Tidak. BrightWash mengutamakan proses terpisah agar cucian lebih aman dan higienis.',
    },
    {
      question: 'Bagaimana cara mulai order?',
      answer: 'Klik tombol Masuk Akun atau hubungi WhatsApp resmi BrightWash untuk dibantu admin.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 px-5 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/25">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-sm font-black tracking-[0.22em] text-blue-400">BRIGHTWASH</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Premium Laundry</p>
            </div>
          </div>

          <div className="hidden items-center gap-7 text-[11px] font-black uppercase tracking-widest text-slate-400 md:flex">
            <a href="#layanan" className="hover:text-blue-300">Layanan</a>
            <a href="#keunggulan" className="hover:text-blue-300">Keunggulan</a>
            <a href="#proses" className="hover:text-blue-300">Proses</a>
            <a href="#ulasan" className="hover:text-blue-300">Ulasan</a>
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
                Laundry Premium, Bersih, Cepat, Terpantau
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  Rawat Pakaian Anda dengan Layanan Laundry yang Lebih Rapi
                </h1>
                <p className="max-w-2xl text-sm font-medium leading-7 text-slate-400 md:text-base">
                  BrightWash membantu pelanggan mendapatkan layanan laundry premium
                  dengan pilihan paket lengkap, proses higienis, estimasi jelas, dan
                  hasil cucian yang bersih serta wangi.
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

              <div className="grid max-w-2xl grid-cols-2 gap-3 pt-2 md:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xl font-black text-blue-300">{item.value}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-blue-950/40">
                <img
                  src={PremiumLaundryImg}
                  alt="BrightWash premium laundry"
                  className="h-[520px] w-full rounded-[22px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                    <Zap size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-black">Express 3 Jam Tersedia</p>
                    <p className="mt-1 text-xs text-slate-400">Untuk kebutuhan cepat dan pakaian tertentu.</p>
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
              title="Kenapa Pelanggan Memilih BrightWash?"
              desc="Kami fokus pada kualitas cucian, kejelasan proses, dan pengalaman pelanggan yang nyaman."
              dark={false}
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
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

        <section id="layanan" className="px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Layanan & Harga"
              title="Pilih Paket Laundry Sesuai Kebutuhan"
              desc="Mulai dari cucian harian, layanan express, bedcover, sepatu, sampai pakaian premium."
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
                      <span className="text-xs font-black text-blue-300">{service.price}</span>
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
              title="Proses Laundry Dibuat Sederhana"
              desc="Alur pemesanan dibuat mudah agar pelanggan tahu apa yang terjadi pada cucian mereka."
              dark={false}
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((item, index) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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

        <section id="ulasan" className="px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Testimoni"
              title="Apa Kata Pelanggan?"
              desc="Beberapa alasan pelanggan kembali memakai layanan BrightWash."
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

        <section className="bg-slate-50 px-5 py-20 text-slate-950">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="FAQ"
              title="Pertanyaan yang Sering Ditanyakan"
              desc="Informasi singkat untuk membantu pelanggan sebelum membuat order."
              dark={false}
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {faqs.map((item) => (
                <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <HelpCircle size={20} />
                  </div>
                  <h3 className="text-sm font-black">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontak" className="px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-300">Kontak</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Siap Bantu Cucian Anda</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Hubungi BrightWash untuk informasi layanan, estimasi, pickup, atau pertanyaan seputar order.
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

      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs font-bold text-slate-500 md:flex-row">
          <p>© 2026 BRIGHTWASH PEKANBARU. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </footer>
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
