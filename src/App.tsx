import "./index.css";
//Layout
import MainLayout from "./components/layout/MainLayout";

// Seções
import Hero from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";
import HowItWorks from "./components/sections/HowItWorks";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";

// Formulário
import LeadForm from "./features/lead/LeadForm";

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

      {/* Como funciona */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Depoimentos */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* CTA final + Formulário */}
      <section id="lead" className="py-16">
        <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2">
          <CTA />
          <div>
            <LeadForm />
          </div>
        </div>
      </section>
      </MainLayout>

  );
}

export default App;
