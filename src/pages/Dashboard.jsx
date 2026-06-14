import React, { useState } from 'react';
import { LayoutGrid, Shirt, Zap, Droplets, FileSpreadsheet, Sparkles, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate

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
  const navigate = useNavigate(); // 2. Inisialisasi hook navigate
  
  // Status Buka/Tutup Memo Toko (True/False)
  const [showMemo, setShowMemo] = useState(false);

  const orders = [
    { id: '#BW-001', name: 'Jihan Zahra', package: 'Cuci Setrika', weight: '5kg', date: '05 Mei 2026', status: 'Proses', initial: 'JZ', color: 'bg-blue-600' },
    { id: '#BW-002', name: 'Budi Santoso', package: 'Dry Cleaning', weight: '2kg', date: '05 Mei 2026', status: 'Selesai', initial: 'BS', color: 'bg-emerald-500' },
    { id: '#BW-003', name: 'Siti Aminah', package: 'Cuci Kering', weight: '7kg', date: '04 Mei 2026', status: 'Antri', initial: 'SA', color: 'bg-amber-500' },
  ];

  // 3. Menambahkan properti action (onClick) khusus pada card "Lainnya"
  const services = [
    { name: 'Cuci Komplit', icon: <Droplets size={24} />, color: 'bg-blue-600' },
    { name: 'Setrika Saja', icon: <Shirt size={24} />, color: 'bg-blue-600' },
    { name: 'Express 3h', icon: <Zap size={24} />, color: 'bg-blue-600' },
    { 
      name: 'Lainnya', 
      icon: <LayoutGrid size={24} />, 
      color: 'bg-slate-700',
      onClick: () => navigate('/orders/new') // Navigasi ke halaman /services
    },
  ];

  const reports = [
    { label: 'Total Order', val: '1.240', color: 'text-blue-600' },
    { label: 'Diterima', val: '850', color: 'text-sky-600' },
    { label: 'Proses Cuci', val: '320', color: 'text-amber-500' },
    { label: 'Selesai', val: '1.070', color: 'text-emerald-600' },
  ];

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
              // 4. Meneruskan properti onClick ke ServiceCard
              <ServiceCard key={i} {...item} />
            ))}
          </div>

          {/* List Pesanan Utama */}
          <ContentSection className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-7 bg-blue-600 rounded-full"></div>
                <div>
                  <h3 className="text-slate-900 font-extrabold text-lg tracking-tight">Antrian Pesanan</h3>
                  <p className="text-slate-400 text-xs font-medium">Daftar cucian masuk yang sedang berada dalam sistem ritme kerja.</p>
                </div>
              </div>

              {/* MODAL TICKET */}
              <SupportTicketModal />
            </div>

            {/* SOP STEPS COMPONENT */}
            <div className="mb-8">
              <SopSteps />
            </div>

            {/* List Baris Orderan */}
            <div className="space-y-3">
              <div className="flex justify-between items-center px-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
                <span>Detail Antrian Pelanggan</span>

                {/* ACTION TOOLTIP */}
                <ActionTooltip text="Membuka riwayat log seluruh data antrian secara lengkap">
                  <button
                    className="text-[10px] font-extrabold text-blue-600 uppercase bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg border border-blue-200 transition-colors"
                    onClick={() => alert("Menuju ke halaman seluruh riwayat antrian...")}
                  >
                    Lihat Semua
                  </button>
                </ActionTooltip>
              </div>

              <div className="divide-y divide-slate-100 bg-slate-50/50 rounded-2xl border border-slate-100 p-2 space-y-2">
                {orders.map((order, i) => (
                  <OrderRow key={i} order={order} />
                ))}
              </div>
            </div>
          </ContentSection>
        </div>

        {/* --- SISI KANAN: FINANSIAL & LAPORAN (4 Columns) --- */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          <BalanceBox amount="2.450.000" />

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