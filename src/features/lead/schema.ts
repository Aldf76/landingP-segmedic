// src/schemas/lead.ts
import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  email: z.string().email("E-mail inválido"),
  company: z.string().min(2, "Informe a empresa"),
  employees: z.string().min(1, "Selecione a quantidade de funcionários"),
  phone: z.string().optional(), // opcional, sem regex
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
