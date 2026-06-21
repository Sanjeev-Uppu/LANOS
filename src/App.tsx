import { Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components/Layout";
import { Chatbot } from "./components/Chatbot";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </main>

      <Footer />
      <Chatbot />
    </>
  );
}

export default App;