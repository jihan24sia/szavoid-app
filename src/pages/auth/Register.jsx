import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, User, Eye, EyeOff, Sparkles, Waves, ArrowRight } from 'lucide-react';

export default function Register() {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulasi register
        setTimeout(() => {
            setLoading(false);
            navigate('/login');
        }, 1500);
    };

    return (
        <div className="fixed inset-0 bg-[#F8FAFC] flex items-center justify-center p-6 z-[999]">
            
            {/* CARD UTAMA */}
            <div className="bg-white w-full max-w-[1100px] h-[680px] rounded-[60px] shadow-[0_35px_100px_rgba(30,136,229,0.15)] flex overflow-hidden relative border border-white">
                
                {/* --- SISI KIRI: FORM (55%) --- */}
                <div className="w-full lg:w-[55%] p-12 md:p-20 flex flex-col justify-between z-10 bg-white overflow-y-auto custom-scrollbar">
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
                    <div className="max-w-[400px] w-full py-8">
                        <h2 className="text-5xl font-black text-[#0F172A] mb-2 tracking-tighter italic uppercase">Join Us.</h2>
                        <p className="text-gray-400 font-bold text-sm mb-8 ml-1">
                            Already a member? <Link to="/login" className="text-[#FF71A4] border-b-2 border-pink-50 hover:border-pink-500 transition-all ml-1 font-black uppercase text-[12px]">Sign In</Link>
                        </p>

                        <form onSubmit={handleRegister} className="space-y-4">
                            {/* Input Full Name */}
                            <div className="space-y-1.5">
                                <label className="text-gray-400 text-[9px] font-black uppercase tracking-widest ml-4">Owner Name</label>
                                <div className="relative group">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1E88E5] transition-colors" size={18} />
                                    <input
                                        type="text" required
                                        className="w-full bg-gray-50/50 border-2 border-transparent rounded-full py-3.5 pl-14 pr-6 text-sm font-bold text-gray-700 outline-none focus:bg-white focus:border-[#1E88E5] transition-all"
                                        placeholder="Full Name"
                                    />
                                </div>
                            </div>

                            {/* Input Email */}
                            <div className="space-y-1.5">
                                <label className="text-gray-400 text-[9px] font-black uppercase tracking-widest ml-4">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1E88E5] transition-colors" size={18} />
                                    <input
                                        type="email" required
                                        className="w-full bg-gray-50/50 border-2 border-transparent rounded-full py-3.5 pl-14 pr-6 text-sm font-bold text-gray-700 outline-none focus:bg-white focus:border-[#1E88E5] transition-all"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            {/* Input Password */}
                            <div className="space-y-1.5">
                                <label className="text-gray-400 text-[9px] font-black uppercase tracking-widest ml-4">Create Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1E88E5] transition-colors" size={18} />
                                    <input
                                        type={showPass ? "text" : "password"} required
                                        className="w-full bg-gray-50/50 border-2 border-transparent rounded-full py-3.5 pl-14 pr-14 text-sm font-bold text-gray-700 outline-none focus:bg-white focus:border-[#1E88E5] transition-all"
                                        placeholder="••••••••"
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

                            {/* Submit Button */}
                            <button
                                disabled={loading}
                                className="w-full bg-[#1E88E5] hover:bg-[#1565C0] text-white font-black py-4.5 rounded-full mt-6 flex items-center justify-center gap-3 shadow-2xl shadow-blue-200 transition-all active:scale-95 uppercase text-xs tracking-[0.2em] italic py-4"
                            >
                                {loading ? "Processing..." : <span className="flex items-center gap-2">Create Account <ArrowRight size={16}/></span>}
                            </button>
                        </form>
                    </div>
                    
                    <p className="text-[9px] text-gray-300 font-bold uppercase tracking-[0.3em]">© 2024 BrightWash Studio Inc.</p>
                </div>

                {/* --- SISI KANAN: THEME AREA (45%) --- */}
                <div className="hidden lg:flex w-[45%] relative items-center justify-center p-12 overflow-hidden">
                    {/* Background Gradient & Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E88E5] to-[#4DBAE9] rounded-l-[100px]"></div>
                    <Waves className="absolute top-[-60px] left-[-60px] text-white/10 scale-[5] -rotate-12 pointer-events-none" />

                    {/* Center Card Samping */}
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
                    
                    {/* Decorative Circle */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>

            </div>
        </div>
    );
}