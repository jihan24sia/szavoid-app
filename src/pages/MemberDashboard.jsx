import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import {
  Shirt, Clock, Zap, BedDouble, Footprints, Sparkles, CheckCircle2,
  RefreshCw, ShoppingBag, ListOrdered, Navigation, Package,
  ChevronRight, Award, LogOut, Activity, QrCode, Phone, MapPin, User,
  Trash2, Droplets, Info, Search, ShieldAlert, Star, ShieldCheck, ArrowRight, Check, CreditCard, Coins
} from 'lucide-react';

export default function MemberDashboard() {
  const navigate = useNavigate();
  const { userId } = useParams(); 

  // Navigation & UI States
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [trackedOrder, setTrackedOrder] = useState(null); 

  // Core Data States
  const [userProfile, setUserProfile] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Diubah ke true untuk proteksi awal loading screen
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Booking States
  const [selectedService, setSelectedService] = useState('cuci-kering');
  const [weight, setWeight] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedScent, setSelectedScent] = useState('Lavender Premium');
  const [paymentMethod, setPaymentMethod] = useState('qris'); 
  const [claimedVoucher, setClaimedVoucher] = useState(null);

  const services = [
    { id: 'cuci-kering', name: 'Cuci Komplit (Cuci + Setrika)', price: 10000, icon: <Droplets size={20} />, color: 'from-blue-600 to-cyan-600', eta: '1-2 Hari', category: 'kiloan' },
    { id: 'cuci-setrika', name: 'Setrika Saja Premium', price: 7000, icon: <Shirt size={20} />, color: 'from-indigo-600 to-purple-600', eta: '1 Hari', category: 'kiloan' },
    { id: 'express', name: 'Super Express (3 Jam Selesai)', price: 15000, icon: <Zap size={20} />, color: 'from-amber-600 to-orange-600', eta: '3 Jam', category: 'express' },
    { id: 'bed-cover', name: 'Bedcover & Blanket Luxury', price: 25000, icon: <BedDouble size={20} />, color: 'from-emerald-600 to-teal-600', eta: '2 Hari', category: 'satuan' },
    { id: 'cuci-sepatu', name: 'Premium Shoes Deep Clean', price: 35000, icon: <Footprints size={20} />, color: 'from-rose-600 to-pink-600', eta: '3 Hari', category: 'satuan' },
    { id: 'jas-gaun', name: 'Premium Satuan (Jas/Gaun)', price: 15000, icon: <Sparkles size={20} />, color: 'from-violet-600 to-fuchsia-600', eta: '2-3 Hari', category: 'satuan' },
  ];

  // --- ⚙️ FUNGSI BARU: CLEAN LOGOUT (HAPUS SESSION SUPABASE & GOOGLE) ---
  const handleLogout = async () => {
    const confirmLogout = window.confirm("Apakah Anda yakin ingin keluar dan berganti akun?");
    if (!confirmLogout) return;

    try {
      await supabase.auth.signOut();
      alert("Berhasil keluar! Sesi Anda telah dihapus.");
      navigate('/login');
    } catch (err) {
      console.error("Gagal Logout:", err.message);
    }
  };

  // --- 1. LIVE DATA SINKRONISASI & PROTEKSI ROUTER ---
  useEffect(() => {
    // 🔒 PROTEKSI 1: Jika tidak ada userId di URL (Akses Guest Tanpa Izin), lempar kembali ke Login
    if (!userId) {
      alert("Akses Ditolak! Anda harus login terlebih dahulu.");
      navigate('/login');
      return;
    }

    const fetchUserData = async () => {
      try {
        setLoading(true);
        // Validasi keaslian user ID di DB
        const { data: profile, error: profileErr } = await supabase
          .from('users')
          .select('*')
          .eq('id', userId)
          .maybeSingle();
          
        // 🔒 PROTEKSI 2: Jika ID di URL ngawur/tidak ada di database, tendang keluar
        if (profileErr || !profile) {
          alert("Sesi bermasalah atau Profil tidak ditemukan. Silakan login kembali.");
          navigate('/login');
          return;
        }

        setUserProfile(profile);
        setCustomerName(profile.name || "");
        setPhoneNumber(profile.phone || "");

        const { data: ordersData, error: ordersErr } = await supabase
          .from('orders')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false });

        if (!ordersErr && ordersData) {
          setOrders(ordersData);
        }
      } catch (err) {
        console.error("Gagal sinkronisasi data:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();

    const laundryRealtimeChannel = supabase
      .channel('landing-page-orders-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'orders', filter: `user_id=eq.${userId}` },
        (payload) => {
          fetchUserData(); 
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(laundryRealtimeChannel);
    };
  }, [userId, navigate]);

  // --- 2. LIVE TRACKING FIX ---
  useEffect(() => {
    const query = searchQuery.trim();
    if (!query || query.length < 3) {
      setTrackedOrder(null);
      return;
    }

    const fetchTrackedOrder = async () => {
      try {
        const { data, error } = await supabase
          .from('orders')
          .select('*');

        if (!error && data) {
          const match = data.find(o => o.id.toLowerCase().includes(query.toLowerCase()));
          if (match) {
            setTrackedOrder(match);
            return;
          }
        }
        setTrackedOrder(null);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTrackedOrder();

    const searchRealtimeChannel = supabase
      .channel('search-tracking-realtime')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'orders' },
        (payload) => {
          if (payload.new && payload.new.id.toLowerCase().includes(query.toLowerCase())) {
            setTrackedOrder(payload.new);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(searchRealtimeChannel);
    };
  }, [searchQuery]);

  // Kalkulasi Finansial
  const currentService = services.find(s => s.id === selectedService);
  const rawSubtotal = weight * (currentService ? currentService.price : 0);
  const totalBill = Math.max(0, rawSubtotal);

  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    if (!customerName || weight <= 0) return alert("Harap lengkapi nama dan perkiraan berat!");
    setIsSubmitting(true);
    try {
      const orderPayload = {
        customer_name: customerName,
        service_name: currentService.name,
        qty: parseFloat(weight),
        total_price: totalBill,
        status: 'Antri',
        payment_method: paymentMethod, 
        scent_type: selectedScent,
        ...(userId && { user_id: userId })
      };

      const { error } = await supabase.from('orders').insert([orderPayload]);
      if (error) throw error;

      alert(`🎉 Booking Sukses dengan Pembayaran [${paymentMethod.toUpperCase()}]! Silakan bawa pakaian Anda ke outlet.`);
      setWeight(1);
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getProgressWidth = (status) => {
    if (status === 'Antri') return 'w-1/6';
    if (status === 'Proses') return 'w-1/2';
    if (status === 'Selesai' || status === 'Diambil') return 'w-full';
    return 'w-0';
  };

  // ── TEMPLATE SCREEN LOADING PROTEKSI ──
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-3 text-slate-400 text-xs font-bold tracking-wider">
        <RefreshCw className="animate-spin text-blue-500" size={24} />
        MENYINKRONKAN DATA KEAMANAN MEMBER...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">

      {/* --- 1. PREMIUM HEADER / NAVIGATION --- */}
      <nav className="bg-slate-900/80 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-base shadow-lg shadow-blue-500/20">BW</div>
            <div>
              <h1 className="font-black text-sm uppercase tracking-wider text-white">BrightWash</h1>
              <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Premium Studio</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {userId && (
              <div className="flex items-center gap-2 bg-slate-800/60 px-3 py-1.5 rounded-xl border border-slate-700/60 shadow-inner">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-200">{userProfile?.name || 'Member'}</span>
              </div>
            )}
            
            {/* 🛠️ TOMBOL LOGOUT BARU: Untuk Membersihkan Sesi Lama */}
            <button
              onClick={handleLogout}
              className="bg-rose-950/40 hover:bg-rose-900/50 border border-rose-900/40 text-rose-400 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-2 transition-all active:scale-95"
              title="Keluar akun dan ganti ID"
            >
              <LogOut size={13} />
              <span className="hidden sm:inline">Ganti Akun</span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <section className="relative overflow-hidden pt-12 pb-16 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <h2 className="text-4xl font-black text-white tracking-tight">
            Cucian Mewah, <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Selesai Real-Time.</span>
          </h2>
          <p className="text-slate-400 text-xs mt-2 max-w-xl">Lacak perjalanan nota pakaian Anda secara live transparan langsung dari sistem database cloud kasir kami.</p>
        </div>
      </section>

      {/* --- 2.5 MEMBER HUB & TRANSACTION HISTORY --- */}
      {userId && (
        <section className="py-8 bg-slate-900/40 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Cucian Aktif */}
              <div className="space-y-3">
                <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest flex items-center gap-2"><Activity size={14}/> Cucian Sedang Diproses</h4>
                {orders.filter(o => o.status !== 'Selesai' && o.status !== 'Diambil').length === 0 ? (
                  <div className="bg-slate-950 p-6 text-center rounded-2xl text-slate-600 text-xs font-bold border border-slate-900">Tidak ada cucian aktif.</div>
                ) : (
                  orders.filter(o => o.status !== 'Selesai' && o.status !== 'Diambil').map((order) => (
                    <div key={order.id} className="bg-slate-950 border border-slate-800 p-4 rounded-2xl flex justify-between items-center">
                      <div>
                        <span className="font-mono text-[10px] text-blue-400 block font-bold">#{order.id.substring(0, 8).toUpperCase()}</span>
                        <h5 className="text-xs font-black text-white mt-0.5">{order.service_name}</h5>
                        <p className="text-[10px] text-slate-500">Metode: {order.payment_method?.toUpperCase()} • {order.qty} Kg</p>
                      </div>
                      <span className="text-[10px] font-black uppercase px-2 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">{order.status}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Arsip Selesai */}
              <div className="space-y-3">
                <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2"><CheckCircle2 size={14}/> Nota Selesai / Diambil</h4>
                <div className="space-y-2 max-h-[180px] overflow-y-auto">
                  {orders.filter(o => o.status === 'Selesai' || o.status === 'Diambil').length === 0 ? (
                    <div className="bg-slate-950 p-6 text-center rounded-2xl text-slate-600 text-xs font-bold border border-slate-900">Belum ada riwayat nota selesai.</div>
                  ) : (
                    orders.filter(o => o.status === 'Selesai' || o.status === 'Diambil').map((order) => (
                      <div key={order.id} className="bg-slate-950/50 border border-slate-900 p-3 rounded-xl flex justify-between items-center text-xs">
                        <div>
                          <span className="font-mono text-[9px] text-slate-600 block">#{order.id.substring(0, 8).toUpperCase()}</span>
                          <h5 className="font-bold text-slate-300">{order.service_name}</h5>
                        </div>
                        <div className="text-right">
                          <span className="font-black text-emerald-400 block">Rp {order.total_price?.toLocaleString('id-ID')}</span>
                          <span className="text-[9px] uppercase font-black text-slate-500">{order.payment_method}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- 4. LIVE TRACKING MODULE --- */}
      <section id="tracking" className="py-12 bg-slate-900/20 border-b border-slate-900">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <div className="text-center">
            <h3 className="text-xs font-black tracking-widest text-blue-500 uppercase">Live Database Tracking</h3>
            <p className="text-xl font-black text-white">Masukkan Minimal 4 Digit Depan ID Nota</p>
          </div>

          <div className="bg-slate-900 p-4 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500"><Search size={16} /></span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="CONTOH KETIK: 8A4B (CEK KODE DI RIWAYAT ATAS)..."
                className="w-full bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-blue-400 rounded-2xl py-3.5 pl-11 pr-4 outline-none focus:border-blue-500 uppercase tracking-widest"
              />
            </div>

            {trackedOrder ? (
              <div className="p-4 bg-slate-950 border border-slate-850 rounded-2xl space-y-4 animate-fadeIn">
                <div className="flex justify-between items-center text-[10px] font-bold border-b border-slate-900 pb-2">
                  <span className="text-slate-400">Pelanggan: <span className="text-white">{trackedOrder.customer_name}</span></span>
                  <span className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded uppercase font-black">Bayar: {trackedOrder.payment_method?.toUpperCase()}</span>
                </div>
                
                {/* Stepper */}
                <div className="relative pt-2 pb-2">
                  <div className="absolute top-4 left-2 right-2 bg-slate-900 h-1 rounded-full" />
                  <div className={`absolute top-4 left-2 bg-blue-500 h-1 rounded-full transition-all duration-500 ${getProgressWidth(trackedOrder.status)}`} />
                  <div className="relative z-10 flex justify-between items-center">
                    {['Antri', 'Proses', 'Selesai'].map((step, idx) => {
                      const stages = ['Antri', 'Proses', 'Selesai', 'Diambil'];
                      const isCompleted = stages.indexOf(trackedOrder.status) >= idx;
                      return (
                        <div key={step} className="flex flex-col items-center">
                          <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-[9px] font-black ${isCompleted ? 'bg-blue-600 border-blue-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
                            {isCompleted ? '✓' : idx + 1}
                          </div>
                          <span className="text-[9px] font-black mt-1 uppercase text-slate-400">{step}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <p className="text-[11px] text-center text-slate-400 font-bold">Total Nota: <span className="text-emerald-400">Rp {trackedOrder.total_price?.toLocaleString('id-ID')}</span></p>
              </div>
            ) : searchQuery.length >= 3 ? (
              <div className="p-3 bg-slate-950/60 text-center rounded-xl text-slate-600 text-xs font-bold">Nota tidak ditemukan di database.</div>
            ) : null}
          </div>
        </div>
      </section>

      {/* --- 5. INTERACTIVE BOOKING ENGINE --- */}
      <section id="booking" className="py-12 max-w-5xl mx-auto px-4 space-y-6">
        <div className="text-center">
          <p className="text-2xl font-black text-white tracking-tight">Kalkulator Nota & E-Booking</p>
        </div>

        <form onSubmit={handleConfirmOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-4">
            
            {/* 1. Paket */}
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
              <label className="block text-[10px] font-black uppercase text-slate-400">1. Pilih Layanan</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((s) => (
                  <button
                    key={s.id} type="button" onClick={() => setSelectedService(s.id)}
                    className={`p-3 rounded-xl border text-left text-xs flex items-center gap-3 transition-all ${selectedService === s.id ? 'bg-blue-950/40 border-blue-500 text-white' : 'bg-slate-950 border-slate-900 text-slate-400'}`}
                  >
                    <div>
                      <h5 className="font-black block">{s.name}</h5>
                      <span className="text-[10px] font-bold text-blue-400">Rp {s.price.toLocaleString('id-ID')}/unit</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Form Identitas & Berat */}
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Nama Lengkap</span>
                <input
                  type="text" required value={customerName} onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Nama pemilik nota..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-white outline-none"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Perkiraan Kuantitas (Kg)</span>
                <input
                  type="number" min="1" required value={weight} onChange={(e) => setWeight(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-white outline-none"
                />
              </div>
            </div>

            {/* 3. INPUT METODE PEMBAYARAN */}
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
              <label className="block text-[10px] font-black uppercase text-slate-400 tracking-wider">2. Opsi Metode Pembayaran</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button" onClick={() => setPaymentMethod('qris')}
                  className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider transition-all ${paymentMethod === 'qris' ? 'bg-blue-950/40 border-blue-500 text-blue-400' : 'bg-slate-950 border-slate-900 text-slate-500'}`}
                >
                  <CreditCard size={16} /> QRIS Otomatis
                </button>
                <button
                  type="button" onClick={() => setPaymentMethod('tunai')}
                  className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider transition-all ${paymentMethod === 'tunai' ? 'bg-emerald-950/40 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-900 text-slate-500'}`}
                >
                  <Coins size={16} /> Tunai di Kasir
                </button>
              </div>
            </div>

          </div>

          {/* Kolom Kanan - Invoice Desk Summary */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4">
            <div className="border-b border-slate-800 pb-2">
              <h4 className="text-xs font-black text-white uppercase tracking-widest">Rincian Nota Berjalan</h4>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Paket Layanan:</span>
                <span className="font-bold text-white text-right max-w-[180px] truncate">{currentService?.name}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Metode Pembayaran:</span>
                <span className="font-black text-blue-400 uppercase bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10">{paymentMethod}</span>
              </div>
              <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800/60 font-bold">
                <span>Total Estimasi Biaya:</span>
                <span className="text-sm font-black text-emerald-400">Rp {totalBill.toLocaleString('id-ID')}</span>
              </div>
            </div>
            <button
              type="submit" disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Memproses Booking...' : 'Konfirmasi Booking Pesanan'}
            </button>
          </div>
        </form>
      </section>

    </div>
  );
}