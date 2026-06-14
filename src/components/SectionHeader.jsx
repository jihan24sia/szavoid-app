import React from 'react';

const SectionHeader = ({ title, subtitle, isSmall = false, variant = "default" }) => {
  // Jika variant adalah dashboard, gunakan gaya italic uppercase khas BrightWash
  if (variant === "dashboard") {
    return (
      <div className="flex items-center gap-3">
        {/* Garis Aksen Biru di Samping Judul */}
        <div className="w-1.5 h-10 bg-[#1678F3] rounded-full"></div>
        <div>
          <h2 className="text-2xl font-black text-[#1678F3] tracking-tight italic uppercase leading-none">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#4DBAE9] text-[9px] font-black uppercase tracking-[0.25em] mt-1.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Gaya Default/Workspace Admin (Tegak, Bold, Slate Modern sesuai gambar Workspace)
  return (
    <div className="flex items-center gap-4">
      <div className={`bg-[#1678F3] rounded-full ${isSmall ? 'w-1.5 h-6' : 'w-2 h-10'}`}></div>
      <div>
        <h2 className={`font-black text-slate-900 tracking-tight ${isSmall ? 'text-lg' : 'text-3xl'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-400 text-xs font-medium mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;