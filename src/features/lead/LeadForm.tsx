import { useState } from "react";
import { Input } from "../../components/ui/input";
import Button from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { leadFormSchema, type LeadFormData } from "../lead/schema";

// Mapeamento de possíveis erros por campo
type ErrorMap = {
  name?: string;
  email?: string;
  company?: string;
  employees?: string;
  phone?: string;
};

export default function LeadForm() {
  // Estados para controle de envio e feedback
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorMap>({});

  // Envio do formulário
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setSent(false);

    // Coleta e normaliza os valores do formulário
    const f = new FormData(e.currentTarget);
    const values: LeadFormData = {
      name: String(f.get("name") || ""),
      email: String(f.get("email") || ""),
      company: String(f.get("company") || ""),
      employees: String(f.get("employees") || ""),
      phone: (f.get("phone") as string) || undefined,
    };

    // Validação com Zod (leadFormSchema)
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

    setLoading(true);
    console.log("Lead válido:", parsed.data);

    // Simulação de envio assíncrono
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      e.currentTarget.reset();
    }, 600);
  };

  return (
    // ===== Formulário de Captura de Leads =====
    // Coleta dados da empresa e contato para proposta
    <form onSubmit={onSubmit} className="w-full max-w-3xl rounded-2xl p-6 md:p-8 bg-white shadow-xl">
      
      {/* Campos do formulário */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div>
          <Label htmlFor="name">Nome *</Label>
          <Input id="name" name="name" placeholder="Seu nome" className="rounded-full" />
          {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="email">E-mail corporativo *</Label>
          <Input id="email" name="email" type="email" placeholder="voce@empresa.com" className="rounded-full" />
          {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="company">Empresa *</Label>
          <Input id="company" name="company" placeholder="Nome da empresa" className="rounded-full" />
          {errors.company && <p className="text-sm text-red-600">{errors.company}</p>}
        </div>

        <div>
          <Label htmlFor="employees">Qtd. de funcionários *</Label>
          <select
            id="employees"
            name="employees"
            defaultValue=""
            className="w-full h-10 px-4 rounded-full border border-slate-300 bg-white"
          >
            <option value="" disabled>Selecione…</option>
            <option value="1-20">1–20</option>
            <option value="21-50">21–50</option>
            <option value="51-200">51–200</option>
            <option value="201-500">201–500</option>
            <option value="500+">500+</option>
          </select>
          {errors.employees && <p className="text-sm text-red-600">{errors.employees}</p>}
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="phone">Telefone (opcional)</Label>
          <Input id="phone" name="phone" type="tel" inputMode="tel" placeholder="(11) 90000-0000" className="rounded-full" />
          {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
        </div>
      </div>

      {/* Botão de envio */}
      <Button className="mt-6 w-full md:w-auto px-8 rounded-full" size="lg" type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Solicitar proposta"}
      </Button>

      {/* Mensagem de confirmação */}
      {sent && (
        <p role="status" aria-live="polite" className="mt-3 text-sm font-medium text-green-700">
          Recebemos seus dados! Em breve entraremos em contato.
        </p>
      )}
    </form>
  );
}
