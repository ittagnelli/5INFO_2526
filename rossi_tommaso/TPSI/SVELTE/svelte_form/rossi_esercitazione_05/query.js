import Database from 'better-sqlite3';
const db = new Database('USER.db');

const utentequery = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(@nome, @cognome, @anni)');
const utente1 = utentequery.run({ anni: 25, cognome: 'Bianchi', nome: 'Mirko'});
const utente2 = utentequery.run({ anni: 17, cognome: 'Verdi', nome: 'Marco'});
const utente3 = utentequery.run({ anni: 35, cognome: 'Gialli', nome: 'Mario'});
console.log(utente1, utente2, utente3);

const eta18query = db.prepare('SELECT * FROM Utente WHERE eta > @anni').all({anni: 18});
console.log(eta18query);

const eta16query = db.prepare('SELECT * FROM Utente WHERE eta = @anni').all({anni: 16});
console.log(eta16query);

const updatequery = db.prepare('UPDATE Utente SET nome=@nome WHERE id=@id');
const info5 = updatequery.run({ id: 3, nome: 'Mirco'});
console.log(info5);

const deletequery = db.prepare('DELETE FROM Utente WHERE id=@id');
const info6 = deletequery.run({id: 5});
console.log(info6);     