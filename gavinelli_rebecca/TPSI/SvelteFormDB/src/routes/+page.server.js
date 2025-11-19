import Database from "better-sqlite3";
const db = new Database("USER.db", {verbose: console.log});
export function load({params}){
    console.log("ESECUZIONE FUNZIONE LOAD:", Data.now());

    const query1 = db.prepare("SELECT * FROM Utente");
    const res1 = query1.all();

    return{
        utenti:res1,
    };
}



export function load({ params }) {
    console.log("ESECUZIONE FUNZIONE LOAD:", Date.now());
    
    const query1 = db.prepare ("SELECT * FROM Utente");
    const res1 = query1.all();

    return { 
        utenti: res1,
    };
}

export const actions = {
    update: async ({cookies, request })  => {
        const data = await request.formData();
        console.log("UPDATE ACTION:");
        console.log("I VALORI DEL FORM SONO:", data);

        const query3= db.prepare(" UPDATE Utente SET nome=@nome, cognome=@cognome, eta=@anni WHERE id=@id");

        const user = {
            id: data.get("id"),
            nome: data.get("nome"),
            cognome: data.get("cognome"),
            eta: data.get("eta")
        }


        if (user.nome && user.cognome && user.eta) {
            const res3 = query3.run({
                id: +user.id,
                nome:user.nome,
                cognome:user.cognome,
                anni:+user.eta
            });

        }else {
            return {
                form_error: true,
                form_vals: user
            };
        }
        

    },

    delete: async({ookies, request })  => {
        const data = await request.formData();
        console.log("DELETE ACTION:");
        console.log("I VALORI DEL FORM SONO:", data);

        const query4 = db.prepare("DELETE FROM Utente WHERE id = ?");
        const res4 = query4.run(+data.get("id"));

}};
