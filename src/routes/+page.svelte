<script lang="ts">
	import { Collapsible } from '$lib'

	let { data } = $props()
</script>

<svelte:head><title>Nwp-Studio</title></svelte:head>

<div class="layer nwp">
	<div class="s-container">
		<div>
			<br />
			<hgroup
				aria-label="Main title - Subtitle"
				id="archer-agency"
				class="hero-header">
				<h1>{data.name}</h1>
				<h2 aria-hidden="true">{data.sub}</h2>
			</hgroup>
			<br />
			<Collapsible card>
				<menu>
					<li>Deploying Websites to Hosting Platforms</li>
					<li>Web Security Best Practices</li>
					<li>Introduction to Serverless Architecture</li>
				</menu>
			</Collapsible>
		
		</div>
	</div>
</div>
