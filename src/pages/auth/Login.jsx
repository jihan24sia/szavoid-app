import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Lock, User, Eye, EyeOff, Minus, Square, X, Sparkles, Waves } from "lucide-react";
// 💡 Import supabase client kamu (sesuaikan path foldernya ya!)
import { supabase } from "../supabaseClient";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Properti disesuaikan menjadi email dan password untuk Supabase
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

        try {
            // 1. Proses Autentikasi Login ke Supabase Auth
            const { data, error: authError } = await supabase.auth.signInWithPassword({
                email: dataForm.email,
                password: dataForm.password,
            });

            if (authError) throw authError;
            const user = data?.user;

            if (user) {
                // 2. Ambil data 'role' dari tabel 'profiles'
                const { data: profile, error: profileError } = await supabase
                    .from("users")
                    .select("role")
                    .eq("id", user.id)
                    .maybeSingle();

                if (profileError) throw profileError;

                // 3. Logika Pengalihan Halaman Berdasarkan Role
                if (profile && profile.role) {
                    // Memaksa tulisan "Admin" atau "Admin " dari database menjadi "admin" bersih
                    const cleanRole = profile.role.trim().toLowerCase();

                    if (cleanRole === "admin") {
                        alert("Login Berhasil! Selamat Datang Admin BrightWash.");
                        navigate("/dashboard");
                        return;
                    } else if (cleanRole === "member") {
                        alert("Login Berhasil! Selamat Datang di BrightWash Member Area.");
                        navigate(`/memberdashboard/${user.id}`);
                        return;
                    }
                } else {
                    // ⚠️ JIKA SKENARIO INI TERJADI: Berarti trigger Supabase kamu belum memasukkan data ke tabel profiles
                    alert("Data profil Anda belum terbuat di database. Hubungi developer atau cek database trigger Supabase.");
                    setError("Profil pengguna tidak ditemukan di tabel database.");
                }
            }

        } catch (err) {
            setError(err.message || "Login Gagal! Periksa kembali akun Anda.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="fixed inset-0 bg-[#F8FAFC] flex items-center justify-center p-6 z-[999]">

            {/* CARD UTAMA */}
            <div className="bg-white w-full max-w-[1100px] h-[680px] rounded-[60px] shadow-[0_35px_100px_rgba(30,136,229,0.15)] flex overflow-hidden relative border border-white">

                {/* --- SISI KIRI: FORM (55%) --- */}
                <div className="w-full lg:w-[55%] p-12 md:p-20 flex flex-col justify-between z-10 bg-white">
                    {/* Brand Logo */}
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-[#1E88E5] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                                <Sparkles size={20} className="text-white" />
                            </div>
                            <h1 className="text-2xl font-black text-[#1E88E5] tracking-tighter uppercase italic">BrightWash</h1>
                        </div>
                        <p className="text-[10px] text-gray-300 font-black uppercase tracking-[0.4em] mt-2 ml-1">Sistem Laundri Premium</p>
                    </div>

                    {/* Form Content */}
                    <div className="max-w-[400px] w-full">
                        <h2 className="text-6xl font-black text-[#0F172A] mb-2 tracking-tighter italic uppercase">Login.</h2>
                        <p className="text-gray-400 font-bold text-sm mb-10 ml-1">
                            Member baru?<Link to="/register" className="text-[#1E88E5] border-b-2 border-blue-50 hover:border-blue-500 transition-all ml-1 font-black uppercase text-xs tracking-wider">Buat Akun</Link>
                        </p>

                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-xl animate-pulse">
                                <p className="text-red-600 text-[10px] font-black uppercase tracking-widest">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Input Email/Username */}
                            <div className="space-y-2">
                                <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-4">Email Address</label>
                                <div className="relative group">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1E88E5] transition-colors" size={20} />
                                    <input
                                        type="email" name="email" required onChange={handleChange} value={dataForm.email}
                                        className="w-full bg-gray-50/50 border-2 border-transparent rounded-full py-4 pl-16 pr-6 text-sm font-bold text-gray-700 outline-none focus:bg-white focus:border-[#1E88E5] transition-all"
                                        placeholder="masukkan@email.com"
                                        disabled={loading}
                                    />
                                </div>
                            </div>

                            {/* Input Password */}
                            <div className="space-y-2">
                                <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-4">Sandi</label>
                                <div className="relative group">
                                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1E88E5] transition-colors" size={20} />
                                    <input
                                        type={showPassword ? "text" : "password"} name="password" required onChange={handleChange} value={dataForm.password}
                                        className="w-full bg-gray-50/50 border-2 border-transparent rounded-full py-4 pl-16 pr-16 text-sm font-bold text-gray-700 outline-none focus:bg-white focus:border-[#1E88E5] transition-all"
                                        placeholder="••••••••"
                                        disabled={loading}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#1E88E5] transition-colors"
                                        disabled={loading}
                                    >
                                        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Forgot Password Link */}
                            <div className="flex justify-end pr-4">
                                <Link
                                    to="/forgot"
                                    className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-[#1E88E5] transition-colors"
                                >
                                    Lupa Sandi?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#1E88E5] hover:bg-[#1565C0] text-white font-black py-5 rounded-full mt-6 flex items-center justify-center gap-3 shadow-2xl shadow-blue-200 transition-all active:scale-95 uppercase text-xs tracking-[0.2em] italic disabled:bg-gray-300 disabled:shadow-none"
                            >
                                {loading ? <AiOutlineLoading3Quarters className="animate-spin" size={20} /> : "Mulai →"}
                            </button>
                        </form>
                    </div>

                    <p className="text-[9px] text-gray-300 font-bold uppercase tracking-[0.3em]">© 2026 BrightWash Pekanbaru.</p>
                </div>

                {/* --- SISI KANAN: THEME AREA (45%) --- */}
                <div className="hidden lg:flex w-[45%] relative items-center justify-center p-12 overflow-hidden">
                    {/* Background Gradient & Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E88E5] to-[#4DBAE9] rounded-l-[100px]"></div>
                    <Waves className="absolute bottom-[-60px] right-[-60px] text-white/10 scale-[5] rotate-12 pointer-events-none" />

                    {/* Window Control Mockup */}
                    <div className="absolute top-10 right-10 flex gap-4 text-white/40">
                        <Minus size={20} className="cursor-pointer hover:text-white" />
                        <Square size={14} className="mt-1 cursor-pointer hover:text-white" />
                        <X size={20} className="cursor-pointer hover:text-white" />
                    </div>

                    {/* Center Card Samping */}
                    <div className="relative z-10 text-white text-center">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[60px] shadow-2xl">
                            <h3 className="text-5xl font-black italic uppercase tracking-tighter leading-[0.9] mb-4">
                                Bersih & <br /> Cepat.
                            </h3>
                            <p className="text-sm font-medium opacity-70 leading-relaxed mb-8">
                                Kelola layanan laundry Anda <br /> dengan pengalaman dashboard modern.
                            </p>

                            {/* Mini Status Dots */}
                            <div className="flex justify-center gap-2">
                                <div className="h-1.5 w-10 bg-white rounded-full"></div>
                                <div className="h-1.5 w-1.5 bg-white/30 rounded-full"></div>
                                <div className="h-1.5 w-1.5 bg-white/30 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Circle */}
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
                </div>

            </div>
        </div>
    );
}