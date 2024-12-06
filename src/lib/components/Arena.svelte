<script lang="ts">
	import { onMount } from 'svelte'
	import { template } from './stores'
	import Notification from './classes/Notification'

	let noteElem: HTMLElement | null = null
	let notification: Notification | null = null

	function logMsg(message: string, style: string = '') {
		if (notification) {
			notification.addMessage(message, style)
		} else {
			console.error('Notification not initialized')
		}
	}

	const action = () => {
		logMsg('First message to display.', 'text-info')
		logMsg('Second message to display.', 'text-error')
		logMsg('Third message to display.')
		logMsg('Dumme Frage!\r\nFang Dir lieber\r\nselbst noch ein\r\npaar! ')
	}

	onMount(() => {
		if (noteElem) {
			notification = new Notification(noteElem)
			action()
		} else {
			console.error('Notification window noteElem not found')
		}
	})
</script>

<section class="layer fix center nwp">
	<article id="gameboy" class="gb-container">
		<aside class="battery">
			<span class="pat1"></span>
			<span class="pat2">BATTERY</span>
		</aside>
		<footer class="nintendo-logo">
			<span class="pat1">Nintendo</span>
			<span class="pat2">GAME BOY</span>
		</footer>
		<div class="bg-base-100 border-2 game-container divide-y rounded">
			<article class="divide-y grid">
				<div class="flex items-center justify-between px-4 py-2">
					<article>
						<h1 class="text-xl">Rhydon</h1>
						<div class="flex gap-4 items-center justify-start">
							<span class="font-mono text-sm">level</span>
							<span>6</span>
						</div>
						<div class="flex gap-4 items-center justify-start">
							<span class="font-mono text-sm">health</span>
							<span>30</span>
						</div>
					</article>
					<figure>
						<img
							src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png" />
					</figure>
				</div>
				<div class="flex items-center justify-between px-4 py-2">
					<figure>
						<img
							src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/151.png" />
					</figure>
					<article>
						<h1 class="text-xl">Quilava</h1>
						<div class="flex gap-4 items-center justify-end">
							<span class="font-mono text-sm">level</span>
							<span>6</span>
						</div>
						<div class="flex gap-4 items-center justify-end">
							<span class="font-mono text-sm">health</span>
							<span>30</span>
						</div>
					</article>
				</div>
			</article>
			<footer class="flex-1 p-4">
				<div bind:this={noteElem} id="notification-window"></div>
			</footer>
			<nav class="gap-2 grid grid-cols-4 p-4" data-theme="dracula">
				<button class="btn btn-neutral btn-sm">Click</button>
				<button class="btn btn-neutral btn-sm">Click</button>
				<button class="btn btn-neutral btn-sm">Click</button>
				<button class="btn btn-neutral btn-sm">Click</button>
			</nav>
		</div>
	</article>
</section>
