import { useState } from "react";
import data from "./services.json";

export default function ServiceGuest() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || item.category === category) &&
    (duration === "" || item.details.duration === duration)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100  to-green-200 p-6">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6 text-center 
bg-gradient-to-r from-amber-700 to-yellow-900 
text-transparent bg-clip-text">
        Coffee Service ☕
      </h1>

      {/* FILTER GLASS */}
      <div className="flex flex-col md:flex-row gap-3 mb-8 
    bg-white/30 backdrop-blur-2xl 
    border border-white/40 
    rounded-3xl shadow-xl 
    p-4">

        <input
          type="text"
          placeholder="🔍︎ Cari Layanan Kopi..."
          className="flex-1 px-4 py-2 rounded-xl 
        bg-white/40 backdrop-blur-md 
        border border-white/30 
        focus:ring-2 focus:ring-pink-300 outline-none 
        shadow-sm transition"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded-xl 
        bg-white/40 backdrop-blur-md 
        border border-white/30 
        focus:ring-2 focus:ring-green-300 outline-none 
        shadow-sm transition"
        >
          <option value="">Kategori</option>
          <option value="Event Service">Event Service</option>
          <option value="Training">Training</option>
          <option value="Consulting">Consulting</option>
          <option value="Subscription">Subscription</option>
          <option value="Rental">Rental</option>
        </select>

        <select
          onChange={(e) => setDuration(e.target.value)}
          className="px-4 py-2 rounded-xl 
        bg-white/40 backdrop-blur-md 
        border border-white/30 
        focus:ring-2 focus:ring-green-300 outline-none 
        shadow-sm transition"
        >
          <option value="">Durasi</option>
          <option value="1 hari">1 hari</option>
          <option value="2 jam">2 jam</option>
          <option value="1 bulan">1 bulan</option>
          <option value="1 minggu">1 minggu</option>
        </select>
      </div>

      {/* CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">

        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white/60 backdrop-blur-xl 
  border border-white/40 
  rounded-2xl overflow-hidden 
  shadow-md hover:shadow-pink-200 
  hover:-translate-y-1 
  transition duration-300 
  flex flex-col h-full"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                className="w-full h-40 object-cover 
              hover:scale-110 transition duration-500"
                onError={(e) => (e.target.src = "/assets/coffee1.jpg")}
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col flex-1 justify-between">

              <h2 className="font-bold text-lg text-amber-800">
                {item.name}
              </h2>

              <p className="text-sm font-semibold text-pink-500">
                {item.category}
              </p>

              <p className="text-green-600 font-bold text-lg">
                Rp {item.price.toLocaleString()}
              </p>

              <p className="text-yellow-500 text-sm">
                ⭐ {item.rating}
              </p>

              <div className="text-xs text-gray-500 mt-2 space-y-1">
                <p>📍 {item.provider.location}</p>
                <p>⏱ {item.details.duration}</p>
              </div>

              <p className="text-xs text-gray-400 italic pt-1">
                by {item.provider.name}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}