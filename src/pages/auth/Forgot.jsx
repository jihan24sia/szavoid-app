import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Forgot() {
    const navigate = useNavigate();

    return (
        <div className="animate-in fade-in duration-500">
            {/* Header Form */}
            <div className="mb-6 text-center md:text-left">
                <h2 className="text-4xl font-black text-[#2B3674] tracking-tight uppercase italic leading-none">
                    Reset Password <span className="text-[#FF71A4]"></span>
                </h2>
                <p className="text-[10px] font-bold text-gray-400 tracking-[0.15em] uppercase mt-4 leading-relaxed">
                    Masukkan email kamu, kami akan kirimkan link untuk atur ulang password.
                </p>
            </div>

            <form className="space-y-6">
                {/* Email Field */}
                <div>
                    <label className="block text-[10px] font-black text-[#2B3674] uppercase tracking-widest italic mb-2 ml-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-5 py-3 bg-white/70 backdrop-blur-sm border-2 border-white rounded-[20px] shadow-sm 
                                   focus:border-[#6358DC] focus:outline-none transition-all placeholder:text-gray-300 font-bold text-[#2B3674]"
                        placeholder="you@example.com"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#6358DC] hover:bg-[#5247c9] text-white font-black uppercase italic py-4 px-4
                               rounded-[22px] shadow-lg shadow-indigo-200 transition duration-300 transform active:scale-95"
                >
                    Send Reset Link
                </button>

                {/* Back to Login */}
                <div className="text-center mt-8">
                    <button 
                        type="button"
                        onClick={() => navigate('/login')}
                        className="text-[10px] font-black text-[#FF71A4] uppercase tracking-[0.2em] hover:opacity-70 transition-all italic border-b-2 border-[#FF71A4]/20 pb-1"
                    >
                        Kembali ke halaman login
                    </button>
                </div>
            </form>
        </div>
    );
}