import { Card } from "../ui/card";
import Button from "../ui/button";
import {
  HandCoins,
  Stethoscope,
  Brain,
  ShieldCheck,
  Users,
  BarChart3,
} from "lucide-react";

type Item = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

const items: Item[] = [
  {
    icon: HandCoins,
    title: "Controle de custos",
    desc: "Modelos flexíveis que reduzem despesas com saúde e trazem previsibilidade orçamentária.",
  },
  {
    icon: Stethoscope,
    title: "Atendimento completo",
    desc: "Rede credenciada para consultas, telemedicina e exames, com até 80% de desconto.",
  },
  {
    icon: Brain,
    title: "Apoio à saúde mental",
    desc: "Programas de acompanhamento psicológico para melhorar bem-estar e engajamento.",
  },
  {
    icon: ShieldCheck,
    title: "Prevenção e bem-estar",
    desc: "Acompanhamento nutricional e ações preventivas que reduzem afastamentos.",
  },
  {
    icon: Users,
    title: "Agilidade para RH",
    desc: "Onboarding rápido de novos colaboradores e suporte humano dedicado.",
  },
  {
    icon: BarChart3,
    title: "Gestão orientada a dados",
    desc: "Relatórios claros para medir ROI, acompanhar indicadores e apoiar decisões estratégicas.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-sky-50 py-12 md:py-16 section-divider"
    >
      {/* Curva no fim da section */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-background rounded-t-[50%]" />

      <div className="section-container relative z-10 text-center">

        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
          Benefícios para você e seus colaboradores!
        </h2>

        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          O pacote Segmedic para empresas prioriza redução de custos, acesso rápido e cuidado contínuo.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              className="group p-8 text-center rounded-2xl shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="mx-auto grid place-items-center size-14 rounded-2xl bg-secondary/20 text-primary">
                <Icon className="size-7" aria-hidden />
              </div>

              <div className="my-6 h-px w-16 mx-auto bg-slate-200 group-hover:bg-slate-300 transition-colors" />

              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <a href="#lead" aria-label="Ir para o formulário de contato">
            <Button size="lg">Quero conhecer todos os benefícios</Button>
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ backgroundColor: "#D2EAD2" }}
      />
    </section>
  );
}