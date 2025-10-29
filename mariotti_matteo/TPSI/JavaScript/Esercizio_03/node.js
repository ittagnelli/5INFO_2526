import Database from 'better-sqlite3';


const db = new Database('USER.db');

const query1 = db.prepare('SELECT * FROM Utente'); 


const res = query1.all(); //esegue SELECT * FROM Utente


const query4 = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(?, ?, ?)');
const info4 = query4.run('Luca', 'Rossi', 22);


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