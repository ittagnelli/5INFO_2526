export const csr = true; // csr attivo
export const ssr = true; //ssr attivo

export function load({ params }) {
    console.log("ESECUIONE FUNZIONE LOAD:", Date.now());
    
    // creo la lista degli utenti. Qui potrei accedere al DB
    let utenti = [
        'Mario',
        'Luca',
        'Gianni',
        'Pino',
        'Marco'
        
    ];

    // restituiamo la lista degli utenti
    return { utenti }
}