
## 📄 SegMedic Landing Page

Landing page desenvolvida como parte do processo seletivo, com foco em conversão de leads e apresentação dos benefícios da SegMedic.

### 🚀 Deploy Online

Acesse a versão publicada: [**link-do-site-aqui**](https://link-do-site-aqui)

---

## 🛠 Tecnologias utilizadas

* [Vite](https://vitejs.dev/) — bundler rápido e otimizado
* [React](https://react.dev/) — biblioteca para construção de interfaces
* [Tailwind CSS](https://tailwindcss.com/) — estilização rápida e responsiva
* [Shadcn/UI](https://ui.shadcn.com/) — componentes pré-estilizados

---

## 📦 Como executar localmente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Aldf76/landingP-segmedic.git
cd landingP-segmedic
```

### 2️⃣ Instalar dependências

> É necessário ter **Node.js 18+** instalado.

```bash
npm install
```

### 3️⃣ Rodar o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

---

## 📂 Estrutura do projeto

```
landingP-segmedic/
├── public/                  # Arquivos públicos acessíveis diretamente
│   └── vite.svg
├── src/                     # Código-fonte
│   ├── assets/              # Imagens e arquivos estáticos
│   ├── components/          # Componentes reutilizáveis
│   │   ├── layout/           # Estrutura de layout
│   │   ├── sections/         # Seções da landing page
│   │   └── ui/               # Componentes de interface
│   ├── features/lead/       # Feature: formulário de lead
├── index.html               # HTML principal
├── package.json             # Configurações do projeto e dependências
└── vite.config.ts           # Configuração do Vite

```

---

## 📝 Observações

* Este projeto é **somente front-end**, sem back-end integrado.
* Todas as imagens usadas são para fins de demonstração.
* O deploy foi feito na **Vercel** e está no link : https://landing-p-segmedic.vercel.app/





## 📌 Decisões de Projeto

* **Estilização com Tailwind CSS** → Utilizei classes utilitárias (`mt-10`, `flex`, `rounded-xl`, etc.) em vez de CSS tradicional, para encurtar o tempo de desenvolvimento e uso de folhas de estilo externas.
* **Público-alvo definido** → O conteúdo e a comunicação visual foram pensados para empresas, após pesquisa sobre a Segmedic e seus diferenciais no mercado.
* **Componentização Atômica com React** → Estruturei a aplicação em componentes reutilizáveis e independentes, seguindo práticas de componentização que já havia aplicado em outros projetos.
* **Integração com Google My Maps** → Aprendi e implementei o recurso para exibir a cobertura geográfica de forma interativa e clara.
* **Fluxo de desenvolvimento simplificado** → Optei por poucas branches para economizar tempo e agilizar entregas durante o desafio.
* **Deploy na Vercel** → Permitiu CI/CD integrado ao GitHub, garantindo que cada atualização esteja disponível online de forma imediata.

---

## 🙏 Agradecimento

Obrigado pela oportunidade de demosntrar meu trabalho ! Espero que gostem do resultado

