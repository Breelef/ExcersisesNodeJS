<script>
    import Birds from "./Birds.svelte";
    const birds = ["Hawk", "Crow"];
    const birdEmoji = ["🦅", "🐦"]

    let birdIndex = 0;
    
    
    function changeBird(){
        birdIndex = (birdIndex + 1) % birds.length;
    }
</script>
<div on:click={changeBird} on:keydown={changeBird}>
    <Birds
    name={birds[birdIndex]} 
    emoji={birdEmoji[birdIndex]}
/>
</div>
{#each birds as bird }
    <Birds name={bird}/>
{/each}


