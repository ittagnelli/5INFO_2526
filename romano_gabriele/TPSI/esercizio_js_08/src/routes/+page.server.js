export const csr = true; // csr attivo
export const ssr = true; //ssr attivo

import { form } from '$app/server';
import Database from 'better-sqlite3';

const db = new Database('TASK.db');

let tasklist = [
    {
        id: 0,
        todo: "mangiare",
        priority: "bassa",
        status: false
    },
    {
        id: 1,
        todo: "programmare",
        priority: "bassa",
        status: false
    },
    {
        id: 2,
        todo: "spesa",
        priority: "media",
        status: false
    },
    {
        id: 3,
        todo: "fortnite",
        priority: "alta",
        status: false
    }
];

export const actions = {
    create: async({cookies, request}) => {
        const data = await request.formData();
        console.log("CREATE ACTION");
        console.log("I valori del form sono:", data);

        const addStatement = db.prepare("INSERT INTO Task (todo, priority, status) VALUES (@todo, @priority, @status)");

        const task = {
            todo: data.get('todo'),
            priority: data.get('priority')
        }

        if(task.todo && task.priority) {
            const addQuery = addStatement.run({
                todo: task.todo,
                priority: task.priority,
                status: 0
            })}
        else
            return {
                form_error: true,
                form_vals: task
            }
    },
    update: async({cookies, request}) => {
        const data = await request.formData();
        console.log("UPDATE ACTION");
        console.log("I valori del form sono:", data);

        const updateStatement = db.prepare("UPDATE Task SET status=@status where id=@id");

        const task = {
            id: data.get('id')
        }

        const selectStatusStatement = db.prepare("SELECT status FROM Task where id=@id");
        const selectStatusQuery = selectStatusStatement.get({ id: task.id });

        task.status = selectStatusQuery.status;

        if(task.status == 1)
            task.status = 0;
        else
            task.status = 1;

        const updateQuery = updateStatement.run({
            id: task.id,
            status: task.status
        })
    },
    delete: async({cookies, request}) => {
        const data = await request.formData();
        console.log("DELETE ACTION");
        console.log("I valori del form sono:", data);

        const deleteStatement = db.prepare("DELETE FROM Task where id=@id");

        const task = {
            id: data.get('id')
        }

        console.log(task.id);

        const deleteQuery = deleteStatement.run({
            id: task.id
        })
    }
};

export function load({ params }) {
    console.log("ESECUIONE FUNZIONE LOAD:", Date.now());

    const statementQueryAll = db.prepare("SELECT * FROM Task");
    const queryAll = statementQueryAll.all();
    console.log(queryAll);
    

    return {
        tasklist: queryAll
    };
}










// //SELECT
// const query2 = db.prepare('SELECT * FROM Utente WHERE eta = ?');

// const query3 = db.prepare('SELECT * FROM Utente WHERE eta = @anni');

// const res = query1.all();
// console.log(res);


// //INSERT
// const query4 = db.prepare('INSERT INTO Utente (nome, cognome, eta) VALUES(?, ?, ?)');
// const info4 = query4.run('Mirko', 'Bianchi', 25);
// console.log(info4);

// //UPDATE
// const query5 = db.prepare('UPDATE Utente SET nome=@nome WHERE id=@id');
// const info5 = query5.run({ id: 5, nome: 'Mirco'});
// console.log(info5);

// //DELETE
// const query6 = db.prepare('DELETE FROM Utente WHERE id= ?');
// const info6 = query6.run(5);
// console.log(info6);