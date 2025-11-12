import Database from "better-sqlite3";
const db = new Database("USER.db", {verbose: console.log});

export function load({ params }) {
    console.log("ESECUZIONE FUNZIONE LOAD:", Date.now());

    const query1 = db.prepare("SELECT * FROM Utente");
    const res1 = query1.all();

    return {
        utenti: res1
    };
}