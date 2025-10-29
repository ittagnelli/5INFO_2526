    let utenti = [
        {nome: "Matteo",cognome: "Gritella",eta: "18"},
        {nome: "Alex",cognome: "Pava",eta: "18"},
        {nome: "Vasile",cognome: "Timis",eta: "18"},
        {nome: "Matteo",cognome: "Rossi",eta: "17"},
    ];
    export function load({params}){
        console.log("ESECUZIONE FUNZIONE LOAD", Date.now());

        return {
            utenti
        }  }

    export const actions ={
        default: async({cookies,request}) => {
            const data= await request.formData();
            console.log("I valori del FORM sono:",data);

           const user = {
            nome:data.get("nome"),
            cognome: data.get("cognome"),
            eta: data.get("eta")
           }
           if (user.nome && user.cognome && user.data){
            utenti.push(user);
           } else {
            return{
                form_error: true,
                form_vals:user
            }
           }
        },   
    };

    
     
