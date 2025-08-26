import { Routes, Route } from "react-router-dom";
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
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <WhatsAppFloatingButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;
