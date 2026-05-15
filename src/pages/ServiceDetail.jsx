import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, ShieldCheck, Star, Tag, Footprints, Sparkles } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // DATA SOURCE (Sesuaikan ID-nya dengan yang ada di Services.jsx)
  const servicesData = {
    "cuci-kering": {
      name: "Cuci Kering",
      price: "7.000",
      unit: "Kg",
      img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1000",
      desc: "Proses pencucian menggunakan mesin cuci modern dengan deterjen khusus yang menjaga serat kain tetap lembut. Cocok untuk pakaian harian.",
      accent: "text-[#1678F3]"
    },
    "cuci-setrika": {
      name: "Cuci Setrika",
      price: "10.000",
      unit: "Kg",
      img: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=1000",
      desc: "Pakaian dicuci bersih dan disetrika rapi menggunakan uap (steam iron) sehingga tidak merusak sablon atau bahan sensitif.",
      accent: "text-orange-400"
    },
    "express-6-jam": {
      name: "Express 6 Jam",
      price: "15.000",
      unit: "Kg",
      img: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1000",
      desc: "Layanan super cepat untuk kamu yang butuh pakaian bersih dalam waktu singkat. Diprioritaskan dalam antrean mesin.",
      accent: "text-amber-400"
    },
    "bed-cover": {
      name: "Bed Cover",
      price: "35.000",
      unit: "Pcs",
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000",
      desc: "Pencucian khusus bed cover menggunakan mesin kapasitas besar agar bersih merata dan dikeringkan dengan suhu optimal agar tetap empuk.",
      accent: "text-emerald-400"
    },
    "cuci-sepatu": {
      name: "Cuci Sepatu",
      price: "25.000",
      unit: "Pasang",
      img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000",
      desc: "Deep cleaning untuk berbagai jenis sepatu (sneakers, canvas, suede). Menggunakan cairan pembersih khusus agar warna tidak pudar.",
      accent: "text-pink-400"
    }
  };

  const service = servicesData[id] || servicesData["cuci-kering"];

  return (
    <div className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-400 hover:text-[#1E88E5] font-black uppercase text-[10px] tracking-widest mb-10 transition-all group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform"/> Back to Services
      </button>

      <div className="bg-white rounded-[50px] shadow-2xl shadow-blue-100 overflow-hidden flex flex-col lg:flex-row border border-white max-w-6xl mx-auto lg:h-[550px]">
        
        {/* SISI KIRI: IMAGE AREA */}
        <div className="lg:w-1/2 relative h-[300px] lg:h-auto">
          <img src={service.img} alt={service.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1678F3]/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none">{service.name}</h2>
          </div>
        </div>

        {/* SISI KANAN: CONTENT AREA */}
        <div className="lg:w-1/2 p-12 flex flex-col justify-between bg-white">
          <div>
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-4 italic">Detail Layanan Premium</h4>
            <p className="text-gray-500 font-medium leading-relaxed text-base">
              {service.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-blue-50/50 p-6 rounded-[35px] border border-blue-100 shadow-sm text-center">
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Harga Layanan</p>
                <p className="text-3xl font-black text-[#1678F3] italic leading-none">Rp {service.price}<span className="text-xs text-gray-400 italic">/{service.unit}</span></p>
              </div>
              <div className="bg-[#1678F3] p-6 rounded-[35px] shadow-lg shadow-blue-100 flex items-center justify-center gap-3">
                <Sparkles className="text-white fill-white" size={24} />
                <span className="text-white font-black italic uppercase text-[10px] tracking-widest">Quality Guaranteed</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
             <button className="flex-1 bg-gray-100 text-gray-400 font-black py-5 rounded-[25px] uppercase text-[10px] tracking-widest">Edit Information</button>
             <button className="flex-[2] bg-[#1678F3] text-white font-black py-5 rounded-[25px] uppercase text-[10px] tracking-widest shadow-xl shadow-blue-200 italic hover:scale-105 active:scale-95 transition-all">Update Status</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;