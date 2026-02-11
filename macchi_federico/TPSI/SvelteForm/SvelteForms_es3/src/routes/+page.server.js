// export const csr = true; // facoltativo
// export const ssr = true; // facoltativo

// simuliamo un piccolo "database" in memoria
let utenti = [
  { nome: 'Mario', cognome: "Rossi", eta: 25 },
  { nome: 'Luca', cognome: "Bianchi", eta: 15 },
  { nome: 'Gianni', cognome: "Verdi", eta: 19 },
  { nome: 'Pino', cognome: "Silvestri", eta: 27 }
];

// funzione di caricamento iniziale della pagina
export function load() {
  console.log("ESECUZIONE FUNZIONE LOAD:", Date.now());
  return { utenti };
}

// azioni per la gestione del form
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    console.log("I VALORI DEL FORM SONO:", data);

    const user = {
      nome: data.get("nome"),
      cognome: data.get("cognome"),
      eta: data.get("eta")
    };

    // controlla se tutti i campi sono compilati
    if (user.nome && user.cognome && user.eta) {
      utenti.push(user);
      console.log("UTENTE AGGIUNTO:", user);

      return {
        success: true,
        utenti
      };
    } else {
      // errore: campi mancanti
      return {
        form_error: true,
        form_vals: user
      };
    }
  }
};
