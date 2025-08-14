import { CheckCircle2 } from "lucide-react"; // Ícones para reforçar lista de benefícios
import Button from "../ui/button"; // Botão reutilizável do design system
import { Badge } from "../ui/badge"; // Selo para destacar segmento ("Para empresas")
import heroBg from "@/assets/hero-2.webp"; // Imagem de fundo do Hero

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      {/* Fundo principal com imagem */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      {/* Camada translúcida para suavizar o fundo e melhorar a leitura */}
      <div className="absolute inset-0 z-0 bg-white/10" aria-hidden />

      {/* Conteúdo centralizado e com espaçamento para respiro visual */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Caixa branca semi-transparente para dar contraste com o texto */}
          <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg p-6 md:p-10">
            
            {/* Selo que indica o público-alvo */}
            <Badge className="mb-4">Para empresas</Badge>

            {/* Título principal: mensagem-chave de impacto */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Planos e benefícios de saúde que geram resultados — com cuidado clínico de verdade
            </h1>

            {/* Parágrafo introdutório explicando o serviço e seu valor */}
            <p className="mt-4 text-slate-700 md:text-lg">
              Reduza custos e ganhe previsibilidade enquanto seu time tem acesso a um{" "}
              <strong>ambulatório completo</strong>: consultas presenciais e por telemedicina,
              exames laboratoriais e de imagem, e suporte multiprofissional (clínico geral, especialidades,
              psicologia e nutrição). Gestão simples, suporte humano e ativação rápida.
            </p>

            {/* Lista de benefícios em tópicos para leitura rápida */}
            <ul className="mt-6 space-y-3">
              {[
                "Até 80% de desconto em consultas e exames pela rede parceira",
                "Qualidade assistencial: protocolos de atendimento e suporte multiprofissional",
                "Relatórios estratégicos para RH e financeiro (uso, economia e adesão)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-800">
                  {/* Ícone de check para transmitir confiança e confirmação */}
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Botão principal (CTA) que direciona ao formulário de contato */}
            <div className="mt-8">
              <a
                href="#lead"
                aria-label="Ir para o formulário de contato"
                data-analytics="cta-hero-primary" // Atributo para rastrear cliques em analytics
              >
                <Button size="lg">Falar com um especialista</Button>
              </a>
            </div>

            {/* Observação opcional para esclarecer regras do benefício */}
            <p className="mt-3 text-xs text-slate-500">
              *Descontos variam por especialidade e unidade. Consulte condições do programa corporativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
