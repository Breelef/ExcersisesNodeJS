<script>
	import { navigate } from "svelte-navigator";
	import { isAuthenticated } from "../store/globalStore.js";
    import { onMount } from "svelte";
    export let component;
    export let path;

    onMount(async () => {
        const isAuth = $isAuthenticated;
        if(!isAuth){
            navigate("/", {replace: true});
        }
    });
</script>
<svelte:component this={component} />