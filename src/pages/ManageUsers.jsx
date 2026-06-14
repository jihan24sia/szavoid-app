import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient'; // Adjust path according to your structure
import { Search, RefreshCw, ArrowLeft, ShieldCheck, Mail, Phone, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- IMPORT KOMPONEN INTERNAL MASTER ---
import SectionHeader from '../components/SectionHeader';

export default function ManageUsers() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .order('name', { ascending: true });

            if (error) throw error;
            setUsers(data);
        } catch (error) {
            alert(`Waduh Gagal Ambil Data: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Fitur Pencarian Real-time
    const filteredUsers = users.filter(u => 
        u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.phone?.includes(searchTerm)
    );

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased p-2 flex flex-col gap-8">
            
            {/* --- 1. HEADER SECTION (MENGGUNAKAN KOMPONEN RESMI) --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                
                <SectionHeader 
                    title="Role Management"
                    subtitle="Pengaturan hak akses staf operasional kasir, manajemen internal, serta direktori data pelanggan."
                    variant="default"
                />

                {/* Search, Back & Refresh Group */}
                <div className="flex gap-3 w-full md:w-auto shrink-0">
                    <div className="relative flex-1 md:w-80 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={15} />
                        <input 
                            type="text" 
                            placeholder="Cari nama, email, atau nomor WA..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl text-xs font-semibold text-slate-800 outline-none transition-all"
                        />
                    </div>
                    
                    <button 
                        onClick={() => navigate(-1)}
                        className="bg-white p-3 rounded-xl text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                        title="Kembali"
                    >
                        <ArrowLeft size={16} />
                    </button>
                    
                    <button 
                        onClick={fetchUsers}
                        disabled={loading}
                        className="bg-white p-3 rounded-xl text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm disabled:opacity-50"
                        title="Refresh Data"
                    >
                        <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
                    </button>
                </div>
            </div>

            {/* --- 2. USERS MANAGEMENT DATA TABLE --- */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex-1">
                <div className="overflow-x-auto h-full custom-scrollbar">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/70 border-b border-slate-100 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                                <th className="px-8 py-4">Profil User</th>
                                <th className="px-8 py-4">Kontak Detail</th>
                                <th className="px-8 py-4 text-center">Hak Akses / Role</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {loading ? (
                                <tr>
                                    <td colSpan="3" className="px-8 py-16 text-center text-slate-400 font-bold uppercase tracking-wider text-xs animate-pulse">
                                        Memanggil data dari Supabase... 🧼
                                    </td>
                                </tr>
                            ) : filteredUsers.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="px-8 py-16 text-center text-slate-400 font-semibold text-xs">
                                        Data tidak ditemukan atau database kosong.
                                    </td>
                                </tr>
                            ) : (
                                filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                                        
                                        {/* Avatar & Profil Details */}
                                        <td className="px-8 py-5.5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-slate-50 text-slate-700 rounded-xl border border-slate-200 flex items-center justify-center font-extrabold text-xs uppercase shadow-inner group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                                                    {user.name ? user.name.charAt(0) : <User size={14} />}
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-bold text-slate-900 tracking-tight">
                                                        {user.name || "No Name"}
                                                    </p>
                                                    <p className="text-[10px] font-mono text-slate-400 mt-0.5 tracking-tight">
                                                        UUID: {user.id}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Kontak Informasi (Email & WhatsApp) */}
                                        <td className="px-8 py-5.5">
                                            <div className="space-y-1.5 text-xs font-semibold text-slate-600">
                                                <div className="flex items-center gap-2">
                                                    <Mail size={13} className="text-slate-300" />
                                                    <span>{user.email || "-"}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-emerald-600">
                                                    <Phone size={13} className="text-emerald-300" />
                                                    <span>{user.phone || "-"}</span>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Badge Tingkatan Akses / Role */}
                                        <td className="px-8 py-5.5">
                                            <div className="flex items-center justify-center">
                                                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider border ${
                                                    user.role === 'Admin' 
                                                        ? 'bg-purple-50 text-purple-700 border-purple-200' 
                                                        : 'bg-blue-50 text-blue-700 border-blue-200'
                                                }`}>
                                                    <ShieldCheck size={12} strokeWidth={2.5} />
                                                    {user.role || 'Member'}
                                                </span>
                                            </div>
                                        </td>

                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- 3. PERSISTENT LEDGER FOOTER --- */}
            <div className="px-2">
                <span className="inline-block bg-slate-100 text-slate-500 font-bold text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-md border border-slate-200">
                    Total Sinkronisasi: {filteredUsers.length} Entitas Pengguna
                </span>
            </div>

        </div>
    );
}