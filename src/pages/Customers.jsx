import React, { useState, useRef } from 'react'; // <-- Mengimport useState & useRef
import { useNavigate } from 'react-router-dom';
import {
  Plus, Search, MoreVertical, Users,
  ShoppingBag, Star, X, History, Waves, Smartphone, ArrowUpCircle
} from 'lucide-react';

// Import data pelanggan yang sudah kita update tadi
import { customers as initialData } from "../data/customers"; 

const Customers = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  // ========================================================
  // 🚀 PENERAPAN USEREF: Menandai Atap Paling Atas Halaman Utama
  // ========================================================
  const pageTopRef = useRef(null);

  // State form disesuaikan dengan data terbaru
  const [newCustomer, setNewCustomer] = useState({ 
    // name: '', 
    nickname: '',
    phone: '', 
    gender: 'Laki-laki',
    birth_date: '',
    status: 'Reguler' 
  });

  // ========================================================
  // ⚡ FUNGSI GULIR HALAMAN: Memaksa Seluruh Layar Naik ke Atas
  // ========================================================
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
    <div className="animate-in fade-in slide-in-from-right-6 duration-700 h-full flex flex-col gap-8 p-1 relative">

      {/* 📍 JANGKAR USEREF: Ditaruh di atap paling atas halaman */}
      <div ref={pageTopRef} className="absolute top-0 left-0"></div>

      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-2 h-10 bg-[#1678F3] rounded-full shadow-lg shadow-blue-200"></div>
          <div>
            <h2 className="text-4xl font-black text-[#1678F3] tracking-tighter uppercase italic leading-none">Customer Database</h2>
            <p className="text-[10px] font-black text-[#4DBAE9] tracking-[0.4em] uppercase mt-2 flex items-center gap-2">
              <Users size={14} /> {customers.length} Registered Customers
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-80 group">
            <input
              type="text"
              placeholder="Cari Nama atau No. HP..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-2 border-transparent focus:border-blue-100 rounded-[22px] py-4 pl-12 pr-6 text-xs shadow-xl shadow-blue-100/10 outline-none font-bold text-[#1678F3] transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1678F3] transition-colors" size={18} />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#1678F3] text-white px-8 py-4 rounded-[22px] font-black italic flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-200 uppercase text-xs tracking-widest"
          >
            <Plus size={18} strokeWidth={4} /> Add Customer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 flex-1">
        {/* --- TABLE (KIRI) --- */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white/80 backdrop-blur-md border border-white rounded-[50px] overflow-hidden shadow-2xl shadow-blue-100/20 h-full flex flex-col">
            <div className="p-8 border-b border-blue-50 bg-[#F8FAFC]/50 flex justify-between items-center">
              <h3 className="font-black text-[#1678F3] italic uppercase tracking-tighter text-sm flex items-center gap-2">
                <Waves size={16} /> Active Customer List
              </h3>
            </div>

            <div className="overflow-x-auto flex-1 custom-scrollbar">
              <table className="w-full text-left border-separate border-spacing-0">
                <thead className="sticky top-0 bg-[#F8FAFC] z-10">
                  <tr className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
                    <th className="px-10 py-6">Customer Info</th>
                    <th className="px-10 py-6">Status</th>
                    <th className="px-10 py-6 text-center">Orders</th>
                    <th className="px-10 py-6">Total Spent</th>
                    <th className="px-10 py-6"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-50">
                  {filteredCustomers.map((c) => (
                    <tr 
                      key={c.id} 
                      onClick={() => navigate(`/customers/${c.id}`)}
                      className="group hover:bg-blue-50/30 transition-all cursor-pointer"
                    >
                      <td className="px-10 py-6">
                        <div className="flex items-center gap-4">
                          <img 
                            src={c.avatar} 
                            alt={c.name} 
                            className="w-12 h-12 rounded-2xl object-cover shadow-md group-hover:scale-110 transition-transform duration-300"
                          />
                          <div>
                            <p className="text-sm font-black text-[#1678F3] uppercase italic tracking-tighter">{c.name}</p>
                            <p className="text-[10px] font-bold text-gray-400 flex items-center gap-1 uppercase tracking-widest mt-0.5">
                              @{c.nickname} • <Smartphone size={10}/> {c.phone}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-10 py-6">
                        <span className={`px-5 py-2 rounded-full text-[9px] font-black uppercase italic tracking-[0.2em] shadow-sm border ${
                          c.status === 'VIP' 
                          ? 'bg-blue-50 text-[#1678F3] border-blue-100' 
                          : 'bg-gray-50 text-gray-400 border-gray-100'}`}>
                          {c.status}
                        </span>
                      </td>
                      <td className="px-10 py-6 font-black text-[#1678F3] text-center italic text-xs">
                        {c.total_orders}x
                      </td>
                      <td className="px-10 py-6 text-[#4DBAE9] font-black text-xs italic">
                        Rp {(c.total_orders * 15000).toLocaleString('id-ID')}
                      </td>
                      <td className="px-10 py-6 text-right">
                        <button className="p-2 text-gray-200 hover:text-[#1678F3] transition-colors">
                          <MoreVertical size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* --- SIDE INFO (KANAN) --- */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Card VIP */}
          <div className="bg-gradient-to-br from-[#1678F3] to-[#4DBAE9] rounded-[50px] p-10 text-white shadow-2xl relative overflow-hidden group">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70 italic">Loyalty Member</h4>
            <p className="text-5xl font-black mt-4 italic tracking-tighter">
              {customers.filter(c => c.status === 'VIP').length} 
              <span className="text-xs not-italic opacity-80 ml-3 uppercase tracking-widest font-black">VIP Members</span>
            </p>
            <Star className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 rotate-12 group-hover:scale-125 transition-all duration-700" />
          </div>

          {/* Recent Activity */}
          <div className="bg-white/80 backdrop-blur-md border border-white rounded-[50px] p-10 shadow-xl shadow-blue-100/20 flex-1">
            <h3 className="text-[10px] font-black text-[#1678F3] uppercase tracking-[0.3em] mb-10 italic flex items-center gap-3">
              <History size={18} /> Recent Registration
            </h3>
            <div className="space-y-8">
              {customers.slice(0, 5).map((c, i) => (
                <div key={i} className="flex gap-4 items-center group cursor-pointer" onClick={() => navigate(`/customers/${c.id}`)}>
                  <img src={c.avatar} className="w-10 h-10 rounded-xl shadow-sm border border-blue-50" />
                  <div>
                    <p className="text-xs font-black text-[#1678F3] uppercase italic leading-none">{c.name}</p>
                    <p className="text-[8px] font-bold text-gray-400 uppercase mt-1 tracking-widest italic">{c.gender} • New Joined</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL FORM --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-6 backdrop-blur-md bg-[#1678F3]/10">
          <div className="bg-white w-full max-w-lg rounded-[55px] shadow-2xl p-12 relative border border-white">
            <button onClick={() => setIsModalOpen(false)} className="absolute right-10 top-10 text-gray-300 hover:text-[#1678F3] transition-all"><X size={28} strokeWidth={4} /></button>
            
            <h3 className="text-3xl font-black text-[#1678F3] italic uppercase tracking-tighter">Registration</h3>
            <p className="text-[10px] font-black text-[#4DBAE9] uppercase tracking-[0.3em] mb-10">Tambah Pelanggan Baru</p>

            <form onSubmit={handleAddCustomer} className="grid grid-cols-2 gap-6">
              <div className="col-span-2 space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest ml-2 text-gray-400">Nama Lengkap</label>
                <input required className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-blue-100 p-4 rounded-[20px] outline-none text-sm font-bold text-[#1678F3]" 
                  value={newCustomer.name} onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})} />
              </div>
              
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest ml-2 text-gray-400">WA Number</label>
                <input required className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-blue-100 p-4 rounded-[20px] outline-none text-sm font-bold text-[#1678F3]" 
                  value={newCustomer.phone} onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})} />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest ml-2 text-gray-400">Gender</label>
                <select className="w-full bg-[#F8FAFC] p-4 rounded-[20px] outline-none text-sm font-black uppercase text-[#1678F3]"
                  value={newCustomer.gender} onChange={(e) => setNewCustomer({...newCustomer, gender: e.target.value})}>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>

              <div className="col-span-2">
                <button type="submit" className="w-full bg-[#1678F3] text-white py-5 rounded-[22px] font-black italic uppercase text-xs tracking-[0.2em] shadow-xl shadow-blue-200 mt-4">
                  Simpan Pelanggan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
      // 📥 FLOATING BUTTON: Tombol Melayang buat Gulir Halaman Ke Atas
      // ======================================================== */}
      <button 
        onClick={handleScrollToTop} 
        className="fixed bottom-8 right-8 z-[99] bg-[#1678F3] hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        title="Gulir ke paling atas"
      >
        <ArrowUpCircle size={28} strokeWidth={2.5} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>

    </div>
  );
};

export default Customers;