import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  PlusCircle,
  ClipboardList,
  MapPin,
  Users,
  Tag,
  Bell,
  LogOut,
  RotateCcw,
  Waves,
  MessageSquare
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const yakin = window.confirm("Yakin ingin keluar dari BrightWash?");
    if (yakin) {
        navigate('/login');
    }
  };

  const menuItems = [
    { path: '/', name: 'Dashboard', icon: <LayoutDashboard size={20} />, exact: true },
    { path: '/orders/new', name: 'Pemesanan Baru', icon: <PlusCircle size={20} /> },
    { path: '/orders', name: 'Manajemen Order', icon: <ClipboardList size={20} />, exact: true },
    { path: '/tracking', name: 'Tracking Status', icon: <MapPin size={20} /> },
    { path: '/customers', name: 'Data Pelanggan', icon: <Users size={20} /> },
    { path: '/services', name: 'Layanan & Harga', icon: <Tag size={20} /> },
    { path: '/interactions', name: 'Interaksi', icon: <MessageSquare size={20} /> },
    { path: '/history', name: 'Riwayat', icon: <RotateCcw size={20} /> },
  ];

  return (
    <aside className="w-72 h-[calc(100vh-2rem)] sticky top-4 pl-4">
      {/* Warna Background diganti ke Biru Signature #1678F3 */}
      <div className="h-full bg-[#1678F3] rounded-[45px] shadow-2xl shadow-blue-200 flex flex-col overflow-hidden relative">

        {/* Logo Section */}
        <div className="p-8 mb-4 flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
            <Waves className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-white text-2xl font-black tracking-tighter italic uppercase">
              Bright<span className="text-[#4DBAE9]">Wash</span>
            </h1>
            <p className="text-white/50 text-[9px] font-black tracking-[0.3em] uppercase">Premium Laundry</p>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar relative z-10">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.exact}
              className={({ isActive }) => `
                flex items-center gap-4 px-6 py-4 rounded-[25px] transition-all duration-300 group
                ${isActive
                  ? 'bg-white text-[#1678F3] shadow-xl shadow-blue-900/20 scale-[1.02]'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'}
              `}
            >
              <div className="shrink-0 transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <span className="font-black text-xs uppercase tracking-tight">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* User & Logout Section */}
        <div className="p-6 mt-auto relative z-10">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-[30px] border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#4DBAE9] overflow-hidden border-2 border-white/20 flex items-center justify-center text-white font-black shadow-inner">
              J
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-white text-xs font-black truncate uppercase">Admin Jihan</p>
              <p className="text-white/40 text-[9px] font-bold uppercase">Online Now</p>
            </div>
            {/* Tombol Logout - Diganti ke Putih agar kontras di background biru */}
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-red-500 rounded-2xl transition-all active:scale-90 group"
            >
              <LogOut size={20} className="text-white group-hover:scale-110" />
            </button>
          </div>
        </div>

        {/* Efek Cahaya / Gelembung (Vibe Laundry) */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#4DBAE9]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </aside>
  );
};

export default Sidebar;