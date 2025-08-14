import { CheckCircle2 } from "lucide-react";
import Button from "../ui/button";
import { Badge } from "../ui/badge";
import heroBg from "@/assets/hero-2.webp";

export default function Hero() {
  return (
    // ===== Hero Section =====
    // Seção de abertura com título, benefícios e CTA
    <section id="hero" className="relative isolate overflow-hidden">
      {/* Background com imagem em tela cheia */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      {/* Overlay para melhorar contraste do conteúdo */}
      <div className="absolute inset-0 z-0 bg-white/10" aria-hidden />

      {/* Container central do conteúdo */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Cartão translúcido com blur para legibilidade e elegancia */}
          <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg p-6 md:p-10">
            {/* Selo de contexto do público-alvo */}
            <Badge className="mb-4">Para empresas</Badge>

            {/* Frase principal */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Planos e benefícios de saúde sem dor de cabeça
            </h1>

            <p className="mt-4 text-slate-700 md:text-lg">
              Reduza custos e ganhe previsibilidade. Gestão simples, suporte
              humano e onboarding em dias — não meses.
            </p>

            {/* Lista de benefícios  */}
            <ul className="mt-6 space-y-3">
              {[
                "Economia relevante no primeiro ano*",
                "Ativação rápida para novas admissões",
                "Relatórios claros para decisões de RH",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA principal → ancora para o formulário de lead */}
            <div className="mt-8">
              <a
                href="#lead"
                aria-label="Ir para o formulário de contato"
                data-analytics="cta-hero-primary"
              >
                <Button size="lg">Falar com um especialista</Button>
              </a>
            </div>

            {/* Nota de métrica ilustrativa */}
            <p className="mt-3 text-xs text-slate-500">
              *Métrica ilustrativa — ajustamos quando houver dado real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
