import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    q: "O que é o programa de descontos SegMedic?",
    a: "Um benefício que reduz o custo de consultas e exames selecionados em rede parceira.",
  },
  {
    q: "Quanto custa me cadastrar?",
    a: "O cadastro é gratuito e sem fidelidade.",
  },
  {
    q: "Recebo o desconto imediatamente?",
    a: "Sim. Após o cadastro, enviamos as instruções por e-mail para utilizar os descontos.",
  },
  {
    q: "Meus dados estão protegidos?",
    a: "Sim. Pedimos apenas nome e e-mail para contato e seguimos boas práticas de privacidade.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Dúvidas frequentes</h2>
        <p className="mt-3 text-slate-600 max-w-xl">
          Reunimos respostas rápidas para o que você mais precisa saber.
        </p>

        <div className="mt-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
