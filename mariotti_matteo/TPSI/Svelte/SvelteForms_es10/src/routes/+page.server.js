import Database from 'better-sqlite3';

const DB = new Database('rubrica.db', { verbose: console.log });

export function load({ params }) {
    const query = DB.prepare('SELECT * FROM Contatto');
    const res = query.all();
    return { res };
}

export const actions = {
    salvare: async ({ cookies, request }) => {
        const data = await request.formData();
        console.log(data);

        const constNome = data.get('nome');
        const constCognome = data.get('cognome');
        const constIndirizzo = data.get('indirizzo');
        const constTelefono = data.get('telefono');
        console.log(constNome, constCognome, constIndirizzo, constTelefono);


        const insert = DB.prepare('INSERT INTO Contatto (Nome, Cognome, Indirizzo, Telefono) VALUES (?, ?, ?, ?)');
        insert.run(constNome, constCognome, constIndirizzo, constTelefono);
            // nome: constNome,
            // cognome: constCognome,
            // indirizzo: constIndirizzo,
            // telefono: constTelefono
        // });

        return { success: true };
    },

    rimuovi: async ({ cookies, request }) => {
        const data = await request.formData();

        const del = DB.prepare('DELETE FROM Contatto WHERE Telefono = ?');
        del.run(data.get('telefono'));

        return { success: true };
    },

    cercare: async ({ cookies, request }) => {
        const data = await request.formData();
        const nomeCercato = data.get('nomeCercato');

        const query = DB.prepare('SELECT * FROM Contatto WHERE Nome = ? and  Cognome = ? or Telefono = ?');
        const res = query.all(nomeCercato);

        return { res };
    },
};  
