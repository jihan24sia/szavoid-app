// src/components/TotalPrice.jsx
const TotalPrice = ({ amount }) => (
  <div className="mt-12 pt-8 border-t-4 border-dashed border-blue-50">
    <p className="text-[10px] uppercase font-black text-[#4DBAE9] tracking-[0.3em] mb-2">
      Total Pembayaran
    </p>
    <p className="text-5xl font-black text-[#1678F3] italic tracking-tighter leading-none">
      {amount}
    </p>
  </div>
);

export default TotalPrice;