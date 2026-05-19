// src/components/ServiceHighlight.jsx
const ServiceHighlight = ({ label, serviceName }) => (
  <div className="flex justify-between items-center bg-[#F8FAFC] p-6 rounded-[30px] border border-blue-50">
    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
      {label}
    </span>
    <span className="font-black text-[#1678F3] text-sm uppercase italic">
      {serviceName}
    </span>
  </div>
);

export default ServiceHighlight;