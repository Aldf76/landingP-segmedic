export default function LeadForm() {
    return (
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded"
        >
          Enviar
        </button>
      </form>
    );
  }
  