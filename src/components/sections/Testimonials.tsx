import { Card } from "../ui/card";

const items = [
  {
    name: "Camila S.",
    role: "Cliente",
    result: "Economizei 28% em um check-up completo.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&q=80&auto=format&fit=facearea&facepad=2",
  },
  {
    name: "Marcos L.",
    role: "Cliente",
    result: "Consulta de cardiologia com ótimo desconto.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&q=80&auto=format&fit=facearea&facepad=2",
  },
  {
    name: "Ana Paula",
    role: "Cliente",
    result: "Exames laboratoriais por um preço que coube no bolso.",
    photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=256&q=80&auto=format&fit=facearea&facepad=2",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Depoimentos</h2>
        <p className="mt-3 text-slate-600 max-w-xl">Quem já usou o programa e aprovou.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((p) => (
            <Card key={p.name} className="p-6">
              <div className="flex items-center gap-4">
                <img
                  src={p.photo}
                  alt={`Foto de ${p.name}`}
                  className="size-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-slate-500">{p.role}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-700">{p.result}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
