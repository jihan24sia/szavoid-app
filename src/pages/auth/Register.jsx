import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, User, Eye, EyeOff, Sparkles, Waves, ArrowRight, Phone, Shield } from 'lucide-react';
import { supabase } from '../../supabaseClient';

export default function Register() {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);

    // --- State Form Kontrol ---
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Member');

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1. Daftarkan akun ke Supabase Auth + kirim metadata 'name' & 'role'
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        name: name,
                        phone: phone, // Kita sertakan phone agar masuk database
                        role: role.toLowerCase(), // 'admin' atau 'member'
                    }
                }
            });
            if (authError) throw authError;

            // 2. Karena trigger database sudah otomatis mengisi tabel profiles, 
            // kita tidak perlu lagi memanggil perintah `.from('profiles').insert()` di sini!
            if (authData.user) {
                alert('Akun BrightWash berhasil dibuat! Silakan login.');
                navigate('/login');
            }

        } catch (error) {
            alert(`Waduh Gagal Daftar: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-[#F4F7FA] flex items-center justify-center p-4 md:p-8 z-[999] overflow-hidden font-sans selection:bg-[#1E88E5] selection:text-white">
            
            {/* AMBIENT SOFT BLUE BACKGROUND (Persis seperti halaman Login) */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#1E88E5]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#4DBAE9]/10 rounded-full blur-[120px] pointer-events-none" />

            {/* MAIN PREMIUM EMBEDDED CARD */}
            <div className="bg-white w-full max-w-5xl h-auto max-h-[90vh] lg:h-[680px] rounded-[40px] shadow-[0_30px_80px_rgba(30,136,229,0.06)] flex overflow-hidden relative border border-white z-10">

                {/* ── SISI KIRI: MODERN MINIMALIST INPUT AREA (55%) ── */}
                <div className="w-full lg:w-[55%] p-8 md:p-14 flex flex-col justify-between z-10 bg-white overflow-y-auto custom-scrollbar">
                    {/* Brand Logo */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-gradient-to-br from-[#1E88E5] to-[#1565C0] rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20">
                                <Sparkles size={16} className="text-white" />
                            </div>
                            <div>
                                <span className="font-extrabold tracking-tight text-base text-slate-800 block">BrightWash</span>
                                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block">Premium Care</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className="max-w-[380px] w-full py-6 mx-auto lg:mx-0">
                        <div className="mb-6 text-center lg:text-left">
                            <h2 className="text-3xl font-black text-slate-800 tracking-tight">Buat Akun Baru</h2>
                            <p className="text-slate-400 text-xs font-semibold mt-1">
                                Sudah punya akun? <Link to="/login" className="text-[#1E88E5] hover:underline font-extrabold ml-1">Masuk di sini</Link>
                            </p>
                        </div>

                        <form onSubmit={handleRegister} className="space-y-4">
                            {/* Input Full Name */}
                            <div className="space-y-1.5">
                                <label className="text-slate-700 text-[10px] font-bold uppercase tracking-wider ml-1 block">Nama Lengkap</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1E88E5] transition-colors" size={16} />
                                    <input
                                        type="text" required
                                        value={name} onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-xs font-bold text-slate-800 outline-none focus:bg-white focus:border-[#1E88E5] focus:ring-4 focus:ring-[#1E88E5]/5 transition-all placeholder:text-slate-400/60 font-medium"
                                        placeholder="Nama lengkap kamu"
                                        disabled={loading}
                                    />
                                </div>
                            </div>

                            {/* Input Phone */}
                            <div className="space-y-1.5">
                                <label className="text-slate-700 text-[10px] font-bold uppercase tracking-wider ml-1 block">Nomor WhatsApp</label>
                                <div className="relative group">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1E88E5] transition-colors" size={16} />
                                    <input
                                        type="text" required
                                        value={phone} onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-xs font-bold text-slate-800 outline-none focus:bg-white focus:border-[#1E88E5] focus:ring-4 focus:ring-[#1E88E5]/5 transition-all placeholder:text-slate-400/60 font-medium"
                                        placeholder="08123456789"
                                        disabled={loading}
                                    />
                                </div>
                            </div>

                            {/* Input Email */}
                            <div className="space-y-1.5">
                                <label className="text-slate-700 text-[10px] font-bold uppercase tracking-wider ml-1 block">Alamat Email</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1E88E5] transition-colors" size={16} />
                                    <input
                                        type="email" required
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-xs font-bold text-slate-800 outline-none focus:bg-white focus:border-[#1E88E5] focus:ring-4 focus:ring-[#1E88E5]/5 transition-all placeholder:text-slate-400/60 font-medium"
                                        placeholder="contoh@brightwash.com"
                                        disabled={loading}
                                    />
                                </div>
                            </div>

                            {/* Input Password */}
                            <div className="space-y-1.5">
                                <label className="text-slate-700 text-[10px] font-bold uppercase tracking-wider ml-1 block">Buat Kata Sandi</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1E88E5] transition-colors" size={16} />
                                    <input
                                        type={showPass ? "text" : "password"} required
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-2xl py-3 pl-12 pr-12 text-xs font-bold text-slate-800 outline-none focus:bg-white focus:border-[#1E88E5] focus:ring-4 focus:ring-[#1E88E5]/5 transition-all placeholder:text-slate-400/60"
                                        placeholder="••••••••"
                                        disabled={loading}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPass(!showPass)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#1E88E5] transition-colors"
                                    >
                                        {showPass ? <Eye size={16} /> : <EyeOff size={16} />}
                                    </button>
                                </div>
                            </div>

                            {/* Input Dropdown Role */}
                            <div className="space-y-1.5">
                                <label className="text-slate-700 text-[10px] font-bold uppercase tracking-wider ml-1 block">Role Akses</label>
                                <div className="relative group">
                                    <Shield className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1E88E5] transition-colors" size={16} />
                                    <select
                                        value={role} onChange={(e) => setRole(e.target.value)}
                                        className="w-full bg-[#F8FAFC] border border-slate-200 rounded-2xl py-3 pl-12 pr-10 text-xs font-bold text-slate-800 outline-none focus:bg-white focus:border-[#1E88E5] focus:ring-4 focus:ring-[#1E88E5]/5 transition-all appearance-none cursor-pointer"
                                        disabled={loading}
                                    >
                                        <option value="Member">Pelanggan (Member)</option>
                                        <option value="Admin">Staff (Admin)</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-400 group-focus-within:border-t-[#1E88E5]" />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#1E88E5] hover:bg-[#1565C0] text-white font-bold py-4 rounded-2xl mt-2 flex items-center justify-center gap-2 shadow-lg shadow-[#1E88E5]/20 hover:shadow-[#1E88E5]/30 transition-all hover:scale-[1.01] active:scale-[0.99] text-xs uppercase tracking-wider disabled:bg-slate-100 disabled:text-slate-400 disabled:pointer-events-none"
                            >
                                {loading ? "Memproses..." : <span className="flex items-center gap-2">Daftar Akun <ArrowRight size={14} /></span>}
                            </button>
                        </form>
                    </div>

                    <p className="text-[10px] text-slate-400 font-bold tracking-wide text-center lg:text-left mt-4 lg:mt-0">© 2026 BrightWash Studio Inc.</p>
                </div>

                {/* ── SISI KANAN: ARTISTIC VISUAL HERO (45%) ── */}
                <div className="hidden lg:flex w-[45%] bg-gradient-to-br from-[#1E88E5] via-[#1565C0] to-[#0D47A1] p-12 relative items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-60 pointer-events-none" />
                    <Waves className="absolute top-[-60px] left-[-60px] text-white/10 scale-[5] -rotate-12 pointer-events-none" />

                    <div className="relative z-10 text-white text-center">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[32px] shadow-2xl max-w-[320px]">
                            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-inner">
                                <Sparkles size={28} className="text-white animate-pulse" />
                            </div>
                            <h3 className="text-3xl font-black leading-tight tracking-tight mb-3">
                                Mulai Langkah <br /> Pintar Anda.
                            </h3>
                            <p className="text-xs font-medium text-blue-100/80 leading-relaxed">
                                Bergabung bersama ekosistem laundry premium digital untuk kemudahan layanan real-time.
                            </p>
                        </div>
                    </div>
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>

            </div>
        </div>
    );
}