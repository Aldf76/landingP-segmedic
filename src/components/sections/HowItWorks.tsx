import { Button } from "../ui/button"; // Botão reutilizável do design system

export default function ComoFunciona() {
  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Cabeçalho da section */}
        <header className="text-center mb-10">
          {/* Selo informativo para contextualizar */}
          <span className="text-sm font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-3 py-1 inline-block mb-4">
            Dois jeitos de começar agora
          </span>
          
          {/* Título principal da section */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1E2547]">
            Como funciona
          </h2>
          
          {/* Subtítulo com explicação rápida */}
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Um fluxo direto para você começar a economizar hoje.
          </p>
        </header>

        {/* Grade com dois caminhos possíveis para iniciar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Caminho 1: Autoatendimento */}
          <div className="rounded-2xl shadow-sm border bg-white p-6 md:p-8 text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Simular economia agora</h3>
            <p className="text-slate-600 mb-4">
              Informe colaboradores e modalidade atual e veja <strong>economia estimada</strong>.
            </p>
            {/* Botão que rola suavemente até o simulador na página */}
            <Button
              onClick={() => {
                const el = document.getElementById("simulador");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Simular economia agora"
            >
              Simular economia
            </Button>
          </div>

          {/* Caminho 2: Atendimento consultivo */}
          <div className="rounded-2xl shadow-sm border bg-white p-6 md:p-8 text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Quer uma recomendação personalizada?</h3>
            <p className="text-slate-600 mb-4">
              Nosso time analisa seu caso e entrega um <strong>plano com ROI, prazos e onboarding</strong>.
            </p>

            {/* Ações: Agendar diagnóstico ou falar no WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-3 mb-2">
              {/* Botão que rola até o formulário de contato */}
              <Button
                onClick={() => {
                  const el = document.getElementById("formulario");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label="Agendar diagnóstico"
              >
                Agendar diagnóstico
              </Button>

              {/* Botão secundário que abre conversa no WhatsApp */}
              <Button
                variant="outline"
                asChild
                aria-label="Falar no WhatsApp"
              >
                <a
                  href="https://wa.me/5511999999999?text=Quero+um+diagnóstico+personalizado&utm_source=site"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Lista de benefícios estratégicos em formato de bullet points */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="flex gap-3 items-start">
            <span className="text-green-600 text-lg">✓</span>
            <p className="text-slate-700 text-sm">
              <strong>Estimativa de economia</strong> e <strong>projeção de ROI</strong> para seu cenário
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-green-600 text-lg">✓</span>
            <p className="text-slate-700 text-sm">
              <strong>Redução de absenteísmo</strong> e controle de <strong>sinistralidade</strong>
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-green-600 text-lg">✓</span>
            <p className="text-slate-700 text-sm">
              <strong>Onboarding rápido</strong> e <strong>relatórios claros</strong> para RH e CFO
            </p>
          </div>
        </div>

        {/* Observação de confiança para reforçar prazos e indicadores */}
        <p className="text-sm text-slate-500 mt-6 text-center">
          Relatórios com indicadores de <strong>economia, adesão e uso</strong> por centro de custo. Média de ativação: <strong>3–5 dias úteis</strong>.
        </p>
      </div>
    </section>
  );
}
