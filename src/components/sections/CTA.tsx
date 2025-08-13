import Button from "../ui/button";
import { Check } from "lucide-react";

const bullets = [
  "Cadastro gratuito e sem fidelidade",
  "Rede parceira com cobertura ampla",
  "Suporte por e-mail quando precisar",
];

export default function CTA() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        Comece agora — é rápido e gratuito
      </h2>
      <ul className="mt-4 space-y-2">
        {bullets.map(b => (
          <li key={b} className="flex items-start gap-3 text-slate-700">
            <span className="mt-1 rounded-full bg-secondary/30 p-1">
              <Check className="size-4" />
            </span>
            {b}
          </li>
        ))}
      </ul>
      <a href="#lead">
        <Button size="lg" className="mt-6">Quero meu desconto</Button>
      </a>
    </div>
  );
}
