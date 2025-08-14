import type { ReactNode } from "react";
import Header from "./Header"; // Cabeçalho fixo do site
import Footer from "./Footer"; // Rodapé fixo do site

// Props: recebe os elementos que serão renderizados no meio (entre Header e Footer)
interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      {/* Cabeçalho comum a todas as páginas */}
      <Header />

      {/* Conteúdo principal */}
      <main className="min-h-dvh bg-background text-foreground">
        {children}
      </main>

      {/* Rodapé comum a todas as páginas */}
      <Footer />
    </>
  );
}
