import { Mail, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative text-gray-100"
      style={{ backgroundColor: "#1E3240" }}
    >
      {/* Conteúdo */}
      <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="inline-block h-6 w-6 rounded-md bg-[#D8282C]" />
            <span>SegMedic</span>
          </div>
          <p className="mt-3 text-gray-300 text-sm">
            Programa de descontos para consultas e exames na rede parceira.
          </p>
        </div>

        {/* Programa */}
        <div>
          <h4 className="font-semibold">Programa</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#benefits" className="text-gray-300 hover:underline">
                Benefícios
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="text-gray-300 hover:underline">
                Como funciona
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-gray-300 hover:underline">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-300 hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Suporte */}
        <div>
          <h4 className="font-semibold">Suporte</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2 text-gray-300">
              <Mail className="h-4 w-4" /> suporte@segmedic.com
            </li>
            <li>
              <a href="#lead" className="text-gray-300 hover:underline">
                Fale conosco
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold">Siga</h4>
          <div className="mt-3 flex items-center gap-4 text-gray-300">
            <a aria-label="Instagram" href="#">
              <Instagram />
            </a>
            <a aria-label="Facebook" href="#">
              <Facebook />
            </a>
            <a aria-label="LinkedIn" href="#">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-gray-500">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-gray-400 md:flex-row">
          <p>© {year} SegMedic. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a className="hover:underline" href="#">
              Termos de Uso
            </a>
            <a className="hover:underline" href="#">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
