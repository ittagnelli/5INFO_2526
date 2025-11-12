import Database from 'better-sqlite3';

const db = new Database('/home/pavaleanA/5INFO_2526/pavalean_alexandru/TPSI/SvelteFormDB/USER.db')

// const query1 = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(?, ?, ?)');
// const info1 = query1.run('Mirko', 'Bianchi', 25);
// const info2 = query1.run('Alex', 'Pavalean', 16);
// const info3 = query1.run('Matteo', 'Gritella', 18);

// const query1 = db.prepare('SELECT * FROM Utente WHERE eta > ?')
// const info1 = query1.all(18);
// console.log(info1);

// const query1 = db.prepare('SELECT * FROM Utente WHERE eta = ?')
// const info1 = query1.all(16);
// console.log(info1);

// const query1 = db.prepare('UPDATE Utente SET nome=@nome WHERE id=@id');
// const info1 = query1.run({id: 4, nome: 'Emanuele'});
// console.log(info1);

// const query1 = db.prepare('DELETE FROM Utente WHERE id = ?');
// const info1 = query1.run(4);
// const info2 = query1.run(5);
// const info3 = query1.run(6);