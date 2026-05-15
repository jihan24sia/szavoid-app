import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Sparkles, Waves, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

export default function Forgot() {
    const navigate = useNavigate();
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleReset = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulasi kirim email
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 bg-[#F8FAFC] flex items-center justify-center p-6 z-[999]">
            
            {/* CARD UTAMA */}
            <div className="bg-white w-full max-w-[1100px] h-[680px] rounded-[60px] shadow-[0_35px_100px_rgba(30,136,229,0.15)] flex overflow-hidden relative border border-white">
                
                {/* --- SISI KIRI: FORM --- */}
                <div className="w-full lg:w-[55%] p-12 md:p-20 flex flex-col justify-between z-10 bg-white">
                    {/* Brand Logo */}
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-[#1E88E5] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                                <Sparkles size={20} className="text-white" />
                            </div>
                            <h1 className="text-2xl font-black text-[#1E88E5] tracking-tighter uppercase italic">BrightWash</h1>
                        </div>
                        <p className="text-[10px] text-gray-300 font-black uppercase tracking-[0.4em] mt-2 ml-1">Account Recovery Service</p>
                    </div>

                    {/* Form Content */}
                    <div className="max-w-[400px] w-full py-8">
                        {!sent ? (
                            <>
                                <h2 className="text-5xl font-black text-[#0F172A] mb-3 tracking-tighter italic uppercase leading-none">Recover.</h2>
                                <p className="text-gray-400 font-bold text-sm mb-10 ml-1 leading-relaxed">
                                    Don't worry! Enter your email and we'll send you a link to reset your password.
                                </p>

                                <form onSubmit={handleReset} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-4">Email Address</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1E88E5] transition-colors" size={20} />
                                            <input
                                                type="email" required
                                                className="w-full bg-gray-50/50 border-2 border-transparent rounded-full py-4 pl-16 pr-6 text-sm font-bold text-gray-700 outline-none focus:bg-white focus:border-[#1E88E5] transition-all"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        disabled={loading}
                                        className="w-full bg-[#1E88E5] hover:bg-[#1565C0] text-white font-black py-5 rounded-full mt-4 flex items-center justify-center gap-3 shadow-2xl shadow-blue-200 transition-all active:scale-95 uppercase text-xs tracking-[0.2em] italic"
                                    >
                                        {loading ? "Sending..." : <span className="flex items-center gap-2">Send Reset Link <Send size={14}/></span>}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="animate-in zoom-in duration-300">
                                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-[30px] flex items-center justify-center mb-6 shadow-lg shadow-green-100">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h2 className="text-4xl font-black text-[#0F172A] mb-3 tracking-tighter italic uppercase">Email Sent!</h2>
                                <p className="text-gray-400 font-bold text-sm mb-10 leading-relaxed">
                                    Check your inbox. We have sent a password recovery link to your email address.
                                </p>
                                <button
                                    onClick={() => setSent(false)}
                                    className="text-[#1E88E5] font-black uppercase text-[10px] tracking-widest hover:underline"
                                >
                                    Didn't receive email? Resend
                                </button>
                            </div>
                        )}

                        <div className="mt-12">
                            <button 
                                onClick={() => navigate('/login')}
                                className="group flex items-center gap-2 text-[10px] font-black text-[#FF71A4] uppercase tracking-widest hover:gap-4 transition-all"
                            >
                                <ArrowLeft size={14} strokeWidth={3} /> Back to Login
                            </button>
                        </div>
                    </div>
                    
                    <p className="text-[9px] text-gray-300 font-bold uppercase tracking-[0.3em]">© 2024 BrightWash Studio Inc.</p>
                </div>

                {/* --- SISI KANAN: THEME AREA --- */}
                <div className="hidden lg:flex w-[45%] relative items-center justify-center p-12 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E88E5] to-[#4DBAE9] rounded-l-[100px]"></div>
                    <Waves className="absolute top-[-60px] left-[-60px] text-white/10 scale-[5] -rotate-12 pointer-events-none" />

                    <div className="relative z-10 text-white text-center">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[60px] shadow-2xl">
                            <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                                <Mail size={32} className="text-white" />
                            </div>
                            <h3 className="text-4xl font-black italic uppercase tracking-tighter leading-[0.9] mb-4">
                                Secure your <br /> Account.
                            </h3>
                            <p className="text-sm font-medium opacity-70 leading-relaxed">
                                Follow the simple steps to <br /> get back into your dashboard.
                            </p>
                        </div>
                    </div>
                    
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>

            </div>
        </div>
    );
}