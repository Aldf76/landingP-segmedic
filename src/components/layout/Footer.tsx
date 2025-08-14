import { Mail, Instagram, Facebook, Linkedin } from "lucide-react"; // Ícones de contato e redes sociais
import logo from "@/assets/logo.png"; // Logo SegMedic

export default function Footer() {
  const year = new Date().getFullYear(); // Ano atual para o copyright

  return (
    <footer
      id="footer"
      className="relative text-gray-100"
      style={{ backgroundColor: "#1E3240" }}
    >
      {/* Área principal do rodapé */}
      <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-4">
        
        {/* Coluna 1: Logo + descrição */}
        <div>
          <a href="#hero" className="flex items-center h-10" aria-label="SegMedic - Início">
            <img
              src={logo}
              alt="SegMedic"
              className="block h-full w-auto max-h-full"
              decoding="async"
              loading="lazy"
            />
          </a>
          <p className="mt-3 text-gray-300 text-sm">
            Programa de descontos para consultas e exames na rede parceira.
          </p>
        </div>

        {/* Coluna 2: Links de navegação do programa */}
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

        {/* Coluna 3: Contatos e suporte */}
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

        {/* Coluna 4: Redes sociais */}
        <div>
          <h4 className="font-semibold">Siga</h4>
          <div className="mt-3 flex items-center gap-4 text-gray-300">
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/segmedicsaude/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/segmedicsaude/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/segmedic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferior de direitos e links legais */}
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
