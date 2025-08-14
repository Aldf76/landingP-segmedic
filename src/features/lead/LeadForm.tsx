import { useState } from "react";
import { Input } from "../../components/ui/input"; // Campo de texto padrão
import Button from "../../components/ui/button";   // Botão reutilizável
import { Label } from "../../components/ui/label"; // Label estilizado
import { leadFormSchema, type LeadFormData } from "../lead/schema"; // Validação com Zod

// Possíveis erros mapeados para cada campo
type ErrorMap = {
  name?: string;
  email?: string;
  company?: string;
  employees?: string;
  phone?: string;
};

export default function LeadForm() {
  // Estado para controle de envio e validação
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorMap>({});

  // Função de envio do formulário
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setSent(false);

    // Captura os dados dos campos
    const f = new FormData(e.currentTarget);
    const values: LeadFormData = {
      name: String(f.get("name") || ""),
      email: String(f.get("email") || ""),
      company: String(f.get("company") || ""),
      employees: String(f.get("employees") || ""),
      phone: (f.get("phone") as string) || undefined,
    };

    // Validação via Zod
    const parsed = leadFormSchema.safeParse(values);
    if (!parsed.success) {
      const out: ErrorMap = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ErrorMap;
        if (key) out[key] = issue.message;
      }
      setErrors(out);
      return;
    }

    // Simulação de envio
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      e.currentTarget.reset();
    }, 600);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full rounded-2xl p-6 md:p-8 bg-white shadow-xl space-y-6"
    >
      {/* Grade dos campos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Nome */}
        <div>
          <Label htmlFor="name">Nome *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Seu nome"
            className="rounded-full"
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* E-mail */}
        <div>
          <Label htmlFor="email">E-mail corporativo *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="voce@empresa.com"
            className="rounded-full"
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Empresa */}
        <div>
          <Label htmlFor="company">Empresa *</Label>
          <Input
            id="company"
            name="company"
            placeholder="Nome da empresa"
            className="rounded-full"
          />
          {errors.company && (
            <p className="text-sm text-red-600">{errors.company}</p>
          )}
        </div>

        {/* Qtd. funcionários */}
        <div>
          <Label htmlFor="employees">Qtd. de funcionários *</Label>
          <select
            id="employees"
            name="employees"
            defaultValue=""
            className="w-full h-10 px-4 rounded-full border border-slate-300 bg-white text-sm"
          >
            <option value="" disabled>
              Selecione…
            </option>
            <option value="1-20">1–20</option>
            <option value="21-50">21–50</option>
            <option value="51-200">51–200</option>
            <option value="201-500">201–500</option>
            <option value="500+">500+</option>
          </select>
          {errors.employees && (
            <p className="text-sm text-red-600">{errors.employees}</p>
          )}
        </div>

        {/* Telefone */}
        <div className="md:col-span-2">
          <Label htmlFor="phone">Telefone (opcional)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(11) 90000-0000"
            className="rounded-full"
          />
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Botão de envio */}
      <Button
        className="w-full md:w-auto px-8 rounded-full"
        size="lg"
        type="submit"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Solicitar proposta"}
      </Button>

      {/* Mensagem de sucesso */}
      {sent && (
        <p className="text-sm font-medium text-green-700">
          Recebemos seus dados! Em breve entraremos em contato.
        </p>
      )}
    </form>
  );
}
