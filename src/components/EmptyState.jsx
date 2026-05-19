import { Search } from 'lucide-react';

const EmptyState = ({ message }) => (
  <div className="flex flex-col items-center gap-3 opacity-30 py-20">
    <Search size={40} />
    <p className="font-black italic uppercase text-lg">{message}</p>
  </div>
);

export default EmptyState;