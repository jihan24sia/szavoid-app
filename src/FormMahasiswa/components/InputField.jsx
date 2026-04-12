export default function InputField({ label, type, name, value, onChange, error }) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
      />

      {error && (
        <div className="w-full p-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none">
          {error}
        </div>
      )}
    </div>
  );
}