<script lang="ts">
	let { data } = $props()
</script>

<svelte:head><title>Ui-Elements</title></svelte:head>

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
	<div class="s-container">
		<menu>
			{#each data.sub as { name, href }}
				<li><a {href}>{name}</a></li>
			{/each}
		</menu>
	</div>
</div>
