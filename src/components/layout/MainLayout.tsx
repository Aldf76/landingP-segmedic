// src/layout/MainLayout.tsx
import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-dvh bg-background text-foreground">
        {children}
      </main>
      <Footer />
    </>
  );
}
