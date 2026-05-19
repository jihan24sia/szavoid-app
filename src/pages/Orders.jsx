import React, { useState } from 'react';
import { ClipboardList, Filter, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

// Import All Components
import StatusSummaryCard from '../components/StatusSummaryCard';
import SearchBar from '../components/SearchBar';
import OrderStatusBadge from '../components/OrderStatusBadge';
import EmptyState from '../components/EmptyState';
import SectionHeader from '../components/SectionHeader';
import DataTable from '../components/DataTable';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';

const Orders = ({ orders = [] }) => { 
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders.filter(o => 
    o.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
    o.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: 'Antrean', count: orders.filter(o => o.status === 'Antri').length, icon: <Clock size={22}/>, color: 'text-orange-400', bg: 'bg-orange-50' },
    { label: 'Proses', count: orders.filter(o => o.status === 'Proses').length, icon: <AlertCircle size={22}/>, color: 'text-[#1678F3]', bg: 'bg-blue-50' },
    { label: 'Selesai', count: orders.filter(o => o.status === 'Selesai').length, icon: <CheckCircle2 size={22}/>, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'Total', count: orders.length, icon: <ClipboardList size={22}/>, color: 'text-[#4DBAE9]', bg: 'bg-cyan-50' },
  ];

  const columns = [
    { label: 'Order ID' },
    { label: 'Pelanggan' },
    { label: 'Status', center: true },
    { label: 'Total' }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-700 h-full flex flex-col gap-8">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <SectionHeader title="Order Management" subtitle="Pantau & Update Status Cucian" />
        <div className="flex gap-4 w-full md:w-auto">
          <SearchBar 
            placeholder="Cari ID Pelanggan / Nama..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-white p-4 rounded-[22px] text-[#1678F3] shadow-lg hover:scale-105 transition-all">
            <Filter size={22} />
          </button>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatusSummaryCard key={i} {...stat} />
        ))}
      </div>

      {/* TABLE SECTION */}
      <DataTable>
        <TableHeader columns={columns} />
        <tbody className="divide-y divide-blue-50">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <td className="px-10 py-6 text-[11px] font-black text-[#1678F3]">
                   <span className="bg-blue-50 px-3 py-1 rounded-lg">{order.id}</span>
                </td>
                <td className="px-10 py-6">
                  <p className="text-sm font-black text-[#1678F3] uppercase italic">{order.customer}</p>
                </td>
                <td className="px-10 py-6 text-center">
                  <OrderStatusBadge status={order.status} />
                </td>
                <td className="px-10 py-6 font-black text-[#1678F3] italic">{order.total}</td>
              </TableRow>
            ))
          ) : (
            <tr>
              <td colSpan="5"><EmptyState message="Ups! Orderan tidak ketemu..." /></td>
            </tr>
          )}
        </tbody>
      </DataTable>
    </div>
  );
};

export default Orders;