import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from 'react';

export default function MainLayout() {
    const [showModal, setShowModal] = useState(false);

    return (
        // 1. Ganti min-h-screen jadi h-screen & overflow-hidden agar layar utama tidak scroll
        <div id="app-container" className="bg-gradient-to-br from-[#E0F2FE] via-[#F0F9FF] to-[#E0F2FE] h-screen w-full flex p-4 gap-4 overflow-hidden font-sans">

            {/* 2. SIDEBAR - Sekarang dia akan netap karena parent-nya h-screen */}
            <div className="flex-none h-full">
                <Sidebar />
            </div>

            {/* 3. MAIN CONTENT AREA */}
            <div id="main-content" className="flex-1 flex flex-col h-full overflow-hidden">
                
                {/* Kontainer Putih Transparan (Glassmorphism) */}
                <div className="flex-1 bg-white/70 backdrop-blur-3xl rounded-[50px] shadow-2xl shadow-blue-100 border border-white/40 flex overflow-hidden">
                    
                    {/* 4. AREA SCROLL HANYA DI SINI */}
                    <main className="flex-1 overflow-y-auto p-8 custom-scrollbar h-full">
                        {/* Konten Halaman (Dashboard, Order, dll) */}
                        <div className="max-w-[1600px] mx-auto">
                            <Outlet context={{ openSearch: () => setShowModal(true) }} />
                        </div>
                    </main>
                </div>

            </div>

            {/* --- MODAL SEARCH (WARNA DISESUAIKAN) --- */}
            {showModal && (
                <div className="fixed inset-0 bg-[#1678F3]/10 backdrop-blur-sm flex items-center justify-center z-[100] animate-in fade-in zoom-in duration-300">
                    <div className="bg-white/90 backdrop-blur-xl p-10 rounded-[50px] w-[550px] shadow-2xl border border-white">
                        <h2 className="text-2xl font-black text-[#1678F3] mb-6 italic uppercase tracking-tighter">Search BrightWash</h2>
                        <input
                            autoFocus
                            type="text"
                            placeholder="Cari ID Order atau Nama Pelanggan..."
                            className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-blue-100 px-8 py-5 rounded-[25px] mb-8 outline-none focus:ring-4 focus:ring-blue-50 transition-all font-bold text-[#1678F3]"
                        />
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-[#1678F3] text-white px-10 py-4 rounded-[22px] font-black uppercase text-xs tracking-widest shadow-lg shadow-blue-200 hover:scale-105 active:scale-95 transition-all"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}