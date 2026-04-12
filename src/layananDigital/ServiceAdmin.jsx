import { useState } from "react";
import data from "./services.json";

export default function ServiceAdmin() {
  const [services, setServices] = useState(data);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");

  const filtered = services.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "" || item.category === category;

    const matchDuration =
      duration === "" || item.details.duration === duration;

    return matchSearch && matchCategory && matchDuration;
  });
  // DELETE
  const handleDelete = (id) => {
    setServices(services.filter((item) => item.id !== id));
  };

  // EDIT (simple pakai prompt)
  const handleEdit = (id) => {
    const newName = prompt("Edit service name:");
    if (!newName) return;

    setServices(
      services.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100  to-green-200 p-6">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6 text-center 
bg-gradient-to-r from-amber-700 to-yellow-900 
text-transparent bg-clip-text">
        Admin Coffee Service ☕
      </h1>

      {/* FILTER GLASS */}
      <div className="flex flex-col md:flex-row gap-3 mb-6 
    bg-white/30 backdrop-blur-xl 
    border border-white/40 
    rounded-2xl shadow-lg p-4">

        <input
          type="text"
          placeholder="🔍 Search service..."
          className="flex-1 px-4 py-2 rounded-lg 
        bg-white/40 border border-white/30 
        focus:ring-2 focus:ring-pink-300 outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded-lg 
        bg-white/40 border border-white/30 
        focus:ring-2 focus:ring-green-300 outline-none"
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
          className="px-4 py-2 rounded-lg 
  bg-white/40 border border-white/30 
  focus:ring-2 focus:ring-green-300 outline-none"
        >
          <option value="">Durasi</option>
          <option value="1 hari">1 hari</option>
          <option value="2 jam">2 jam</option>
          <option value="1 bulan">1 bulan</option>
          <option value="1 minggu">1 minggu</option>
        </select>
      </div>

      {/* TABLE WRAPPER */}
      <div className="bg-white/40 backdrop-blur-xl 
    border border-white/40 
    rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-pink-200 to-green-200 text-gray-700">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Provider</th>
              <th className="p-3">Location</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item) => (
              <tr
                key={item.id}
                className="text-center border-t 
              hover:bg-white/50 transition"
              >
                <td className="p-3 font-semibold text-gray-700">
                  {item.name}
                </td>

                <td className="p-3 text-pink-500 font-medium">
                  {item.category}
                </td>

                <td className="p-3 text-green-600 font-semibold">
                  Rp {item.price.toLocaleString()}
                </td>

                <td className="p-3 text-yellow-500">
                  ⭐ {item.rating}
                </td>

                <td className="p-3 text-gray-600">
                  {item.provider.name}
                </td>

                <td className="p-3 text-gray-500">
                  📍 {item.provider.location}
                </td>

                <td className="p-3 text-gray-500">
                  ⏱ {item.details.duration}
                </td>

                {/* ACTION */}
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-blue-500 hover:bg-blue-600 
  px-3 py-1 rounded-md text-white text-xs 
  shadow transition"
                  >
                    ✎ Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-600 
  px-3 py-1 rounded-md text-white text-xs 
  shadow transition"
                  >
                    🗑 Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}