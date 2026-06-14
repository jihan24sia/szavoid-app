import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, User, Eye, EyeOff, Sparkles, Waves, ArrowRight, Phone, Shield } from 'lucide-react';
import { supabase } from '../supabaseClient';

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
        <div className="fixed inset-0 bg-[#F8FAFC] flex items-center justify-center p-6 z-[999]">
            {/* CARD UTAMA */}
            <div className="bg-white w-full max-w-[1100px] h-[680px] rounded-[60px] shadow-[0_35px_100px_rgba(30,136,229,0.15)] flex overflow-hidden relative border border-white">

                {/* --- SISI KIRI: FORM (55%) --- */}
                <div className="w-full lg:w-[55%] p-12 md:p-16 flex flex-col justify-between z-10 bg-white overflow-y-auto custom-scrollbar">
                    {/* Brand Logo */}
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-[#1E88E5] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                                <Sparkles size={20} className="text-white" />
                            </div>
                            <h1 className="text-2xl font-black text-[#1E88E5] tracking-tighter uppercase italic">BrightWash</h1>
                        </div>
                        <p className="text-[10px] text-gray-300 font-black uppercase tracking-[0.4em] mt-2 ml-1">Join the Premium Circle</p>
                    </div>

                    {/* Form Content */}
                    <div className="max-w-[400px] w-full py-4 mx-auto lg:mx-0">
                        <h2 className="text-4xl font-black text-[#0F172A] mb-1 tracking-tighter italic uppercase">Join Us.</h2>
                        <p className="text-gray-400 font-bold text-xs mb-6 ml-1">
                            Sudah menjadi anggota? <Link to="/login" className="text-[#FF71A4] border-b-2 border-pink-50 hover:border-pink-500 transition-all ml-1 font-black uppercase text-[11px]">Masuk</Link>
                        </p>

                        <form onSubmit={handleRegister} className="space-y-3.5">
                            {/* Input Full Name */}
                            <div className="space-y-1">
                                <label className="text-gray-400 text-[9px] font-black uppercase tracking-widest ml-4">Nama Lengkap</label>
                                <div className="relative group">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1E88E5] transition-colors" size={18} />
                                    <input
                                        type="text" required
                                        value={name} onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-gray-50/50 border-2 border-transparent rounded-full py-3 pl-14 pr-6 text-xs font-bold text-gray-700 outline-none focus:bg-white focus:border-[#1E88E5] transition-all"
                                        placeholder="Jihan Cantik"
                                        disabled={loading}
                                    />
                                </div>
                            </div>

                            {/* Input Phone */}
                            <div className="space-y-1">
                                <label className="text-gray-400 text-[9px] font-black uppercase tracking-widest ml-4">Nomor WhatsApp</label>
                                <div className="relative group">
                                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1E88E5] transition-colors" size={18} />
                                    <input
                                        type="text" required
                                        value={phone} onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-gray-50/50 border-2 border-transparent rounded-full py-3 pl-14 pr-6 text-xs font-bold text-gray-700 outline-none focus:bg-white focus:border-[#1E88E5] transition-all"
                                        placeholder="08123456789"
                                        disabled={loading}
                                    />
                                </div>
                            </div>

                            {/* Input Email */}
                            <div className="space-y-1">
                                <label className="text-gray-400 text-[9px] font-black uppercase tracking-widest ml-4">Alamat Email</label>
                                <div className="relative group">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1E88E5] transition-colors" size={18} />
                                    <input
                                        type="email" required
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-gray-50/50 border-2 border-transparent rounded-full py-3 pl-14 pr-6 text-xs font-bold text-gray-700 outline-none focus:bg-white focus:border-[#1E88E5] transition-all"
                                        placeholder="you@example.com"
                                        disabled={loading}
                                    />
                                </div>
                            </div>

                            {/* Input Password */}
                            <div className="space-y-1">
                                <label className="text-gray-400 text-[9px] font-black uppercase tracking-widest ml-4">Buat Sandi</label>
                                <div className="relative group">
                                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1E88E5] transition-colors" size={18} />
                                    <input
                                        type={showPass ? "text" : "password"} required
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-gray-50/50 border-2 border-transparent rounded-full py-3 pl-14 pr-14 text-xs font-bold text-gray-700 outline-none focus:bg-white focus:border-[#1E88E5] transition-all"
                                        placeholder="••••••••"
                                        disabled={loading}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPass(!showPass)}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#1E88E5]"
                                    >
                                        {showPass ? <Eye size={18} /> : <EyeOff size={18} />}
                                    </button>
                                </div>
                            </div>

                            {/* Input Dropdown Role */}
                            <div className="space-y-1">
                                <label className="text-gray-400 text-[9px] font-black uppercase tracking-widest ml-4">Role</label>
                                <div className="relative group">
                                    <Shield className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1E88E5] transition-colors" size={18} />
                                    <select
                                        value={role} onChange={(e) => setRole(e.target.value)}
                                        className="w-full bg-gray-50/50 border-2 border-transparent rounded-full py-3 pl-14 pr-6 text-xs font-black uppercase text-gray-700 outline-none focus:bg-white focus:border-[#1E88E5] transition-all appearance-none cursor-pointer"
                                        disabled={loading}
                                    >
                                        <option value="Member">Pelanggan (Member)</option>
                                        <option value="Admin">Staff (Admin)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#1E88E5] hover:bg-[#1565C0] text-white font-black py-3.5 rounded-full mt-4 flex items-center justify-center gap-3 shadow-2xl shadow-blue-200 transition-all active:scale-95 uppercase text-xs tracking-[0.2em] italic disabled:bg-gray-300 disabled:shadow-none"
                            >
                                {loading ? "Processing..." : <span className="flex items-center gap-2">Daftar <ArrowRight size={16} /></span>}
                            </button>
                        </form>
                    </div>

                    <p className="text-[9px] text-gray-300 font-bold uppercase tracking-[0.3em]">© 2026 BrightWash Studio Inc.</p>
                </div>

                {/* --- SISI KANAN: THEME AREA (45%) --- */}
                <div className="hidden lg:flex w-[45%] relative items-center justify-center p-12 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E88E5] to-[#4DBAE9] rounded-l-[100px]"></div>
                    <Waves className="absolute top-[-60px] left-[-60px] text-white/10 scale-[5] -rotate-12 pointer-events-none" />

                    <div className="relative z-10 text-white text-center">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[60px] shadow-2xl">
                            <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                                <Sparkles size={32} className="text-white" />
                            </div>
                            <h3 className="text-4xl font-black italic uppercase tracking-tighter leading-[0.9] mb-4">
                                Start Your <br /> Journey.
                            </h3>
                            <p className="text-sm font-medium opacity-70 leading-relaxed">
                                Join thousands of laundry owners <br /> who already leveled up.
                            </p>
                        </div>
                    </div>
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>

            </div>
        </div>
    );
}