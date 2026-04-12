import { useState } from "react";
import ServiceGuest from "./ServiceGuest";
import ServiceAdmin from "./ServiceAdmin";

function App() {
  const [mode, setMode] = useState("guest");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-5 flex justify-center gap-3">
        <button
          onClick={() => setMode("guest")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Guest
        </button>

        <button
          onClick={() => setMode("admin")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Admin
        </button>
      </div>

      {mode === "guest" ? <ServiceGuest /> : <ServiceAdmin />}
    </div>
  );
}

export default App;