import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GiTerror } from "react-icons/gi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ArrowRight } from "lucide-react"; // Tambahkan lucide-react agar seragam
import axios from "axios";

export default function Login() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
    })

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setDataForm({
            ...dataForm,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        axios
            .post("https://dummyjson.com/user/login", {
                username: dataForm.email,
                password: dataForm.password,
            })
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.data.message);
                    return;
                }
                navigate("/");
            })
            .catch((err) => {
                if (err.response) {
                    setError(err.response.data.message || "Email atau Password salah!");
                } else {
                    setError("Koneksi bermasalah, coba lagi.");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div className="min-h-[400px] flex flex-col justify-center animate-in fade-in zoom-in duration-500">
            {/* --- HEADER LOGIN --- */}
            <div className="mb-10 text-center">
                <h2 className="text-4xl font-black text-[#2B3674] tracking-tight uppercase italic leading-none">
                    BrightWash
                </h2>
                <p className="text-[11px] font-bold text-gray-400 tracking-[0.3em] uppercase mt-2">
                    Laundry Management System
                </p>
            </div>

            {/* --- ERROR MESSAGE --- */}
            {error && (
                <div className="bg-red-50 border border-red-100 mb-6 p-4 rounded-[20px] flex items-center gap-3 animate-bounce">
                    <div className="w-8 h-8 bg-red-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-200">
                        <GiTerror size={18} />
                    </div>
                    <p className="text-xs font-black text-red-600 uppercase italic leading-tight">{error}</p>
                </div>
            )}

            {/* --- LOADING STATUS --- */}
            {loading && (
                <div className="bg-[#6358DC]/10 border border-[#6358DC]/20 mb-6 p-4 rounded-[20px] flex items-center gap-3">
                    <AiOutlineLoading3Quarters className="text-[#6358DC] animate-spin" size={20} />
                    <p className="text-xs font-black text-[#6358DC] uppercase italic">Memverifikasi Data...</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* --- INPUT EMAIL --- */}
                <div className="group">
                    <label className="text-[10px] font-black text-[#2B3674] uppercase tracking-widest ml-4 mb-2 block opacity-60">
                        Email Address
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#6358DC] transition-colors" size={18} />
                        <input
                            type="text"
                            name="email"
                            required
                            className="w-full bg-white border-2 border-transparent rounded-[25px] py-4 pl-12 pr-6 text-sm font-bold text-[#2B3674] shadow-sm shadow-indigo-100 outline-none focus:border-[#6358DC] focus:ring-4 focus:ring-[#6358DC]/5 transition-all placeholder:text-gray-300"
                            placeholder="username / email"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* --- INPUT PASSWORD --- */}
                <div className="group">
                    <label className="text-[10px] font-black text-[#2B3674] uppercase tracking-widest ml-4 mb-2 block opacity-60">
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#6358DC] transition-colors" size={18} />
                        <input
                            type="password"
                            name="password"
                            required
                            className="w-full bg-white border-2 border-transparent rounded-[25px] py-4 pl-12 pr-6 text-sm font-bold text-[#2B3674] shadow-sm shadow-indigo-100 outline-none focus:border-[#6358DC] focus:ring-4 focus:ring-[#6358DC]/5 transition-all placeholder:text-gray-300"
                            placeholder="••••••••"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* --- LOGIN BUTTON --- */}
                <button
                    disabled={loading}
                    type="submit"
                    className="mt-4 w-full bg-[#6358DC] hover:bg-[#5247c9] text-white font-black uppercase italic py-4 rounded-[25px] shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 group active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                    Masuk Sekarang
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
            </form>

            <p className="mt-8 text-center text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                &copy; 2026 BRIGHTWASH PEKANBARU • ALL RIGHTS RESERVED
            </p>
        </div>
    )
}