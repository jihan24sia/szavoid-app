const StatusSummaryCard = ({ label, count, icon, color, bg }) => (
  <div className="bg-white/80 backdrop-blur-sm border border-white p-6 rounded-[40px] shadow-xl shadow-blue-100/30 flex items-center gap-5 hover:translate-y-[-5px] transition-all">
    <div className={`p-4 rounded-[22px] shadow-inner ${bg} ${color}`}>{icon}</div>
    <div>
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{label}</p>
      <h4 className="text-2xl font-black text-[#1678F3] italic leading-none">{count}</h4>
    </div>
  </div>
);

export default StatusSummaryCard;