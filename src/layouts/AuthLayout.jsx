import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F4F7FE] p-4">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-white w-full max-w-md animate-in fade-in zoom-in duration-500">
                
                {/* --- HEADER LOGO BRIGHTWASH --- */}
                <div className="flex flex-col items-center justify-center mb-8">
                    <h1 className="text-4xl font-black text-[#2B3674] italic uppercase tracking-tighter">
                        LAUNDRY
                    </h1>
                    <div className="h-1 w-12 bg-[#6358DC] mt-1 rounded-full"></div>
                </div>

                {/* Tempat halaman Login muncul */}
                <Outlet/>

                
            </div>
        </div>
    )
}