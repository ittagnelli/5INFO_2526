// import database from "better-sqlite3";
// const db = new database("USER.db", {verbose: console.log});



// export function load({ params }) {
//     console.log("ESECUZIONE FUNZIONA LOAD: ", Date.now());
//     const query1 = db.prepare("SELECT * FROM Utente");
//     const res1 = query1.all();

//     return {
//         utenti: res1,
//     };
// }   


// // export const actions = {
//     // default: async({cookies, request}) => {
//         // const data = await request.formData();
//         // console.log("CREATE ACTION");
//         // console.log("I valori del Form sono: ", data);
// // 
//         // const query2 = db.prepare("INSERT INTO Utente (nome, cognome, eta) VALUES (@nome, @cognome, @anni)");
//         // const user = {
//                 // nome: data.get('nome'),
//                 // cognome:data.get('cognome'),
//                 // eta: data.get('eta')
//             // 
//         // }
//         // if (user.nome && user.cognome && user.eta){
//             // const res2 = query2.run({
//                 // nome: user.nome,
//                 // cognome: user.cognome,
//                 // anni: +user.eta
//             // })
//         // } else {
//             // return {
//                 // form_error: true,
//                 // form_vals: user
//             // }
//         // }
//     // }
// // };

