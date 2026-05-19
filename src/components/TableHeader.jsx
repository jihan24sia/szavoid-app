// src/components/TableHeader.jsx
const TableHeader = ({ columns }) => (
  <thead className="bg-[#F8FAFC]/50 text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
    <tr>
      {columns.map((col, i) => (
        <th key={i} className={`px-10 py-7 ${col.center ? 'text-center' : ''}`}>
          {col.label}
        </th>
      ))}
      <th className="px-10 py-7"></th>
    </tr>
  </thead>
);

export default TableHeader;