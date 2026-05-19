import { Bell } from 'lucide-react';

const AdminProfile = ({ name }) => (
  <div className="flex items-center gap-4 bg-white/60 backdrop-blur-md p-2 pr-6 rounded-full border border-white shadow-sm">
    <div className="w-12 h-12 bg-[#4DBAE9] rounded-full border-2 border-white shadow-md flex items-center justify-center text-white font-black">
      {name.charAt(0)}
    </div>
    <div className="hidden sm:block">
      <p className="text-[11px] font-black uppercase tracking-tighter text-[#1678F3]">Admin {name}</p>
      <p className="text-[9px] text-green-500 font-bold uppercase tracking-widest text-center">Active Now</p>
    </div>
    <div className="ml-4 p-2 bg-white rounded-full text-gray-400 hover:text-[#1678F3] cursor-pointer transition-colors">
      <Bell size={20} />
    </div>
  </div>
);

export default AdminProfile;