<script lang="ts">
	import Battle from '$lib/battle/Battle.svelte'
	// import { Collapsible } from '$lib/index.js'
	let { data } = $props()
</script>

<svelte:head><title>Sandbox</title></svelte:head>

<div class="layer nwp center fix">
	<div class="s-container">
		<!-- <hgroup
			aria-label="Main title - Subtitle"
			id="archer-agency"
			class="hero-header">
			<h1>Nwp-Studio</h1>
			<h2 aria-hidden="true">{data.name}</h2>
		</hgroup> -->

		<Battle></Battle>
	</div>
</div>
