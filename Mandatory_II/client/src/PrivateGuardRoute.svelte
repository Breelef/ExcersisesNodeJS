<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	import { user } from "../store/globalStore.js";

	const navigate = useNavigate();
	const location = useLocation();

	$: if (!$user) {
		navigate("/", {
			state: { from: $location.pathname },
			replace: true,
		});
	}
</script>

{#if $user}
	<slot />
{/if}