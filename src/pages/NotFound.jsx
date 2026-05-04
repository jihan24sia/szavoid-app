import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

            <h1 className="text-6xl font-bold text-red-500">404</h1>

            <p className="text-xl mt-4 font-semibold">
                Oops! Page not found
            </p>

            <p className="text-gray-500 mt-2 mb-6">
                Halaman yang kamu cari tidak tersedia.
            </p>

            <Link
                to="/"
                className="bg-[#6358DC] text-white px-8 py-3 rounded-[20px] font-black uppercase italic shadow-lg shadow-indigo-100 hover:bg-[#5247c9] transition-all active:scale-95 flex items-center gap-2"
            >
                Kembali ke Dashboard
            </Link>

        </div>
    );
}