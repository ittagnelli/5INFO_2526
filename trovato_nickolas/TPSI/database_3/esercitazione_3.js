import Database from 'better-sqlite3';

const db = new Database('USER.db')

const query1 = db.prepare('INSERT INTO Utente (nome,cognome,eta) VALUES(@nome,@cognome,@anni)');

let info1 = query1.run(
    {anni:25,cognome:'Bianchi',nome:'Mirk'},
)

info1 = query1.run(
    {anni:25,cognome:'Bianchi',nome:'Mirk'},
)

info1 = query1.run(
    {anni:25,cognome:'Bianchi',nome:'Mirk'},
)

//seleziona gli utenti con una specifica età
const query2 = db.prepare('SELECT * FROM Utente WHERE eta > ?');

const info2 = query2.run(18);

const query3 = db.prepare('SELECT * FROM Utente WHERE eta = ?');

const info3 = query3.run(16);

const query4 = db.prepare('UPDATE Utente SET nome=@nome WHERE eta=@eta');

const info4 = query4.run({ eta: 16, nome: 'Mirco'});

const query5 = db.prepare('SELECT * FROM Utente');

const info5 = query5.run();

console.log(info1);

console.log(info2);

console.log(info3);

console.log(info4);

console.log(info5);