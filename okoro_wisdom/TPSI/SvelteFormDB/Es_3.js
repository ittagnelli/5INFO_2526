import Database from 'better-sqlite3';
const db = new Database('../SvelteFormDB/USER.db');

const query0 = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(?, ?, ?)');
const id1 = query0.run('Mirko', 'Bianchi', 25);
const id2 = query0.run('Mirko', 'Bianchi', 63);
const id3 = query0.run('Rosso', 'Bianchi', 5);


// const query1 = db.prepare('SELECT * FROM Utente WHERE eta > ?');
// const info1 = query1.run(18)

// const query2 = db.prepare('SELECT * FROM Utente WHERE eta = ?');
// const info2 = query2.run(16)

// const query3 = db.prepare('UPDATE Utente SET nome=@nome WHERE eta=@eta');
// const info3= query3.run({ eta: 25, nome: 'Giorno'});

// const query4 = db.prepare('DELETE FROM Utente WHERE id= ?');
// const info4 = query4.run(2);



// console.log(info1);
// console.log(info2);
// console.log(info3);
// console.log(info4);