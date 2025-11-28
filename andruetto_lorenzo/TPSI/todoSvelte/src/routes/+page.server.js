import Database from "better-sqlite3";

const db = new Database("TODO.db", { verbose: console.log });

export function load({ params }) {
    console.log("ESECUZIONE FUNZIONE LOAD:", Date.now());

    const query1 = db.prepare("SELECT * FROM Todo");
    const res1 = query1.all();
    console.log(res1);

    return {
        todos: res1,
    };
};

export const actions = {
    create: async({cookies, request}) => {
        const data = await request.formData();
        const todo = data.get("todos");
        const prior = data.get("priority");
        console.log(todo, prior);

        const query2 = db.prepare(
            "INSERT INTO Todo(desc, priority) VALUES(@desc, @priority)"
        );

        if(todo && prior) {
            query2.run({desc: todo, priority: prior});
        }
    },

    delete: async({cookies, request}) => {
        const data = await request.formData();
        console.log("DELETE FUNCTION");
        console.log("DELETING:", data);

        const query3 = db.prepare(
            "DELETE FROM Todo WHERE id = ?"
        );

        const res2 = query3.run(+data.get("id"));
    },

    check: async({cookies, request}) => {
        const data = await request.formData();
        console.log("CHECK FUNCTION");
        console.log("CHECKING:", data);

        const query4 = db.prepare(
            "UPDATE Todo SET checked = 1 WHERE id = ?"
        );

        const res3 = query4.run(+data.get("id"));

        if(res3) {
            console.log("UPDATE TABLE ended good.");
        }
    }
}