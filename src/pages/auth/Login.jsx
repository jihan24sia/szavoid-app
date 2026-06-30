import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Lock, Mail, Eye, EyeOff, Sparkles, ShieldAlert } from "lucide-react";
// 💡 Import supabase client kamu
import { supabase } from "../../supabaseClient";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
    });

    // ── AUTOMATIC ROLE CHECKER (UNTUK GOOGLE OAUTH & SESSION) ──
    // Efek ini otomatis berjalan saat user kembali dari halaman login Google
    useEffect(() => {
        const checkSessionAndRole = async () => {
            setLoading(true);
            const { data: { session } } = await supabase.auth.getSession();
            
            if (session?.user) {
                const user = session.user;
                try {
                    // Ambil data role berdasarkan ID user yang login
                    const { data: profile, error: profileError } = await supabase
                        .from("users")
                        .select("role")
                        .eq("id", user.id)
                        .maybeSingle();

                    if (profileError) throw profileError;

                    if (profile && profile.role) {
                        const cleanRole = profile.role.trim().toLowerCase();
                        if (cleanRole === "admin") {
                            navigate("/dashboard");
                        } else if (cleanRole === "member") {
                            navigate(`/memberdashboard/${user.id}`);
                        }
                    } else {
                        setError("Akun Google berhasil masuk, tetapi data profil member belum terdaftar di database.");
                    }
                } catch (err) {
                    setError(err.message || "Gagal membaca hak akses user.");
                }
            }
            setLoading(false);
        };

        checkSessionAndRole();
    }, [navigate]);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    // 1. FUNGSI LOGIN MANUAL (EMAIL & PASSWORD)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const { data, error: authError } = await supabase.auth.signInWithPassword({
                email: dataForm.email,
                password: dataForm.password,
            });

            if (authError) throw authError;
            const user = data?.user;

            if (user) {
                const { data: profile, error: profileError } = await supabase
                    .from("users")
                    .select("role")
                    .eq("id", user.id)
                    .maybeSingle();

                if (profileError) throw profileError;

                if (profile && profile.role) {
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
                    setError("Profil tidak ditemukan di database.");
                }
            }
        } catch (err) {
            setError(err.message || "Gagal masuk. Periksa kembali akun Anda.");
        } finally {
            setLoading(false);
        }
    };

    // 2. FUNGSI LOGIN GOOGLE (Mengarahkan kembali ke halaman ini sendiri untuk divalidasi oleh useEffect)
    const handleGoogleLogin = async () => {
        setError("");
        try {
            const { error: oauthError } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    // Kita arahkan kembali ke halaman login ini sendiri agar useEffect di atas yang memproses rolenya
                    redirectTo: window.location.origin + "/login", 
                },
            });
            if (oauthError) throw oauthError;
        } catch (err) {
            setError(err.message || "Gagal melakukan otentikasi Google.");
        }
    };

    return (
        <div className="min-h-screen bg-[#F4F7FA] flex items-center justify-center p-4 md:p-8 relative overflow-hidden font-sans selection:bg-[#1E88E5] selection:text-white">
            
            {/* AMBIENT SOFT BLUE BACKGROUND (Kembali ke Biru Laundry Fresh!) */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#1E88E5]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#4DBAE9]/10 rounded-full blur-[120px] pointer-events-none" />

            {/* MAIN PREMIUM EMBEDDED CARD */}
            <div className="w-full max-w-5xl bg-white rounded-[40px] shadow-[0_30px_80px_rgba(30,136,229,0.06)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-white relative z-10">
                
                {/* ── SISI KIRI: ARTISTIC VISUAL HERO (5 Columns) ── */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#1E88E5] via-[#1565C0] to-[#0D47A1] p-10 flex flex-col justify-between text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-60 pointer-events-none" />
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                    
                    {/* Top Branding */}
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="w-10 h-10 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-inner">
                            <Sparkles size={18} className="text-white animate-pulse" />
                        </div>
                        <div>
                            <span className="font-extrabold tracking-tight text-base block">BrightWash</span>
                            <span className="text-[9px] text-blue-200 font-bold uppercase tracking-widest block">Premium Care</span>
                        </div>
                    </div>

                    {/* Middle Text Presentation */}
                    <div className="my-16 relative z-10 space-y-3">
                        <span className="bg-white/10 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 inline-block">
                            Sistem Terintegrasi
                        </span>
                        <h3 className="text-3xl font-black leading-tight tracking-tight">
                            Kelola Cucian <br/> Lebih Pintar & Cepat.
                        </h3>
                        <p className="text-xs text-blue-100/80 font-medium leading-relaxed max-w-xs">
                            Pantau proses laundry premium, kelola transaksi, dan akses layanan digital dalam satu dasbor terpadu.
                        </p>
                    </div>

                    {/* Bottom Info */}
                    <div className="flex items-center justify-between text-[10px] font-bold text-blue-200/60 uppercase tracking-wider relative z-10 pt-4 border-t border-white/10">
                        <span>Workspace Node v2.5</span>
                        <span>• Secure</span>
                    </div>
                </div>

                {/* ── SISI KANAN: MODERN MINIMALIST INPUT AREA (7 Columns) ── */}
                <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center bg-white">
                    <div className="max-w-[380px] w-full mx-auto">
                        
                        {/* Greeting Header */}
                        <div className="mb-8 text-center lg:text-left">
                            <h2 className="text-3xl font-black text-slate-800 tracking-tight">Selamat Datang</h2>
                            <p className="text-slate-400 text-xs font-semibold mt-1">Masukkan detail akun Anda untuk masuk ke sistem.</p>
                        </div>

                        {/* Error Alert Card */}
                        {error && (
                            <div className="bg-rose-50 border border-rose-100 p-4 mb-6 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                <ShieldAlert size={16} className="text-rose-500 shrink-0 mt-0.5" />
                                <p className="text-rose-700 text-xs font-semibold leading-relaxed">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Input Email */}
                            <div className="space-y-1.5">
                                <label className="text-slate-700 text-[10px] font-bold uppercase tracking-wider ml-1 block">Email Akun</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1E88E5] transition-colors" size={16} />
                                    <input
                                        type="email" name="email" required onChange={handleChange} value={dataForm.email}
                                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold text-slate-800 outline-none focus:bg-white focus:border-[#1E88E5] focus:ring-4 focus:ring-[#1E88E5]/5 transition-all placeholder:text-slate-400/60 font-medium"
                                        placeholder="contoh@brightwash.com" disabled={loading}
                                    />
                                </div>
                            </div>

                            {/* Input Password */}
                            <div className="space-y-1.5">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-slate-700 text-[10px] font-bold uppercase tracking-wider block">Kata Sandi</label>
                                    <Link to="/forgot" className="text-[10px] font-extrabold text-[#1E88E5] hover:underline">Lupa Sandi?</Link>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1E88E5] transition-colors" size={16} />
                                    <input
                                        type={showPassword ? "text" : "password"} name="password" required onChange={handleChange} value={dataForm.password}
                                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-2xl py-3.5 pl-12 pr-12 text-xs font-bold text-slate-800 outline-none focus:bg-white focus:border-[#1E88E5] focus:ring-4 focus:ring-[#1E88E5]/5 transition-all placeholder:text-slate-400/60"
                                        placeholder="••••••••" disabled={loading}
                                    />
                                    <button
                                        type="button" onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#1E88E5] transition-colors" disabled={loading}
                                    >
                                        {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit" disabled={loading}
                                className="w-full bg-[#1E88E5] hover:bg-[#1565C0] text-white font-bold py-4 rounded-2xl mt-2 flex items-center justify-center gap-2 shadow-lg shadow-[#1E88E5]/20 hover:shadow-[#1E88E5]/30 transition-all hover:scale-[1.01] active:scale-[0.99] text-xs uppercase tracking-wider disabled:bg-slate-100 disabled:text-slate-400 disabled:pointer-events-none"
                            >
                                {loading ? <AiOutlineLoading3Quarters className="animate-spin" size={16} /> : "Masuk Aplikasi"}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-slate-100"></div>
                            <span className="flex-shrink mx-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">Atau Hubungkan Lewat</span>
                            <div className="flex-grow border-t border-slate-100"></div>
                        </div>

                        {/* Google Login OAuth Button */}
                      {/* Google Login OAuth Button */}
<button
    type="button"
    onClick={handleGoogleLogin}
    disabled={loading}
    className="w-full bg-white hover:bg-slate-50 text-slate-700 font-bold py-3.5 px-4 border border-slate-200 rounded-2xl flex items-center justify-center gap-3 transition-all text-xs shadow-sm hover:shadow-md active:scale-[0.99] disabled:opacity-50"
>
    {/* LOGO GOOGLE TERBARU (4 COLOR ORIGINAL) */}
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" width="100%" height="100%">
        <path
            fill="#EA4335"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        />
        <path
            fill="#4285F4"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        />
    </svg>
    <span>Lanjutkan dengan Google</span>
</button>
                        {/* Footer Link */}
                        <p className="text-center text-xs font-semibold text-slate-400 mt-8">
                            Belum terdaftar? <Link to="/register" className="text-[#1E88E5] hover:underline font-extrabold ml-1">Buat Akun Member</Link>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
}