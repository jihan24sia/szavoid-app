// src/components/SummaryItem.jsx
const SummaryItem = ({ label, value, highlight = false }) => (
  <div className="flex justify-between items-center text-sm px-2">
    <p className="text-gray-400 font-bold">{label}</p>
    <p className={`font-black ${highlight ? 'text-[#1678F3]' : 'text-[#1678F3]/80'}`}>
      {value}
    </p>
  </div>
);

export default SummaryItem;