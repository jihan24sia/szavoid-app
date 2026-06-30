import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Sparkles, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient'; // Sesuaikan path-nya

export default function ResetPassword() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', msg: '' });

    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            return setStatus({ type: 'error', msg: 'Konfirmasi password tidak cocok!' });
        }

        setLoading(true);
        setStatus({ type: '', msg: '' });

        try {
            // 🛠️ Di sini kita update password user yang sedang aktif dari link recovery
            const { error } = await supabase.auth.updateUser({ password: password });

            if (error) throw error;

            setStatus({ type: 'success', msg: 'Password berhasil diperbarui! Mengalihkan...' });
            
            // Tendang ke halaman login setelah 2 detik
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setStatus({ type: 'error', msg: error.message || 'Gagal memperbarui password.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-[#F8FAFC] flex items-center justify-center p-6 z-[999]">
            <div className="bg-white w-full max-w-[500px] p-10 md:p-14 rounded-[40px] shadow-[0_35px_100px_rgba(30,136,229,0.12)] border border-slate-100 flex flex-col gap-6">
                
                {/* Header */}
                <div className="text-center">
                    <div className="w-12 h-12 bg-[#1E88E5] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 mx-auto mb-4">
                        <Sparkles size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-black text-[#0F172A] tracking-tighter uppercase italic">New Password</h2>
                    <p className="text-gray-400 font-bold text-xs mt-1">Silakan masukkan password baru untuk akun Anda.</p>
                </div>

                {/* Notifikasi Status */}
                {status.msg && (
                    <div className={`p-4 rounded-2xl flex items-center gap-3 text-xs font-semibold ${
                        status.type === 'error' ? 'bg-rose-50 border border-rose-100 text-rose-600' : 'bg-emerald-50 border border-emerald-100 text-emerald-600'
                    }`}>
                        {status.type === 'error' ? <AlertCircle size={16} /> : <CheckCircle2 size={16} />}
                        <span>{status.msg}</span>
                    </div>
                )}

                <form onSubmit={handleUpdatePassword} className="space-y-5">
                    <div className="space-y-1.5">
                        <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-4">Password Baru</label>
                        <div className="relative group">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1E88E5]" size={18} />
                            <input
                                type="password" required minLength={6}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-gray-50/50 border-2 border-transparent rounded-full py-3.5 pl-14 pr-6 text-sm font-bold text-gray-700 outline-none focus:bg-white focus:border-[#1E88E5] transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-gray-400 text-[10px] font-black uppercase tracking-widest ml-4">Konfirmasi Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1E88E5]" size={18} />
                            <input
                                type="password" required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full bg-gray-50/50 border-2 border-transparent rounded-full py-3.5 pl-14 pr-6 text-sm font-bold text-gray-700 outline-none focus:bg-white focus:border-[#1E88E5] transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit" disabled={loading}
                        className="w-full bg-[#1E88E5] hover:bg-[#1565C0] disabled:bg-gray-200 text-white font-black py-4.5 rounded-full mt-4 flex items-center justify-center gap-3 shadow-xl shadow-blue-100 transition-all active:scale-95 uppercase text-xs tracking-wider"
                    >
                        {loading ? <Loader2 className="animate-spin" size={16} /> : "Update Password"}
                    </button>
                </form>
            </div>
        </div>
    );
}