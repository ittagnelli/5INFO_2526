<script>
    export let data;
    export let form;
    let error = false;

    let todo = "";
    let priority = "bassa";
    let linethrough = false;
    let id = 0;

    if(form?.form_error) {
        error = true;
        todo = form.form_vals.todo;
        priority = form.form_vals.priority
    }

    let priorityMap = new Map([
        ["bassa", "south"],
        ["media", "east"],
        ["alta", "south"]
    ]);
</script>

<div class="container">
    <div class="title">
        <h1>TODO JS</h1>
    </div>
    <form method="POST" action="?/create">
        <div class="grid">
            <input type="text" name="todo" class="field" bind:value={todo}>
            <p class="{error && todo?.length == 0 ? '' : 'hidden'}">Nome non valido</p>
            <select name="priority" bind:value={priority}>
                <option value="bassa">Bassa</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
            </select>
            <p class="{error && priority?.length == 0 ? '' : 'hidden'}">Priorità non valida</p>
            <input type="submit" class="material-symbols-outlined" value="add">
            <!-- <span class="material-symbols-outlined" on:click={() => aggiungi(todo, priority)}>add</span> -->
        </div>
    </form>
    {#each data.tasklist as task}
        <div class="task">
            <div class="todo {task.status == true ? "completed" : ""}">{task.todo}</div>
            <span class="material-symbols-outlined {task.priority}">{priorityMap.get(task.priority)}</span>
            <form method="POST" action="?/update">
                <input type="hidden" name="id" value={task.id}>
                <button class="material-symbols-outlined gray">done_outline</button>
            </form>
            <form method="POST" action="?/delete">
                <input type="hidden" name="id" value={task.id}>
                <button class="material-symbols-outlined gray">delete</button>
            </form>
        </div>
    {/each}
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

    .material-symbols-outlined {
        font-size: 30px;
        font-variation-settings:
        'FILL' 0,
        'wght' 700,
        'GRAD' 0,
        'opsz' 24
    }

    .container {
        width: 90%;
    }

    .title {
        margin-bottom: 5%;
    }

    .grid {
        display: grid;
        grid-template-columns: 0.25fr 0.25fr 0.125fr 0.5fr;
        column-gap: 10%;
        margin-bottom: 3%;
    }

    .field {
        width: 100%;
        grid-column: 1 / 3;
        border: 3px solid black;
    }

    select {
        background-color: white;
    }

    .task {
        width: 80%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-bottom: 1%;
    }

    .todo {
        font-size: 25px;
    }

    .completed {
        text-decoration: line-through;
    }

    p {
        color: red;
        font-weight: bold;
    }

    .hidden {
        display: none;
    }

    .bassa {
        color: green;
    }

    .media {
        color: yellow;
    }

    .alta {
        color: red;
    }

    .gray {
        color: gray;
    }
</style>