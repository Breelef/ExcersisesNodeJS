<script>
  import { onMount } from "svelte";
  import { BASE_URL, myUsername } from "./stores/globalStore";

  import Colors from "./pages/Colors/Colors.svelte"
  import Register from "./pages/Register/Register.svelte";
  import ChosenColorsList from "./components/chosenColorsList/ChosenColorsList.svelte";

  onMount(async () => {
    const response = await fetch($BASE_URL + "/users/me", 
    {
      credentials: "include"
    });
    const result = await response.json();
    myUsername.set(result.data);
  });
</script>

{#if $myUsername}
  <Colors />
  <ChosenColorsList />
  {:else}
  <Register />
{/if}