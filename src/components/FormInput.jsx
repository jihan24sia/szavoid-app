const FormInput = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div className="space-y-3">
    <label className="text-[10px] uppercase font-black text-blue-100 tracking-[0.2em] ml-2">
      {label}
    </label>
    <input 
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-white/20 border-2 border-white/30 rounded-[25px] p-5 outline-none focus:bg-white focus:text-[#1678F3] transition-all placeholder:text-white/50 font-bold shadow-inner" 
    />
  </div>
);

export default FormInput;