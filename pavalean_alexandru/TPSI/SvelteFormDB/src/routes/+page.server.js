// export const csr = true; // csr attivo
// export const ssr = true; //ssr attivo

// let utenti = [
//     {nome: "Mario", cognome: "Rossi",eta:25},
//     {nome: "Luca", cognome: "Bianchi",eta:15},
//     {nome: "Gianni", cognome: "Verdi", eta:19},
//     {nome: "Pino", cognome: "Silvestri",eta:27},

// ];

import Database from "better-sqlite3";

const db = new Database("USER.db", {verbose: console.log});

export function load({params}) {
    console.log("ESECUZIONE FUNZIONE LOAD:", Date.now());

    const query1 = db.prepare("SELECT * FROM Utente");
    const res1 = query1.all();

    return {
        utenti: res1
    };
}


// export const actions = {
//     default: async ({cookies,request}) => {
//         const data = await request.formData();
//         console.log("I VALORI DEL FORM SONO:", data );

//         const user = {
//                 nome:data.get("nome"),
//                 cognome: data.get("cognome"),
//                 eta: data.get("eta")
//             }
//     if (user.nome && user.cognome && user.eta) {

//         utenti.push(user);
//     }
//     else {
//         return{
//             form_error:true,
//             form_vals:user

//         }
//     }
// },
// };