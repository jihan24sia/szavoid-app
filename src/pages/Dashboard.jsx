import React from 'react';
import { LayoutGrid, Wind, Clock, Droplets, FileSpreadsheet } from 'lucide-react';

// Import komponen dasar bawaan project
import SectionHeader from '../components/SectionHeader';
import ContentSection from '../components/ContentSection';
import AdminProfile from '../components/AdminProfile';

// Import komponen spesifik dashboard bawaan project
import ServiceCard from '../components/ServiceCard';
import OrderRow from '../components/OrderRow';
import BalanceBox from '../components/BalanceBox';
import ReportRow from '../components/ReportRow';

// --- IMPORT KOMPONEN BARU DARI FOLDER COMPONENTS/UI ---
import SupportTicketModal from '../components/ui/SupportTicketModal';
import SopSteps from '../components/ui/SopSteps';
import ActionTooltip from '../components/ui/ActionTooltip';

const DashboardAdmin = () => {
  // Properti initial dan color dikembalikan agar OrderRow tidak crash!
  const orders = [
    { id: '#BW-001', name: 'Jihan Zahra', package: 'Cuci Setrika', weight: '5kg', date: '05 Mei 2026', status: 'Proses', initial: 'JZ', color: 'bg-blue-600' },
    { id: '#BW-002', name: 'Budi Santoso', package: 'Dry Cleaning', weight: '2kg', date: '05 Mei 2026', status: 'Selesai', initial: 'BS', color: 'bg-sky-500' },
    { id: '#BW-003', name: 'Siti Aminah', package: 'Cuci Kering', weight: '7kg', date: '04 Mei 2026', status: 'Antri', initial: 'SA', color: 'bg-indigo-500' },
  ];

  const services = [
    { name: 'Cuci Kering', icon: <Droplets size={26} />, color: 'bg-[#64A6F9]' },
    { name: 'Cuci Setrika', icon: <Wind size={26} />, color: 'bg-[#64A6F9]' },
    { name: 'Express 6h', icon: <Clock size={26} />, color: 'bg-[#64A6F9]' },
    { name: 'Lainnya', icon: <LayoutGrid size={26} />, color: 'bg-[#4DBAE9]' },
  ];

  const reports = [
    { label: 'Total Order', val: '1.240', color: 'text-[#1678F3]' },
    { label: 'Diterima', val: '850', color: 'text-[#4DBAE9]' },
    { label: 'Proses Cuci', val: '320', color: 'text-orange-400' },
    { label: 'Selesai', val: '1.070', color: 'text-green-500' },
  ];

  return (
    <div className="flex flex-col gap-8">

      {/* --- AREA HEADER --- */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-4 gap-6">
        <SectionHeader title="BrightWash Dashboard" subtitle="Monitoring Operasional Laundry" />
        <AdminProfile name="Jihan" />
      </header>

      {/* --- MAIN GRID --- */}
      <div className="grid grid-cols-12 gap-8">

        {/* --- SISI KIRI (8 Col) --- */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">

          {/* Grid Kategori Layanan */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((item, i) => (
              <ServiceCard key={i} {...item} />
            ))}
          </div>

          {/* List Pesanan (Main Table Area) */}
          <ContentSection>
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-10 bg-[#1678F3] rounded-full shadow-sm"></div>
                <h3 className="text-[#1678F3] font-black text-2xl tracking-tighter uppercase italic">
                  Antrian Pesanan
                </h3>
              </div>

              {/* IMPLEMENTASI KOMPONEN 1: MODAL */}
              <SupportTicketModal />
            </div>

            {/* IMPLEMENTASI KOMPONEN 2: STEPS */}
            <SopSteps />

            {/* List Baris Orderan Bawaan Project */}
            <div className="space-y-4">
              <div className="flex justify-between items-center px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                <span>Detail Pelanggan</span>

                {/* IMPLEMENTASI KOMPONEN 3: TOOLTIP */}
                <ActionTooltip text="Membuka riwayat log seluruh data antrian secara lengkap">
                  {/* GANTI AREA TOMBOL LIHAT SEMUA JADI SEPERTI INI */}
                  {/* --- AREA TOMBOL LIHAT SEMUA (VERSI FIX & AMAN DIKLIK) --- */}
                  <div className="tooltip tooltip-left" data-tip="Membuka riwayat log seluruh data antrian secara lengkap">
                    <button
                      className="text-[10px] font-black text-white uppercase bg-[#1678F3] px-6 py-2.5 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all"
                      onClick={() => alert("Menuju ke halaman seluruh riwayat antrian...")}
                    >
                      Lihat Semua
                    </button>
                  </div>
                </ActionTooltip>
              </div>

              {orders.map((order, i) => (
                <OrderRow key={i} order={order} />
              ))}
            </div>
          </ContentSection>
        </div>

        {/* --- SISI KANAN (4 Col) --- */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          <BalanceBox amount="2.450.000" />

          <ContentSection className="flex-1">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.4em]">
                Laporan Kilat
              </h3>
              <div className="p-3 bg-blue-50 rounded-2xl text-[#1678F3]">
                <FileSpreadsheet size={22} />
              </div>
            </div>

            <div className="space-y-8">
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