import React, { useState, useEffect } from 'react';
import { FaSearch, FaCircle } from "react-icons/fa";
import profileImg from "../assets/profile.jpeg"; 

export default function Header({ openModal }) {
    const [time, setTime] = useState(new Date());

    // Update jam otomatis setiap detik
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString('id-ID', { 
            weekday: 'long', 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });
    };

    return (
        <div id="header-container" className="flex justify-between items-center p-6 bg-transparent">
            
            {/* SISI KIRI: Search & Info Tanggal */}
            <div className="flex flex-col gap-2">
                <div id="search-bar" className="relative w-[400px] group">
                    <input
                        id="search-input"
                        className="bg-white/80 backdrop-blur-md border-none p-3 pl-12 pr-4 w-full rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-[#6358DC] focus:bg-white transition-all text-sm"
                        type="text"
                        placeholder="Cari order, pelanggan, atau transaksi..."
                        onClick={openModal}
                        readOnly
                    />
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-[#6358DC] transition-colors" />
                </div>
                <p className="text-[10px] font-bold text-gray-400 ml-2 uppercase tracking-widest italic">
                    {formatDate(time)} • {time.toLocaleTimeString('id-ID')}
                </p>
            </div>

            {/* SISI KANAN: Status Toko & Profile */}
            <div className="flex items-center gap-6">
                
                {/* Status Toko - Biar ga kosong, tambah indikator operasional */}
                <div className="hidden md:flex flex-col items-end border-r pr-6 border-gray-200">
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-[#2B3674] uppercase italic">BrightWash Status</span>
                        <FaCircle className="text-green-500 animate-pulse" size={8} />
                    </div>
                    <p className="text-[11px] font-bold text-green-600 uppercase tracking-tighter">Menerima Pesanan</p>
                </div>

                {/* Profile Section */}
                <div 
                    id="profile-container" 
                    className="flex items-center gap-4 bg-white p-2 pr-5 rounded-[22px] shadow-sm border border-white hover:shadow-md transition-all cursor-pointer group"
                >
                    <div className="relative">
                        <img
                            id="profile-avatar"
                            src={profileImg}
                            alt="Jihan Zahra"
                            className="w-12 h-12 rounded-2xl object-cover border-2 border-indigo-50 group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-[3px] border-white rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className="text-[9px] font-black bg-[#6358DC] text-white px-2 py-0.5 rounded-md uppercase tracking-tighter">
                                OWNER
                            </span>
                        </div>
                        <span id="profile-text" className="text-[15px] font-black text-[#2B3674] italic leading-tight mt-1">
                            Jihan Zahra
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}