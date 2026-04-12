export default function SelectField({ label, name, value, onChange, options, error }) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
      >
        <option value="">-- Choose --</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {error && (
        <div className="w-full p-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none">
          {error}
        </div>
      )}
    </div>
  );
}