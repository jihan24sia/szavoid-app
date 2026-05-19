const OrderStatusBadge = ({ status }) => {
  const getStyle = (status) => {
    switch (status) {
      case 'Antri': return 'bg-orange-50 text-orange-500 border-orange-100';
      case 'Proses': return 'bg-blue-50 text-[#1678F3] border-blue-100';
      case 'Selesai': return 'bg-green-50 text-green-500 border-green-100';
      case 'Diambil': return 'bg-gray-50 text-gray-400 border-gray-100';
      default: return 'bg-blue-50 text-[#4DBAE9]';
    }
  }

  return (
    <span className={`px-5 py-2 rounded-full text-[9px] font-black uppercase border shadow-sm ${getStyle(status)}`}>
      {status}
    </span>
  );
};

export default OrderStatusBadge;