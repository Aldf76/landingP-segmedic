// src/sections/Benefits.tsx
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import Button from "../ui/button";
import {
  Wallet,           // Redução de custos
  FlaskConical,     // Exames laboratoriais
  Stethoscope,      // Consultas/tele
  Brain,            // Psicologia
  Salad,            // Nutrição
  BarChart3,        // Relatórios/gestão
} from "lucide-react";

type Item = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};

const items: Item[] = [
  {
    icon: Wallet,
    title: "Redução de custos",
    desc: "Modelos de benefício que diminuem o gasto com saúde sem perder qualidade.",
  },
  {
    icon: FlaskConical,
    title: "Exames laboratoriais",
    desc: "Acesso facilitado à rede parceira para check-ups e exames de rotina.",
  },
  {
    icon: Stethoscope,
    title: "Consultas e telemedicina",
    desc: "Atendimento ágil para o seu time, presencial ou online, sem burocracia.",
  },
  {
    icon: Brain,
    title: "Apoio psicológico",
    desc: "Cuidado com a saúde mental para aumentar bem‑estar e produtividade.",
  },
  {
    icon: Salad,
    title: "Nutrição e bem‑estar",
    desc: "Acompanhamento alimentar e orientação para hábitos saudáveis.",
  },
  {
    icon: BarChart3,
    title: "Relatórios e gestão",
    desc: "Dados claros para RH tomar decisões e acompanhar indicadores.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <Badge variant="secondary">Benefícios</Badge>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Benefícios para você e seus colaboradores !
          </h2>
          <p className="mt-3 text-slate-600">
            O pacote Segmedic para empresas prioriza redução de custos, acesso rápido e cuidado contínuo.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              className="group p-8 text-center rounded-2xl shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Ícone centralizado */}
              <div className="mx-auto grid place-items-center size-14 rounded-2xl bg-secondary/20 text-primary">
                <Icon className="size-7" aria-hidden />
              </div>

              {/* Separador simples */}
              <div className="my-6 h-px w-16 mx-auto bg-slate-200 group-hover:bg-slate-300 transition-colors" />

              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </Card>
          ))}
        </div>

        {/* CTA final centralizado */}
        <div className="mt-12 text-center">
          <a href="#lead" aria-label="Ir para o formulário de contato">
            <Button size="lg">Quero conhecer todos os benefícios</Button>
          </a>
        </div>
      </div>
    </section>
  );
}