<script lang="ts">
	import { onMount, tick, afterUpdate } from 'svelte'
	import { slide, fade } from 'svelte/transition'
	import { updateMessages, clearMessages, initMsg } from './classes/msg'
	import { sleep } from '../lib'
	import { template, wildPokmnId, moveId } from './stores'
	import wildPokemon from './classes/wildPokemon'
	import moves from './classes/moves'

	let showAction: boolean = false
	let element: HTMLElement
	let damage = 0

	function callOpponent() {
		wildPokmnId.set(Math.floor(Math.random() * wildPokemon.length))
	}
	async function callMove(e) {
		const id = parseInt(e.currentTarget.dataset.move)
		moveId.set(id)
		const calcDam = Math.random() * moves[$moveId].baseDmg + 3
		damage = Math.floor(calcDam)
		showAction = false
		updateMessages(
			`Player uses ${moves[$moveId].move} dealing ${damage} damage!`,
			`font-bold`
		)
		await sleep(2000)
		showAction = true
	}

	function startFight() {
		callOpponent()
		showAction = true
		// updateMessages(
		// 	`Wild ${wildPokemon[wildPokemonId].type} appears!`,
		// 	`heading`
		// )
		// updateMessages(
		// 	`Level : ${wildPokemon[wildPokemonId].level} Health : ${wildPokemon[wildPokemonId].health}`,
		// 	`sub-heading`
		// )
		// playerTurn = false
		// attackLoop()
	}

	const scrollToBottom = async (node) => {
		await sleep(2000)
		node.scroll({ top: node.scrollHeight, behavior: 'smooth' })
	}

	afterUpdate(async () => {
		scrollToBottom(element)
	})
	onMount(async () => {
		initMsg()
		callOpponent()
		updateMessages(`Welcome to Nwp-Studio`, `sub-heading`)
		updateMessages(`Pokemon Battle`, `text-gray-800`)
		updateMessages(`Start Fighting`, `text-sm`)
		await tick()
		scrollToBottom(element)
		await sleep(5000)
		clearMessages()
		showAction = true
	})
</script>

<section class="layer fix center nwp">
	<article id="dynamicSection" class={$template}>
		<header class="cam">
			<span class="pat1"></span>
			<span class="pat2"></span>
		</header>
		<aside class="battery">
			<span class="pat1"></span>
			<span class="pat2">BATTERY</span>
		</aside>
		<footer class="nintendo-logo">
			<span class="pat1">Nintendo</span>
			<span class="pat2">GAME BOY</span>
		</footer>
		<div class="game-container bg-base-100 border divide-y">
			<div class="opponent">
				<article>
					<h2 class="heading">Makuhita</h2>
					<h4 class="sub-heading">
						<small class="text-xs">Level:</small> <strong>7</strong>
						<small class="text-xs">Health:</small> <strong>9</strong>
					</h4>
				</article>
				<figure class="rounded border cursor-pointer">
					<img
						src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png"
						alt="" />
				</figure>
			</div>
			<div class="player">
				<figure class="rounded border cursor-pointer">
					<img
						src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png"
						alt="" />
				</figure>
				<article>
					<h2 class="heading">Makuhita</h2>
					<h4 class="sub-heading">
						<small class="text-xs">Level:</small> <strong>7</strong>
						<small class="text-xs">Health:</small> <strong>9</strong>
					</h4>
				</article>
			</div>
			<div id="messages" bind:this={element} class="message bg-base-200"></div>
			<div class="action bg-base-300">
				<footer class="grid grid-cols-4 gap-2 p-1" transition:slide>
					{#each moves as { move }, index}
						<button
							disabled={!showAction}
							on:click={callMove}
							data-move={index}
							class="btn btn-info btn-sm">{move}</button>
					{/each}
				</footer>
			</div>
		</div>
	</article>
</section>
