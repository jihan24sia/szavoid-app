import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, placeholder }) => (
  <div className="relative flex-1 md:w-80 group">
    <input 
      type="text" 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-white/80 backdrop-blur-md border-2 border-transparent focus:border-blue-100 rounded-[25px] py-4 pl-12 pr-6 text-xs shadow-xl shadow-blue-100/20 outline-none transition-all font-bold text-[#1678F3]"
    />
    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#1678F3] transition-colors" size={18} />
  </div>
);

export default SearchBar;