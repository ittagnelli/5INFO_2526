<script>
    export let data; // riceve i dati forniti dal backend durante il load della pagina
    export let form;
    let nome, cognome, eta;
    let error = false;

    if(form?.form_error) {
        error =  true;
        nome = form.form_vals.nome;
        cognome = form.form_vals.cognome;
        eta = form.form_vals.eta;
    }
</script>

<h1>Welcome to SvelteKit FORM Example</h1>

<form method="POST">
    <div><label for="nome">Nome</label></div>
    <div><input type="text" id="nome" name="nome" size="40" bind:value={nome}></div>
    <p class={error && nome?.length == 0? '' : 'hidden'}>Nome invalido</p>
    <div><label for="cognome">Cognome</label></div>
    <div><input type="text" id="cognome" name="cognome" size="40" bind:value={cognome}></div>
    <p class={error && cognome?.length == 0? '' : 'hidden'}>Cognome invalido</p>
    <div><label for="eta">Età</label></div>
    <div><input type="text" id="eta" name="eta" size="40" bind:value={eta}></div>
    <p class={error && eta?.length == 0? '' : 'hidden'}>Eta invalido</p>
    <div><input type="submit"></div>
</form>

<ul>
    <!-- Visualizza una lista di utenti ricevuti dal back end-->
    {#each data.utenti as utente}
        <li>{utente}</li>
    {/each}
</ul>

<style>
    form {
        width: 50%;
        display: grid;
        grid-template-columns: 1fr 4fr;
        row-gap: 15px;
    }

    input, label {
        height: 25px;
        border-radius: 6px;
    }

    label {
        line-height: 25px;
    }

    p {
        color: red;
        font-weight: bold;
    }

    .hidden {
        display: none;
    }
</style>
