import Database from 'better-sqlite3';

const db = new Database('USER.db');

const query1 = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(@nome, @cognome, @anni)');
const info1 = query1.run({ anni: 25, cognome: 'Bianchi', nome: 'Mirko'}); //non conta la posizione
console.log(info1);

const query2 = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(@nome, @cognome, @anni)');
const info2 = query2.run({ anni: 18, cognome: 'Rossi', nome: 'Luca'}); //non conta la posizione
console.log(info2);

const query3 = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(@nome, @cognome, @anni)');
const info3 = query3.run({ anni: 13, cognome: 'Verde', nome: 'Nicko'}); //non conta la posizione
console.log(info3);

const query4 = db.prepare('SELECT * FROM Utente WHERE eta = ?');
const res1 = query4.all(18); //esegue SELECT * FROM Utente WHERE eta = 18
console.log(res1);

const query5 = db.prepare('SELECT * FROM Utente WHERE eta = @anni');
const res2 = query5.all({ anni: 16 }); //esegue SELECT * FROM Utente WHERE eta = 18
console.log(res2);

const query6 = db.prepare('UPDATE Utente SET nome=@nome WHERE id=@id');
const info4 = query6.run({ id: 2, nome: 'Matteo'});
console.log(info4);

const query7 = db.prepare('DELETE FROM Utente WHERE id= ?');
const info5 = query7.run(1);
console.log(info5);