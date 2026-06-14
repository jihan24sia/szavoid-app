import React, { useState, useRef } from 'react'; 
import { useNavigate } from 'react-router-dom';
import {
  Plus, Search, MoreVertical,
  Star, X, History, Waves, Smartphone, ArrowUpCircle
} from 'lucide-react';

// --- IMPORT KOMPONEN INTERNAL MASTER ---
import SectionHeader from '../components/SectionHeader';

// Import data pelanggan
import { customers as initialData } from "../data/customers"; 

const Customers = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  // JANGKAR USEREF
  const pageTopRef = useRef(null);

  // State form
  const [newCustomer, setNewCustomer] = useState({ 
    name: '',
    nickname: '',
    phone: '', 
    gender: 'Laki-laki',
    birth_date: '',
    status: 'Reguler' 
  });

  // FUNGSI GULIR HALAMAN
  const handleScrollToTop = () => {
    pageTopRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // --- FUNGSI TAMBAH PELANGGAN ---
  const handleAddCustomer = (e) => {
    e.preventDefault();
    
    const idBaru = `CUST-${(customers.length + 1).toString().padStart(3, '0')}`;
    
    const dataBaru = {
      id: idBaru,
      name: newCustomer.name,
      nickname: newCustomer.nickname || newCustomer.name.split(' ')[0].toLowerCase(),
      gender: newCustomer.gender,
      birth_date: newCustomer.birth_date || "01 Jan 2000",
      avatar: `https://i.pravatar.cc/150?u=${idBaru}`,
      phone: newCustomer.phone,
      email: `${newCustomer.name.toLowerCase().replace(/\s/g, '')}@mail.com`,
      total_orders: 0,
      status: newCustomer.status,
    };
    
    setCustomers([dataBaru, ...customers]); 
    setIsModalOpen(false); 
    setNewCustomer({ name: '', nickname: '', phone: '', gender: 'Laki-laki', birth_date: '', status: 'Reguler' }); 
  };

  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased p-2 flex flex-col gap-8 relative">

      {/* 📍 JANGKAR USEREF */}
      <div ref={pageTopRef} className="absolute top-0 left-0"></div>

      {/* --- 1. HEADER SECTION (MENGGUNAKAN KOMPONEN RESMI - CRM SYSTEM STYLE) --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
        
        {/* Panggilan Komponen Pengganti Teks Manual */}
        <SectionHeader 
          title="Customer Database"
          subtitle="Kelola informasi profil, status loyalty, dan riwayat pesanan pelanggan laundry."
          variant="default"
        />

        {/* Action Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-72 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Cari Nama / No. HP..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50/80 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-xs font-semibold text-slate-700 placeholder-slate-400 outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all shadow-inner"
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-3.5 rounded-2xl font-black flex items-center gap-2 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-blue-900/10 uppercase text-xs tracking-widest"
          >
            <Plus size={16} /> Add Customer
          </button>
        </div>
      </div>

      {/* --- 2. CORE GRID LAYOUT --- */}
      <div className="grid grid-cols-12 gap-8">
        
        {/* --- DATA TABLE LIST (KIRI) --- */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm flex flex-col">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <h3 className="font-black text-slate-900 uppercase tracking-wide text-xs flex items-center gap-2">
                <Waves size={16} className="text-blue-600" /> Active Customer Base
              </h3>
              <span className="text-[11px] font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                {filteredCustomers.length} Item Terdisplay
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-0">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <th className="px-8 py-4">Customer Profil</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4 text-center">Orders</th>
                    <th className="px-8 py-4">Total Pengeluaran</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredCustomers.map((c) => (
                    <tr 
                      key={c.id} 
                      onClick={() => navigate(`/customers/${c.id}`)}
                      className="group hover:bg-slate-50/60 transition-all cursor-pointer"
                    >
                      {/* Avatar & Info */}
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <img 
                            src={c.avatar} 
                            alt={c.name} 
                            className="w-11 h-11 rounded-xl object-cover shadow-sm ring-2 ring-slate-100 group-hover:scale-105 transition-transform duration-300"
                          />
                          <div>
                            <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{c.name}</p>
                            <p className="text-[10px] font-bold text-slate-400 flex items-center gap-1 mt-0.5 tracking-wide">
                              @{c.nickname} • <Smartphone size={10} className="text-slate-300"/> {c.phone}
                            </p>
                          </div>
                        </div>
                      </td>
                      {/* Badge Status */}
                      <td className="px-8 py-5">
                        <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-sm border ${
                          c.status === 'VIP' 
                          ? 'bg-amber-50 text-amber-600 border-amber-200/60' 
                          : 'bg-slate-50 text-slate-400 border-slate-200/50'}`}>
                          {c.status}
                        </span>
                      </td>
                      {/* Orders Count */}
                      <td className="px-8 py-5 font-black text-slate-700 text-center text-xs">
                        {c.total_orders}x
                      </td>
                      {/* Total Spent */}
                      <td className="px-8 py-5 text-slate-900 font-black text-xs tracking-tight">
                        Rp {(c.total_orders * 15000).toLocaleString('id-ID')}
                      </td>
                      {/* Action Menu */}
                      <td className="px-6 py-5 text-right" onClick={(e) => e.stopPropagation()}>
                        <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* --- SIDEBAR METRICS (KANAN) --- */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* CARD LOYALTY (DARK GUEST STYLE) */}
          <div className="bg-slate-900 rounded-[32px] p-8 text-white shadow-xl relative overflow-hidden group border border-slate-800">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loyalty Segment</h4>
            <p className="text-5xl font-black mt-4 tracking-tight text-white">
              {customers.filter(c => c.status === 'VIP').length} 
              <span className="text-xs font-black text-amber-400 ml-2 uppercase tracking-widest block mt-1">Premium VIP Members</span>
            </p>
            <Star className="absolute -right-6 -bottom-6 w-28 h-28 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-700" />
          </div>

          {/* RECENT REGISTRATION */}
          <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
              <History size={16} className="text-blue-600" /> Recent Registration
            </h3>
            <div className="space-y-5">
              {customers.slice(0, 5).map((c, i) => (
                <div 
                  key={i} 
                  className="flex gap-4 items-center group cursor-pointer border-b border-slate-50 pb-3 last:border-0 last:pb-0" 
                  onClick={() => navigate(`/customers/${c.id}`)}
                >
                  <img src={c.avatar} className="w-9 h-9 rounded-lg object-cover ring-2 ring-slate-50" alt="" />
                  <div>
                    <p className="text-xs font-black text-slate-800 uppercase tracking-tight group-hover:text-blue-600 transition-colors">{c.name}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase mt-0.5 tracking-wider">{c.gender} • Baru Bergabung</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- 3. REGISTRATION MODAL FORM --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 backdrop-blur-md bg-slate-900/40">
          <div className="bg-white w-full max-w-md rounded-[32px] shadow-2xl p-8 relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute right-6 top-6 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Registration</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Tambah Pelanggan Baru</p>

            <form onSubmit={handleAddCustomer} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 ml-1">Nama Lengkap</label>
                <input 
                  required 
                  type="text"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white p-3.5 rounded-xl outline-none text-xs font-semibold text-slate-800 transition-all" 
                  placeholder="Masukkan nama lengkap..."
                  value={newCustomer.name} 
                  onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})} 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 ml-1">No. WhatsApp</label>
                  <input 
                    required 
                    type="tel"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white p-3.5 rounded-xl outline-none text-xs font-semibold text-slate-800 transition-all" 
                    placeholder="0812..."
                    value={newCustomer.phone} 
                    onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})} 
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 ml-1">Gender</label>
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl outline-none text-xs font-black uppercase text-slate-700 focus:bg-white focus:border-blue-600 transition-all"
                    value={newCustomer.gender} 
                    onChange={(e) => setNewCustomer({...newCustomer, gender: e.target.value})}
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest shadow-md shadow-blue-900/10 transition-all mt-4"
              >
                Simpan Pelanggan
              </button>
            </form>
          </div>
        </div>
      )}

      {/* --- 4. FLOATING BACK TO TOP BUTTON --- */}
      <button 
        onClick={handleScrollToTop} 
        className="fixed bottom-6 right-6 z-[99] bg-slate-900 hover:bg-slate-800 text-white p-3.5 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center group border border-slate-800"
        title="Gulir ke paling atas"
      >
        <ArrowUpCircle size={22} className="group-hover:-translate-y-0.5 transition-transform text-blue-400" />
      </button>

    </div>
  );
};

export default Customers;