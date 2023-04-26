<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../../store/globalStore.js";

    onMount(async () => {
        const response = await fetch($BASE_URL + "/planets");
        const { data: planets } = await response.json();
        console.log(planets);
    });

</script>

<h1>This is for planets</h1>