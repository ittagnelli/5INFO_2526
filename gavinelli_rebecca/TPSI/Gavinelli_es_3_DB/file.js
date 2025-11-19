import Database from 'better-sqlite3';

const db = new Database('USER.db');

const query4 = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(?, ?, ?)');
const info4 = query4.run('Popa', 'Bianchi', 32);
console.log(info4);

const query5 = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(@nome, @cognome, @anni)');
const info5 = query5.run({ anni: 20, cognome: 'Miao', nome: 'Roberto'}); //non conta la posizione
console.log(info5);

const query6 = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(@nome, @cognome, @anni)');
const info6 = query6.run({ anni: 26, cognome: 'Bianchi', nome: 'Mirko'}); //non conta la posizione
console.log(info6);


//seleziona gli utenti con una specifica età
const query2 = db.prepare('SELECT * FROM Utente WHERE eta = ?');

//seleziona gli utenti con una specifica età
const query3 = db.prepare('SELECT * FROM Utente WHERE eta = @anni');


const res2 = query2.all(18); //esegue SELECT * FROM Utente WHERE eta = 18
console.log(res2);

const res3 = query3.all( { anni: 18 }); //esegue SELECT * FROM Utente WHERE eta = 18
console.log(res3);



const query7 = db.prepare('UPDATE Utente SET nome=@nome WHERE id=@id');
const info7 = query7.run({ id: 2, nome: 'Popa'});
console.log(info7);

const query8 = db.prepare('DELETE FROM Utente WHERE id= ?');
const info8 = query8.run(3);
console.log(info8);


