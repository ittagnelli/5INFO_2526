// Utilizzando la libreria better-sqlite3 scriver eun programma per node.js che
// inserisca 3 utenti nella tabella Utente
// trovi e stampi tutti gli utenti con età > di 18 anni
// trovi e stampi tutti gli utenti con età esattamente uguale a 16
// faccia l'update di un utente e stampi lo stato del DB dopo l'update
// rimuova un utente dal DB dato il suo id


import Database from "better-sqlite3";

const db = new Database('./USER.db')

const query1 = db.prepare('INSERT INTO Utente ( nome, cognome, eta) VALUES (@nome, @cognome, @anni)')
const info1 = query1.run({nome: 'Mario', cognome: 'Rossi', anni: 25})
const info2 = query1.run({nome: 'Francesco', cognome: 'Verdi', anni: 16})
const info3 = query1.run({nome: 'Luigi', cognome: 'Bianchi', anni: 18})

const query2 = db.prepare('SELECT * FROM Utente WHERE eta > ?')
const ris = query2.all(18)

const query3 = db.prepare('SELECT * FROM Utente WHERE eta = ?')
const ris2 = query3.all(16)

const query5 = db.prepare('UPDATE Utente SET nome = @nome WHERE eta = 25')
const info4 = query5.run({nome: 'Lorenzo'})
console.log(info4)

const query6 = db.prepare('DELETE FROM Utente WHERE id= ?');
const info6 = query6.run(2)