import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { ClipboardList, Filter, Clock, CheckCircle2, AlertCircle, Search, RefreshCw, Shirt } from 'lucide-react';

// Import All Components
import OrderStatusBadge from '../components/OrderStatusBadge';
import EmptyState from '../components/EmptyState';
import SectionHeader from '../components/SectionHeader';
import DataTable from '../components/DataTable';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Semua");
  const [dbOrders, setDbOrders] = useState([]);
  const [displayOrders, setDisplayOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null); // Efek loading saat update status

  // 1. Ambil data secara real-time dari database Supabase
  const fetchAllOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setDbOrders(data);
    } catch (err) {
      console.error("Gagal mengambil data admin orders:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🌟 FUNGSI UPDATE STATUS LANGSUNG KE SUPABASE 🌟
  const handleStatusChange = async (orderId, newStatus) => {
    setUpdatingId(orderId);
    try {
      const { error } = await supabase
        .from('orders')
        .update({ status: newStatus })
        .eq('id', orderId);

      if (error) throw error;

      // Catatan: fetchAllOrders() tidak wajib dipanggil manual di sini jika real-time subscription aktif,
      // tapi dipanggil untuk fallback berjaga-jaga agar state lokal langsung sinkron.
      fetchAllOrders();
    } catch (err) {
      alert("Gagal memperbarui status: " + err.message);
    } finally {
      setUpdatingId(null);
    }
  };

  useEffect(() => {
    fetchAllOrders();

    // Buat listener realtime agar jika member/admin klik order, halaman langsung terupdate otomatis
    const orderSubscription = supabase
      .channel('public:orders_manage')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, () => {
        fetchAllOrders();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(orderSubscription);
    };
  }, []);

  // 2. Filter data berdasarkan input search bar & status card
  useEffect(() => {
    const hasilFilter = dbOrders.filter(o => {
      const customerName = o.customer_name || "";
      const orderId = o.id || "";
      const perfume = o.perfume || "";

      const matchText = customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        perfume.toLowerCase().includes(searchTerm.toLowerCase());

      const matchStatus = selectedStatus === "Semua" || o.status === selectedStatus;

      return matchText && matchStatus;
    });

    setDisplayOrders(hasilFilter);
  }, [searchTerm, selectedStatus, dbOrders]);

  const stats = [
    { label: 'Antrean', count: dbOrders.filter(o => o.status === 'Antri').length, icon: <Clock size={20} />, color: 'text-amber-500', bg: 'bg-amber-50/60 border border-amber-100', statusKey: 'Antri' },
    { label: 'Proses', count: dbOrders.filter(o => ['Cuci', 'Proses', 'Setrika'].includes(o.status)).length, icon: <AlertCircle size={20} />, color: 'text-blue-600', bg: 'bg-blue-50/60 border border-blue-100', statusKey: 'Proses' },
    { label: 'Selesai', count: dbOrders.filter(o => o.status === 'Selesai').length, icon: <CheckCircle2 size={20} />, color: 'text-emerald-500', bg: 'bg-emerald-50/60 border border-emerald-100', statusKey: 'Selesai' },
    { label: 'Total Order', count: dbOrders.length, icon: <ClipboardList size={20} />, color: 'text-slate-700', bg: 'bg-slate-50/80 border border-slate-100', statusKey: 'Semua' },
  ];

  // Menambahkan kolom spesifikasi parfum dan aksi update
  const columns = [
    { label: 'Order ID' },
    { label: 'Detail Pelanggan & Preferensi' },
    { label: 'Status Sekarang' },
    { label: 'Aksi Kontrol Admin' },
    { label: 'Total Biaya' }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center text-slate-500 gap-2 font-bold text-sm">
        <RefreshCw className="animate-spin text-blue-600 w-5 h-5" /> Memuat Seluruh Antrean Toko...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased p-2 flex flex-col gap-8">

      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
        <SectionHeader
          title="Order Management"
          subtitle="Pantau, filter, dan ubah status cucian langsung. Perubahan instan ke layar aplikasi member."
          variant="default"
        />

        {/* SEARCH BAR & FILTER RESET */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari ID, Pelanggan, atau Wangi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50/80 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-xs font-semibold text-slate-700 placeholder-slate-400 outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all shadow-inner"
            />
          </div>
          <button
            onClick={() => { setSelectedStatus("Semua"); setSearchTerm(""); }}
            className="bg-white p-3.5 rounded-2xl text-slate-600 border border-slate-100 shadow-sm hover:text-blue-600 hover:border-blue-200 transition-all hover:scale-105 active:scale-95"
            title="Reset Filter"
          >
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* 2. STATS CARDS SECTION */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, i) => {
          const isSelected = selectedStatus === stat.statusKey;
          return (
            <div
              key={i}
              onClick={() => setSelectedStatus(stat.statusKey)}
              className={`cursor-pointer p-6 rounded-[28px] transition-all duration-300 transform active:scale-95 bg-white border ${isSelected
                  ? 'border-blue-600 ring-4 ring-blue-50 shadow-md shadow-blue-100/50 -translate-y-1'
                  : 'border-slate-100 shadow-sm hover:border-slate-200 hover:-translate-y-0.5'
                }`}
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">{stat.label}</span>
                  <span className="text-3xl font-black text-slate-900 tracking-tight block">{stat.count}</span>
                </div>
                <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center shadow-sm`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. ACTIVE FILTER INDICATOR */}
      <div className="flex items-center gap-2 px-2 -mb-2">
        <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></div>
        <div className="text-[11px] text-slate-400 font-extrabold uppercase tracking-widest">
          Menampilkan: <span className="text-blue-600 font-black">{selectedStatus}</span>
          <span className="text-slate-300 mx-2">|</span> Ditemukan: <span className="text-slate-700">{displayOrders.length} item</span>
        </div>
      </div>

      {/* 4. PREMIUM DATA TABLE SECTION */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden p-4">
        <DataTable>
          <TableHeader columns={columns} />
          <tbody className="divide-y divide-slate-50">
            {displayOrders.length > 0 ? (
              displayOrders.map((order) => (
                <TableRow key={order.id} className="hover:bg-slate-50/50 transition-colors">

                  {/* ID */}
                  <td className="px-6 py-5 text-left">
                    <span className="font-mono font-black text-[10px] text-blue-600 bg-blue-50/60 border border-blue-100 px-2.5 py-1.5 rounded-xl shadow-sm">
                      #{order.id.substring(0, 8).toUpperCase()}
                    </span>
                  </td>

                  {/* Nama Pelanggan, Nama Layanan & Preferensi Tambahan */}
                  <td className="px-6 py-5 text-left">
                    <p className="text-sm font-black text-slate-800 uppercase tracking-tight">{order.customer_name}</p>
                    <p className="text-[11px] text-slate-600 font-bold uppercase mt-0.5">
                      📦 {order.service_name} ({order.qty || 0} Kg/Pcs)
                    </p>

                    {/* INFO TAMBAHAN: WANGI & METODE PEMBAYARAN */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-[9px] font-black tracking-wider uppercase px-2 py-0.5 bg-purple-50 text-purple-600 border border-purple-100 rounded-md">
                        🌸 Wangi: {order.perfume || 'Default Lavender'}
                      </span>
                      <span className={`text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md border ${order.payment_status === 'Lunas'
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                          : 'bg-rose-50 text-rose-600 border-rose-100'
                        }`}>
                        💵 {order.payment_status || 'Belum Bayar'} ({order.payment_method || 'Cash'})
                      </span>
                    </div>
                  </td>

                  {/* Status Badge Saat Ini */}
                  <td className="px-6 py-5 text-left">
                    <div className="inline-block">
                      <OrderStatusBadge status={order.status} />
                    </div>
                  </td>

                  {/* INTERAKTIF: AKSES KONTROL LIVE UBAH STATUS */}
                  {/* INTERAKTIF: AKSES KONTROL LIVE UBAH STATUS */}
                  <td className="px-6 py-5 text-left">
                    <div className="relative inline-block w-40">
                      <select
                        disabled={updatingId === order.id}
                        value={order.status || 'Antri'}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-extrabold uppercase rounded-xl px-3 py-2.5 outline-none cursor-pointer focus:bg-white focus:border-blue-600 transition-all disabled:opacity-50"
                      >
                        {/* PASTIKAN VALUE-NYA SESUAI DENGAN YANG DIBACA OLEH DASHBOARD MEMBER */}
                        <option value="Antri">⏱️ Antri</option>
                        <option value="Proses">🧼 Proses</option>
                        <option value="Selesai">✅ Selesai</option>
                  
                      </select>
                      {updatingId === order.id && (
                        <div className="absolute right-2 top-1/2 -translate-y-1/2">
                          <RefreshCw size={12} className="animate-spin text-blue-600" />
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Total Tagihan */}
                  <td className="px-6 py-5 text-left">
                    <span className="font-black text-sm text-slate-900 tracking-tight">
                      Rp {(order.total_price || 0).toLocaleString('id-ID')}
                    </span>
                  </td>

                </TableRow>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-12">
                  <EmptyState message="Ups! Tidak ada data orderan yang cocok dengan kriteria Anda." />
                </td>
              </tr>
            )}
          </tbody>
        </DataTable>
      </div>

    </div>
  );
};

export default Orders;