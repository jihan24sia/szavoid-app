const ServiceOption = ({ service, isSelected, onSelect }) => (
  <div 
    onClick={() => onSelect(service.id)}
    className={`cursor-pointer p-8 rounded-[40px] transition-all duration-500 border-4 flex flex-col items-center group relative overflow-hidden ${
      isSelected 
      ? 'border-[#1678F3] bg-white shadow-2xl scale-105' 
      : 'border-transparent bg-[#F8FAFC] hover:bg-white hover:border-blue-100'
    }`}
  >
    <div className={`w-16 h-16 rounded-[22px] flex items-center justify-center mb-4 text-white shadow-lg transition-transform group-hover:rotate-6 ${service.color}`}>
      {service.icon}
    </div>
    <p className="font-black text-[#1678F3] text-sm uppercase tracking-tighter">{service.name}</p>
    <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-widest italic">
      Rp {service.price.toLocaleString()}/kg
    </p>
  </div>
);

export default ServiceOption;