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

  const pillars = [
    {
      title: 'Care',
      desc: 'Pakaian diperlakukan sesuai jenis bahan dan kebutuhan layanan.',
    },
    {
      title: 'Clarity',
      desc: 'Harga, estimasi, kontak, dan alur order dibuat mudah dipahami.',
    },
    {
      title: 'Trust',
      desc: 'Review, proses higienis, dan layanan responsif membangun rasa aman.',
    },
  ];

  const qualityChecks = [
    'Pencatatan nota dan jenis layanan sebelum proses',
    'Pemisahan cucian berdasarkan order pelanggan',
    'Pemeriksaan noda dan area pakaian yang butuh perhatian',
    'Pengeringan dan finishing sesuai jenis bahan',
    'Packing rapi sebelum order diserahkan ke pelanggan',
  ];

  const memberBenefits = [
    {
      title: 'Riwayat Order',
      desc: 'Pelanggan lebih mudah melihat kebiasaan layanan dan repeat order.',
    },
    {
      title: 'Prioritas Express',
      desc: 'Member aktif dapat diarahkan ke layanan cepat saat kuota tersedia.',
    },
    {
      title: 'Preferensi Layanan',
      desc: 'Catatan parfum, alergi, dan instruksi khusus bisa dibantu admin.',
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
    {
      name: 'Mega Utami',
      role: 'Pelanggan Rumah Tangga',
      text: 'Bedcover pulang dalam kondisi wangi dan lembut. Tidak bau apek walau cuaca sering mendung.',
    },
    {
      name: 'Hendra Wijaya',
      role: 'Pelanggan Kantoran',
      text: 'Kemeja kerja jadi rapi dan nyaman dipakai. Estimasi selesainya juga jelas.',
    },
    {
      name: 'Dina Mariana',
      role: 'Pelanggan Premium',
      text: 'Gaun dan kebaya saya ditangani hati-hati. Hasilnya bersih dan tetap aman.',
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
    {
      question: 'Apakah tersedia layanan pickup?',
      answer: 'Tersedia untuk area tertentu di sekitar workshop. Hubungi admin untuk cek jadwal dan area pickup.',
    },
    {
      question: 'Apakah ada layanan pakaian premium?',
      answer: 'Ada. Jas, gaun, kebaya, dan pakaian berbahan sensitif dapat menggunakan layanan premium satuan.',
    },
    {
      question: 'Bagaimana jika ada instruksi khusus?',
      answer: 'Pelanggan dapat menyampaikan catatan ke admin, seperti pilihan parfum, noda tertentu, atau request packing.',
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
                  Laundry Premium yang Siap Melayani Kebutuhan Harian sampai Pakaian Spesial
                </h1>
                <p className="max-w-2xl text-sm font-medium leading-7 text-slate-400 md:text-base">
                  BrightWash membantu pelanggan mendapatkan layanan laundry premium
                  dengan pilihan paket lengkap, proses higienis, estimasi jelas, dan
                  hasil cucian yang bersih, rapi, serta wangi tahan lama.
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

        <section className="px-5 pb-12">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[28px] border border-blue-400/20 bg-blue-500/10 p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h2 className="text-lg font-black">Garansi Higienitas dan Kerapian</h2>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                      BrightWash menjaga proses pencatatan, pemisahan cucian, dan finishing agar pakaian pelanggan aman,
                      bersih, wangi, dan siap dipakai kembali.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/login')}
                  className="rounded-xl bg-blue-600 px-6 py-3 text-xs font-black uppercase tracking-widest text-white transition hover:bg-blue-500"
                >
                  Buat Order
                </button>
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

        <section className="px-5 py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src={CuciSetrikaImg}
                alt="Proses cuci setrika BrightWash"
                className="h-72 w-full rounded-3xl object-cover"
              />
              <div className="space-y-5">
                <img
                  src={BedCoverImg}
                  alt="Perawatan bedcover BrightWash"
                  className="h-36 w-full rounded-3xl object-cover"
                />
                <img
                  src={CuciSepatuImg}
                  alt="Perawatan sepatu BrightWash"
                  className="h-36 w-full rounded-3xl object-cover"
                />
              </div>
            </div>

            <div>
              <SectionTitle
                eyebrow="Tentang BrightWash"
                title="Bukan Sekadar Mencuci, tapi Merawat Pakaian Pelanggan"
                desc="BrightWash dirancang untuk pelanggan yang ingin layanan laundry lebih jelas, rapi, dan bisa dipercaya. Setiap layanan dibuat dengan informasi harga, estimasi, dan proses yang mudah dipahami."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <MiniMetric value="07.00" label="Mulai Operasional" />
                <MiniMetric value="21.00" label="Tutup Layanan" />
                <MiniMetric value="6+" label="Paket Layanan" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionTitle
              eyebrow="Prinsip Layanan"
              title="Tiga Pilar Pengalaman BrightWash"
              desc="V3 menampilkan landing page yang lebih matang: bukan hanya daftar harga, tapi juga alasan pelanggan percaya."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {pillars.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-3xl font-black text-blue-300">{item.title}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{item.desc}</p>
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

        <section className="bg-slate-50 px-5 py-20 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionTitle
              eyebrow="Quality Control"
              title="Setiap Order Melewati Pemeriksaan Dasar"
              desc="V3 memperkuat kepercayaan pelanggan dengan menjelaskan proses kerja secara sederhana dan tidak teknis."
              dark={false}
            />

            <div className="grid gap-4">
              {qualityChecks.map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-black text-blue-600">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm font-bold text-slate-700">{item}</p>
                </div>
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

        <section className="px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionTitle
                eyebrow="Member Experience"
                title="Lebih Nyaman untuk Pelanggan yang Sering Laundry"
                desc="Pelanggan tetap bisa mendapatkan pengalaman yang lebih personal melalui catatan layanan, riwayat order, dan komunikasi admin."
              />

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {memberBenefits.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <h3 className="text-base font-black text-blue-300">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                  <Users size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-black">Cocok untuk Rutinitas Mingguan</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    BrightWash membantu mahasiswa, pekerja, keluarga, dan pelanggan premium yang ingin cucian selesai
                    tanpa harus mengulang penjelasan kebutuhan setiap kali order.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <MiniDark value="VIP" label="Segmentasi" />
                <MiniDark value="Notes" label="Catatan" />
                <MiniDark value="Repeat" label="Order Ulang" />
                <MiniDark value="Fast" label="Prioritas" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-20 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionTitle
              eyebrow="Pickup Area"
              title="Antar Langsung atau Atur Pickup dengan Admin"
              desc="Pelanggan dapat mengantar cucian ke workshop atau menanyakan layanan pickup untuk area sekitar."
              dark={false}
            />

            <div className="grid gap-5 md:grid-cols-3">
              <CoverageCard title="Marpoyan" desc="Area sekitar workshop utama BrightWash." />
              <CoverageCard title="Arifin Ahmad" desc="Cocok untuk pelanggan kantor dan rumah sekitar." />
              <CoverageCard title="Pekanbaru Kota" desc="Cek jadwal pickup terlebih dahulu melalui admin." />
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

        <section className="px-5 py-20">
          <div className="mx-auto max-w-7xl rounded-[32px] border border-blue-400/20 bg-blue-600 p-8 text-white shadow-2xl shadow-blue-950/30 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-100">Ready to Order</p>
                <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
                  Cucian Menumpuk? Serahkan ke BrightWash Hari Ini
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100">
                  Pilih paket, hubungi admin, dan nikmati layanan laundry yang rapi, jelas, dan nyaman dari awal sampai selesai.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <button
                  onClick={() => navigate('/login')}
                  className="rounded-xl bg-white px-7 py-4 text-xs font-black uppercase tracking-widest text-blue-700 transition hover:bg-blue-50"
                >
                  Order Sekarang
                </button>
                <a
                  href="#kontak"
                  className="rounded-xl border border-white/30 px-7 py-4 text-center text-xs font-black uppercase tracking-widest text-white transition hover:bg-white/10"
                >
                  Hubungi Admin
                </a>
              </div>
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

function MiniMetric({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-2xl font-black text-blue-300">{value}</p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</p>
    </div>
  );
}

function MiniDark({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
      <p className="text-lg font-black text-blue-300">{value}</p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</p>
    </div>
  );
}

function CoverageCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <MapPin size={21} />
      </div>
      <h3 className="text-base font-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
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
