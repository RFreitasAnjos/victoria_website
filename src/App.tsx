import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Home from "../src/pages/Home";
import Sobre from "../src/pages/Sobre";
import Servicos from "../src/pages/Servicos";
import Contato from "../src/pages/Contato";
import Login from "../src/pages/Login";
import Register from "./pages/Register";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import UserProfile from "./pages/UserProfile";
import Error from "./pages/Error";
import RecoveryPassword from "./pages/RecoveryPassword";
import ResetPassword from "./pages/ResetPassword";
import MarketPlace from "./pages/MarketPlace";
import DescribeMaterial from "./pages/DescribeMaterial";
import MaterialScreen from "./pages/materialScreen";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/error" element={<Error />} />
          <Route path="/forgot-password" element={<RecoveryPassword />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/describe_material" element={<DescribeMaterial />} />
          <Route path="/material" element={<MaterialScreen />} />
        </Routes>
        <WhatsAppFloatingButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
