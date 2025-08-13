
import LeadForm from "../../features/lead/LeadForm"; // ajuste conforme seu projeto

export default function LeadSection() {
    return (
      <section id="lead" className="bg-sky-50 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Texto + Lista + Botão */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-snug">
                Comece agora — é rápido e gratuito
              </h2>
  
              <ul className="space-y-4 text-slate-700 text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                  Cadastro gratuito e sem fidelidade
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                  Rede parceira com cobertura ampla
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                  Suporte por e-mail quando precisar
                </li>
              </ul>
  
              <div>
                <button className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow hover:shadow-md transition">
                  Quero meu desconto
                </button>
              </div>
            </div>
  
            {/* Formulário */}
            <div className="w-full max-w-xl mx-auto md:mx-0">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    );
  }