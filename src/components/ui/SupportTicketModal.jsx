import React from 'react';
import { Ticket, X, AlertCircle } from 'lucide-react';

const SupportTicketModal = () => {
  return (
    <div>
      <button 
        className="text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 rounded-2xl shadow-md shadow-amber-100 hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 border-none"
        onClick={() => document.getElementById('modal_support_ticket').showModal()}
      >
        <Ticket size={16} /> Support Ticket
      </button>

      <dialog id="modal_support_ticket" className="modal backdrop-blur-md transition-all duration-300">
        <div className="modal-box bg-white max-w-md border border-slate-100 rounded-[2rem] p-7 shadow-2xl relative">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-400 hover:bg-gray-100 rounded-full">
              <X size={18} />
            </button>
          </form>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-amber-50 text-amber-500 rounded-2xl">
              <AlertCircle size={24} />
            </div>
            <div>
              <span className="text-[10px] font-extrabold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full uppercase tracking-wider">Tiket Aktif</span>
              <h3 className="font-black text-xl text-slate-800 tracking-tight mt-1">#HELP-889</h3>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-left">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Laporan Masalah:</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                "Halo BrightWash, pakaian kemeja putih saya atas nama <span className="font-bold text-slate-800">Ahmad Subarjo</span> tertukar dengan pakaian orang lain di pengering hari ini. Mohon segera dicek tim gudang."
              </p>
            </div>
            <div className="flex justify-between items-center bg-blue-50/50 px-4 py-3 rounded-xl border border-blue-100/50 text-xs">
              <span className="text-gray-500">Pelanggan: <b className="text-blue-600">Ahmad S.</b></span>
              <span className="text-gray-400">05 Mei 2026</span>
            </div>
          </div>

          <div className="modal-action gap-3 mt-8">
            <form method="dialog" className="w-full flex gap-3">
              <button className="btn flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 border-none rounded-2xl font-bold text-xs h-12">
                Abaikan
              </button>
              <button className="btn flex-1 bg-[#1678F3] hover:bg-blue-600 text-white border-none rounded-2xl font-bold text-xs h-12 shadow-lg shadow-blue-100">
                Proses Komplain
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default SupportTicketModal;