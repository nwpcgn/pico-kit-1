<script lang="ts">
	import { Collapsible } from '$lib/index.js'

	let { data } = $props()
</script>

<svelte:head><title>Archer</title></svelte:head>

<div class="layer nwp">
	<div class="s-container">
		<hgroup
			aria-label="Main title - Subtitle"
			id="archer-agency"
			class="hero-header">
			<h1>Nwp-Studio</h1>
			<h2 aria-hidden="true">{data.name}</h2>
		</hgroup>
	</div>
</div>
