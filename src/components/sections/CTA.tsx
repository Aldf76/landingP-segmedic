import Button from "../ui/button";
import { Check } from "lucide-react";

// Lista de benefícios exibidos no CTA
const bullets = [
  "Cadastro gratuito e sem fidelidade",
  "Rede parceira com cobertura ampla",
  "Suporte por e-mail quando precisar",
];

export default function CTA() {
  return (
    // ===== Seção de Chamada para Ação =====
    // Convite final para o usuário iniciar o cadastro
    <div>
      
      {/* Título motivador */}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        Comece agora — é rápido e gratuito
      </h2>

      {/* Lista de vantagens rápidas */}
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

      {/* Botão de ação que leva ao formulário */}
      <a href="#lead">
        <Button size="lg" className="mt-6">Quero meu desconto</Button>
      </a>
    </div>
  );
}
