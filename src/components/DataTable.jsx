// src/components/DataTable.jsx
const DataTable = ({ children }) => (
  <div className="bg-white/70 backdrop-blur-md border border-white rounded-[50px] overflow-hidden shadow-2xl shadow-blue-100/50 flex-1">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        {children}
      </table>
    </div>
  </div>
);

export default DataTable;