import Database from "better-sqlite3";
// let utenti = [
//     {nome : "Mario",cognome : "Rossi" ,eta : 25},
//     {nome : "Luca",cognome : "Rossi" ,eta : 15},
//     {nome : "Gianni",cognome : "Rossi" ,eta : 19},
//     {nome : "Pino",cognome : "Rossi" ,eta : 2}
// ];

const db = new Database("USER.db",{verbose:console.log})
export function load({ params }) {
    console.log("ESECUIONE FUNZIONE LOAD:", Date.now());
    const query1 = db.prepare("SELECT * FROM Utente");
    const res1 = query1.all();

    return { utenti:res1 }
};




// export const actions = {
//     default: async ({cookies,request}) => {
//         const data = await request.formData();
//         console.log("I VALORI DEL FORM SONO : ",data)

//         const user  = {
            
//                 nome: data.get('nome'),
//                 cognome: data.get('cognome'),
//                 eta: data.get('eta')
            
//         }

//         if(user.nome && user.cognome && user.eta){
//             utenti.push(user);
//         } else {
//             return {
//                 form_error: true,
//                 form_vals: user
//             }
//         }
//     }
// };