import { useState } from "react";
import Button from "../ui/button"; // Botão reutilizável
import { Menu, X } from "lucide-react"; // Ícones para abrir/fechar menu mobile
import logo from "@/assets/logo.png"; // Logo da SegMedic

// Links de navegação
const nav = [
  { href: "#benefits", label: "Por que usar ?" },
  { href: "#how-it-works", label: "Como funciona" },
  { href: "#testimonials", label: "Quem indica ?" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#footer", label: "Fale Conosco" },
];

export default function Header() {
  const [open, setOpen] = useState(false); // Controle de abertura do menu mobile

  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-gray-500 text-gray-100 h-16 md:h-20"
      style={{ backgroundColor: "#2C4759" }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 h-full">
        
        {/* Logo alinhada à esquerda */}
        <a href="#hero" className="flex items-center h-full" aria-label="SegMedic - Início">
          <img
            src={logo}
            alt="SegMedic"
            className="block h-full w-auto max-h-full"
            decoding="async"
            loading="eager"
          />
        </a>

        {/* Navegação para desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="#lead">
            <Button size="sm">Quero cuidar do meu time!</Button>
          </a>
        </nav>

        {/* Botão para abrir/fechar menu mobile */}
        <button
          className="md:hidden p-2 text-gray-100"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu mobile visível apenas se `open` for true */}
      {open && (
        <div className="md:hidden border-t border-gray-500" style={{ backgroundColor: "#2C4759" }}>
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
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
