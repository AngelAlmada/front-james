import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { DeliveryInfo } from "./components/DeliveryInfo"; // Importa el componente DeliveryInfo
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delivery-info" element={<DeliveryInfo />} /> {/* Ruta de Información de Entrega */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
