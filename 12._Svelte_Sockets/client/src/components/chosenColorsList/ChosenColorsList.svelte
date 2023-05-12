<script>
    import { colorList } from "../../stores/globalStore";
</script>

{#each $colorList as colorPick}
<div style={`background-color: ${colorPick.color}`}>
    <h4>{colorPick.username}</h4>
</div>
{/each}