import React, { useState } from 'react';
import {
  Plus, Search, MoreVertical, Users,
  ShoppingBag, Star, X, History
} from 'lucide-react';

// Pastikan file data kamu sudah dieksport dengan nama 'customers'
import { customers as initialData } from "../data/customers"; 

const Customers = () => {
  const [customers, setCustomers] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCustomer, setNewCustomer] = useState({ name: '', phone: '', status: 'Reguler' });

  // --- FUNGSI TAMBAH PELANGGAN ---
  const handleAddCustomer = (e) => {
    e.preventDefault();
    
    const idBaru = `CUST-${(customers.length + 1).toString().padStart(3, '0')}`;
    
    const dataBaru = {
      id: idBaru,
      name: newCustomer.name,
      phone: newCustomer.phone,
      email: `${newCustomer.name.toLowerCase().replace(/\s/g, '')}@mail.com`,
      total_orders: 0,
      // Kita seragamkan: kalau di modal pilih Member, statusnya jadi VIP
      status: newCustomer.status === 'Member' ? 'VIP' : 'Reguler',
    };
    
    setCustomers([dataBaru, ...customers]); 
    setIsModalOpen(false); 
    setNewCustomer({ name: '', phone: '', status: 'Reguler' }); 
  };

  // --- FILTER PENCARIAN ---
  const filteredCustomers = customers.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone.includes(searchTerm)
  );

  return (
    <div className="animate-in fade-in duration-700 h-full flex flex-col gap-8 pb-10 relative">

      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-4xl font-black text-[#2B3674] tracking-tight uppercase italic leading-none">Customer Database</h2>
          <p className="text-[11px] font-bold text-[#6358DC] tracking-[0.3em] uppercase mt-2 flex items-center gap-2">
            <Users size={14} /> Total: {customers.length} Registered Customers
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <input
              type="text"
              placeholder="Cari Nama atau No. HP..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/70 backdrop-blur-md border border-white rounded-2xl py-4 pl-12 pr-4 text-xs shadow-sm focus:ring-2 focus:ring-[#6358DC] outline-none font-bold text-[#2B3674]"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#6358DC] text-white px-6 py-4 rounded-2xl font-black italic flex items-center gap-2 hover:scale-105 transition-all shadow-lg uppercase text-xs"
          >
            <Plus size={18} strokeWidth={3} /> Add Customer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 flex-1">
        {/* --- TABLE (KIRI) --- */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white/40 border border-white rounded-[45px] overflow-hidden shadow-sm backdrop-blur-md">
            <div className="p-8 border-b border-white/50 bg-white/20">
              <h3 className="font-black text-[#2B3674] italic uppercase tracking-widest text-sm">Active Customer List</h3>
            </div>

            <div className="overflow-x-auto max-h-[600px] overflow-y-auto custom-scrollbar">
              <table className="w-full text-left">
                <thead className="sticky top-0 bg-white/90 backdrop-blur-md z-10">
                  <tr className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                    <th className="px-8 py-6">Customer Info</th>
                    <th className="px-8 py-6">Status</th>
                    <th className="px-8 py-6">Orders</th>
                    <th className="px-8 py-6">Spent</th>
                    <th className="px-8 py-6"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/50">
                  {filteredCustomers.length > 0 ? (
                    filteredCustomers.map((c) => (
                      <tr key={c.id} className="group hover:bg-white/50 transition-all">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-[#6358DC] rounded-xl flex items-center justify-center text-white font-black italic shadow-lg uppercase text-sm">
                              {c.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-black text-[#2B3674] italic">{c.name}</p>
                              <p className="text-[10px] font-bold text-gray-400">{c.phone}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase italic tracking-widest ${
                            c.status === 'VIP' 
                            ? 'bg-gradient-to-r from-[#FF71A4] to-[#ff9bc1] text-white shadow-md shadow-pink-100' 
                            : 'bg-gray-100 text-gray-400'}`}>
                            {c.status}
                          </span>
                        </td>
                        <td className="px-8 py-6 font-black text-[#2B3674] italic text-xs">
                          {c.total_orders}x
                        </td>
                        <td className="px-8 py-6 text-[#6358DC] font-black text-xs italic">
                          Rp {(c.total_orders * 15000).toLocaleString('id-ID')}
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="text-gray-300 hover:text-[#6358DC] transition-colors"><MoreVertical size={18} /></button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-8 py-20 text-center italic text-gray-400 text-xs font-black uppercase tracking-widest">
                        Pelanggan tidak ditemukan...
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* --- SIDE INFO (KANAN) --- */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Card VIP Stats */}
          <div className="bg-[#FF71A4] rounded-[40px] p-8 text-white shadow-xl relative overflow-hidden group">
            <h4 className="text-[10px] font-black uppercase tracking-widest opacity-80 italic">Loyalty Member</h4>
            <p className="text-4xl font-black mt-3 italic tracking-tight">
              {customers.filter(c => c.status === 'VIP').length} 
              <span className="text-sm not-italic opacity-70 ml-2 uppercase">VIP Pelanggan</span>
            </p>
            <Star className="absolute -right-2 -bottom-2 w-24 h-24 text-white/10 rotate-12 group-hover:scale-110 transition-transform duration-500" />
          </div>

          {/* Recent Activity */}
          <div className="bg-white/40 border border-white rounded-[40px] p-8 shadow-sm backdrop-blur-md">
            <h3 className="text-[10px] font-black text-[#2B3674] uppercase tracking-widest mb-8 italic flex items-center gap-2">
              <History size={16} className="text-[#6358DC]" /> Recent Activity
            </h3>
            <div className="space-y-8">
              {customers.slice(0, 4).map((c, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 border border-gray-50 text-[#6358DC]">
                    <ShoppingBag size={16} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#2B3674] italic leading-none">{c.name}</p>
                    <p className="text-[9px] font-bold text-gray-400 uppercase mt-1 tracking-wider">Baru saja bergabung</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL FORM --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 backdrop-blur-md bg-[#2B3674]/30 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-[45px] shadow-2xl p-10 relative animate-in zoom-in duration-300 border border-white">
            <button onClick={() => setIsModalOpen(false)} className="absolute right-8 top-8 text-gray-300 hover:text-red-500 transition-colors"><X size={24} strokeWidth={3} /></button>
            
            <h3 className="text-2xl font-black text-[#2B3674] italic uppercase tracking-tight">New Customer</h3>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8">Tambah data pelanggan baru</p>

            <form onSubmit={handleAddCustomer} className="space-y-4">
              <input 
                required
                className="w-full bg-gray-50 border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#6358DC] text-sm font-bold text-[#2B3674]"
                placeholder="Nama Pelanggan"
                value={newCustomer.name}
                onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})}
              />
              <input 
                required
                className="w-full bg-gray-50 border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#6358DC] text-sm font-bold text-[#2B3674]"
                placeholder="Nomor WhatsApp"
                value={newCustomer.phone}
                onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})}
              />
              <div className="relative">
                <select 
                  className="w-full bg-gray-50 border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#6358DC] text-sm font-black italic uppercase text-[#2B3674] appearance-none cursor-pointer"
                  value={newCustomer.status}
                  onChange={(e) => setNewCustomer({...newCustomer, status: e.target.value})}
                >
                  <option value="Reguler">REGULER</option>
                  <option value="Member">MEMBER (VIP)</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-[#6358DC] text-white py-5 rounded-[22px] font-black italic uppercase text-xs shadow-xl shadow-indigo-100 hover:scale-[1.02] transition-all mt-4">
                Simpan Pelanggan
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;