import React, { useState, useEffect } from 'react';
import { LayoutGrid, Shirt, Zap, Droplets, FileSpreadsheet, Sparkles, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // 1. PASTIKAN IMPOR SUPABASE KAMU SUDAH BENAR

// Import komponen dasar bawaan project
import SectionHeader from '../components/SectionHeader';
import ContentSection from '../components/ContentSection';
import AdminProfile from '../components/AdminProfile';

// Import komponen spesifik dashboard bawaan project
import ServiceCard from '../components/ServiceCard';
import OrderRow from '../components/OrderRow';
import BalanceBox from '../components/BalanceBox';
import ReportRow from '../components/ReportRow';

// --- IMPORT KOMPONEN UI ---
import SupportTicketModal from '../components/ui/SupportTicketModal';
import SopSteps from '../components/ui/SopSteps';
import ActionTooltip from '../components/ui/ActionTooltip';

const DashboardAdmin = () => {
  const navigate = useNavigate();
  
  // Status Buka/Tutup Memo Toko (True/False)
  const [showMemo, setShowMemo] = useState(false);

  // --- STATE REAL-TIME SUPABASE ---
  const [dbOrders, setDbOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. AMBIL DATA DARI SUPABASE & PASANG REALTIME SUBSCRIPTION
  const fetchAdminDashboardData = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setDbOrders(data);
      }
    } catch (err) {
      console.error("Gagal mengambil data admin:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminDashboardData();

    // 🌟 SETUP LIVE TRACKING SUPABASE KILAT 🌟
    // Setiap ada baris data masuk, update, atau hapus di tabel 'orders', dashboard otomatis refresh angkanya!
    const channel = supabase
      .channel('admin-live-orders')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'orders' 
      }, () => {
        fetchAdminDashboardData(); // Tarik ulang data otomatis kalau ada orderan baru masuk
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // 3. KALKULASI LAPORAN SECARA OTOMATIS (DARI DATABASE)
  const totalOrdersCount = dbOrders.length;
  const queueCount = dbOrders.filter(o => o.status === 'Antri').length;
  // Menghitung status 'Cuci', 'Pengeringan', atau 'Setrika' sebagai bagian dari "Proses"
  const processingCount = dbOrders.filter(o => ['Cuci', 'Pengeringan', 'Setrika', 'Proses'].includes(o.status)).length;
  const completedCount = dbOrders.filter(o => ['Selesai', 'Diambil'].includes(o.status)).length;

  // Hitung Pendapatan Real-time dari akumulasi total_price orderan yang masuk// INI YANG BENAR: Dipaksa jadi angka murni pakai parseInt() dulu
const totalRevenue = dbOrders.reduce((acc, curr) => {
  const price = typeof curr.total_price === 'string' 
    ? parseInt(curr.total_price.replace(/[^0-9]/g, '')) // Hapus karakter aneh jika ada, lalu ubah ke angka
    : (curr.total_price || 0);
  return acc + (isNaN(price) ? 0 : price);
}, 0);

  // Ambil 5 antrian teratas saja untuk ditampilkan di list dashboard admin biar rapi
  const displayedOrders = dbOrders.slice(0, 5).map(order => ({
    id: `#${order.id.substring(0, 6).toUpperCase()}`,
    name: order.customer_name || 'No Name',
    package: order.service_name || 'Custom Paket',
    weight: `${order.qty || 0}kg`,
    date: order.created_at ? new Date(order.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Hari Ini',
    status: order.status || 'Antri',
    initial: order.customer_name ? order.customer_name.charAt(0).toUpperCase() : 'U',
    color: order.status === 'Selesai' ? 'bg-emerald-500' : order.status === 'Antri' ? 'bg-amber-500' : 'bg-blue-600'
  }));

  const services = [
    { name: 'Cuci Komplit', icon: <Droplets size={24} />, color: 'bg-blue-600' },
    { name: 'Setrika Saja', icon: <Shirt size={24} />, color: 'bg-blue-600' },
    { name: 'Express 3h', icon: <Zap size={24} />, color: 'bg-blue-600' },
    { 
      name: 'Lainnya', 
      icon: <LayoutGrid size={24} />, 
      color: 'bg-slate-700',
      onClick: () => navigate('/services')
    },
  ];

  // Menggunakan data hasil hitungan Supabase ke format Laporan Kilat
  const reports = [
    { label: 'Total Order', val: totalOrdersCount.toLocaleString('id-ID'), color: 'text-blue-600' },
    { label: 'Diterima / Antri', val: queueCount.toLocaleString('id-ID'), color: 'text-sky-600' },
    { label: 'Proses Cuci', val: processingCount.toLocaleString('id-ID'), color: 'text-amber-500' },
    { label: 'Selesai', val: completedCount.toLocaleString('id-ID'), color: 'text-emerald-600' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-400 gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-slate-800 border-t-blue-500 animate-spin"></div>
        <p className="text-xs font-black tracking-widest text-slate-200 uppercase animate-pulse">Sinkronisasi Database BrightWash...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased p-2 flex flex-col gap-8">

      {/* --- 1. AREA HEADER --- */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-3xl border border-slate-100 shadow-sm gap-6">
        <SectionHeader title="BrightWash Dashboard" subtitle="Monitoring Operasional Laundry" />
        <AdminProfile name="Jihan" />
      </header>

      {/* --- 2. INTERACTIVE MEMO INTERNAL BOX --- */}
      <div className="w-full bg-blue-50/60 border border-blue-100 rounded-2xl p-5 shadow-sm transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shadow-inner">
              <Sparkles size={18} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Memo Operasional BrightWash Hari Ini</h4>
              <p className="text-xs text-slate-500 mt-0.5">Klik tombol di samping untuk membaca detail pengumuman sistem.</p>
            </div>
          </div>
          
          <button 
            onClick={() => setShowMemo(!showMemo)} 
            className={`text-xs font-extrabold uppercase tracking-wide px-5 py-2.5 rounded-xl border transition-all ${
              showMemo 
                ? 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50' 
                : 'bg-blue-600 text-white border-blue-700 hover:bg-blue-700 shadow-sm'
            }`}
          >
            {showMemo ? 'Tutup Catatan' : 'Buka Catatan'}
          </button>
        </div>

        {/* REAKTIF MEMO LOGIC */}
        {showMemo && (
          <div className="mt-4 pt-4 border-t border-blue-200/60 border-dashed text-xs text-slate-700 space-y-2 bg-white p-4 rounded-xl shadow-inner animate-fadeIn">
            <div className="flex items-center gap-1.5 font-bold text-amber-600 text-[11px] uppercase tracking-wider">
              <AlertCircle size={13} /> PENGUMUMAN WORKSHOP:
            </div>
            <ul className="space-y-1 pl-4 list-disc text-slate-600 font-medium">
              <li>Mesin Cuci nomor <span className="font-bold text-slate-900">#03</span> sedang <i>maintenance</i> pembersihan tabung hingga pukul 16.00 WIB.</li>
              <li>Pastikan stok deterjen cair sisa wangi Lavender di gudang dicek ulang malam ini sebelum tutup toko.</li>
            </ul>
          </div>
        )}
      </div>

      {/* --- 3. MAIN GRID SYSTEM --- */}
      <div className="grid grid-cols-12 gap-8">

        {/* --- SISI KIRI: ANTRIAN & ALUR (8 Columns) --- */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">

          {/* Grid Kategori Layanan */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((item, i) => (
              <ServiceCard key={i} {...item} />
            ))}
          </div>

          {/* List Pesanan Utama */}
          <ContentSection className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-7 bg-blue-600 rounded-full"></div>
                <div>
                  <h3 className="text-slate-900 font-extrabold text-lg tracking-tight">Antrian Pesanan (Live)</h3>
                  <p className="text-slate-400 text-xs font-medium">Daftar cucian masuk dari database Supabase yang terupdate otomatis.</p>
                </div>
              </div>

              <SupportTicketModal />
            </div>

            {/* SOP STEPS COMPONENT */}
            <div className="mb-8">
              <SopSteps />
            </div>

            {/* List Baris Orderan */}
            <div className="space-y-3">
              <div className="flex justify-between items-center px-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
                <span>5 Antrian Terbaru Masuk</span>

                <ActionTooltip text="Membuka riwayat log seluruh data antrian secara lengkap">
                  <button
                    className="text-[10px] font-extrabold text-blue-600 uppercase bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg border border-blue-200 transition-colors"
                    onClick={() => alert("Menuju ke halaman seluruh riwayat antrian...")}
                  >
                    Lihat Semua ({dbOrders.length})
                  </button>
                </ActionTooltip>
              </div>

              <div className="divide-y divide-slate-100 bg-slate-50/50 rounded-2xl border border-slate-100 p-2 space-y-2">
                {displayedOrders.length === 0 ? (
                  <p className="text-xs text-center text-slate-400 py-6 font-bold">Belum ada orderan masuk di database.</p>
                ) : (
                  displayedOrders.map((order, i) => (
                    <OrderRow key={i} order={order} />
                  ))
                )}
              </div>
            </div>
          </ContentSection>
        </div>

        {/* --- SISI KANAN: FINANSIAL & LAPORAN (4 Columns) --- */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          {/* Nilai nominal uang sekarang diambil dinamis dari total pendapatan orderan */}
        <BalanceBox amount={`Rp ${totalRevenue.toLocaleString('id-ID')}`} />

          <ContentSection className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider">
                  Laporan Kilat
                </h3>
                <p className="text-slate-400 text-[11px] font-medium mt-0.5">Rangkuman performa harian.</p>
              </div>
              <div className="p-3 bg-slate-50 text-slate-600 rounded-xl border border-slate-200">
                <FileSpreadsheet size={18} />
              </div>
            </div>

            <div className="space-y-6">
              {reports.map((stat, i) => (
                <ReportRow key={i} {...stat} />
              ))}
            </div>
          </ContentSection>
        </div>

      </div>
    </div>
  );
};

export default DashboardAdmin;