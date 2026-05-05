import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Lock, User, EyeOff, Minus, Square, X } from "lucide-react"; 
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        axios.post("https://dummyjson.com/user/login", {
            username: dataForm.email,
            password: dataForm.password,
        })
        .then(() => navigate("/"))
        .catch((err) => setError(err.response?.data?.message || "Login Gagal!"))
        .finally(() => setLoading(false));
    };

    return (
        // Wrapper utama supaya konten di tengah layar & background bersih
        <div className="fixed inset-0 bg-[#F0F4F9] flex items-center justify-center p-6 z-[999]">
            
            {/* CARD UTAMA (White Box) */}
            <div className="bg-white w-full max-w-[1100px] h-[650px] rounded-[50px] shadow-2xl flex overflow-hidden relative border border-white">
                
                {/* --- SISI KIRI: FORM (60%) --- */}
                <div className="w-full lg:w-[60%] p-16 flex flex-col justify-between z-10">
                    {/* Brand Logo */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-black tracking-tight">BrightWash</h1>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest">Subtitle web application</p>
                    </div>

                    {/* Form Center */}
                    <div className="max-w-[400px]">
                        <h2 className="text-6xl font-semibold text-black mb-3 tracking-tighter">Get's Started</h2>
                        <p className="text-gray-400 font-medium mb-10">
                            Don't have Account ? <Link to="/register" className="text-[#1E88E5] font-bold hover:underline">Sign Up</Link>
                        </p>

                        {error && <p className="mb-4 text-red-500 text-xs font-bold italic">{error}</p>}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm font-semibold ml-1">Username</label>
                                <div className="relative">
                                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text" name="email" required onChange={handleChange}
                                        className="w-full bg-white border border-gray-100 rounded-full py-4 pl-14 pr-6 text-gray-700 outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#1E88E5] transition-all shadow-sm"
                                        placeholder="Insert Username"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm font-semibold ml-1">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="password" name="password" required onChange={handleChange}
                                        className="w-full bg-white border border-gray-100 rounded-full py-4 pl-14 pr-14 text-gray-700 outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#1E88E5] transition-all shadow-sm"
                                        placeholder="••••••••"
                                    />
                                    <EyeOff className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer" size={20} />
                                </div>
                            </div>

                            <button
                                disabled={loading}
                                className="w-full bg-[#1E88E5] hover:bg-[#1976D2] text-white font-bold py-4 rounded-full mt-6 flex items-center justify-center gap-3 shadow-xl shadow-blue-200 transition-all active:scale-95"
                            >
                                {loading ? <AiOutlineLoading3Quarters className="animate-spin" size={20} /> : "Login →"}
                            </button>
                        </form>
                    </div>
                    
                    {/* Empty spacer untuk footer-like alignment */}
                    <div className="h-4"></div>
                </div>

                {/* --- SISI KANAN: BLUE CURVE AREA (40%) --- */}
                <div className="hidden lg:block w-[40%] bg-white relative">
                    {/* Area Biru Melengkung */}
                    <div className="absolute inset-0 bg-[#1E88E5] rounded-l-[180px] shadow-[-20px_0_30px_rgba(30,136,229,0.2)]">
                        {/* Mockup Window Buttons */}
                        <div className="absolute top-8 right-10 flex gap-6 text-white/80">
                            <Minus size={22} className="cursor-pointer hover:text-white" />
                            <Square size={16} className="cursor-pointer hover:text-white mt-1" />
                            <X size={22} className="cursor-pointer hover:text-white" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}