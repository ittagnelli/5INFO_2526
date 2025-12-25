import Dabase from 'better-sqlite3';
const db = new Database('../todo_database.db');

const query1 = db.prepare('SELECT * FROM todo_table');


export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();
        console.log("CREATE ACTION");
        console.log("I VALORI SONO:", data)

        const query2 = db.prepare("INSERT INTO todo_table")

        const task = {
            todo: data.get("todo"),
            status: data.get("status"),
            priority: data.get("priority")
            
        }
    }
}