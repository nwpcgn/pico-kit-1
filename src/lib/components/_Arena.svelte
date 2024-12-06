<script lang="ts">
	import { onMount, tick } from 'svelte'
	import { slide, fade } from 'svelte/transition'
	import { updateMessages, clearMessages, initMsg } from './classes/msg'
	import { sleep } from '../lib'
	import { template, wildPokmnId, moveId } from './stores'
	import wildPokemon from './classes/wildPokemon'
	import moves from './classes/moves'

	let showAction: boolean = false
	let element: HTMLElement

	const scrollToBottom = async (node) => {
		node.scroll({ top: node.scrollHeight, behavior: 'smooth' })
	}
	function callOpponent() {
		wildPokmnId.set(Math.floor(Math.random() * wildPokemon.length))
	}
	function callMove(e) {
		const id = parseInt(e.currentTarget.dataset.move)
		moveId.set(id)
		showAction = false
		sleep(2000).then(() => (showAction = true))
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
		<div bind:this={element} class="game-container bg-base-200 rounded border">
			<div id="header" class="flex items-center justify-between gap-2">
				<article>
					<h2 class="heading">{wildPokemon[$wildPokmnId].type}</h2>
					<h4 class="sub-heading">
						<small class="text-xs">Level:</small>
						<strong>{wildPokemon[$wildPokmnId].level}</strong>
						<small class="text-xs">Health:</small>
						<strong>{wildPokemon[$wildPokmnId].health}</strong>
					</h4>
				</article>
				<figure class="rounded border cursor-pointer">
					<img
						on:click={callOpponent}
						src={wildPokemon[$wildPokmnId].frontSprite}
						alt="" />
				</figure>
			</div>

			<div id="messages" class="messages"></div>
			{#if showAction}
				<footer
					transition:fade={{ duration: 400 }}
					id="actions"
					class="grid grid-cols-4 gap-2 p-2">
					{#each moves as { move }, index}
						<button
							on:click={callMove}
							data-move={index}
							class="btn btn-info btn-sm">{move}</button>
					{/each}
				</footer>
			{:else}
				<footer></footer>
			{/if}
		</div>
	</article>
</section>
