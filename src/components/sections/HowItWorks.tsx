const steps = [
  { n: "1", t: "Cadastre-se", d: "Leva menos de 30 segundos." },
  { n: "2", t: "Receba o acesso", d: "Enviamos instruções no seu e-mail." },
  { n: "3", t: "Aproveite", d: "Use os descontos em consultas e exames." },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Como funciona
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl">
          Um fluxo direto para você começar a economizar hoje.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map(s => (
            <div key={s.n} className="group">
              <div className="size-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-semibold shadow-sm">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-slate-600">{s.d}</p>
              <div className="mt-4 h-px bg-slate-200 group-hover:bg-primary/30 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
