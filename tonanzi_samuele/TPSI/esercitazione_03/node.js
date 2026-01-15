import Database from 'better-sqlite3';
const db = new Database("USER.db");

const query1 = db.prepare("INSERT INTO Utente (nome,cognome,eta) VALUES(@nome,@cognome,@eta)")

const ins1 = query1.run({nome: "bro", cognome: "brobro", eta:25})
const ins2 = query1.run({nome: "orb", cognome: "broorb", eta:14})
const ins3 = query1.run({nome: "rbo", cognome: "orborb", eta:15})
console.log(ins1)
console.log(ins2)
console.log(ins3)

const query2 = db.prepare("SELECT * FROM Utente WHERE eta > ?")
const res2 = query2.all(18)
console.log(res2)

const query3 = db.prepare("SELECT * FROM Utente WHERE eta = ?")
const res3 = query3.all(16)
console.log(res3)

const query4 = db.prepare("UPDATE Utente SET nome=@nome WHERE id=@id")
const info4 = query4.run({id:3, nome:"marco"})
console.log(info4)

const query5 = db.prepare("DELETE FROM Utente WHERE id=?")
const info5 = query5.run(2)
console.log(info5)