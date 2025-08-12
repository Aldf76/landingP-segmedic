import { useState } from "react";
import Button from "../ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg"; // <-- adicionei

const nav = [
  { href: "#benefits", label: "Benefícios" },
  { href: "#how-it-works", label: "Como funciona" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <a
        href="#lead"
        className="sr-only focus:not-sr-only focus:absolute focus:m-4 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Ir para o formulário
      </a>

      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2" aria-label="SegMedic - Início">
          <img
            src={logo}
            alt="SegMedic"
            className="h-12 w-auto md:h-14"
            decoding="async"
            loading="eager"
          />
        </a>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-foreground">
              {item.label}
            </a>
          ))}
          <a href="#lead">
            <Button size="sm">Quero meu desconto</Button>
          </a>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden p-2"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-3">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-sm">
                {item.label}
              </a>
            ))}
            <a href="#lead" onClick={() => setOpen(false)}>
              <Button className="w-full">Quero meu desconto</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
