export const csr = true; // csr attivo
export const ssr = true; //ssr attivo
 
let utenti = [];

export function load({ params }) {
    console.log("ESECUIONE FUNZIONE LOAD:", Date.now());
    
    // restituiamo la lista degli utenti
    return { utenti }
}

export const actions = {
    default: async ({cookies, request}) => {
        const data = await request.formData();
        console.log("I VALORI DEL FORM SONO:", data);
        const user = {
            nome: data.get("nome"),
            cognome: data.get("cognome"),
            eta: data.get("eta")
        }
        if (user.nome && user.cognome && user.eta){
            utenti.push(user)
        }
        else {
            return {
                form_error:true,
                form_vals: user
            }
        }
    },
};