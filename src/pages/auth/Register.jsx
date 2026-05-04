import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    return (
        <div className="animate-in fade-in duration-500">
            {/* Header Form */}
            <div className="mb-8 text-center md:text-left">
                <h2 className="text-4xl font-black text-[#2B3674] tracking-tight uppercase italic leading-none">
                    Join Us <span className="text-[#6358DC]"></span>
                </h2>
                <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mt-2">
                    Mulai Kelola Bisnis BrightWash Kamu
                </p>
            </div>

            <form className="space-y-5">
                {/* Email Field */}
                <div>
                    <label className="block text-[10px] font-black text-[#2B3674] uppercase tracking-widest italic mb-2 ml-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        className="w-full px-5 py-3 bg-white/70 backdrop-blur-sm border-2 border-white rounded-[20px] shadow-sm 
                                   focus:border-[#6358DC] focus:outline-none transition-all placeholder:text-gray-300 font-bold text-[#2B3674]"
                        placeholder="you@example.com"
                    />
                </div>

                {/* Password Field */}
                <div>
                    <label className="block text-[10px] font-black text-[#2B3674] uppercase tracking-widest italic mb-2 ml-1">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-5 py-3 bg-white/70 backdrop-blur-sm border-2 border-white rounded-[20px] shadow-sm 
                                   focus:border-[#6358DC] focus:outline-none transition-all placeholder:text-gray-300 font-bold text-[#2B3674]"
                        placeholder="••••••••"
                    />
                </div>

                {/* Confirm Password Field */}
                <div>
                    <label className="block text-[10px] font-black text-[#2B3674] uppercase tracking-widest italic mb-2 ml-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-5 py-3 bg-white/70 backdrop-blur-sm border-2 border-white rounded-[20px] shadow-sm 
                                   focus:border-[#6358DC] focus:outline-none transition-all placeholder:text-gray-300 font-bold text-[#2B3674]"
                        placeholder="••••••••"
                    />
                </div>

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full bg-[#6358DC] hover:bg-[#5247c9] text-white font-black uppercase italic py-4 px-4
                               rounded-[22px] shadow-lg shadow-indigo-200 transition duration-300 transform active:scale-95 mt-4"
                >
                    Create Account
                </button>

                {/* Back to Login */}
                <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-widest mt-6">
                    Sudah punya akun?{' '}
                    <span 
                        onClick={() => navigate('/login')}
                        className="text-[#FF71A4] cursor-pointer hover:underline"
                    >
                        Login Disini
                    </span>
                </p>
            </form>
        </div>
    );
}