import Database from "better-sqlite3";

const db = new Database("USER.db", {verbose: console.log});

export function load({params}) {
    console.log("ESECUZIONE FUNZIONE LOAD:", Date.now());
    const query1 = db.prepare("SELECT * FROM Utente");
    const res1 = query1.all();
    console.log(res1);

    return {
        utenti: res1
    };
}

export const csr = true; // csr attivo
export const ssr = true; //ssr attivo

export const actions = {
    default: async ({cookies, request}) => {
        const data = await request.formData();
        console.log("I VALORI DEL FORM SONO:", data);

        const user = {
            nome: data.get("nome"),
            cognome: data.get("cognome"),
            eta: data.get("eta")
        }
        if (user.nome && user.cognome && user.eta) {
            utenti.push(user);
        }
        else {
            return {
                form_error: true,
                form_vals: user
            }
        }
    }
}