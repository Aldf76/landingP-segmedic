// src/components/sections/Hero.tsx
import Button from "../ui/button"; // Componente de botão reutilizável
import heroImg from "@/assets/hero.webp"; // Imagem principal do Hero

export default function Hero() {
  return (
    // SECTION → bloco principal do Hero
    <section className="container mx-auto px-4 py-16 md:py-24">
      
      {/* GRID → divide o conteúdo em duas colunas no desktop (texto à esquerda, imagem à direita) */}
      <div className="grid items-center gap-10 md:grid-cols-2">
        
        {/* BLOCO DE TEXTO */}
        <div>
          {/* TÍTULO PRINCIPAL → maior destaque visual da página */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Programa de Descontos em Saúde <span className="text-primary">SegMedic</span>
          </h1>

          {/* PARÁGRAFO DESCRITIVO → explica rapidamente a proposta do serviço */}
          <p className="mt-4 text-slate-600">
  Programa de descontos da SegMedic para <strong>pessoas físicas</strong> e famílias que buscam
  <strong> economia em consultas e exames</strong> na rede parceira. Simples, sem fidelidade e com acesso imediato.
</p>
          {/* BOTÃO DE CHAMADA PARA AÇÃO (CTA) → direciona o usuário para o formulário */}
          <div className="mt-8">
            {/* Link âncora para a seção do formulário (id="lead") */}
            <a href="#lead" aria-label="Ir para formulário">
              <Button size="lg">Quero meu desconto</Button>
            </a>
          </div>
        </div>

        {/* BLOCO DA IMAGEM */}
        <div className="relative">
          {/* IMG → imagem ilustrativa que transmite a proposta da página */}
          <img
            src={heroImg} // caminho da imagem importada
            alt="Atendimento médico acolhedor" // descrição para acessibilidade e SEO
            className="w-full h-auto rounded-xl shadow" // responsiva + cantos arredondados + sombra
            loading="eager" // carrega a imagem o quanto antes (importante para a primeira dobra da página)
          />
        </div>
      </div>
    </section>
  );
}
