import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // 🌟 TAMBAHKAN useParams DI SINI
import { supabase } from './supabaseClient'; 
import { 
  Shirt, Clock, Zap, Waves, Droplets, Footprints, 
  User, BedDouble, Sparkles, CheckCircle2, RefreshCw, 
  ShoppingBag, ListOrdered, Navigation, Calendar, 
  CreditCard, ArrowRight, Package, Info, ChevronRight,
  TrendingUp, Award, Layers, LogOut 
} from 'lucide-react';

import SectionHeader from '../components/SectionHeader';
import ServiceOption from '../components/ServiceOption';
import FormInput from '../components/FormInput';
import SummaryItem from '../components/SummaryItem';
import ServiceHighlight from '../components/ServiceHighlight';

export default function MemberDashboard() {
  const navigate = useNavigate();
  const { userId } = useParams(); // 🌟 1. Ambil id user dari path URL browser
  const [currentSection, setCurrentSection] = useState('overview'); 

  // State Data Pelanggan & Nota
  const [userProfile, setUserProfile] = useState({ full_name: 'Member', email: '' });
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false); 

  // State Form Pemesanan Baru
  const [selectedService, setSelectedService] = useState('cuci-kering');
  const [weight, setWeight] = useState(0);
  const [customerName, setCustomerName] = useState("");

  const services = [
    { id: 'cuci-kering', name: 'Cuci Komplit (Cuci + Setrika)', price: 10000, icon: <Droplets size={20} />, color: 'from-blue-500 to-cyan-500' },
    { id: 'cuci-setrika', name: 'Setrika Saja', price: 7000, icon: <Shirt size={20} />, color: 'from-indigo-500 to-purple-500' },
    { id: 'express', name: 'Super Express 3 Jam', price: 15000, icon: <Zap size={20} />, color: 'from-amber-500 to-orange-500' },
    { id: 'bed-cover', name: 'Bedcover & Blanket', price: 25000, icon: <BedDouble size={20} />, color: 'from-emerald-500 to-teal-500' },
    { id: 'cuci-sepatu', name: 'Premium Shoes Clean', price: 35000, icon: <Footprints size={20} />, color: 'from-rose-500 to-pink-500' },
    { id: 'jas-gaun', name: 'Premium Satuan (Jas/Gaun)', price: 15000, icon: <Sparkles size={20} />, color: 'from-violet-500 to-fuchsia-500' },
  ];

  const currentService = services.find(s => s.id === selectedService);
  const subtotal = weight * (currentService ? currentService.price : 0);

  const fetchMemberData = async () => {
    try {
      // Ambil user yang saat ini sedang memegang token session aktif di browser
      const { data: { user } } = await supabase.auth.getUser();
      
      // 🌟 2. PROTEKSI KEAMANAN URL: Jika ga login ATAU ID di URL iseng diganti orang lain
      if (!user || user.id !== userId) {
        alert("Akses ilegal terdeteksi! Sesi login Anda tidak cocok dengan parameter URL.");
        await supabase.auth.signOut(); 
        navigate('/login');
        return;
      }

      const { data: profile } = await supabase
        .from('users') 
        .select('name, email')
        .eq('id', user.id) // Pastikan panggil ID miliknya sendiri
        .maybeSingle();

      if (profile) {
        setUserProfile({
          full_name: profile.name || 'Member',
          email: profile.email || ''
        });
        if (!customerName) setCustomerName(profile.name);
      }

      const { data: ordersData, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id) // Filter orderan hanya milik user ini
        .order('created_at', { ascending: false });

      if (!error && ordersData) setOrders(ordersData);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMemberData();
  }, [navigate, userId]); // 🌟 3. Trigger ulang jika userId di URL tiba-tiba berubah

  // 🚪 FUNGSI LOGOUT SUPABASE
  const handleLogout = async () => {
    const confirmLogout = window.confirm("Apakah Anda yakin ingin keluar dari dashboard?");
    if (!confirmLogout) return;

    setIsLoggingOut(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate('/login');
    } catch (err) {
      alert("Gagal logout: " + err.message);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleConfirmOrder = async () => {
    if (!customerName || weight <= 0) {
      return alert("Isi nama konfirmasi dan jumlah berat/pcs dulu ya!");
    }
    setIsSubmitting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      // Keamanan ekstra saat nembak database insert order
      if (!user || user.id !== userId) {
        throw new Error("Sesi tidak valid. Silakan login ulang.");
      }

      const { error } = await supabase.from('orders').insert([
        {
          user_id: user.id, // ID pengorder diambil langsung dari session aman Supabase
          customer_name: customerName,
          service_name: currentService.name,
          qty: parseFloat(weight),
          total_price: subtotal,
          status: 'Antri'
        }
      ]);

      if (error) throw error;
      alert("Mantap! Order berhasil dibooking.");
      setWeight(0);
      fetchMemberData(); 
      setCurrentSection('overview'); 
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeOrders = orders.filter(o => o.status !== 'Selesai' && o.status !== 'Diambil');
  const completedOrders = orders.filter(o => o.status === 'Selesai' || o.status === 'Diambil');

  const getStatusStyles = (status) => {
    switch(status) {
      case 'Antri': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Proses': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Selesai': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50/50 flex flex-col items-center justify-center text-slate-500 gap-3">
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-blue-100 border-t-blue-600 animate-spin"></div>
          <RefreshCw className="absolute text-blue-600 w-5 h-5 animate-pulse" />
        </div>
        <p className="text-xs font-bold tracking-wider text-slate-400 uppercase animate-pulse">Menyinkronkan Workspace Member...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/40 text-slate-800 p-4 md:p-8 space-y-8 max-w-7xl mx-auto font-sans antialiased">
      
      {/* 🌟 PREMIUM GRAPHIC BANNER WITH LOGOUT BUTTON */}
      <div className="relative overflow-hidden bg-slate-900 rounded-3xl p-8 md:p-10 text-white border border-slate-800 shadow-xl shadow-slate-900/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
              <Award size={12} className="text-blue-400" /> BrightWash Elite Member
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              Halo, <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-white bg-clip-text text-transparent">{userProfile.full_name}</span>! 👋
            </h1>
            <p className="text-slate-400 text-xs md:text-sm max-w-xl font-medium leading-relaxed">
              Selamat datang kembali di panel kontrol personal Anda. Pantau real-time proses antrean baju tanpa perlu konfirmasi manual ke kasir toko.
            </p>
          </div>
          
          {/* Sisi Kanan: Email & Tombol Logout */}
          <div className="flex flex-row md:flex-col lg:flex-row items-start md:items-stretch lg:items-center gap-6 border-t border-slate-800 pt-6 md:pt-0 md:border-t-0 pl-0 md:pl-8 md:border-l md:border-slate-800 justify-between">
            <div className="text-left">
              <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider block">Email Terdaftar</span>
              <span className="text-slate-300 text-xs font-mono font-semibold">{userProfile.email || 'member@brightwash.com'}</span>
            </div>

            {/* 🚪 TOMBOL LOGOUT UTAMA */}
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex items-center gap-2 bg-rose-500/10 hover:bg-rose-500 border border-rose-500/20 hover:border-rose-500 text-rose-400 hover:text-white px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95 disabled:opacity-50 shrink-0 self-center md:self-start lg:self-center"
            >
              <LogOut size={14} className={isLoggingOut ? "animate-spin" : ""} />
              {isLoggingOut ? "Keluar..." : "Logout"}
            </button>
          </div>
        </div>
      </div>

      {/* 🧭 NAVIGATION TABS SECTION */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-1">
        <div className="flex gap-1 overflow-x-auto scrollbar-none py-1">
          {[
            { id: 'overview', label: 'Live Tracking', icon: <Navigation size={14} /> },
            { id: 'booking', label: 'Booking Laundry', icon: <ShoppingBag size={14} /> },
            { id: 'riwayat', label: 'Riwayat Transaksi', icon: <ListOrdered size={14} /> }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setCurrentSection(tab.id)}
              className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border whitespace-nowrap ${
                currentSection === tab.id
                  ? 'bg-white text-blue-600 border-slate-200 shadow-sm font-black' 
                  : 'bg-transparent text-slate-500 border-transparent hover:text-slate-800 hover:bg-slate-100/60'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ================= TAB 1: LIVE TRACKING ================= */}
      {currentSection === 'overview' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Cucian Diproses</span>
                <span className="text-2xl font-black text-slate-900 tracking-tight block">{activeOrders.length} Nota Aktif</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 flex items-center justify-center shadow-inner">
                <Clock className="w-5 h-5" />
              </div>
            </div>
            <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Selesai</span>
                <span className="text-2xl font-black text-slate-900 tracking-tight block">{completedOrders.length} Nota Selesai</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 border border-blue-500/20 flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Layers size={16} className="text-blue-600" />
              <h3 className="text-slate-900 font-extrabold text-sm tracking-tight">Antrean Pakaian Aktif Anda</h3>
            </div>

            {activeOrders.length === 0 ? (
              <div className="bg-white border border-slate-200/60 rounded-2xl p-12 text-center shadow-sm max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto border border-slate-100">
                  <Package size={24} className="text-slate-300" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-slate-800 font-extrabold text-sm">Lemari Monitoring Kosong!</h4>
                  <p className="text-slate-400 text-xs px-4 leading-relaxed">Kamu tidak memiliki pakaian yang sedang dicuci saat ini di outlet kami.</p>
                </div>
                <button 
                  onClick={() => setCurrentSection('booking')}
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-md"
                >
                  Mulai Booking Laundry <ChevronRight size={14} />
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {activeOrders.map((order) => (
                  <div key={order.id} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between gap-6 relative group hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-bold uppercase text-slate-400 tracking-wider block">ID NOTA</span>
                        <span className="font-mono font-bold text-xs text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          #{order.id.substring(0, 8).toUpperCase()}
                        </span>
                      </div>
                      <span className={`text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border tracking-wide ${getStatusStyles(order.status)}`}>
                        {order.status}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-base tracking-tight">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                          <Shirt size={16} />
                        </div>
                        {order.service_name}
                      </div>
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 pl-1">
                        <span className="flex items-center gap-1.5"><Package size={14} className="text-slate-300" /> {order.qty} Kg/Pcs</span>
                        <span className="flex items-center gap-1.5"><Calendar size={14} className="text-slate-300" /> Live Update</span>
                      </div>
                    </div>

                    <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-wider text-slate-400">
                        <span className={order.status === 'Antri' ? 'text-amber-500 font-black' : 'text-slate-400 font-bold'}>Antri</span>
                        <span className={order.status === 'Proses' ? 'text-blue-600 font-black' : 'text-slate-400 font-bold'}>Proses</span>
                        <span className={order.status === 'Selesai' ? 'text-emerald-600 font-black' : 'text-slate-400 font-bold'}>Selesai</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex p-0.5">
                        <div className={`h-full rounded-full transition-all duration-500 ${
                          order.status === 'Antri' ? 'w-1/3 bg-amber-500 shadow-md shadow-amber-400/40' : 
                          order.status === 'Proses' ? 'w-2/3 bg-blue-600 shadow-md shadow-blue-500/40' : 
                          'w-full bg-emerald-500 shadow-md shadow-emerald-400/40'
                        }`} />
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-slate-100/60 text-xs">
                      <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Total Tagihan Kasir</span>
                      <span className="font-black text-slate-900 text-base">Rp {(order.total_price || 0).toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= TAB 2: BOOKING LAUNDRY ================= */}
      {currentSection === 'booking' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fadeIn">
          
          {/* Left: Input Selection */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Waves size={14} className="text-blue-600" /> 1. Pilih Kategori / Paket Layanan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((s) => (
                  <ServiceOption 
                    key={s.id} 
                    service={s} 
                    isSelected={selectedService === s.id} 
                    onSelect={setSelectedService} 
                  />
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <User size={14} className="text-blue-600" /> 2. Konfirmasi Detail Kuantitas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput label="Nama Pemesan Nota" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Masukkan Nama" />
                <FormInput label="Estimasi Berat (Kg / Pcs)" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="0" />
              </div>
              <div className="bg-blue-50/60 border border-blue-100/80 rounded-xl p-4 flex items-start gap-3 text-[11px] text-blue-800 leading-relaxed">
                <Info size={16} className="shrink-0 text-blue-500 mt-0.5" />
                <span>Berat pasti akan ditimbang secara presisi menggunakan timbangan digital outlet saat baju Anda diserahkan ke kurir atau drop-off langsung ke kasir.</span>
              </div>
            </div>
          </div>

          {/* Right: Modern Sticky Receipt */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-slate-950 text-white rounded-2xl p-6 border border-slate-800 flex flex-col justify-between h-auto shadow-xl relative overflow-hidden sticky top-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
              
              <div className="space-y-6">
                <div className="border-b border-slate-800/80 pb-4">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Ringkasan Invoice Estimasi</h3>
                </div>
                
                <div className="space-y-4">
                  <ServiceHighlight label="Paket Dipilih" serviceName={currentService ? currentService.name : ''} />
                  <div className="bg-slate-900 p-4 rounded-xl space-y-3 border border-slate-800/60 text-xs font-semibold font-mono">
                    <SummaryItem label="Harga Dasar" value={`Rp ${currentService ? currentService.price.toLocaleString('id-ID') : 0}`} />
                    <SummaryItem label="Jumlah Input" value={`${weight} Kg/Pcs`} />
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-4 border-t border-slate-800 space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Subtotal Tagihan</span>
                  <span className="text-2xl font-black text-blue-400 tracking-tight">Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <button 
                  onClick={handleConfirmOrder} 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white py-4 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10"
                >
                  {isSubmitting ? 'Memproses Nota...' : <>KIRIM ORDER BOOKING <ArrowRight size={14} /></>}
                </button>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ================= TAB 3: RIWAYAT TRANSAKSI ================= */}
      {currentSection === 'riwayat' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-slate-900 font-extrabold text-sm tracking-tight">Riwayat Laundry Selesai & Diambil</h3>
            <span className="bg-slate-100 text-slate-600 font-bold text-[11px] px-2.5 py-1 rounded-full border border-slate-200">{completedOrders.length} Arsip Nota</span>
          </div>

          {completedOrders.length === 0 ? (
            <div className="bg-white border border-slate-200/60 rounded-xl p-12 text-center text-xs text-slate-400 shadow-sm max-w-md mx-auto">
              Belum ada histori riwayat pakaian selesai atau diambil sebelumnya.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {completedOrders.map((order) => (
                <div key={order.id} className="bg-white border border-slate-200/60 rounded-xl p-5 shadow-sm space-y-4 hover:border-slate-300 transition-colors">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-mono text-slate-500 font-bold bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      #{order.id.substring(0, 8).toUpperCase()}
                    </span>
                    <span className="bg-emerald-500/10 text-emerald-600 px-2.5 py-0.5 rounded-full font-extrabold tracking-wide uppercase text-[9px] border border-emerald-500/20">DIAMBIL</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-slate-800 font-extrabold text-xs line-clamp-1">{order.service_name}</h4>
                    <p className="text-slate-400 text-[11px] font-medium">{order.qty} Kg/Pcs</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium text-[10px] uppercase">Total Biaya Lunas</span>
                    <span className="font-black text-slate-900">Rp {(order.total_price || 0).toLocaleString('id-ID')}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
}