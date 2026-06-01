import React, { Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from "./components/Loading";

// Lazy Loading Pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NewOrder = React.lazy(() => import("./pages/orders/NewOrder")); 
const Tracking = React.lazy(() => import("./pages/Tracking"));
const Services = React.lazy(() => import("./pages/Services"));
const Interactions = React.lazy(() => import("./pages/Interactions"));
const History = React.lazy(() => import("./pages/History"));
const Payments = React.lazy(() => import("./pages/Payments"));
const CustomerDetail = React.lazy(() => import("./pages/CustomerDetail"));
const ServiceDetail = React.lazy(() => import("./pages/ServiceDetail"));

// Layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

// Auth Pages
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

// Error Pages
const NotFound = React.lazy(() => import("./pages/NotFound"));


function App() {
  // Master data order disimpan di sini supaya tidak hilang saat pindah halaman
  const [allOrders, setAllOrders] = useState([
    { id: "ORD-001", customer: "Jihan Zahra", service: "Cuci Setrika", weight: "5kg", total: "Rp 50.000", status: "Proses", date: "24 Mei 2024" },
    { id: "ORD-002", customer: "Budi Santoso", service: "Cuci Kering", weight: "3kg", total: "Rp 21.000", status: "Selesai", date: "23 Mei 2024" },
  ]);

  // Fungsi untuk menambah order baru dari halaman NewOrder
  const handleAddOrder = (newOrder) => {
    setAllOrders((prevOrders) => [newOrder, ...prevOrders]);
  };

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Private Routes (Admin BrightWash) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          
          {/* Kirim fungsi penambah order ke halaman NewOrder */}
          <Route path="/orders/new" element={<NewOrder onAddOrder={handleAddOrder} />} />
          
          {/* Kirim data master order ke halaman tabel Orders */}
          <Route path="/orders" element={<Orders orders={allOrders} />} />
          
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<CustomerDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/interactions" element={<Interactions />} />
          <Route path="/history" element={<History />} />
          <Route path="/payments" element={<Payments />} />

          {/* Error & Utils */}
      
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;