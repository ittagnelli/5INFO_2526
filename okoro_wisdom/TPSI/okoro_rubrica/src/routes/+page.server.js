import Database from 'better-sqlite3';

const db = new Database('USER.db');

export function load({ params }) {
    const query = db.prepare('SELECT * FROM utente');
    const res = query.all();
    return { utenti: res };
}

export const actions = {
    create: async ({ cookies, request }) => {
        const data = await request.formData();

        const nomeValue = data.get('nome');
        const cognomeValue = data.get('cognome');
        const indirizzoValue = data.get('indirizzo');
        const telefonoValue = data.get('telefono');

        const query = db.prepare(
            "INSERT INTO utente (cognome, nome, indirizzo, telefono) VALUES (@cognome, @nome, @indirizzo, @telefono)"
        );
        query.run({
            cognome: cognomeValue,
            nome: nomeValue,
            indirizzo: indirizzoValue,
            telefono: telefonoValue
        });
    }
};
