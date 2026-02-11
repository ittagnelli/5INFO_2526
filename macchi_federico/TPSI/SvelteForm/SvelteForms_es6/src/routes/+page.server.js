import { query } from "$app/server";
import Database from "better-sqlite3";

const db = new Database("USER.db", { verbose: console.log });

//db.prepare(`
  //CREATE TABLE IF NOT EXISTS Utente (
    //id INTEGER PRIMARY KEY AUTOINCREMENT,
    //nome TEXT,
    //cognome TEXT,
    //eta INTEGER
  //);
//`).run();

// LOAD: leggere utenti dal DB
export function load({params}) {
  const users = db.prepare("SELECT * FROM Utente").all();
  return { utenti: users };
}

// ACTION: aggiungere utente
export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    console.log("Create ACTION");
    console.log("I VALORI DEL FORM SONO", data);

    const query2 = db.prepare("Insert INTO Utente (nome,cognome,eta) VALUES(@nome,@cognome,@anni)");


    const user = {
      nome: data.get("nome"),
      cognome: data.get("cognome"),
      eta: Number(data.get("eta"))
    };

    // controllo campi
    if (user.nome && user.cognome && user.eta) {
      const res2 = query2.run({
        nome:user.nome,
        cognome:user.cognome,
        anni: +user.eta
      });
      }else{
        return {
          form_error: true,
          form_vals: user
        }
    }

    // inserimento nel DB
   // db.prepare("INSERT INTO Utente (nome, cognome, eta) VALUES (?, ?, ?)")
     // .run(user.nome, user.cognome, user.eta);

    return { success: true };
  }
};
