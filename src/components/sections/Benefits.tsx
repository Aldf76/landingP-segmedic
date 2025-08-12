import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ShieldCheck, Hospital, Wallet } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Economia real",
    desc: "Descontos consistentes em consultas e exames selecionados.",
  },
  {
    icon: Hospital,
    title: "Rede parceira",
    desc: "Clínicas e profissionais em várias regiões, com atendimento de qualidade.",
  },
  {
    icon: Wallet,
    title: "Sem fidelidade",
    desc: "Cadastre-se sem compromisso e comece a aproveitar.",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <Badge variant="secondary">Benefícios</Badge>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Tudo o que importa para cuidar de você
          </h2>
          <p className="mt-3 text-slate-600">
            Uma proposta simples: reduzir seus custos em saúde sem complicação.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="p-6 hover:shadow-lg transition-shadow">
              <div className="size-10 rounded-lg bg-secondary/20 text-primary grid place-items-center">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
