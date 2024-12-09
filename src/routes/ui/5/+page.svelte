<script lang="ts">
	let { data } = $props()
</script>

<svelte:head><title>Ui-Elements 3</title></svelte:head>

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
			<li>Deploying Websites to Hosting Platforms</li>
			<li>Web Security Best Practices</li>
			<li>Introduction to Serverless Architecture</li>
		</menu>
	</div>
</div>
