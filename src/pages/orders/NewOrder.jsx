import React, { useState } from 'react';
import { Shirt, Clock, ChevronRight, Waves, Droplets } from 'lucide-react';


import SectionHeader from '../../components/SectionHeader';
import ContentSection from '../../components/ContentSection';
import ServiceOption from '../../components/ServiceOption';
import FormInput from '../../components/FormInput';
import GradientSection from '../../components/GradientSection';
import SummarySection from '../../components/SummarySection';
import SummaryItem from '../../components/SummaryItem';
import TotalPrice from '../../components/TotalPrice';
import ServiceHighlight from '../../components/ServiceHighlight';

const NewOrder = ({ onAddOrder }) => {
  const [selectedService, setSelectedService] = useState('cuci-kering');
  const [weight, setWeight] = useState(0);
  const [customerName, setCustomerName] = useState("");

  const services = [
    { id: 'cuci-kering', name: 'Cuci Kering', price: 7000, icon: <Droplets size={24} />, color: 'bg-[#4DBAE9]' },
    { id: 'cuci-setrika', name: 'Cuci Setrika', price: 10000, icon: <Shirt size={24} />, color: 'bg-[#1678F3]' },
    { id: 'express', name: 'Express 6 Jam', price: 15000, icon: <Clock size={24} />, color: 'bg-[#64A6F9]' },
  ];

  const currentService = services.find(s => s.id === selectedService);
  const subtotal = weight * currentService.price;

  const handleConfirm = () => {
    if (!customerName || weight <= 0) return alert("Isi nama dan berat dulu ya Jihan!");

    onAddOrder({
      id: `#BW-${Math.floor(1000 + Math.random() * 9000)}`,
      customer: customerName,
      service: currentService.name,
      weight: `${weight}kg`,
      total: `Rp ${subtotal.toLocaleString('id-ID')}`,
      status: "Antri",
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    });

    alert("Mantap! Order berhasil dibuat.");
    setCustomerName("");
    setWeight(0);
  };

return (
   
    <div className="h-full flex flex-col gap-8">
      <div className="mb-10">
        <SectionHeader title="Buat Order Baru" subtitle="Input Data Cucian Pelanggan" />
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* SISI KIRI */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <ContentSection>
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-8 flex items-center gap-2">
              <Waves size={16} className="text-[#1678F3]" /> Pilih Layanan Laundry
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s) => (
                <ServiceOption
                  key={s.id}
                  service={s}
                  isSelected={selectedService === s.id}
                  onSelect={setSelectedService}
                />
              ))}
            </div>
          </ContentSection>

          <GradientSection title="Detail Pesanan">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormInput
                label="Nama Pelanggan"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Contoh: Jihan Zahra"
              />
              <FormInput
                label="Estimasi Berat (Kg)"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="0"
              />
            </div>
          </GradientSection>
        </div>

        {/* SISI KANAN: RINGKASAN */}
        <div className="col-span-12 lg:col-span-4">
          <SummarySection
            title="Order Summary"
            icon={<Clock size={20} />}
            footer={
              <button 
                onClick={handleConfirm} 
                className="w-full bg-[#1678F3] text-white py-6 rounded-[30px] font-black shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest"
              >
                KONFIRMASI ORDER <ChevronRight size={20} />
              </button>
            }
          >
            <ServiceHighlight label="Layanan" serviceName={currentService.name} />

            <div className="space-y-4">
              <SummaryItem
                label="Harga per kg"
                value={`Rp ${currentService.price.toLocaleString('id-ID')}`}
              />
              <SummaryItem
                label={`Subtotal (${weight}kg)`}
                value={`Rp ${subtotal.toLocaleString('id-ID')}`}
                highlight
              />
            </div>

            <TotalPrice amount={`Rp ${subtotal.toLocaleString('id-ID')}`} />
          </SummarySection>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;