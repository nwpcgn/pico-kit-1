<script lang="ts">
	import Msg, { updateMessages, clearMessages } from './_Msg.svelte'
	import Poke from './_Poke1.svelte'
	let { data } = $props()
	function testMsg() {
		for (const key of data.test) {
			updateMessages(`${key.name} appears on Battlefield!`, `${key.style}`)
		}
	}

	// type StatusType = 'started' | 'ended' | 'ready'

	// let status: StatusType = 'ready'

	// console.log(status)
</script>

<svelte:head><title>Ui-Elements 2</title></svelte:head>

<div class="layer nwp">
	<div class="s-container">
		<hgroup
			aria-label="Main title - Subtitle"
			id="archer-agency"
			class="hero-header">
			<h1>Nwp-Studio</h1>
			<h2 aria-hidden="true">{data.name}</h2>
		</hgroup>
		<div class="s-grid" style="--span:2;">
			<div>
				<div><button onclick={testMsg}>Test</button></div>
				<div><button onclick={clearMessages}>Clear</button></div>
			</div>
		</div>
	</div>
	<div class="s-container">
		<Msg />
		<Poke />
	</div>
</div>
