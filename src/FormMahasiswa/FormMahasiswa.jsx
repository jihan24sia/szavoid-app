import { useState } from "react";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";

export default function FormEvent() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    nomorTelp: "",
    tempatduduk: "",
    hari: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // 🔧 handle change + realtime validasi
  const handleChange = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
    validate(newForm);
  };

 
  const validate = (data = form) => {
    let err = {};

 
    if (!data.nama) err.nama = "Nama wajib diisi";
    else if (/\d/.test(data.nama)) err.nama = "Tidak boleh angka";
    else if (data.nama.length < 3) err.nama = "Minimal 3 karakter";

 
    if (!data.email) err.email = "Email wajib diisi";
    else if (!data.email.includes("@")) err.email = "Harus ada @";
    else if (!data.email.includes(".")) err.email = "Harus ada titik (.)";

  
    if (!data.nomorTelp) err.nomorTelp = "Nomor wajib diisi";
    else if (!/^\d+$/.test(data.nomorTelp)) err.nomorTelp = "Harus angka";
    else if (data.nomorTelp.length < 10)
      err.nomorTelp = "Minimal 10 digit";

    if (!data.tempatduduk) err.tempatduduk = "Pilih tempat duduk";
    else if (!["VIP", "FESTIVAL", "TRIBUN"].includes(data.tempatduduk))
      err.tempatduduk = "Tidak valid";
    else if (data.tempatduduk.length < 3)
      err.tempatduduk = "Tidak valid";

   
    if (!data.hari) err.hari = "Pilih hari";
    else if (!["Day 1", "Day 2", "Day 3"].includes(data.hari))
      err.hari = "Tidak valid";
    else if (data.hari.length < 3)
      err.hari = "Tidak valid";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const isValid =
    Object.keys(errors).length === 0 &&
    form.nama &&
    form.email &&
    form.nomorTelp &&
    form.tempatduduk &&
    form.hari;

  return (
    <div className="min-h-screen flex justify-center items-start pt-10 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300">
      
      <form
        onSubmit={handleSubmit}
        className="bg-pink-100 p-6 rounded-2xl shadow-2xl w-96 border border-pink-200"
      >
        
        <h2 className="text-2xl font-bold mb-4 text-center text-[#96CBFC]">
          Music Concert Event ♪𝄞♫ᝰ.ᐟ
        </h2>

        <InputField
          label="Name"
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          error={errors.nama}
        />

        <InputField
          label="Email"
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          label="Phone Number"
          type="text"
          name="nomorTelp"
          value={form.nomorTelp}
          onChange={handleChange}
          error={errors.nomorTelp}
        />

        <SelectField
          label="Seat Type"
          name="tempatduduk"
          value={form.tempatduduk}
          onChange={handleChange}
          options={["VIP", "FESTIVAL", "TRIBUN"]}
          error={errors.tempatduduk}
        />

        <SelectField
          label="Day"
          name="hari"
          value={form.hari}
          onChange={handleChange}
          options={["Day 1", "Day 2", "Day 3"]}
          error={errors.hari}
        />

        {isValid && (
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl mt-2 shadow-md transition">
            Submit
          </button>
        )}

        {submitted && (
          <div className="mt-4 p-3 bg-pink-100 text-pink-700 rounded-xl border border-pink-300">
            <p> Nama: {form.nama}</p>
            <p> Email: {form.email}</p>
            <p> Phone: {form.nomorTelp}</p>
            <p> Seat: {form.tempatduduk}</p>
            <p> Day: {form.hari}</p>
          </div>
        )}
      </form>
    </div>
  );
}