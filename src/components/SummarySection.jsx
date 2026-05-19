import React from 'react';

const SummarySection = ({ title, icon: Icon, children, footer }) => {
  return (
    <section className="bg-white rounded-[50px] p-10 shadow-xl shadow-blue-100/50 border border-white flex flex-col h-full min-h-[500px]">
      {/* Header Ringkasan */}
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-xl font-black text-[#1678F3] italic uppercase tracking-tighter">
          {title}
        </h3>
        {Icon && (
          <div className="p-3 bg-blue-50 rounded-2xl text-[#1678F3]">
            {Icon}
          </div>
        )}
      </div>

      {/* Konten Utama */}
      <div className="flex-1 space-y-6">
        {children}
      </div>

      {/* Bagian Tombol/Footer */}
      {footer && (
        <div className="mt-10">
          {footer}
        </div>
      )}
    </section>
  );
};

export default SummarySection;