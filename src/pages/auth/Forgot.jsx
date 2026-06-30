import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { supabase } from '../../supabaseClient'; 

export default function Forgot() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleReset = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/reset-password`,
            });

            if (error) throw error;
            setSent(true);
        } catch (error) {
            console.error("Error recovery:", error.message);
            setErrorMsg(error.message || "Gagal mengirimkan email pemulihan.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-[#F8FAFC] flex items-center justify-center p-4 z-[999]">
            
            {/* 📦 PEMBUNGKUS KARTU UTAMA (Biar ga jelek & ga kosongan) */}
            <div className="bg-white w-full max-w-[460px] p-8 md:p-10 rounded-[40px] shadow-[0_30px_80px_rgba(30,136,229,0.08)] border border-slate-100/80 flex flex-col animate-in zoom-in-95 duration-300">
                
                {!sent ? (
                    <>
                        {/* Mini Brand Logo */}
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-8 h-8 bg-[#1E88E5] rounded-xl flex items-center justify-center shadow-md shadow-blue-200">
                                <Sparkles size={16} className="text-white" />
                            </div>
                            <h1 className="text-lg font-black text-[#1E88E5] tracking-tighter uppercase italic">BrightWash</h1>
                        </div>

                        {/* Header Judul */}
                        <div className="mb-6">
                            <h2 className="text-3xl font-black text-[#0F172A] tracking-tighter italic uppercase leading-none">
                                Recover.
                            </h2>
                            <p className="text-gray-400 font-bold text-xs mt-2 leading-relaxed">
                                Don't worry! Masukkan email kamu dan kami akan kirimkan link reset password.
                            </p>
                        </div>

                        {/* Notifikasi Error */}
                        {errorMsg && (
                            <div className="mb-4 p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-2xl flex items-center gap-3 text-xs font-semibold">
                                <AlertCircle size={16} className="shrink-0" />
                                <span>{errorMsg}</span>
                            </div>
                        )}

                        {/* Form Input */}
                        <form onSubmit={handleReset} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-4">
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1E88E5] transition-colors" size={18} />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-gray-50/50 border-2 border-transparent rounded-full py-3.5 pl-14 pr-6 text-sm font-bold text-gray-700 outline-none focus:bg-white focus:border-[#1E88E5] transition-all"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#1E88E5] hover:bg-[#1565C0] disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none text-white font-black py-4 rounded-full mt-2 flex items-center justify-center gap-3 shadow-lg shadow-blue-100 transition-all active:scale-95 uppercase text-xs tracking-wider"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 className="animate-spin" size={14} /> Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Send Reset Link <Send size={13} />
                                    </span>
                                )}
                            </button>
                        </form>
                    </>
                ) : (
                    /* Tampilan sukses kirim email di dalam kartu */
                    <div className="text-center py-4 animate-in zoom-in-95 duration-300">
                        <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-sm">
                            <CheckCircle2 size={32} />
                        </div>
                        <h2 className="text-2xl font-black text-[#0F172A] tracking-tighter italic uppercase">
                            Email Sent!
                        </h2>
                        <p className="text-gray-400 font-bold text-xs mt-2 mb-6 leading-relaxed">
                            Link pemulihan password telah dikirim ke <br />
                            <span className="text-slate-800 font-extrabold">{email}</span>
                        </p>
                        <button
                            onClick={handleReset}
                            disabled={loading}
                            className="text-[#1E88E5] font-black uppercase text-[10px] tracking-widest hover:underline disabled:text-gray-400"
                        >
                            {loading ? "Sending..." : "Gak masuk? Kirim ulang"}
                        </button>
                    </div>
                )}

                {/* Tombol Navigasi Bawah */}
                <div className="mt-8 pt-4 border-t border-gray-100">
                    <button
                        onClick={() => navigate('/login')}
                        className="group flex items-center gap-2 text-[10px] font-black text-gray-400 hover:text-[#1E88E5] uppercase tracking-widest transition-all"
                    >
                        <ArrowLeft size={14} strokeWidth={3} /> Back to Login
                    </button>
                </div>

            </div>
        </div>
    );
}