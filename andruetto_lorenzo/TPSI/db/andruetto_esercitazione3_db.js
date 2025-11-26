import Database from 'better-sqlite3';
import { info } from 'console';
import { queryObjects } from 'v8';

const db = new Database('./USER.db');

const query1 = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES (?,?,?)');
const utente1 = query1.run('Mario', 'Rossi', 17);
const utente2 = query1.run('Giuseppe', 'Verdi', 19);
const utente3 = query1.run('Giulia', 'Ramassalli', 23);

const query2 = db.prepare('SELECT * FROM Utente WHERE eta> ?');
const eta1 = query2.run(18);
const query3 = db.prepare('SELECT * FROM Utente WHERE eta= ?');
const eta2 = query3.run(16);

const query4 = db.prepare('UPDATE Utente SET nome=@nome WHERE eta=@eta');
const info5 = query4.run({nome: 'lorenzo', eta: 17});


console.log(utente1, utente2, utente3);
console.log(eta1, eta2);


console.log(info5);

const query5 = db.prepare('DELETE FROM Utente WHERE id= ?');
const info6 = query5.run(2);
console.log(info6);