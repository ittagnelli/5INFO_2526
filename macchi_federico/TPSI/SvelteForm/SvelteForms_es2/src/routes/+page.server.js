// export const csr = true; // csr attivo
// export const ssr = true; //ssr attivo

let utenti = [
    {nome: 'Mario', cognome: "Rossi", eta:25},
    {nome: 'Luca', cognome: "Bianchi", eta:15},
    {nome: 'Gianni', cognome: "Verdi", eta:19},
    {nome: 'Pino', cognome: "Silvedtre", eta:27}

];

export function load({ params }) {
    console.log("ESECUIONE FUNZIONE LOAD:", Date.now());
    
    // creo la lista degli utenti. Qui potrei accedere al DB

    // restituiamo la lista degli utenti
    return { utenti }
}

export const actions = {
    default: async({cookies, request}) => {
        const data = await request.formData();
        console.log("I valori del Form sono: ", data);

        utenti.push(
            {
                nome: data.get('nome'),
                cognome:data.get('cognome'),
                eta: data.get('eta')
            }
        )
    }
};