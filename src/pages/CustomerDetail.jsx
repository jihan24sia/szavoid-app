import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Mail, Phone, MapPin, 
  ShoppingBag, CreditCard, Star, Clock,
  AtSign, Globe, Calendar, User,
  ShieldCheck, UserCheck, Ticket, CalendarDays 
} from 'lucide-react';

import { customers as allCustomers } from "../data/customers"; 

const CustomerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Cari data customer
  const customer = allCustomers.find(c => c.id === id) || {
    id: "N/A", name: "Unknown", status: "Reguler", phone: "-", email: "-", 
    address: "-", city: "-", social: "-", avatar: "", total_orders: 0,
    is_active: true, join_date: "01 Jan 2024", membership_level: "Bronze", referral_code: "BW-NEW"
  };

  return (
    <div className="p-4 animate-in fade-in slide-in-from-right-6 duration-700">
      {/* Top Navigation */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-400 hover:text-[#1678F3] font-black uppercase text-[10px] tracking-[0.3em] mb-10 transition-all group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Database
      </button>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        
        {/* --- LEFT SIDE: PROFILE CARD (PERSONAL INFO) --- */}
        <div className="lg:w-[35%] space-y-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-[60px] p-12 border border-white shadow-2xl shadow-blue-100/40 text-center relative overflow-hidden">
            
            {/* Status Badge */}
            <div className="absolute top-10 right-10">
              <span className={`text-[8px] font-black px-4 py-2 rounded-full shadow-sm italic uppercase tracking-widest border ${
                customer.status === 'VIP' 
                ? 'bg-orange-50 text-orange-500 border-orange-100' 
                : 'bg-gray-50 text-gray-400 border-gray-100'
              }`}>
                {customer.status} Member
              </span>
            </div>

            {/* Avatar Ring */}
            <div className="relative inline-block mb-8">
               <div className="w-36 h-36 p-2 rounded-[50px] bg-gradient-to-tr from-[#1678F3] to-[#4DBAE9] shadow-2xl shadow-blue-200">
                  <img 
                    src={customer.avatar || `https://ui-avatars.com/api/?name=${customer.name}&background=random`} 
                    className="w-full h-full object-cover rounded-[42px] border-4 border-white"
                    alt="profile"
                  />
               </div>
            </div>

            <h2 className="text-3xl font-black text-[#1678F3] uppercase italic tracking-tighter leading-none mb-1">
              {customer.name}
            </h2>
            <p className="text-[10px] font-black text-[#4DBAE9] uppercase tracking-[0.4em] mb-10">@{customer.nickname || 'customer'}</p>

            <div className="space-y-6 text-left border-t border-blue-50 pt-10">
              <InfoItem icon={<Phone size={18}/>} label="WhatsApp" value={customer.phone} />
              <InfoItem icon={<Mail size={18}/>} label="Email Address" value={customer.email} />
              <InfoItem icon={<AtSign size={18}/>} label="Social Media" value={customer.social} />
              <InfoItem icon={<MapPin size={18}/>} label="Location" value={`${customer.address}, ${customer.city}`} />
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-[40px] p-8 grid grid-cols-2 gap-4 border border-blue-100/50">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-[#1678F3] shadow-sm"><User size={14}/></div>
                <div className="text-[9px] font-black text-gray-400 uppercase italic leading-tight">Gender<br/><span className="text-[#1678F3]">{customer.gender || 'N/A'}</span></div>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-[#1678F3] shadow-sm"><Calendar size={14}/></div>
                <div className="text-[9px] font-black text-gray-400 uppercase italic leading-tight">Born<br/><span className="text-[#1678F3]">{customer.birth_date || 'N/A'}</span></div>
             </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: STATS & ACCOUNT DATA --- */}
        <div className="lg:w-[65%] space-y-8">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              icon={<ShoppingBag size={24}/>} 
              label="Total Orders" 
              value={`${customer.total_orders}x`}
              color="bg-[#1678F3] text-white" 
            />
            <StatCard 
              icon={<CreditCard size={24}/>} 
              label="Money Spent" 
              value={`Rp ${(customer.total_orders * 15000).toLocaleString('id-ID')}`}
              color="bg-white text-[#1678F3]" 
            />
            <StatCard 
              icon={<Star size={24}/>} 
              label="Point Rewards" 
              value={`${customer.total_orders * 10} pts`}
              color="bg-white text-orange-400" 
            />
          </div>

          {/* Account & Membership Section (DATA BARU) */}
          <div className="bg-white/80 backdrop-blur-md rounded-[50px] p-10 border border-white shadow-2xl shadow-blue-100/50">
            <h3 className="text-[10px] font-black text-[#1678F3] uppercase tracking-[0.4em] italic mb-8 flex items-center gap-2">
              <ShieldCheck size={16} /> Account & Membership
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-5 bg-gray-50 rounded-[30px] border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm ${customer.is_active ? 'bg-green-500 text-white' : 'bg-red-400 text-white'}`}>
                      <UserCheck size={18} />
                    </div>
                    <div>
                      <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Status</p>
                      <p className="text-xs font-black text-gray-700 uppercase italic">{customer.is_active ? 'Active' : 'Inactive'}</p>
                    </div>
                  </div>
                  <div className={`w-10 h-5 rounded-full relative ${customer.is_active ? 'bg-green-100' : 'bg-red-100'}`}>
                    <div className={`absolute top-1 w-3 h-3 rounded-full transition-all ${customer.is_active ? 'right-1 bg-green-500' : 'left-1 bg-red-500'}`}></div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5">
                  <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1678F3]">
                    <CalendarDays size={18} />
                  </div>
                  <div>
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Registered Since</p>
                    <p className="text-xs font-bold text-gray-700">{customer.join_date || '01 Jan 2024'}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-[35px] text-white shadow-lg shadow-blue-200">
                  <p className="text-[8px] font-black uppercase tracking-widest opacity-80 mb-1">Tier Level</p>
                  <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-black italic uppercase tracking-tighter">{customer.membership_level || 'Bronze'}</h4>
                    <Star size={24} fill="currentColor" className="text-yellow-300" />
                  </div>
                </div>

                <div className="p-5 bg-blue-50 rounded-[30px] border border-blue-100 flex items-center justify-between">
                  <div>
                    <p className="text-[8px] font-black text-[#1678F3] uppercase tracking-widest mb-1">Referral Code</p>
                    <code className="text-sm font-black text-gray-700 uppercase">{customer.referral_code || 'BW-00X'}</code>
                  </div>
                  <button className="bg-white p-2.5 rounded-xl shadow-sm text-[#1678F3] hover:bg-[#1678F3] hover:text-white transition-all">
                    <Ticket size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent History Table */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[50px] p-12 border border-white shadow-2xl shadow-blue-100/30">
            <h3 className="text-sm font-black text-[#1678F3] uppercase tracking-[0.4em] italic flex items-center gap-3 mb-8">
              <Clock size={20} /> Transaction History
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="group flex items-center justify-between p-6 bg-[#F8FAFC]/50 hover:bg-white rounded-[35px] transition-all border border-transparent hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/20">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1678F3] shadow-sm group-hover:bg-[#1678F3] group-hover:text-white transition-all">
                      <Globe size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#1678F3] italic uppercase">Laundry Service #{i+1}</p>
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-1">12 Mei 2026 • #INV-00{i+1}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-black text-[#1678F3] italic leading-none mb-2">Rp 45.000</p>
                    <span className="bg-green-50 text-green-500 text-[8px] font-black px-3 py-1 rounded-full uppercase italic border border-green-100">Paid</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Small Components
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-5 group">
    <div className="w-11 h-11 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1678F3] group-hover:bg-[#1678F3] group-hover:text-white transition-all duration-300 shadow-sm border border-blue-100/50">
      {icon}
    </div>
    <div className="overflow-hidden">
      <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-0.5">{label}</p>
      <p className="text-xs font-bold text-gray-700 truncate group-hover:text-[#1678F3] transition-colors">{value}</p>
    </div>
  </div>
);

const StatCard = ({ icon, label, value, color }) => (
  <div className={`${color} rounded-[45px] p-8 shadow-xl shadow-blue-100/20 relative overflow-hidden group border border-white/50`}>
    <div className="relative z-10">
      <div className="mb-4 opacity-80 group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <p className="text-[9px] font-black uppercase tracking-widest opacity-60 italic mb-1">{label}</p>
      <h3 className="text-3xl font-black italic tracking-tighter">{value}</h3>
    </div>
    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
      {React.cloneElement(icon, { size: 100 })}
    </div>
  </div>
);

export default CustomerDetail;