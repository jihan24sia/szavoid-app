import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { Plus, MapPin, Users, Clock, ChevronRight, ChevronDown, Search } from 'lucide-react';
import profileImg from '../assets/profile.jpeg'; // Pastikan path ini benar sesuai dengan struktur proyek Anda

const Dashboard = () => {
    const navigate = useNavigate();
    const { openSearch } = useOutletContext();
    const [period, setPeriod] = useState('Monthly');

    const statsData = {
        Daily: {
            total: "142", time: "24 Hr", weight: "150 Kg", target: "200 Kg",
            chart: [{ name: '00', val: 10 }, { name: '06', val: 40 }, { name: '12', val: 85 }, { name: '18', val: 142 }]
        },
        Weekly: {
            total: "994", time: "168 Hr", weight: "850 Kg", target: "1.000 Kg",
            chart: [{ name: 'Sn', val: 200 }, { name: 'Sl', val: 500 }, { name: 'Rb', val: 400 }, { name: 'Km', val: 800 }, { name: 'Jm', val: 1240 }]
        },
        Monthly: {
            total: "4.260", time: "748 Hr", weight: "4.200 Kg", target: "5.000 Kg",
            chart: [{ name: 'Jan', val: 3000 }, { name: 'Feb', val: 2000 }, { name: 'Mar', val: 5000 }, { name: 'Apr', val: 9178 }, { name: 'May', val: 4000 }]
        }
    };

    const current = statsData[period];
    return (
        <div className="animate-in fade-in duration-500 h-full flex flex-col gap-6 pb-8">

            {/* --- NEW SEAMLESS HEADER (ALL IN ONE LINE) --- */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-2">
                {/* 1. Judul Dashboard */}
                <div className="shrink-0">
                    <h2 className="text-4xl font-black text-[#2B3674] tracking-tight uppercase italic leading-none">Dashboard</h2>
                    <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mt-2">Ringkasan BrightWash</p>
                </div>

                {/* 2. Search Bar Sejajar (Tengah) */}
                <div className="flex-1 max-w-md w-full">
                    <div 
                        onClick={openSearch}
                        className="bg-white/60 backdrop-blur-md border border-white rounded-[22px] p-1 flex items-center gap-3 cursor-pointer hover:bg-white transition-all shadow-sm group"
                    >
                        <div className="bg-[#F4F7FE] p-2.5 rounded-[18px] text-[#2B3674] group-hover:text-[#6358DC] transition-colors">
                            <Search size={18} />
                        </div>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Cari transaksi atau pelanggan...</span>
                    </div>
                </div>

                {/* 3. Status & Profile (Kanan) */}
                <div className="flex items-center gap-6 shrink-0">
                    <div className="text-right border-r border-gray-200 pr-6 hidden lg:block">
                        <p className="text-[9px] font-black text-[#2B3674] uppercase italic flex items-center justify-end gap-2 tracking-widest">
                            Brightwash Status <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        </p>
                        <p className="text-[10px] font-black text-green-500 uppercase italic">Menerima Pesanan</p>
                    </div>

                    <div className="bg-white/70 backdrop-blur-md px-5 py-2 rounded-[25px] flex items-center gap-3 shadow-sm border border-white hover:scale-105 transition-all cursor-pointer">
                        <div className="relative">
                           <img 
                                src={profileImg} // Memakai foto yang di-import
                                alt="Jihan Zahra"
                                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                            />
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                        </div>
                        <div className="text-left">
                            <span className="bg-[#6358DC] text-[7px] text-white px-2 py-0.5 rounded-md font-black uppercase italic">Owner</span>
                            <p className="text-xs font-black text-[#2B3674] italic leading-tight">Jihan Zahra</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- GRID CONTENT --- */}
            <div className="grid grid-cols-12 gap-6 flex-1">
                {/* AREA KIRI */}
                <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                    {/* CHART CARD */}
                    <div className="bg-[#6358DC] rounded-[45px] p-8 text-white shadow-2xl relative overflow-hidden group">
                        <div className="flex justify-between relative z-10">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Total Order Selesai</p>
                                <h3 className="text-4xl font-black mt-1 italic">{current.total} <span className="text-lg font-light not-italic opacity-50">Pcs</span></h3>
                            </div>

                            <div className="relative group/menu">
                                <button className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-bold h-fit border border-white/10 italic flex items-center gap-2 hover:bg-white/20 transition-all uppercase">
                                    {period} <ChevronDown size={14} />
                                </button>
                                <div className="absolute right-0 mt-2 w-32 bg-white rounded-2xl shadow-xl overflow-hidden hidden group-hover/menu:block z-50 border border-indigo-50">
                                    {['Daily', 'Weekly', 'Monthly'].map((p) => (
                                        <button key={p} onClick={() => setPeriod(p)} className="w-full text-left px-4 py-3 text-[10px] font-black text-[#2B3674] uppercase hover:bg-indigo-50 transition-colors">
                                            {p}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="h-40 w-full mt-4 relative z-10">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={current.chart}>
                                    <defs>
                                        <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#FF71A4" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#FF71A4" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Tooltip contentStyle={{ borderRadius: '15px', border: 'none', fontWeight: 'bold' }} />
                                    <Area type="monotone" dataKey="val" stroke="#FF71A4" strokeWidth={5} fill="url(#colorVal)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="flex justify-between mt-6 border-t border-white/10 pt-6 relative z-10 text-[10px] font-black uppercase opacity-60">
                            <div className="text-center"><p>Time</p><p className="text-white text-sm font-bold mt-1 italic">{current.time}</p></div>
                            <div className="text-center"><p>Weight</p><p className="text-[#FF71A4] text-sm font-bold mt-1 italic">{current.weight}</p></div>
                            <div className="text-center"><p>Target</p><p className="text-white text-sm font-bold mt-1 italic">{current.target}</p></div>
                        </div>
                    </div>

                    {/* QUEUE SECTION */}
                    <div className="bg-white/40 border border-white rounded-[40px] p-6 shadow-sm flex-1">
                        <h3 className="text-xs font-black text-[#2B3674] uppercase tracking-widest flex items-center gap-2 italic mb-4">
                            <Clock size={16} className="text-[#6358DC]" /> Antrean Order
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[1, 2].map((item) => (
                                <div key={item} className="bg-white/60 p-4 rounded-3xl border border-white flex items-center justify-between group hover:bg-white transition-all cursor-pointer shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center font-black text-xs italic">Q{item}</div>
                                        <div>
                                            <p className="text-xs font-black text-[#2B3674]">Customer {item}</p>
                                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Cuci Setrika • 5Kg</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className="text-gray-300 group-hover:text-[#6358DC]" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* AREA KANAN */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                    <div onClick={() => navigate('/orders/new')} className="bg-[#8B80F9] rounded-[35px] p-6 text-white flex items-center gap-4 shadow-xl hover:scale-105 transition-all cursor-pointer group">
                        <div className="p-3 bg-white/20 rounded-2xl group-hover:bg-white group-hover:text-[#8B80F9] transition-all"><Plus strokeWidth={3} /></div>
                        <div>
                            <p className="font-black italic uppercase text-sm">Buat Order Baru</p>
                            <p className="text-[10px] opacity-70 uppercase mt-0.5">Quick Pemesanan</p>
                        </div>
                    </div>

                    <div className="bg-[#FF71A4] rounded-[40px] p-6 text-white shadow-xl">
                        <h4 className="text-[10px] font-black uppercase tracking-widest opacity-70">Cek Pembayaran</h4>
                        <div className="flex justify-between items-end mt-2">
                            <p className="text-3xl font-black italic">Rp 2.450k</p>
                            <p className="text-[8px] bg-black/10 px-2 py-1 rounded-full border border-white/5 font-black uppercase">Unpaid</p>
                        </div>
                    </div>

                    <div className="bg-white/40 border border-white p-6 rounded-[40px] shadow-sm flex-1 flex flex-col gap-3 min-h-[200px]">
                        <p className="text-[10px] font-black text-[#2B3674] uppercase tracking-widest opacity-50 flex items-center gap-2 italic">
                            <MapPin size={14} /> Lokasi Toko
                        </p>
                        <div className="flex-1 bg-slate-200 rounded-[30px] overflow-hidden border-2 border-white relative group">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15958.835153205312!2d101.428781!3d0.573981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1716543123456" className="w-full h-full border-0 grayscale opacity-70 group-hover:grayscale-0 transition-all"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* STAFF SECTION */}
            <div className="bg-white/40 border border-white rounded-[40px] p-6 shadow-sm">
                <h3 className="text-[10px] font-black text-[#2B3674] uppercase tracking-[0.2em] mb-4 flex items-center gap-2 italic opacity-60">
                    <Users size={14} className="text-[#6358DC]" /> Staff On Duty
                </h3>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {['Budi', 'Siti', 'Agus'].map((staff, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 bg-white/60 p-4 rounded-3xl border border-white shadow-sm w-24 shrink-0 hover:bg-white transition-all cursor-pointer">
                            <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center text-[#6358DC] font-black text-sm border border-white">{staff.charAt(0)}</div>
                            <span className="text-[9px] font-black text-gray-700 uppercase">{staff}</span>
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;