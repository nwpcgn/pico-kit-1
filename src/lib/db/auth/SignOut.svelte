<script lang="ts">
	import { signOut, _user } from '../'
	// function dispatch(type) {
	// 	$host().dispatchEvent(new CustomEvent(type));
	// }
</script>

<button class="btn btn-outline btn-block btn-lg btn-error" on:click={signOut}>
	<slot>Logout</slot>
</button>
