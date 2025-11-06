import React from "react";
import "./App.css";
import "./styles/vaxinovia.css";
import "./styles/dark-mode.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { InstitutionalExperience } from './pages/InstitutionalExperience';
import { Infrastructure } from './pages/Infrastructure';
import { Innovation } from './pages/Innovation';
import { VaccineStrategy } from './pages/VaccineStrategy';
import { Staffing } from './pages/Staffing';
import { Financing } from './pages/Financing';
import { Results } from './pages/Results';
import { Projects } from './pages/Projects';
import { Publications } from './pages/Publications';
import { Partners } from './pages/Partners';
import { Contact } from './pages/Contact';
import { Investment } from './pages/Investment';
import { Legal } from './pages/Legal';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<InstitutionalExperience />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/strategy" element={<VaccineStrategy />} />
            <Route path="/staffing" element={<Staffing />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/results" element={<Results />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal/:type" element={<Legal />} />
          </Routes>
          <Footer />
          <Toaster position="top-right" />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
