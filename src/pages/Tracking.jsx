import React, { useState, useEffect } from 'react';
import { Search, Truck, CheckCircle2, Clock, Package, MapPin, Waves, Navigation, ShieldAlert } from 'lucide-react';
import { supabase } from '../supabaseClient'; // 🌟 Pastikan path import supabaseClient kamu benar

// --- IMPORT KOMPONEN INTERNAL MASTER ---
import SectionHeader from '../components/SectionHeader';

const Tracking = () => {
  const [searchId, setSearchId] = useState('BW-'); // State untuk kolom input text
  const [activeOrder, setActiveOrder] = useState(null); // Menyimpan data pesanan yang ditemukan
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

const fetchOrderTracking = async (idToSearch) => {
    if (!idToSearch || idToSearch.trim() === '') return;
    
    setLoading(true);
    setHasSearched(true);
    
    // 🧼 1. Bersihkan input user ("BW-#9B2C64F0" -> "9b2c64f0")
    const cleanId = idToSearch
      .toLowerCase()
      .replace('bw-', '')
      .replace('#', '')
      .trim();

    try {
      // 🌟 2. Ambil data sesuai dengan kolom asli di database kamu (perfume diganti scent_type)
      const { data, error } = await supabase
        .from('orders')
        .select(`
          id,
          customer_name,
          service_name,
          qty,
          total_price,
          status,
          payment_method,
          scent_type,
          created_at
        `);

      if (error) throw error;

      if (data && data.length > 0) {
        // 🧼 3. Cocokkan potongan UUID / Nama Pelanggan di sisi JavaScript
        const foundOrder = data.find(order => 
          order.id.toLowerCase().startsWith(cleanId) || 
          order.customer_name.toLowerCase().includes(cleanId)
        );
        
        setActiveOrder(foundOrder || null);
      } else {
        setActiveOrder(null);
      }
    } catch (err) {
      console.error("Gagal melacak pesanan:", err.message);
      setActiveOrder(null);
    } finally {
      setLoading(false);
    }
  };

  // 🌟 REAL-TIME SYNC: Otomatis memantau perubahan status di database admin
  useEffect(() => {
    if (!activeOrder?.id) return;

    const channel = supabase
      .channel(`live-track-${activeOrder.id}`)
      .on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'orders',
        filter: `id=eq.${activeOrder.id}`
      }, (payload) => {
        // Jika data diubah oleh admin, langsung update state UI tanpa refresh browser
        setActiveOrder(payload.new);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [activeOrder?.id]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchOrderTracking(searchId);
  };

  // Mapping status string database ke rancangan urutan timeline stepper
  const dbStatus = activeOrder?.status || 'Antri';

  const trackingSteps = [
    {
      status: 'Selesai / Diambil',
      desc: 'Laundry selesai diproses dan siap diserahkan ke pelanggan',
      active: dbStatus === 'Selesai' || dbStatus === 'Diambil',
      color: (dbStatus === 'Selesai' || dbStatus === 'Diambil') ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'
    },
    {
      status: 'Proses Cuci & Setrika',
      desc: 'Pakaian sedang dalam tahap pembersihan premium oleh tim kami',
      active: dbStatus === 'Proses' || dbStatus === 'Selesai' || dbStatus === 'Diambil',
      color: (dbStatus === 'Proses' || dbStatus === 'Selesai' || dbStatus === 'Diambil') ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
    },
    {
      status: 'Antrean Masuk',
      desc: 'Nota pesanan telah diterima & menunggu antrean pengerjaan mesin',
      active: true,
      color: 'bg-sky-500 text-white'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased p-2 flex flex-col gap-8">

      {/* 1. HEADER SECTION */}
      <div className="w-full bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
        <SectionHeader
          title="Tracking Status Real-Time"
          subtitle="Masukkan 8 digit awal kode nota digital Anda untuk memantau mesin cuci kami."
          variant="default"
        />
      </div>

      {/* 2. CORE GRID LAYOUT */}
      <div className="grid grid-cols-12 gap-8">

        {/* --- SISI KIRI: INPUT ID & USER CARD --- */}
        <div className="col-span-12 lg:col-span-5 space-y-8">

          {/* FORM INPUT ORDER ID */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
            <form onSubmit={handleSearchSubmit}>
              <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest ml-1">Masukkan Order ID</label>
              <div className="relative mt-3 group">
                <input
                  type="text"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="w-full bg-slate-50/80 border border-slate-100 rounded-2xl py-4 pl-6 pr-16 font-mono font-black text-blue-600 outline-none shadow-inner focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all uppercase text-sm"
                  placeholder="Contool: BW-A1B2C3D4"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-xl text-white shadow-md shadow-blue-200 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                >
                  <Search size={18} className={loading ? "animate-spin" : ""} />
                </button>
              </div>
            </form>
          </div>

          {/* CUSTOMER INFO CARD */}
          {activeOrder ? (
            <div className="bg-slate-900 rounded-[32px] p-8 text-white shadow-xl relative overflow-hidden group border border-slate-800 animate-fadeIn">
              <Waves className="absolute -right-16 -top-16 text-white/5 scale-[3.5] pointer-events-none group-hover:rotate-6 transition-transform duration-1000" />

              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Nama Pelanggan / Nota</p>
                    <h3 className="text-xl font-black mt-1 tracking-tight text-white uppercase">{activeOrder.customer_name}</h3>
                  </div>
                  <div className="bg-slate-800 text-blue-400 p-3 rounded-xl border border-slate-700/50">
                    <Navigation size={18} />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-800/50 text-xs space-y-1 text-slate-300">
                    <p>Paket Penanganan: <strong className="text-white font-extrabold">{activeOrder.service_name}</strong></p>
                    <p>Total Berat Cucian: <span className="text-blue-400 font-bold">{activeOrder.qty} Kg</span></p>
                   <p>Aroma Wangi Parfum: <span className="text-purple-400 font-bold">{activeOrder.scent_type || 'Original'}</span></p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-800/80">
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Bayar</p>
                      <p className="font-black text-sm text-emerald-400 mt-0.5">Rp {(activeOrder.total_price || 0).toLocaleString('id-ID')}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Metode Bayar</p>
                      <p className="font-black text-xs text-blue-400 mt-0.5 uppercase">{activeOrder.payment_method || 'QRIS'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : hasSearched && !loading ? (
            <div className="bg-red-50 border border-red-100 text-red-800 p-6 rounded-3xl flex items-start gap-3">
              <ShieldAlert className="text-red-500 shrink-0" size={20} />
              <div className="text-xs">
                <h4 className="font-black uppercase tracking-wider">Nota Tidak Ditemukan</h4>
                <p className="text-red-600/80 mt-1 leading-relaxed">Periksa kembali kode ID nota yang Anda masukkan. Pastikan sesuai dengan potongan token digital di akun Anda.</p>
              </div>
            </div>
          ) : (
            <div className="bg-slate-100/70 border border-slate-200/50 p-8 rounded-[32px] text-center text-slate-400 text-xs font-medium">
              Silakan ketik kode nota Anda di atas untuk memunculkan detail data pelanggan.
            </div>
          )}
        </div>

        {/* --- SISI KANAN: TIMELINE STATUS --- */}
        <div className="col-span-12 lg:col-span-7 bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Status Perjalanan & Proses</h3>
              {activeOrder && (
                <span className={`px-3 py-1 border rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm ${dbStatus === 'Antri' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                  dbStatus === 'Proses' ? 'bg-blue-50 text-blue-600 border-blue-100 animate-pulse' :
                    'bg-emerald-50 text-emerald-600 border-emerald-100'
                  }`}>
                  {dbStatus === 'Antri' ? '⏱️ Menunggu Antrean' : dbStatus === 'Proses' ? '🧼 Sedang Dicuci' : '✨ Selesai'}
                </span>
              )}
            </div>

            <div className="relative ml-4 mt-2">
              <div className="absolute left-[19px] top-3 bottom-3 w-[2px] bg-slate-100"></div>

              <div className="space-y-8">
                {trackingSteps.map((step, index) => (
                  <div key={index} className="relative flex gap-6 items-start group">

                    {/* Lingkaran Icon */}
                    <div className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm ${step.color}`}>
                      {index === 0 && <CheckCircle2 size={18} />}
                      {index === 1 && <Clock size={18} />}
                      {index === 2 && <Package size={18} />}
                    </div>

                    {/* Teks Deskripsi */}
                    <div className="flex-1 pt-1">
                      <h4 className={`font-black text-xs uppercase tracking-wider ${step.active ? 'text-slate-900' : 'text-slate-300'}`}>
                        {step.status}
                      </h4>
                      <p className={`text-xs mt-1 leading-relaxed ${step.active ? 'text-slate-500 font-medium' : 'text-slate-300 font-normal'}`}>
                        {step.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MAP PREVIEW CONTAINER */}
          <div className="mt-8 bg-slate-50 border border-slate-100 rounded-2xl h-36 flex flex-col items-center justify-center gap-1.5">
            <div className="bg-white p-2.5 rounded-xl shadow-sm text-blue-600 border border-slate-100">
              <MapPin size={18} />
            </div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
              {activeOrder ? `Live Tracking Monitor untuk ID #${activeOrder.id.substring(0, 8).toUpperCase()}` : "Sistem Monitoring Satelit Laundry Aktif"}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Tracking;