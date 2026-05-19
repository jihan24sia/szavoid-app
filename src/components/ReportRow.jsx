const ReportRow = ({ label, val, color }) => (
  <div className="flex justify-between items-end border-b border-blue-50/50 pb-5 group cursor-pointer hover:border-[#1678F3] transition-colors">
    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest group-hover:text-[#1678F3]">
      {label}
    </span>
    <span className={`text-4xl font-black tracking-tighter italic leading-none ${color}`}>
      {val}
    </span>
  </div>
);

export default ReportRow;