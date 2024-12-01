<script lang="ts">
	import { onMount } from 'svelte'

	let player = {
		name: 'Bulbasaur',
		hp: 20,
		maxHp: 20,
		attack: 6,
		moves: [
			{ name: 'Tackle', power: 4 },
			{ name: 'Vine Whip', power: 6 }
		]
	}

	let opponent = {
		name: 'Charmander',
		hp: 18,
		maxHp: 18,
		attack: 7,
		moves: [
			{ name: 'Scratch', power: 5 },
			{ name: 'Ember', power: 7 }
		]
	}

	let battleStarted = false
	let battleEnded = false
	let messages = []
	let messageBuffer = []
	let isProcessingMessages = false
	let selectedMoveIndex = 0
	let attackButtonDisabled = true

	function addMessage(text, style = '') {
		messageBuffer.push({ text, style })
		if (!isProcessingMessages) {
			processNextMessage()
		}
	}

	function processNextMessage() {
		if (messageBuffer.length === 0) {
			isProcessingMessages = false
			return
		}

		isProcessingMessages = true
		const { text, style } = messageBuffer.shift()
		messages = [...messages, { text, style }]
		scrollToBottom()
		setTimeout(() => processNextMessage(), 50)
	}

	function scrollToBottom() {
		const messagesContainer = document.getElementById('messages')
		if (messagesContainer) {
			messagesContainer.scrollTop = messagesContainer.scrollHeight
		}
	}

	function calculateDamage(attacker, defender, move) {
		const baseDamage = attacker.attack + move.power - defender.attack / 2
		return Math.max(1, Math.floor(baseDamage))
	}

	function opponentTurn() {
		attackButtonDisabled = true
		setTimeout(() => {
			const randomMove =
				opponent.moves[Math.floor(Math.random() * opponent.moves.length)]
			const damage = calculateDamage(opponent, player, randomMove)

			player.hp = Math.max(0, player.hp - damage)
			addMessage(
				`${opponent.name} used ${randomMove.name}! ${player.name} took ${damage} damage.`,
				'error'
			)

			if (player.hp <= 0) {
				addMessage(`${player.name} fainted! ${opponent.name} wins!`, 'error')
				endBattle()
			} else {
				attackButtonDisabled = false
			}
		}, 1000)
	}

	function playerTurn() {
		const move = player.moves[selectedMoveIndex]
		attackButtonDisabled = true

		setTimeout(() => {
			const damage = calculateDamage(player, opponent, move)

			opponent.hp = Math.max(0, opponent.hp - damage)
			addMessage(
				`${player.name} used ${move.name}! ${opponent.name} took ${damage} damage.`,
				'info'
			)

			if (opponent.hp <= 0) {
				addMessage(`${opponent.name} fainted! ${player.name} wins!`, 'info')
				endBattle()
			} else {
				opponentTurn()
			}
		}, 1000)
	}

	function startBattle() {
		battleStarted = true
		battleEnded = false
		messages = []
		messageBuffer = []
		isProcessingMessages = false
		attackButtonDisabled = false
		player.hp = player.maxHp
		opponent.hp = opponent.maxHp

		addMessage('The battle has begun!', 'info')
		addMessage(`${player.name} vs. ${opponent.name}!`, 'info')
	}

	function endBattle() {
		battleEnded = true
		attackButtonDisabled = true
	}

	function restartBattle() {
		startBattle()
	}

	onMount(() => {
		addMessage('Press the button to start the battle!', 'info')
	})
</script>

<div>
	<h1>Pokemon Battle</h1>
	{#if !battleStarted}
		<button on:click={startBattle}>Start Battle</button>
	{/if}

	{#if battleStarted && !battleEnded}
		<div>
			<label for="moves">Choose an attack:</label>
			<select id="moves" bind:value={selectedMoveIndex}>
				{#each player.moves as move, index}
					<option value={index}>{move.name}</option>
				{/each}
			</select>
			<button id="attack" on:click={playerTurn} disabled={attackButtonDisabled}>
				Attack
			</button>
		</div>
	{/if}

	{#if battleEnded}
		<button on:click={restartBattle}>Restart Battle</button>
	{/if}

	<div id="messages">
		{#each messages as { text, style }}
			<div class={style}>{text}</div>
		{/each}
	</div>
</div>

<style>
	#messages {
		margin-top: 20px;
		padding: 10px;
		border: 1px solid #ccc;
		height: 200px;
		overflow-y: auto;
		background-color: #f9f9f9;
	}

	.info {
		color: blue;
	}

	.error {
		color: red;
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
