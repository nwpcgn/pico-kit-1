<script lang="ts">
	import '../assets/css/sugar.css'
	import '../assets/css/style.css'
	import Appbar from '$lib/sugar/appbar.svelte'
	import IconSprite from '$lib/IconSprite.svelte'
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props()
</script>

<Appbar></Appbar>

<main class="main  s-light">
	{@render children?.()}
</main>
<IconSprite />
