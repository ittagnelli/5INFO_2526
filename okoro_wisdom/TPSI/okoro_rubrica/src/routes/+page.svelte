<script>
    export let data;
</script>

<form id="rubrica" action="?/create" method="POST"></form>
<form id="rubrica-salva" action="?/salva" method ="POST"></form>
<h1 class="main-title">Rubrica JS</h1>
<table>
    <tbody>
        <tr>
            <th>Cognome</th>
            <th>Nome</th>
            <th>Indirizzo</th>
            <th>Telefono</th>
            <th colspan="2">Azioni</th>
        </tr>
        <tr class="inputx">
            <td><input id="cognome" form="rubrica" type="text" size="15"></td>
            <td><input id="nome" form="rubrica" type="text" size="15"></td>
            <td><input id="indirizzo" form="rubrica" type="text" size="30"></td>
            <td><input id="telefono" form="rubrica" type="text" size="10"></td>
            <td>
                <button class="cerca" type="button">Cerca</button>
            </td>
            <td>
                <button class="salva" form="rubrica" type="submit">Salva</button>
            </td>
        </tr>
        {#each data.utenti as utente}
        <tr>
            <td>#?</td>
            <td>{utente.cognome}</td>
            <td>{utente.nome}</td>
            <td>{utente.indirizzo}</td>
            <td>{utente.telefono}</td>
            <td colspan="2">
                <button>Rimuovi</button>
            </td>
        </tr>
        {/each}
        <tr>
            <td>Linus</td>
            <td>Torvalds</td>
            <td>strada Kernel 6</td>
            <td>432323432</td>
            <td colspan="2">
                <button>Rimuovi</button>
            </td>
        </tr>
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
