
<svelte:head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap">
        <!-- <link rel="stylesheet" href="rubrica_js_template.css"> -->
        <title>Rubrica JS</title>
</svelte:head>

<script>
    export let data;

    console.log("RUBRICA:", data);

    const assigndeleteId = (id) => {
        IdtoDekte = id;
    }
    const contatti = data.res;
</script>

<form method="POST" action="?/cercare" id="cerca" ></form>
<form method="POST" action="?/salvare" id="salva" ></form>
<form method="POST" action="?/rimuovere" id="rimuovi"></form>


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
        <tr class="input">
            <td><input type="text" size=15 name="cognome" form="salva" placeholder="Cognome"/></td>
            <td><input type="text" size="15" name="nome" form="salva" placeholder="nome"/></td>
            <td><input type="text" size="30" name="indirizzo" form="salva" placeholder="Indirizzo"/></td>
            <td><input type="number" min=1000000000 max=9999999999 form="salva" name="telefono" placeholder="Numero di Telefono" /></td>
            <td> <button form="cerca">Cerca</button>
            </td>
            <td>
                <button form="salva">Salva</button>
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Marconi</td>
            <td>Guglielmo</td>
            <td>Via Spalato 33</td> 
            <td>3332545434</td>
            <td colspan="2">
                <button>Rimuovi</button>
            </td>
        </tr>
        <tr>
            <td>Linus</td>
            <td>Torvalds</td>
            <td>strada Kernel 6</td>
            <td>432323432</td>
            <td colspan="2">
                <button>Rimuovi</button>
            </td>
        </tr>
        {#each contatti as contatto}
        <tr>
            <td>{contatto.Cognome}</td>
            <td>{contatto.Nome}</td>
            <td>{contatto.Indirizzo}</td> 
            <td>{contatto.Telefono}</td>
            <td colspan="2">
                <!-- <button form="rimuovi" onclick => assigndeleteId({contatto.id}) > Rimuovi</button> -->
                 <button form="rimuovi"> Rimuovi</button>
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