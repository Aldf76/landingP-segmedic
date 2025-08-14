import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Props aceitando qualquer conteúdo React como filho
interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    // ===== Layout Principal =====
    // Estrutura base com cabeçalho, conteúdo e rodapé
    <>
      {/* Cabeçalho fixo do site */}
      <Header />

      {/* Conteúdo principal (mínimo altura da viewport) */}
      <main className="min-h-dvh bg-background text-foreground">
        {children}
      </main>

      {/* Rodapé padrão */}
      <Footer />
    </>
  );
}
