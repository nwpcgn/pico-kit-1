<script lang="ts">
	let player = $state({
		name: 'Bulbasaur',
		hp: 20,
		maxHp: 20,
		attack: 6,
		moves: [
			{
				name: 'Tackle',
				power: 4
			},
			{
				name: 'Vine Whip',
				power: 6
			}
		]
	})
	let opponent = $state({
		name: 'Charmander',
		hp: 18,
		maxHp: 18,
		attack: 7,
		moves: [
			{
				name: 'Scratch',
				power: 5
			},
			{
				name: 'Ember',
				power: 7
			}
		]
	})

	let todos = $state([
		{
			done: false,
			text: 'add more todos'
		}
	])

	// todos.push({
	// 	done: false,
	// 	text: 'eat lunch'
	// })

	// console.log(todos)
	// todos.shift()
	// console.log(todos)
</script>

<div class="s-container">
	<div class="s-grid" style="--span:2; --padding: 1rem;">
		<div>
			<div>
				<h4>Name: {player.name}</h4>
				<p>Health: {player.hp}</p>
				<button
					onclick={() => {
						opponent.hp = opponent.hp - 1
					}}>Attack</button>
			</div>
			<div>
				<h4>Name: {opponent.name}</h4>
				<p>Health: {opponent.hp}</p>
				<button
					onclick={() => {
						player.hp = player.hp - 1
					}}>Attack</button>
			</div>
		</div>
	</div>
	<div>
		<!-- x -->
	</div>
</div>
