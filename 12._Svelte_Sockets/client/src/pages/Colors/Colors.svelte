<script>
    import { colorList, myUsername } from "../../stores/globalStore";
    import io from "socket.io-client";

    const socket = io("localhost:8080");

    let choosenColor = "#000000";
  
    function handleColorChoosen() {
      socket.emit("a client chose a color", { data: choosenColor, username: $myUsername });
    
    };

    socket.on("a new color just dropped", (data) => {
        console.log(data);
        // don't do this... do it the Svelte way 
        // by adding it to a store and let App.svelte subscribe to it
        document.body.style.backgroundColor = data.data;

        colorList.update(list => {
        list.push({
            color: data.data,
            username: data.username
        });
        return list;
      });
    });
</script>
  
  
<input type="color" bind:value={choosenColor}>
<button on:click={handleColorChoosen}>Send Color</button>
