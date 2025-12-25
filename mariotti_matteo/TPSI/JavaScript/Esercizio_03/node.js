import Database from 'better-sqlite3';


const db = new Database('USER.db');

// const query1 = db.prepare('SELECT * FROM Utente where eta >= ? or eta == 16'); 
const query1 = db.prepare('SELECT * FROM Utente WHERE eta > ?');
const query2 = db.prepare('SELECT * FROM Utente WHERE eta = ?');
const query6 = db.prepare('DELETE FROM Utente WHERE id= ?');



const res = query1.run(18);//eta >= 18 || eta == 16); //esegue SELECT * FROM Utente
const res2 = query2.run(16)

const query4 = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(?, ?, ?)');
const info6 = query6.run(5);


const info4 = query4.run('Marco', 'Rossi', 22);
const info5 = query4.run('Luca', 'Rossi', 17);
const info7 = query4.run('Marco', 'Verdi', 16);

console.log(res);
console.log(res2)
console.log(info6);

// const info4 = query4.run[
//   { id: 1, nome: 'Mario', cognome: 'Rossi', eta: 18 },
//   { id: 2, nome: 'Giuseppe', cognome: 'Verdi', eta: 17 },
//   { id: 3, nome: 'Pietro', cognome: 'Bianchi', eta: 19 }
// ]

// import Database from 'better-sqlite3';
// 
// const db = new Database('USER.db');
// 
// const query = db.prepare('SELECT * FROM Utente');
// 
// const results = query.all();
//
// console.table(results);
// 
// db.close();
//  