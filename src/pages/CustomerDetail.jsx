import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Mail, Phone, MapPin, 
  ShoppingBag, CreditCard, Star, Clock 
} from 'lucide-react';

// Import data central kamu
import { customers as allCustomers } from "../data/customers"; 

const CustomerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Cari data customer yang spesifik berdasarkan ID dari URL
  const customer = allCustomers.find(c => c.id === id) || {
    id: "N/A",
    name: "Unknown Customer",
    status: "Reguler",
    phone: "-",
    email: "-",
    total_orders: 0
  };

  return (
    <div className="p-8 animate-in fade-in slide-in-from-right-6 duration-700">
      {/* Tombol Back */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-400 hover:text-[#1678F3] font-black uppercase text-[10px] tracking-[0.3em] mb-10 transition-all group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Database
      </button>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* --- SISI KIRI: PROFILE CARD --- */}
        <div className="lg:w-1/3 space-y-6">
          <div className="bg-white/70 backdrop-blur-md rounded-[50px] p-10 border border-white shadow-2xl shadow-blue-100/50 text-center relative overflow-hidden">
            {/* Badge Status */}
            <div className="absolute top-8 right-8">
              <span className={`text-white text-[9px] font-black px-4 py-1.5 rounded-full shadow-lg italic uppercase tracking-widest ${
                customer.status === 'VIP' ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-gray-400'
              }`}>
                {customer.status} Member
              </span>
            </div>

            {/* Avatar Gede */}
            <div className="w-32 h-32 bg-blue-50 rounded-[40px] mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-xl">
              <span className="text-4xl font-black text-[#1678F3] italic">{customer.name.charAt(0)}</span>
            </div>

            <h2 className="text-2xl font-black text-[#1678F3] uppercase italic tracking-tighter leading-none mb-2">
              {customer.name}
            </h2>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Customer ID: {customer.id}</p>

            {/* Quick Info */}
            <div className="space-y-4 text-left border-t border-blue-50 pt-8">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1678F3] group-hover:bg-[#1678F3] group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Email</p>
                  <p className="text-xs font-bold text-gray-700">{customer.email || 'No Email'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1678F3] group-hover:bg-[#1678F3] group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Phone</p>
                  <p className="text-xs font-bold text-gray-700">{customer.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1678F3] group-hover:bg-[#1678F3] group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Address</p>
                  <p className="text-xs font-bold text-gray-700 leading-tight">Pekanbaru, Riau, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SISI KANAN: STATS & ACTIVITY --- */}
        <div className="lg:w-2/3 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1678F3] rounded-[40px] p-8 text-white shadow-xl relative overflow-hidden">
               <ShoppingBag className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10" />
               <p className="text-[9px] font-black uppercase tracking-widest opacity-70 italic mb-2">Total Orders</p>
               <h3 className="text-4xl font-black italic">{customer.total_orders}x</h3>
            </div>
            <div className="bg-white rounded-[40px] p-8 border border-white shadow-xl shadow-blue-100/30">
               <CreditCard className="text-[#4DBAE9] mb-4" size={24} />
               <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest italic mb-2">Estimated Spent</p>
               <h3 className="text-2xl font-black text-[#1678F3] italic">
                 Rp {(customer.total_orders * 15000).toLocaleString('id-ID')}
               </h3>
            </div>
            <div className="bg-white rounded-[40px] p-8 border border-white shadow-xl shadow-blue-100/30">
               <Star className="text-yellow-400 mb-4" size={24} />
               <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest italic mb-2">Membership</p>
               <h3 className="text-xl font-black text-[#1678F3] italic uppercase">{customer.status}</h3>
            </div>
          </div>

          {/* Last Activity Table */}
          <div className="bg-white/70 backdrop-blur-md rounded-[50px] p-10 border border-white shadow-2xl shadow-blue-100/50">
            <h3 className="text-[10px] font-black text-[#1678F3] uppercase tracking-[0.4em] italic mb-8 flex items-center gap-2">
              <Clock size={16} /> Recent Transactions
            </h3>
            
            {customer.total_orders > 0 ? (
              <div className="space-y-6">
                {[...Array(Math.min(customer.total_orders, 3))].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 hover:bg-blue-50/50 rounded-[25px] transition-all border border-transparent hover:border-blue-50">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#1678F3]">
                           <ShoppingBag size={18} />
                        </div>
                        <div>
                           <p className="text-sm font-black text-[#1678F3] italic uppercase">Cuci Setrika Premium</p>
                           <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Mei 2024 • ORD-0{customer.id.split('-')[1]}-{i+1}</p>
                        </div>
                     </div>
                     <div className="text-right">
                        <p className="text-sm font-black text-[#1678F3] italic">Rp 45.000</p>
                        <span className="text-[8px] font-black bg-emerald-50 text-emerald-500 px-3 py-1 rounded-full uppercase tracking-tighter">Completed</span>
                     </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-10 text-center opacity-30 italic font-bold uppercase text-xs tracking-widest">
                No transactions yet
              </div>
            )}
            
            <button className="w-full mt-10 py-5 bg-blue-50 text-[#1678F3] font-black text-[10px] uppercase tracking-[0.3em] rounded-[25px] hover:bg-[#1678F3] hover:text-white transition-all">
              See All History
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerDetail;