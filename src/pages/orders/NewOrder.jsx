import React, { useState } from 'react';
import { Shirt, Wind, Clock, MapPin, Calendar, ChevronRight } from 'lucide-react';

// Terima props onAddOrder dari Parent (App.jsx)
const NewOrder = ({ onAddOrder }) => {
  const [selectedService, setSelectedService] = useState('cuci-kering');
  const [weight, setWeight] = useState(0);
  const [customerName, setCustomerName] = useState("");

  const services = [
    { id: 'cuci-kering', name: 'Cuci Kering', price: 7000, icon: <Shirt size={24} />, color: 'bg-[#6259E8]' },
    { id: 'cuci-setrika', name: 'Cuci Setrika', price: 10000, icon: <Wind size={24} />, color: 'bg-[#FF71A4]' },
    { id: 'express', name: 'Express 6 Jam', price: 15000, icon: <Clock size={24} />, color: 'bg-[#8C83FF]' },
  ];

  // Ambil data layanan yang sedang dipilih
  const currentService = services.find(s => s.id === selectedService);
  const subtotal = weight * currentService.price;

  const handleConfirm = () => {
    if (!customerName || weight <= 0) return alert("Isi nama dan berat dulu ya Jihan!");

    const newOrderData = {
      id: `ORD-00${Math.floor(Math.random() * 1000)}`, // Generate ID acak
      customer: customerName,
      service: currentService.name,
      weight: `${weight}kg`,
      total: `Rp ${subtotal.toLocaleString('id-ID')}`,
      status: "Antri",
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    onAddOrder(newOrderData); // Kirim data ke Manajemen Order
    alert("Order berhasil dikirim ke Manajemen Order!");
    
    // Reset Form
    setCustomerName("");
    setWeight(0);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-[#2B3674] tracking-tight uppercase italic">BUAT ORDER BARU</h2>
        <p className="text-gray-400 font-medium text-sm">Input detail cucian pelanggan BrightWash</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* KIRI */}
        <div className="col-span-8 space-y-6">
          <div className="bg-white/40 border border-white p-8 rounded-[40px] shadow-sm">
            <h3 className="text-lg font-bold text-[#2B3674] mb-6">Pilih Layanan Laundry</h3>
            <div className="grid grid-cols-3 gap-4">
              {services.map((s) => (
                <div 
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`cursor-pointer p-6 rounded-[30px] transition-all duration-300 border-2 ${
                    selectedService === s.id ? 'border-[#6259E8] bg-white shadow-xl scale-105' : 'border-transparent bg-white/50 hover:bg-white'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white ${s.color}`}>
                    {s.icon}
                  </div>
                  <p className="font-black text-[#2B3674] text-sm">{s.name}</p>
                  <p className="text-xs text-gray-400 font-bold mt-1">Rp {s.price.toLocaleString()}/kg</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#6259E8] rounded-[40px] p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <h3 className="text-lg font-bold mb-4">Informasi Penjemputan</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black opacity-60 tracking-widest ml-2">Nama Pelanggan</label>
                  <input 
                    type="text" 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Contoh: Jihan Zahra" 
                    className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 outline-none focus:bg-white/20 transition-all placeholder:text-white/40 font-bold" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black opacity-60 tracking-widest ml-2">Estimasi Berat (Kg)</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="0" 
                    className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 outline-none focus:bg-white/20 transition-all placeholder:text-white/40 font-black" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KANAN: SUMMARY */}
        <div className="col-span-4 space-y-6">
          <div className="bg-[#FF71A4] rounded-[45px] p-8 text-white shadow-xl shadow-pink-100 flex flex-col h-full min-h-[400px]">
            <h3 className="text-xl font-black mb-8 italic">Order Summary</h3>
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-center bg-black/10 p-4 rounded-2xl border border-white/10">
                <span className="text-xs font-bold opacity-80 uppercase tracking-tighter">Layanan</span>
                <span className="font-black text-sm">{currentService.name}</span>
              </div>
              <div className="py-4 border-b border-white/20 flex justify-between text-sm">
                <p className="opacity-70">Subtotal ({weight}kg)</p>
                <p className="font-bold">Rp {subtotal.toLocaleString('id-ID')}</p>
              </div>
              <div className="mt-10">
                <p className="text-[10px] uppercase font-black opacity-60 tracking-[0.2em] mb-1">Total Pembayaran</p>
                <p className="text-4xl font-black italic tracking-tighter">Rp {subtotal.toLocaleString('id-ID')}</p>
              </div>
            </div>
            <button 
              onClick={handleConfirm}
              className="w-full bg-white text-[#FF71A4] py-5 rounded-[30px] font-black mt-8 shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 uppercase text-xs"
            >
              KONFIRMASI ORDER <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;