// src/components/SectionHeader.jsx
const SectionHeader = ({ title, subtitle, isSmall = false }) => (
  <div className="flex items-center gap-4">
    <div className={`bg-[#1678F3] rounded-full ${isSmall ? 'w-1.5 h-6' : 'w-2 h-10'}`}></div>
    <div>
      <h2 className={`${isSmall ? 'text-xl' : 'text-4xl'} font-black text-[#1678F3] tracking-tighter uppercase italic leading-none`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-[10px] font-black text-[#4DBAE9] tracking-[0.4em] uppercase mt-1">
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

export default SectionHeader;