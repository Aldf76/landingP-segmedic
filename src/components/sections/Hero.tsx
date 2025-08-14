import { CheckCircle2} from "lucide-react";
import Button from "../ui/button";
import { Badge } from "../ui/badge";
import heroBg from "@/assets/hero-2.webp";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      {/* BG image */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      {/* overlay suave */}
      <div className="absolute inset-0 z-0 bg-white/10" aria-hidden />

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg p-6 md:p-10">
            <Badge className="mb-4">Para empresas</Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Planos e benefícios de saúde que geram resultados — com cuidado clínico de verdade
            </h1>

            <p className="mt-4 text-slate-700 md:text-lg">
              Reduza custos e ganhe previsibilidade enquanto seu time tem acesso a um{" "}
              <strong>ambulatório completo</strong>: consultas presenciais e por telemedicina,
              exames laboratoriais e de imagem, e suporte multiprofissional (clínico geral, especialidades,
              psicologia e nutrição). Gestão simples, suporte humano e ativação rápida.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Até 80% de desconto em consultas e exames pela rede parceira",
                "Qualidade assistencial: protocolos de atendimento e suporte multiprofissional",
                "Relatórios estratégicos para RH e financeiro (uso, economia e adesão)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#lead"
                aria-label="Ir para o formulário de contato"
                data-analytics="cta-hero-primary"
              >
                <Button size="lg">Falar com um especialista</Button>
              </a>
            </div>

            {/* microcópia opcional de confiança */}
            <p className="mt-3 text-xs text-slate-500">
              *Descontos variam por especialidade e unidade. Consulte condições do programa corporativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
