export const csr = true; // csr attivo
export const ssr = true; //ssr attivo

let utenti = [
    {nome: 'Mario' , cognome: 'Rossi' , età: 25},
    {nome: 'Luca' , cognome: 'Bianchi' , età: 15},
    {nome: 'Gianni' , cognome: 'Verdi' , età: 19},
    {nome: 'Pino' , cognome: 'Silvedtre' , età: 27},
];

export function load({params}) {
    console.log("ESECUZIONE FUNZIONE LOAD:", Date.now());
    return {
        utenti
    }
}
export const actions = {
    default: async ({cookies, request }) => {
        const data = await request.formData();
        console.log("I VALORI DEL FORM SONO:", data);

        const user = {
            nome: data.get("nome"),
            cognome: data.get("cognome"),
            eta: data.get("eta"),

        }
        if (user.nome && user.cognome && user.eta) {
            utenti.push(user);
        }else {
            return {
                form_error: true,
                form_vals: user
            }
        }
    }
};
