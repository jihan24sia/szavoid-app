import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        // Kita hilangkan background abu-abu cerah dan box pembungkus yang sempit.
        // Layout ini sekarang bertindak sebagai global container yang bersih dan solid.
        <div className="min-h-screen bg-[#0B1329] w-full flex items-center justify-center relative select-none">
            
            {/* AMBIENT BACKGROUND GLOW GLOBAL */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/[0.03] rounded-full blur-[180px] pointer-events-none z-0" />

            {/* MAIN CONTENT PORTAL */}
            {/* Tempat halaman Login atau Register muncul dengan ukuran aslinya secara independen */}
            <div className="w-full relative z-10">
                <Outlet />
            </div>
            
        </div>
    );
}