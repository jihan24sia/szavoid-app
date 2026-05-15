import React, { useState } from 'react';
import { Shirt, Wind, Clock, ChevronRight, Waves, Droplets } from 'lucide-react';

const NewOrder = ({ onAddOrder }) => {
  const [selectedService, setSelectedService] = useState('cuci-kering');
  const [weight, setWeight] = useState(0);
  const [customerName, setCustomerName] = useState("");

  // WARNA DISESUAIKAN: Biru Utama dan Biru Muda
  const services = [
    { id: 'cuci-kering', name: 'Cuci Kering', price: 7000, icon: <Droplets size={24} />, color: 'bg-[#4DBAE9]' },
    { id: 'cuci-setrika', name: 'Cuci Setrika', price: 10000, icon: <Shirt size={24} />, color: 'bg-[#1678F3]' },
    { id: 'express', name: 'Express 6 Jam', price: 15000, icon: <Clock size={24} />, color: 'bg-[#64A6F9]' },
  ];

  const currentService = services.find(s => s.id === selectedService);
  const subtotal = weight * currentService.price;

  const handleConfirm = () => {
    if (!customerName || weight <= 0) return alert("Isi nama dan berat dulu ya Jihan!");

    const newOrderData = {
      id: `#BW-${Math.floor(1000 + Math.random() * 9000)}`,
      customer: customerName,
      service: currentService.name,
      weight: `${weight}kg`,
      total: `Rp ${subtotal.toLocaleString('id-ID')}`,
      status: "Antri",
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    onAddOrder(newOrderData);
    alert("Mantap! Order berhasil dibuat.");
    
    setCustomerName("");
    setWeight(0);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER SECTION */}
      <div className="mb-10 flex items-center gap-4">
        <div className="w-2 h-10 bg-[#1678F3] rounded-full"></div>
        <div>
          <h2 className="text-4xl font-black text-[#1678F3] tracking-tighter uppercase italic leading-none">Buat Order Baru</h2>
          <p className="text-[#4DBAE9] font-black text-[10px] uppercase tracking-[0.3em] mt-1">Input Data Cucian Pelanggan</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* SISI KIRI: INPUT FORM */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          
          {/* PILIH LAYANAN */}
          <div className="bg-white/80 backdrop-blur-md border border-white p-10 rounded-[50px] shadow-xl shadow-blue-100/50">
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-8 flex items-center gap-2">
              <Waves size={16} className="text-[#1678F3]" /> Pilih Layanan Laundry
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s) => (
                <div 
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`cursor-pointer p-8 rounded-[40px] transition-all duration-500 border-4 flex flex-col items-center group relative overflow-hidden ${
                    selectedService === s.id 
                    ? 'border-[#1678F3] bg-white shadow-2xl scale-105' 
                    : 'border-transparent bg-[#F8FAFC] hover:bg-white hover:border-blue-100'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-[22px] flex items-center justify-center mb-4 text-white shadow-lg transition-transform group-hover:rotate-6 ${s.color}`}>
                    {s.icon}
                  </div>
                  <p className="font-black text-[#1678F3] text-sm uppercase tracking-tighter">{s.name}</p>
                  <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-widest italic">Rp {s.price.toLocaleString()}/kg</p>
                </div>
              ))}
            </div>
          </div>

          {/* INPUT DATA PELANGGAN */}
          <div className="bg-gradient-to-br from-[#1678F3] to-[#4DBAE9] rounded-[50px] p-10 text-white shadow-2xl relative overflow-hidden">
            <Waves className="absolute -bottom-10 -left-10 text-white/10 scale-[4] pointer-events-none" />
            <div className="relative z-10 space-y-8">
              <h3 className="text-lg font-black uppercase italic tracking-tighter">Detail Pesanan</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black text-blue-100 tracking-[0.2em] ml-2">Nama Pelanggan</label>
                  <input 
                    type="text" 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Contoh: Jihan Zahra" 
                    className="w-full bg-white/20 border-2 border-white/30 rounded-[25px] p-5 outline-none focus:bg-white focus:text-[#1678F3] transition-all placeholder:text-white/50 font-bold shadow-inner" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black text-blue-100 tracking-[0.2em] ml-2">Estimasi Berat (Kg)</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="0" 
                    className="w-full bg-white/20 border-2 border-white/30 rounded-[25px] p-5 outline-none focus:bg-white focus:text-[#1678F3] transition-all placeholder:text-white/50 font-black shadow-inner" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SISI KANAN: RINGKASAN BAYAR */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          <div className="bg-white rounded-[50px] p-10 shadow-xl shadow-blue-100/50 border border-white flex flex-col h-full min-h-[500px]">
            <div className="flex items-center justify-between mb-10">
               <h3 className="text-xl font-black text-[#1678F3] italic uppercase tracking-tighter">Order Summary</h3>
               <div className="p-3 bg-blue-50 rounded-2xl text-[#1678F3]">
                  <Clock size={20} />
               </div>
            </div>

            <div className="flex-1 space-y-6">
              <div className="flex justify-between items-center bg-[#F8FAFC] p-6 rounded-[30px] border border-blue-50">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Layanan</span>
                <span className="font-black text-[#1678F3] text-sm uppercase italic">{currentService.name}</span>
              </div>
              
              <div className="px-2 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <p className="text-gray-400 font-bold">Harga per kg</p>
                  <p className="font-black text-[#1678F3]">Rp {currentService.price.toLocaleString('id-ID')}</p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <p className="text-gray-400 font-bold">Subtotal ({weight}kg)</p>
                  <p className="font-black text-[#1678F3]">Rp {subtotal.toLocaleString('id-ID')}</p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t-4 border-dashed border-blue-50">
                <p className="text-[10px] uppercase font-black text-[#4DBAE9] tracking-[0.3em] mb-2">Total Pembayaran</p>
                <p className="text-5xl font-black text-[#1678F3] italic tracking-tighter leading-none">
                  Rp {subtotal.toLocaleString('id-ID')}
                </p>
              </div>
            </div>

            <button 
              onClick={handleConfirm}
              className="w-full bg-[#1678F3] text-white py-6 rounded-[30px] font-black mt-10 shadow-2xl shadow-blue-200 hover:scale-105 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest"
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