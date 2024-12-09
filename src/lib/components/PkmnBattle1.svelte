<script lang="ts">
	import { sleep } from '../'
	import './scss/battle.scss'
	import moves from './classes/moves'
	import wildPokemon from './classes/wildPokemon'
	import { onMount } from 'svelte'
	import { updateMessages, clearMessages } from './Messages.svelte'
	import Messages from './Messages.svelte'

	const Status = Object.freeze({
		STARTED: 'started',
		ENDED: 'ended',
		READY: 'ready'
	})

	let gameStatus = Status.READY
	let wildPokemonId: number
	let moveId: number
	let damage: number = 0
	let playerMove: number
	let playerTurn = false
	let pokemonHealth: number = 50

	let actionButtons: { text: string; onClick: () => void }[] = []

	function findOpponent() {
		wildPokemonId = Math.floor(Math.random() * wildPokemon.length)
		moveId = Math.floor(Math.random() * moves.length)
	}

	function callMoveDamage() {
		damage = Math.floor(Math.random() * moves[moveId].baseDmg + 3)
	}

	function callPlayerMoveDamage() {
		damage = Math.floor(Math.random() * moves[playerMove].baseDmg + 3)
	}

	async function attackLoop() {
		if (!playerTurn) {
			playerTurn = true
			await sleep(1000)
			attackOpponent()
		} else {
			playerTurn = false
			selectMove()
		}
	}

	function selectMove() {
		actionButtons = moves.map((move, index) => ({
			text: move.move,
			onClick: () => {
				playerMove = index
				callPlayerMoveDamage()
				playerAttack()
			}
		}))
	}

	function attackOpponent() {
		if (pokemonHealth > 0) {
			callMoveDamage()
			pokemonHealth = Math.max(damage, 0)
			updateMessages(
				`Wild ${wildPokemon[wildPokemonId].type} uses ${moves[moveId].move} dealing ${damage} damage!`,
				'text-error'
			)
			updateMessages(
				`Player has ${pokemonHealth} health remaining!`,
				'text-info'
			)


			attackLoop()
		} else {
			wildPokemonKo()
		}
	}

	function playerAttack() {
		updateMessages(
			`Player uses ${moves[playerMove].move} dealing ${damage} damage!`,
			'font-bold'
		)
		if (wildPokemon[wildPokemonId].health > 0) {
			wildPokemon[wildPokemonId].health -= damage
			updateMessages(
				`${wildPokemon[wildPokemonId].type} has ${wildPokemon[wildPokemonId].health} health remaining!`,
				'text-info'
			)
			playerTurn = false
			attackLoop()
		} else {
			wildPokemonKo()
		}
	}

	function wildPokemonKo() {
		updateMessages(`${wildPokemon[wildPokemonId].type} is K.O.`, 'text-success')
		actionButtons = [{ text: 'Restart', onClick: restartFight }]
	}

	function restartFight() {
		messages = []
		actionButtons = []
		pokemonHealth = 50
		findOpponent()
		startFight()
	}

	function startFight() {
		findOpponent()
		updateMessages(
			`Wild ${wildPokemon[wildPokemonId].type} appears!`,
			'heading'
		)
		updateMessages(
			`Level : ${wildPokemon[wildPokemonId].level} Health : ${wildPokemon[wildPokemonId].health}`,
			'sub-heading'
		)
		playerTurn = true
		attackLoop()
	}

	onMount(() => {
		startFight()

		return () => clearMessages()
	})
</script>

<div class="layer">
	<div class="content">
		<div>gameStatus: {gameStatus}</div>
		<div>playerTurn: {playerTurn}</div>
	</div>
</div>
<div class="layer nwp center">
	<div class="frame">
		<div class="display">
			<div class="layer layer1 nwp">
				<Messages />
			</div>
		</div>
		<div class="bar">
			<div class="menu">
				{#each actionButtons as { text, onClick }}
					<button on:click={onClick}>{text}</button>
				{/each}
			</div>
		</div>
	</div>
</div>
