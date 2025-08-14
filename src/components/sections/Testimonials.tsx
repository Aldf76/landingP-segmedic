import { memo } from "react";
import { Card } from "../ui/card";

import Ana from "@/assets/testimonials/ana-ribeiro.png";
import Carlos from "@/assets/testimonials/carlos-mendes.png";
import Marcos from "@/assets/testimonials/marcos-azevedo.png";

// Tipo de dado para cada depoimento
type Testimonial = {
  name: string;
  role: string;   // cargo + empresa
  quote: string;  // texto do depoimento
  photo?: string; // caminho da foto
};

// Imagem de fallback caso a foto não carregue
const FALLBACK_AVATAR = "/images/avatar-fallback.jpg";

// Lista de depoimentos
function getTestimonials(): Testimonial[] {
  return [
    {
      name: "Ana Ribeiro",
      role: "CEO • Grupo Nova Vitta",
      quote:
        "Sofríamos com afastamentos e custos crescentes. Em poucos meses, reduzimos gargalos no absenteísmo e controlamos reajustes, com maior engajamento do time.",
      photo: Ana,
    },
    {
      name: "Carlos Mendes",
      role: "Diretor de RH • TechPrime Solutions",
      quote:
        "Oferecemos um benefício valorizado e melhoramos o clima organizacional. O retorno aparece nos números e na satisfação visível dos colaboradores.",
      photo: Carlos,
    },
    {
      name: "Marcos Azevedo",
      role: "CFO • LogiMax Transportes",
      quote:
        "A sinistralidade era um problema sério. Com ações preventivas e acesso facilitado, ganhamos previsibilidade orçamentária e equipe mais saudável.",
      photo: Marcos,
    },
  ];
}

// Card individual de depoimento
function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Card className="h-full overflow-hidden">
      
      {/* Foto padronizada com crop e foco no topo */}
      <div className="w-full bg-slate-100" style={{ aspectRatio: "3 / 2" }}>
        <img
          src={t.photo || FALLBACK_AVATAR}
          alt={`Foto de ${t.name}`}
          loading="lazy"
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = FALLBACK_AVATAR;
          }}
        />
      </div>

      {/* Nome, cargo e texto do depoimento */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <div className="mb-2">
          <h3 className="text-lg font-semibold leading-tight">{t.name}</h3>
          <p className="text-slate-600 text-sm">{t.role}</p>
        </div>
        <p className="text-slate-700 leading-relaxed">{t.quote}</p>
      </div>
    </Card>
  );
}

// Seção completa de depoimentos
function TestimonialsSection() {
  const items = getTestimonials();

  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Título e subtítulo da seção */}
        <header className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            O que líderes empresariais dizem
          </h2>
          <p className="mt-3 text-slate-600">
            Resultados qualitativos que impactaram pessoas e negócios.
          </p>
        </header>

        {/* Grid responsiva para exibir os cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 place-items-stretch">
          {items.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(TestimonialsSection);
