import React from 'react';
import { LayoutGrid, Wind, Clock, Droplets, FileSpreadsheet } from 'lucide-react';

// Import komponen dasar
import SectionHeader from '../components/SectionHeader';
import ContentSection from '../components/ContentSection';
import AdminProfile from '../components/AdminProfile';

// Import komponen spesifik dashboard
import ServiceCard from '../components/ServiceCard';
import OrderRow from '../components/OrderRow';
import BalanceBox from '../components/BalanceBox';
import ReportRow from '../components/ReportRow';

const DashboardAdmin = () => {
  const orders = [
    { id: '#BW-001', name: 'Jihan Zahra', package: 'Cuci Setrika', weight: '5kg', date: '05 Mei 2026', status: 'Proses' },
    { id: '#BW-002', name: 'Budi Santoso', package: 'Dry Cleaning', weight: '2kg', date: '05 Mei 2026', status: 'Selesai' },
    { id: '#BW-003', name: 'Siti Aminah', package: 'Cuci Kering', weight: '7kg', date: '04 Mei 2026', status: 'Antri' },
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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col gap-8">
      
      {/* --- AREA HEADER --- */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-4 gap-6">
        <SectionHeader
          title="BrightWash Dashboard"
          subtitle="Monitoring Operasional Laundry"
        />
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
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-4">
                <div className="w-2 h-10 bg-[#1678F3] rounded-full shadow-sm"></div>
                <h3 className="text-[#1678F3] font-black text-2xl tracking-tighter uppercase italic">
                  Antrian Pesanan
                </h3>
              </div>
              <button className="text-[10px] font-black text-white uppercase bg-[#1678F3] px-8 py-3 rounded-full shadow-lg shadow-blue-200 hover:scale-105 active:scale-95 transition-all">
                Lihat Semua
              </button>
            </div>

            <div className="space-y-4">
              {orders.map((order, i) => (
                <OrderRow key={i} order={order} />
              ))}
            </div>
          </ContentSection>
        </div>

        {/* --- SISI KANAN (4 Col) --- */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          
          {/* Card Saldo / Income */}
          <BalanceBox amount="2.450.000" />

          {/* Laporan Kilat */}
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