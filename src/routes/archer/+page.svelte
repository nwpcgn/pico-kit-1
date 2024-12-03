<script lang="ts">
	import { Collapsible } from '$lib'
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

		<Collapsible>
			<div class="img-grid">
				{#each data.memes as { url, name, width, height }}
					<figure>
						<img src={url} alt={name} />
						<figcaption>{name}</figcaption>
					</figure>
				{/each}
			</div>
		</Collapsible>
	</div>
</div>
