<script>
    export let data;
    export let form;
    let error = false;
    let action = "create";

    let cognome, nome, indirizzo, telefono;

    if(form?.form_error) {
        error = true;
        cognome = form.form_vals.cognome;
        nome = form.form_vals.nome;
        indirizzo = form.form_vals.indirizzo;
        telefono = form.form_vals.telefono;
    }
</script>
<form id="form1" method="POST" action="?/{action}"></form>
<h1 class="main-title">Rubrica JS</h1>
<table>
    <thead>
        <tr>
            <th>Cognome</th>
            <th>Nome</th>
            <th>Indirizzo</th>
            <th>Telefono</th>
            <th colspan=2>Azioni</th>
        </tr>
    </thead>
    <tbody>
        <tr class="inputx">
            {#if form?.success}
                <td><input type="text" name="cognome" size=15 form="form1" value={form.results[0].cognome}/></td>
                <td><input type="text" name="nome" size=15 form="form1" value={form.results[0].nome}/></td>
                <td><input type="text" name="indirizzo" size=30 form="form1" value={form.results[0].indirizzo}/></td>
                <td><input type="text" name="telefono" size=10 form="form1" value={form.results[0].telefono}/></td>
                <td><input type="hidden" name="id" form="form1" value={form.results[0].id}></td>
                <td><input type="hidden" name="update" form="form1" value="true"></td>
                <td>
                    <button type="submit" form="form1" on:click={action = "create"}>Salva</button>
                </td>
            {:else}
                <td><input type="text" name="cognome" size=15 form="form1" bind:value={cognome}/></td>
                <td><input type="text" name="nome" size=15 form="form1" bind:value={nome}/></td>
                <td><input type="text" name="indirizzo" size=30 form="form1" bind:value={indirizzo}/></td>
                <td><input type="text" name="telefono" size=10 form="form1" bind:value={telefono}/></td>
                <td><input type="hidden" name="update" form="form1" value="false"></td>
                <td>
                    <button type="submit" form="form1" on:click={action = "search"}>Cerca</button>
                </td>
                <td>
                    <button type="submit" form="form1" on:click={action = "create"}>Salva</button>
                </td>
            {/if}
        </tr>
        {#each data.contatti as contatto}
            <tr>
                <td>{contatto.cognome}</td>
                <td>{contatto.nome}</td>
                <td>{contatto.indirizzo}</td>
                <td>{contatto.telefono}</td>
                <td colspan="2">
                    <form method="POST" action="?/delete">
                        <input type="hidden" name="id" value={contatto.id}>
                        <button type="submit">Rimuovi</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    .main-title {
        text-align: center;
        font-family: 'Bebas Neue';
        font-size: 60px;
    }

    table {
        margin: auto;
        width: 40%;
        border-spacing: 0px 15px;
        text-align: center;
    }

    th {
        font-size: 20px;
    }
</style>