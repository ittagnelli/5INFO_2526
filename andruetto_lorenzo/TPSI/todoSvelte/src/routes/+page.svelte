<script>
    export let data;
    let action = 'create';
</script>

<head>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
</head>

<div class="container">
    <h1>TODO SVELTE</h1>

    <form method="POST" action="?/{action}">
        <input type="text" placeholder="Inserisci il tuo ToDo" name="todos">
        <select name="priority" id="priority">
            <option value="low">bassa</option>
            <option value="medium">medio</option>
            <option value="high">alta</option>
        </select>
        <button><span class="material-symbols-outlined add-btn">Add</span></button>
    </form>
    <div class="todo">
        <hr/>
        <table>
            <thead>
                <tr>
                    <td></td>
                </tr>
            </thead>
            <tbody>
            {#each data.todos as todo}
                <tr>
                    <td>{todo.desc}</td>
                    <td>{todo.priority}</td>
                    <td>
                        {#if !todo.checked}
                            <form action="?/check" method="POST">
                                <input type="hidden" name="id" value="{todo.id}" />
                                <button>
                                    <span class="material-symbols-outlined">Check</span>
                                </button>
                            </form>
                        {/if}
                        <!-- {todo.checked} -->
                    </td>
                    <td>
                        <form action="?/delete" method="POST">
                            <input type="hidden" name="id" value={todo.id}>
                            <button><span class="material-symbols-outlined">Delete</span></button>
                        </form>
                    </td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>

<style>
    .add-btn {
        color: green;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    hr{
        height: 2.5px;
        background-color: grey;
        border-radius: 1px;
    }

    button {
        border: none;
        background-color: white;
    }
</style>