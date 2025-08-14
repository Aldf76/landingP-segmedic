import Button from "../ui/button"; // Botão padrão do sistema
import { Check } from "lucide-react"; // Ícone de check

// Lista dos pontos-chave para reforçar a ação
const bullets = [
  "Cadastro gratuito e sem fidelidade",
  "Rede parceira com cobertura ampla",
  "Suporte por e-mail quando precisar",
];

export default function CTA() {
  return (
    <div>
      {/* Título chamando para ação */}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        Comece agora — é rápido e gratuito
      </h2>

      {/* Lista de benefícios resumidos */}
      <ul className="mt-4 space-y-2">
        {bullets.map(b => (
          <li key={b} className="flex items-start gap-3 text-slate-700">
            {/* Ícone decorativo para cada item */}
            <span className="mt-1 rounded-full bg-secondary/30 p-1">
              <Check className="size-4" />
            </span>
            {b}
          </li>
        ))}
      </ul>

      {/* Botão que leva ao formulário */}
      <a href="#lead">
        <Button size="lg" className="mt-6">Quero meu desconto</Button>
      </a>
    </div>
  );
}
