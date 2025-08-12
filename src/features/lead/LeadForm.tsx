import { useState } from "react";
import { Input } from "../../components/ui/input";
import Button from "../../components/ui/button";
import { Label } from "../../components/ui/label";

export default function LeadForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    if (!name || !email) return; // validação mínima
    console.log("Lead:", { name, email }); // sem backend
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-md w-full">
      <div className="space-y-1">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" name="name" placeholder="Seu nome" required />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" placeholder="voce@email.com" required />
      </div>

      <Button className="w-full" size="lg" type="submit">Quero meu desconto</Button>

      {sent && (
        <p className="text-sm text-green-700">
          Recebemos seus dados! Em breve entraremos em contato.
        </p>
      )}
    </form>
  );
}
