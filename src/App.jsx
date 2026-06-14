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
const ManageUsers = React.lazy(() => import("./pages/ManageUsers"));
const GuestPage = React.lazy(() => import("./pages/GuestPage"));
const MemberDashboard = React.lazy(() => import("./pages/MemberDashboard"));

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

        {/* ================= GUEST ROUTE UTAMA ================= */}
        <Route path="/" element={<GuestPage />} />

        {/* ================= KHUSUS HALAMAN MEMBER (MURNI TANPA SIDEBAR ADMIN) ================= */}
        {/* Dikeluarkan dari MainLayout supaya menggunakan layout mandiri Member yang rapi */}

        <Route path="/memberdashboard/:userId" element={<MemberDashboard />} />

        {/* ================= PRIVATE ROUTES (KHUSUS ADMIN) ================= */}
        {/* Semua halaman di bawah ini dibungkus MainLayout (Ada Sidebar Admin Jihan & Navbar) */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders/new" element={<NewOrder onAddOrder={handleAddOrder} />} />
          <Route path="/orders" element={<Orders orders={allOrders} />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<CustomerDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/interactions" element={<Interactions />} />
          <Route path="/history" element={<History />} />
          <Route path="/payments" element={<Payments />} />
        </Route>

        {/* ================= AUTH ROUTES ================= */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* ================= ERROR PAGE ================= */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;