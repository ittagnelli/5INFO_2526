export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        console.log("IVALORI DEL FORM SONO:", data);

        const user = {
            nome: data.get("nome"),
            cognome: data.get("cognome"),
            eta: data.get("eta")
        }

        if (user.nome && user.cognome &&  user.eta) {
            utenti.push(user);
        } else {
            return {
                form_error: true,
                form_vals: user
            }
        }
    }
};