// App.tsx
import "./index.css";

// Layout
import MainLayout from "./components/layout/MainLayout";

// Seções
import Hero from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";
import HowItWorks from "./components/sections/HowItWorks";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import LocationCoverageRJ from "./components/sections/Location";
import LeadSection from "./components/sections/LeadSection"; // ✅ Corrigido aqui

function App() {
  return (
    <MainLayout>
      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* Benefícios */}
      <section id="benefits">
        <Benefits />
      </section>

      {/* Áreas de atuação */}
      <LocationCoverageRJ />

      {/* Como funciona */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Depoimentos */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* CTA + Formulário corrigido */}
      <LeadSection />

        {/* LINHA DIVISÓRIA */}
        <div className="w-full h-px bg-[#D2EAD2]  " aria-hidden />

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>
    </MainLayout>
  );
}

export default App;
