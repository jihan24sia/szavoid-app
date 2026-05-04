import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from 'react';

export default function MainLayout() {
    const [showModal, setShowModal] = useState(false);

    return (
    
        <div id="app-container" className="bg-gradient-to-br from-[#F4F7FE] via-[#E2E8FF] to-[#F4F7FE] min-h-screen flex p-4 gap-4 overflow-hidden">

         
            <Sidebar />

        
            <div id="main-content" className="flex-1 flex flex-col">
                
            
                <div className="flex-1 bg-white/60 backdrop-blur-3xl rounded-[50px] shadow-2xl border border-white/40 flex overflow-hidden">
                    <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                        
                        <Outlet context={{ openSearch: () => setShowModal(true) }} />
                    </main>
                </div>

            </div>

       
            {showModal && (
                <div className="fixed inset-0 bg-[#2B3674]/20 backdrop-blur-sm flex items-center justify-center z-[100] animate-in fade-in zoom-in duration-300">
                    <div className="bg-white/90 backdrop-blur-xl p-8 rounded-[40px] w-[500px] shadow-2xl border border-white">
                        <h2 className="text-2xl font-black text-[#2B3674] mb-6 italic uppercase tracking-tight">Search BrightWash</h2>
                        <input
                            autoFocus
                            type="text"
                            placeholder="Cari ID Order atau Nama Pelanggan..."
                            className="w-full bg-gray-50 border-none px-6 py-4 rounded-2xl mb-6 outline-none focus:ring-2 focus:ring-[#6259E8] transition-all font-medium"
                        />
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-[#6259E8] text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-indigo-100 hover:scale-105 transition-transform"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}