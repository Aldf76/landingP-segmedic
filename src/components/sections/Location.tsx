import { Loader2, Home, MapPin, Route, ExternalLink, CheckCircle2 } from "lucide-react";
import React from "react";

// Componente de KPI (valor + rótulo + ícone)
function Stat({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm">
      <div className="grid place-items-center rounded-xl p-2 bg-[#1E2547]/5">
        <Icon className="h-5 w-5 text-[#D8282C]" />
      </div>
      <div>
        <div className="text-2xl font-bold leading-none">{value}</div>
        <div className="text-slate-600 text-sm">{label}</div>
      </div>
    </div>
  );
}

// Dados gerais de cobertura
const COVERAGE = {
  unitsCount: 9,
  citiesCount: 20,
  note: "Inclui atendimento domiciliar na Baixada e Zona Oeste do RJ.",
};

// Tipo para cada local exibido
type Place = {
  name: string;
  type: "Unidade" | "Domiciliar";
  city: string;
  maps: string;   // link do Google Maps
  route?: string; // link opcional para rota
};

// Lista de locais destacados
const PLACES: Place[] = [
  {
    name: "Unidade Matriz – Nova Iguaçu (Centro)",
    type: "Unidade",
    city: "Nova Iguaçu",
    maps: "https://www.google.com/maps/search/?api=1&query=Unidade+SegMedic+Nova+Igua%C3%A7u",
  },
  {
    name: "Unidade Nilópolis",
    type: "Unidade",
    city: "Nilópolis",
    maps: "https://www.google.com/maps/search/?api=1&query=Unidade+SegMedic+Nil%C3%B3polis",
  },
  {
    name: "Unidade São João de Meriti",
    type: "Unidade",
    city: "Rio de Janeiro (São João de Meriti)",
    maps: "https://www.google.com/maps/place/R.+S%C3%A3o+Jo%C3%A3o+Batista,+172...",
  },
  {
    name: "Unidade Campo Grande",
    type: "Unidade",
    city: "Rio de Janeiro (Campo Grande)",
    maps: "https://www.google.com/maps/search/?api=1&query=Unidade+SegMedic+Campo+Grande+RJ",
  },
  {
    name: "Atendimento domiciliar – Baixada",
    type: "Domiciliar",
    city: "Várias cidades",
    maps: "https://www.google.com/maps/search/?api=1&query=Baixada+Fluminense",
  },
  {
    name: "Atendimento domiciliar – Zona Oeste",
    type: "Domiciliar",
    city: "Várias regiões",
    maps: "https://www.google.com/maps/search/?api=1&query=Zona+Oeste+RJ",
  },
];

export default function LocationCoverageGoogle() {
  return (
    // ===== Seção de Cobertura Geográfica =====
    // Exibe mapa interativo e lista de locais atendidos
    <section id="locations" className="relative py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho da seção */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Onde atendemos</h2>
          <p className="mt-3 text-slate-600">
            Veja no mapa os principais pontos de atuação. Atuamos via unidades físicas e{" "}
            <span className="font-medium">atendimento domiciliar</span>.
          </p>
        </div>

        {/* Grid principal: mapa + painel lateral */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Mapa Google My Maps */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl shadow-lg border bg-white p-3">
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
                
                {/* Overlay de carregamento */}
                <div className="absolute inset-0 z-10 grid place-items-center pointer-events-none" id="map-loader">
                  <div className="flex items-center gap-3 rounded-full bg-white/85 px-3 py-1.5 shadow-sm">
                    <Loader2 className="h-4 w-4 animate-spin text-[#1E2547]" />
                    <span className="text-sm text-slate-600">Carregando mapa…</span>
                  </div>
                </div>

                {/* Iframe com o mapa */}
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=1knPvaX1NMlLGUq7DI4yw2BGEzEOy1EE&ehbc=2E312F"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => {
                    const el = document.getElementById("map-loader");
                    if (el) el.style.display = "none";
                  }}
                  title="Mapa de cobertura SegMedic"
                />
              </div>
            </div>
          </div>

          {/* Painel lateral: KPIs, bullets e CTA */}
          <aside className="flex flex-col gap-4">
            <div className="rounded-2xl bg-white p-5 border shadow-sm">
              <h3 className="text-lg font-semibold">Capilaridade do atendimento</h3>
              <p className="mt-1 text-slate-600 text-sm">Cobertura por unidades e atendimento domiciliar.</p>

              {/* Estatísticas principais */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Stat value={`+${COVERAGE.unitsCount}`} label="unidades" icon={Home} />
                <Stat value={`+${COVERAGE.citiesCount}`} label="cidades atendidas" icon={MapPin} />
              </div>

              {/* Lista rápida de diferenciais */}
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#D8282C]" />
                  Coleta de exames e vacinas em domicílio
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#D8282C]" />
                  Baixada Fluminense e Zona Oeste do RJ
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#D8282C]" />
                  Agendamento rápido no WhatsApp
                </li>
              </ul>

              <p className="mt-3 text-xs text-slate-500">{COVERAGE.note}</p>
            </div>

            {/* Botão CTA para contato via WhatsApp */}
            <a
              href="https://wa.me/55XXXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1E2547] px-5 py-3 text-white font-medium hover:opacity-90 transition"
              aria-label="Falar com um atendente no WhatsApp"
            >
              Falar com um atendente
            </a>
          </aside>
        </div>

        {/* Lista detalhada de locais */}
        <div className="mt-8 lg:mt-10 grid grid-cols-1">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Locais destacados</h3>
            <p className="mt-1 text-slate-600 text-sm">Veja alguns pontos de atuação mostrados no mapa.</p>

            <ul className="mt-4 divide-y divide-slate-100">
              {PLACES.map((p) => (
                <li key={p.name} className="py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  
                  {/* Identificação do local */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                          p.type === "Unidade"
                            ? "bg-[#1E2547]/5 text-[#1E2547]"
                            : "bg-[#D8282C]/5 text-[#D8282C]"
                        }`}
                      >
                        {p.type}
                      </span>
                      <strong className="text-slate-800">{p.name}</strong>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{p.city}</div>
                  </div>

                  {/* Ações: ver no mapa e traçar rota */}
                  <div className="flex items-center gap-2">
                    <a
                      href={p.maps}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-50"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ver no mapa
                    </a>
                    <a
                      href={p.route ?? p.maps}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-50"
                    >
                      <Route className="h-4 w-4" />
                      Traçar rota
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Curva inferior para transição visual */}
      <div className="pointer-events-none absolute -bottom-6 left-0 right-0 h-6 bg-white rounded-t-[24px]" />
    </section>
  );
}
