import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { MessageSquareText, Phone, MessageCircle } from "lucide-react";

// Lista de perguntas e respostas
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

export default function FAQHybrid() {
  return (
    // ===== Seção de FAQ =====
    // Lista perguntas frequentes e atalhos para contato
    <section
      className="
        relative py-16 md:py-24
        bg-[--seg-secondary]/10
      "
    >
      {/* Curva superior decorativa */}
      <div
        className="absolute inset-x-0 -top-6 h-6 rounded-b-[2rem]
        bg-[--seg-secondary]/10 pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">

          {/* Cabeçalho da seção */}
          <header className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[--seg-primary]">
              Dúvidas frequentes
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Reunimos respostas rápidas para o que você mais precisa saber.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Coluna lateral com links úteis */}
            <aside className="lg:col-span-4 space-y-4">
              <a
                href="/ajuda"
                className="block rounded-2xl border bg-background p-5 shadow-sm hover:shadow-md transition border-[--seg-primary]/20"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl p-2 bg-[--seg-primary]/10">
                    <MessageSquareText className="size-5 text-[--seg-primary]" />
                  </div>
                  <div>
                    <p className="font-medium">Dúvidas?</p>
                    <p className="text-sm text-muted-foreground">
                      Acesse nossa Central de Ajuda
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="#contato"
                className="block rounded-2xl border bg-background p-5 shadow-sm hover:shadow-md transition border-[--seg-primary]/20"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl p-2 bg-[--seg-primary]/10">
                    <Phone className="size-5 text-[--seg-primary]" />
                  </div>
                  <div>
                    <p className="font-medium">Fale com um consultor</p>
                    <p className="text-sm text-muted-foreground">
                      Cadastre-se e aproveite os descontos
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/55XXXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border bg-background p-5 shadow-sm hover:shadow-md transition border-[--seg-primary]/20"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl p-2 bg-[--seg-primary]/10">
                    <MessageCircle className="size-5 text-[--seg-primary]" />
                  </div>
                  <div>
                    <p className="font-medium">Chama no WhatsApp</p>
                    <p className="text-sm text-muted-foreground">
                      Atendimento rápido
                    </p>
                  </div>
                </div>
              </a>
            </aside>

            {/* Lista de FAQs com acordeão */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl p-1 bg-[--seg-primary]">
                <div className="rounded-3xl p-4 md:p-6 bg-background">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((f, i) => (
                      <AccordionItem
                        key={i}
                        value={`faq-${i}`}
                        className="group border-b last:border-b-0 border-border/60"
                      >
                        <AccordionTrigger
                          className="
                            text-left py-5 md:py-6
                            [&>svg]:shrink-0
                            rounded-2xl
                            hover:no-underline
                            data-[state=open]:bg-[--seg-secondary]/10
                            data-[state=open]:rounded-2xl
                            px-4
                            font-medium
                          "
                        >
                          <span className="flex items-start gap-3">
                            {/* Número da pergunta */}
                            <span className="mt-0.5 inline-flex size-6 items-center justify-center rounded-full
                              bg-[--seg-primary]/10 text-[--seg-primary] text-sm font-semibold
                            ">
                              {(i + 1).toString().padStart(2, "0")}
                            </span>
                            {f.q}
                          </span>
                        </AccordionTrigger>

                        <AccordionContent className="px-4 pb-6 pt-1 text-muted-foreground">
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

      {/* Curva inferior decorativa */}
      <div
        className="absolute inset-x-0 -bottom-6 h-6 rounded-t-[2rem]
        bg-[--seg-secondary]/10 pointer-events-none"
        aria-hidden
      />
    </section>
  );
}
