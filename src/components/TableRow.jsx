// src/components/TableRow.jsx
import { MoreVertical } from 'lucide-react';

const TableRow = ({ children, onClick }) => (
  <tr 
    onClick={onClick}
    className="group hover:bg-white transition-all cursor-pointer divide-y divide-blue-50"
  >
    {children}
    <td className="px-10 py-6 text-right">
      <button className="p-3 text-gray-200 hover:text-[#1678F3] hover:bg-blue-50 rounded-2xl transition-all">
        <MoreVertical size={20} />
      </button>
    </td>
  </tr>
);

export default TableRow;