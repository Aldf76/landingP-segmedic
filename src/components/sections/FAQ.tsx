import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { MessageSquareText, Phone, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "O que é o programa de descontos SegMedic?",
    a: "É uma forma simples de garantir saúde de qualidade pagando menos. Com ele, você tem acesso a consultas, exames e outros serviços por preços reduzidos em nossa rede de unidades e parceiros.",
  },
  {
    q: "Quanto custa me cadastrar?",
    a: "O cadastro é totalmente gratuito e sem compromisso. Você só paga quando utilizar nossos serviços com desconto.",
  },
  {
    q: "Recebo o desconto imediatamente?",
    a: "Sim. Assim que seu cadastro for confirmado, você já pode agendar e aproveitar os valores reduzidos nas especialidades e exames disponíveis.",
  },
  {
    q: "Meus dados estão protegidos?",
    a: "Sim. Coletamos apenas as informações necessárias para o seu atendimento e seguimos rigorosamente as normas de segurança e privacidade de dados.",
  },
  {
    q: "A SegMedic é um plano de saúde?",
    a: "Não. A SegMedic é uma rede de clínicas que oferece serviços médicos, exames e outros atendimentos com preços acessíveis, sem mensalidade ou carência. Você paga apenas pelo que usar, com valores reduzidos.",
  },
];

export default function FAQ() {
  return (
    <section className="relative py-16 md:py-24 bg-[#F4FAF4]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <header className="mb-5 text-center ">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1E2547]">
              Dúvidas frequentes
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Reunimos respostas rápidas para o que você mais precisa saber.
            </p>
          </header>

          {/* Grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Lateral esquerda */}
            <aside className="lg:col-span-4 space-y-4">
              {[
                {
                  icon: MessageSquareText,
                  title: "Dúvidas?",
                  desc: "Acesse nossa Central de Ajuda",
                  href: "/ajuda",
                },
                {
                  icon: Phone,
                  title: "Fale com um consultor",
                  desc: "Cadastre-se e aproveite os descontos",
                  href: "#contato",
                },
                {
                  icon: MessageCircle,
                  title: "Chama no WhatsApp",
                  desc: "Atendimento rápido",
                  href: "https://wa.me/55XXXXXXXXXXX",
                  external: true,
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noreferrer" : undefined}
                  className="block rounded-2xl border border-[#1E2547]/10 bg-white p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl p-2 bg-[#1E2547]/10">
                      <item.icon className="size-5 text-[#1E2547]" />
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </a>
              ))}
            </aside>

            {/* Acordeão de perguntas */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl p-1 bg-[#1E2547]/10">
                <div className="rounded-3xl p-4 md:p-6 bg-white">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((f, i) => (
                      <AccordionItem
                        key={i}
                        value={`faq-${i}`}
                        className="border-b last:border-b-0 border-slate-200"
                      >
                        <AccordionTrigger
                          className="text-left py-5 md:py-6 px-4 font-medium hover:no-underline data-[state=open]:bg-slate-50 rounded-2xl"
                        >
                          <span className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full bg-[#1E2547]/10 text-[#1E2547] text-sm font-semibold">
                              {(i + 1).toString().padStart(2, "0")}
                            </span>
                            {f.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-6 pt-1 text-slate-600 text-sm">
                          {f.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
