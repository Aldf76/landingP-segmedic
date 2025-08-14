import Button from "../ui/button";
import { MessageSquare, PhoneCall } from "lucide-react";

// Lista de passos para começar a usar
const steps = [
  { n: "1", t: "Cadastre-se", d: "Leva menos de 30 segundos." },
  { n: "2", t: "Receba o acesso", d: "Enviamos instruções no seu e-mail." },
  { n: "3", t: "Aproveite", d: "Use os descontos em consultas e exames." },
];

export default function HowItWorks() {
  return (
    // ===== Seção "Como Funciona" =====
    // Explica as formas de iniciar o uso dos benefícios
    <section id="how-it-works" className="relative isolate overflow-hidden">
      
      {/* Fundo com cor secundária suave */}
      <div className="absolute inset-0 -z-10 bg-secondary/10" aria-hidden />

      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Título e descrição */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Como funciona</h2>
        <p className="mt-3 text-slate-600 max-w-xl">Um fluxo direto para você começar a economizar hoje.</p>

        {/* Wrapper com divisória central no desktop */}
        <div className="relative mt-10">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-300/60" aria-hidden />

          {/* Etiqueta entre as colunas no desktop */}
          <div className="hidden md:flex absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <span className="px-3 py-1 rounded-full bg-white shadow text-xs font-medium text-slate-600">
              Dois jeitos de começar agora
            </span>
          </div>

          {/* Grid com colunas: passos e contato consultivo */}
          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            
            {/* Coluna esquerda — passos do processo */}
            <div className="h-full">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm flex flex-col">
                <div className="space-y-8">
                  {steps.map((s) => (
                    <div key={s.n} className="group">
                      <div className="size-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-semibold shadow-sm">
                        {s.n}
                      </div>
                      <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
                      <p className="mt-2 text-slate-600">{s.d}</p>
                      <div className="mt-4 h-px bg-slate-200 group-hover:bg-primary/30 transition-colors" />
                    </div>
                  ))}
                </div>
                <div className="mt-auto" />
              </div>
            </div>

            {/* Coluna direita — contato consultivo */}
            <div className="h-full md:pl-6">
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm flex flex-col">
                
                {/* Tag de destaque */}
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary/40 px-3 py-1 text-xs font-medium text-slate-700">
                  <PhoneCall className="h-4 w-4" /> Atendimento consultivo
                </div>

                {/* Título e explicação */}
                <h3 className="mt-3 text-xl font-semibold">Prefere começar com ajuda do nosso time?</h3>
                <p className="mt-2 text-slate-600">
                  Deixe seu WhatsApp e um consultor entra em contato para entender sua necessidade e indicar a melhor
                  solução para a sua empresa.
                </p>

                {/* Lista de vantagens do atendimento consultivo */}
                <ul className="mt-4 space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                    Atendimento rápido e humanizado
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                    Indicação do melhor fit de benefícios
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                    Sem compromisso — é só conversar
                  </li>
                </ul>

                {/* Botões de ação */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="#lead" aria-label="Falar pelo WhatsApp">
                    <Button size="lg" className="w-full sm:w-auto">
                      Falar pelo WhatsApp
                    </Button>
                  </a>
                  <a href="#lead" aria-label="Preencher formulário">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Preencher formulário
                    </Button>
                  </a>
                </div>

                {/* Informação de tempo de resposta */}
                <p className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                  <MessageSquare className="h-4 w-4" />
                  Resposta em minutos no horário comercial.
                </p>

                <div className="mt-auto" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
