<script>
    let count = 0;

    const add = () => count++
    const subtract = () => count--
    const reset = () => count = 0
</script>

<div>
    <h2>Svelte count = {count}</h2>
    <button on:click={add}>+</button>
    <button on:click={subtract}>-</button>
    <button on:click={reset}>reset</button>
</div>
