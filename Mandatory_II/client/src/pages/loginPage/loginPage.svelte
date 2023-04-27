<script>
    import { BASE_URL, user } from "../../../store/globalStore.js";
    import { useNavigate, useLocation } from "svelte-navigator";
    const navigate = useNavigate();
	const location = useLocation();
    let username = '';
    let password = '';

    async function handleSubmit(event) {
        event.preventDefault();
        const data = { username, password };
        try{
                const response = await fetch($BASE_URL + "/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
                if (response.status === 200) {
                    user.set({ username, password });
                    const from = ($location.state && $location.state.from) || "/frontpage";
                    navigate(from, { replace: true });
                }else {
                    alert('Invalid username or password');
                }
        }catch(error){
            console.error(error);
        }
        
        
    };
</script>
<form class="form-signin" on:submit={handleSubmit}>
    <img src="/SvelteImage.png" class="mb-4" width="200" height="100" alt="">
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <div class="mb-2">
        <label for="inputUsername" class="sr-only">
        <input type="text" bind:value={username} name="username" id="inputUsername"  style="width: 250px;" required placeholder="Enter your username here" />
    </label>
    </div>
    <div class="mb-1">
        <label for="inputPassword" class="sr-only">
        <input type="password" bind:value={password} name="password" id="inputPassword" style="width: 250px;" required placeholder="Enter your password here" />
        </label>
    </div>
    <button class="btn btn-lg btn-inverse btn-primary btn-block" type="submit">Submit</button>
  </form>
<br>
<p>Do you not have an account yet, then you can sign up here</p>
<button class="btn btn-lg btn-dark btn-block">Sign up</button>

<style>
    .btn-primary.btn-inverse {
    color: #fff;
    background-color: #f16e00;
    border-color: #f16e00;
}
</style>