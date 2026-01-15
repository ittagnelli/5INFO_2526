export const csr = true; // csr attivo
export const ssr = true; //ssr attivo

import { form } from '$app/server';
import Database from 'better-sqlite3';

const db = new Database('RUBRICA.db');

export const actions = {
    create: async({cookies, request}) => {
        const data = await request.formData();
        console.log("CREATE ACTION");
        console.log("I valori del form sono:", data);

        let update = false;
        update = data.get('update');
        console.log("update=", update);

        const createStatement = db.prepare("INSERT INTO Contatto (cognome, nome, indirizzo, telefono) VALUES (@cognome, @nome, @indirizzo, @telefono)");
        const updateStatement = db.prepare("UPDATE Contatto SET cognome=@cognome, nome=@nome, indirizzo=@indirizzo, telefono=@telefono where id=@id");

        const contatto = {
            cognome: data.get('cognome'),
            nome: data.get('nome'),
            indirizzo: data.get('indirizzo'),
            telefono: data.get('telefono'),
        }
        
        if(contatto.cognome && contatto.nome && contatto.indirizzo && contatto.telefono) {

            if(update == "true") {
                console.log("AZIONE UPDATE");
                const updateQuery = updateStatement.run({
                    cognome: contatto.cognome,
                    nome: contatto.nome,
                    indirizzo: contatto.indirizzo,
                    telefono: contatto.telefono,
                    id: data.get('id')
                })
            }
            else {
                console.log("AZIONE CREATE");
                const createQuery = createStatement.run({
                    cognome: contatto.cognome,
                    nome: contatto.nome,
                    indirizzo: contatto.indirizzo,
                    telefono: contatto.telefono
                })
            }

            return {
                success: false
            }
        }
        else
            return {
                form_error: true,
                form_vals: contatto
            }
    },
    search: async({cookies, request}) => {
        const data = await request.formData();
        console.log("SEARCH ACTION");

        const searchStatement = db.prepare("SELECT * FROM Contatto where cognome=@cognome or telefono=@telefono");

        const contatto = {
            cognome: data.get('cognome') || null,
            telefono: data.get('telefono') || null
        }

        if(contatto.cognome || contatto.telefono) {
            const searchQuery = searchStatement.all({
                cognome: contatto.cognome,
                telefono: contatto.telefono
            })
            
            return {
                success: true,
                results: searchQuery
            }
        }
        else
            return {
                form_error: true,
                form_vals: contatto
            }
    },
    delete: async({cookies, request}) => {
        const data = await request.formData();
        console.log("DELETE ACTION", data);

        const deleteStatement = db.prepare("DELETE FROM Contatto where id=@id");

        const deleteQuery = deleteStatement.run({ id: data.get('id') });
    }
}

export function load({ params }) {
    console.log("ESECUIONE FUNZIONE LOAD:", Date.now());

    const statementQueryAll = db.prepare("SELECT * FROM Contatto");
    const queryAll = statementQueryAll.all();
    console.log(queryAll);
    

    return {
        contatti: queryAll
    };
}