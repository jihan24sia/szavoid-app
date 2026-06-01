import React from 'react';

const SopSteps = () => {
  return (
    <div className="bg-slate-50/60 p-5 rounded-3xl border border-slate-100/80 flex flex-col gap-4 mb-6">
      <div className="flex justify-between items-center border-b border-slate-100 pb-3">
        <div>
          <h4 className="text-xs font-black text-slate-700 tracking-tight uppercase">Standar Operasional (SOP)</h4>
          <p className="text-[10px] text-gray-400 font-medium">Tahapan pengerjaan laundry utama hari ini</p>
        </div>
        <span className="text-[9px] font-bold text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">Mekanisme Kerja</span>
      </div>

      <ul className="steps steps-horizontal w-full text-[11px] font-bold text-slate-400 mt-1">
        <li className="step step-primary text-blue-600">1. Sortir & Berat</li>
        <li className="step step-primary text-blue-600">2. Cuci Bersih</li>
        <li className="step">3. Setrika Uap</li>
        <li className="step">4. Selesai Packing</li>
      </ul>
    </div>
  );
};

export default SopSteps;