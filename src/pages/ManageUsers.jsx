import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient'; // 💡 Sesuaikan path ke client kamu ya!
import { Search, RefreshCw, ArrowLeft, ShieldCheck, Mail, Phone, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

    // 2️⃣ Fitur Pencarian Real-time
    const filteredUsers = users.filter(u => 
        u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.phone?.includes(searchTerm)
    );

   return (
  
    <div className="h-full flex flex-col gap-8">
            
            {/* --- HEADER SECTION (STYLE KEMBAR IDENTIK) --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 px-2">
                <div className="flex items-center gap-4">
                    {/* Garis Aksen Biru di Samping Judul */}
                    <div className="w-2 h-10 bg-[#1678F3] rounded-full"></div>
                    <div>
                        <h2 className="text-4xl font-black text-[#1678F3] tracking-tighter uppercase italic leading-none flex items-center gap-2">
                            Role <span className="text-[#4DBAE9]">Management</span>
                        </h2>
                        <p className="text-[#4DBAE9] text-[10px] font-black uppercase tracking-[0.4em] mt-1">
                            Pengaturan Hak Akses Staf & Pelanggan
                        </p>
                    </div>
                </div>

                {/* Fitur Search & Tombol Refresh */}
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-80 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1678F3] transition-colors" size={16} />
                        <input 
                            type="text" 
                            placeholder="Cari nama, email, atau nomor WA..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 bg-white/80 backdrop-blur-md rounded-2xl border-none shadow-xl shadow-blue-100/20 text-xs font-bold text-[#1678F3] outline-none focus:ring-2 focus:ring-[#1678F3]/20 transition-all"
                        />
                    </div>
                    {/* Tombol Back & Refresh */}
                    <button 
                        onClick={() => navigate(-1)}
                        className="bg-white p-3.5 rounded-2xl shadow-xl shadow-blue-100/20 text-gray-400 hover:text-[#1678F3] hover:bg-blue-50 transition-all border border-blue-50"
                        title="Kembali"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button 
                        onClick={fetchUsers}
                        disabled={loading}
                        className="bg-white p-3.5 rounded-2xl shadow-xl shadow-blue-100/20 text-[#1678F3] hover:bg-blue-50 transition-all border border-blue-50 disabled:opacity-50"
                        title="Refresh Data"
                    >
                        <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
                    </button>
                </div>
            </div>

            {/* --- TABEL MANAJEMEN USER (BLUR & TRANSPARAN STYLE KEMBAR) --- */}
            <div className="bg-white/70 backdrop-blur-md rounded-[45px] border border-white shadow-2xl shadow-blue-100/40 overflow-hidden flex-1">
                <div className="overflow-x-auto h-full custom-scrollbar">
                    <table className="w-full text-left border-collapse">
                        <thead className="sticky top-0 bg-[#F8FAFC]/90 backdrop-blur-md z-10">
                            <tr className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                                <th className="px-8 py-6">Profil User</th>
                                <th className="px-8 py-6">Kontak Detail</th>
                                <th className="px-8 py-6 text-center">Hak Akses / Role</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-50/50">
                            {loading ? (
                                <tr>
                                    <td colSpan="3" className="px-8 py-12 text-center text-gray-400 font-bold uppercase tracking-wider animate-pulse">
                                        Memanggil data dari Supabase... 🧼
                                    </td>
                                </tr>
                            ) : filteredUsers.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="px-8 py-12 text-center text-gray-400 font-bold">
                                        Data tidak ditemukan atau database kosong.
                                        {/* */}
                                    </td>
                                </tr>
                            ) : (
                                filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-white/50 transition-all group">
                                        
                                        {/* Kolom Profil & Nama */}
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-blue-50 text-[#1678F3] rounded-xl border border-blue-100 flex items-center justify-center font-black text-xs uppercase shadow-sm">
                                                    {user.name ? user.name.charAt(0) : <User size={14} />}
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-black text-[#1678F3] uppercase italic tracking-tighter">
                                                        {user.name || "No Name"}
                                                    </p>
                                                    <p className="text-[9px] font-mono text-gray-400 mt-0.5 tracking-tight">
                                                        ID: {user.id}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Kolom Kontak (Email & Phone) */}
                                        <td className="px-8 py-6">
                                            <div className="space-y-1 text-xs font-bold text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <Mail size={12} className="text-gray-300" />
                                                    <span>{user.email || "-"}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-green-600">
                                                    <Phone size={12} className="text-green-300" />
                                                    <span>{user.phone || "-"}</span>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Kolom Badge Status Role */}
                                        <td className="px-8 py-6">
                                            <div className="flex items-center justify-center">
                                                <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                                                    user.role === 'Admin' 
                                                        ? 'bg-purple-50 text-purple-500 border-purple-100' 
                                                        : 'bg-emerald-50 text-emerald-500 border-emerald-100'
                                                }`}>
                                                    <ShieldCheck size={12} strokeWidth={3} />
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

            {/* Footer Khas */}
            <div className="px-2 text-center md:text-left">
                <p className="text-gray-300 text-[10px] font-black uppercase tracking-[0.2em]">
                    Total Sinkronisasi: {filteredUsers.length} Entitas Pengguna
                </p>
            </div>

        </div>
    );
}