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
  RotateCcw
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
    { path: '/orders', name: 'Manajemen Order', icon: <ClipboardList size={20} />, exact: true }, // Tambah exact/end di sini
    { path: '/tracking', name: 'Tracking Status', icon: <MapPin size={20} /> },
    { path: '/customers', name: 'Data Pelanggan', icon: <Users size={20} /> },
    { path: '/services', name: 'Layanan & Harga', icon: <Tag size={20} /> },
    { path: '/notifications', name: 'Notifikasi', icon: <Bell size={20} /> },
    { path: '/history', name: 'Riwayat', icon: <RotateCcw size={20} /> },
  ];

  return (
    <aside className="w-72 h-[calc(100vh-2rem)] sticky top-4">
      <div className="h-full bg-[#6358DC] rounded-[45px] shadow-2xl flex flex-col overflow-hidden relative">

        {/* Logo Section */}
        <div className="p-8 mb-4">
          <h1 className="text-white text-2xl font-black tracking-tighter italic uppercase">
            Bright<span className="text-[#FF78A9]">Wash</span>
          </h1>
          <p className="text-white/50 text-[10px] font-bold tracking-[0.3em] uppercase">Premium Laundry</p>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              // PROPERTI 'end' PENTING: Mencegah tabrakan antara /orders dan /orders/new
              end={item.exact}
              className={({ isActive }) => `
                flex items-center gap-4 px-6 py-4 rounded-[25px] transition-all duration-300 group
                ${isActive
                  ? 'bg-white text-[#6358DC] shadow-lg shadow-black/10 scale-[1.02]'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'}
              `}
            >
              <div className="shrink-0 transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <span className="font-bold text-sm tracking-tight">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* User & Logout Section */}
        <div className="p-6 mt-auto">
          <div className="bg-white/10 p-4 rounded-[30px] border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-3xl bg-white/20 overflow-hidden border border-white/20">
              <img src="src/assets/profile.jpeg" alt="avatar" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-white text-xs font-black truncate">Admin BrightWash</p>
              <p className="text-white/40 text-[9px] font-bold uppercase">Super Admin</p>
            </div>
            {/* Tombol Logout Pink */}
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-white/10 rounded-lg transition-all active:scale-90"
            >
              <LogOut size={24} className="text-[#FF71A4]" /> {/* Ikon pintu pink kamu */}
            </button>
          </div>
        </div>

        {/* Efek Cahaya */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FF78A9]/20 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </aside>
  );
};

export default Sidebar;