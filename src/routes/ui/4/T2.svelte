<script lang="ts">
	let { data } = $props()
	class Pokemon {
		name = $state('')
		health = $state(10)
		maxHealth = $state(20)
		battle = $state({})
		attacks = $state({})
		sprites = $state({})
		constructor({ name, health, maxHealth, battle, attacks, sprites }) {
			this.name = name
			this.health = health
			this.maxHealth = maxHealth
			this.battle = battle
			this.attacks = attacks
			this.sprites = sprites
		}

		// Methode für einen schwachen Angriff
		weakAttack() {
			return (
				this.battle.weak.damage +
				Math.floor(Math.random() * this.battle.weak.dice) +
				1
			)
		}

		// Methode für einen starken Angriff
		hardAttack() {
			return (
				this.battle.hard.damage +
				Math.floor(Math.random() * this.battle.hard.dice) +
				1
			)
		}

		// Methode für eine spezifische Attacke
		performAttack(attackName) {
			const attack = this.attacks.find((a) => a.name === attackName)
			if (!attack)
				throw new Error(
					`${this.name} kann die Attacke ${attackName} nicht einsetzen.`
				)
			return attack.damage + Math.floor(Math.random() * attack.dice) + 1
		}

		// Methode, um Schaden zu erleiden
		takeDamage(amount) {
			this.health = Math.max(0, this.health - amount)
		}

		// Methode, um den Pokémon zu heilen
		heal(amount) {
			this.health = Math.min(this.maxHealth, this.health + amount)
		}

		// Methode, um Informationen anzuzeigen
		getInfo() {
			return `${this.name} - HP: ${this.health}/${this.maxHealth}`
		}

		// Methode, um einen Sprite anzuzeigen
		getSprite(shiny = false, front = true) {
			if (front)
				return shiny ? this.sprites.front_shiny : this.sprites.front_default
			return shiny ? this.sprites.back_shiny : this.sprites.back_default
		}
	}
	let pokemons = $state([])
	pokemons = data.daten.map((data) => new Pokemon(data))

	// Beispiel: Interaktionen mit einem Pokémon
	const quilava = pokemons[0]
	console.log({pokemons})
	// console.log(`Schwacher Angriff: ${quilava.weakAttack()}`)
	// console.log(`Starker Angriff: ${quilava.hardAttack()}`)
	// console.log(`Flame-Charge Angriff: ${quilava.performAttack('flame-charge')}`)
	// quilava.takeDamage(20)
	// console.log(quilava.getInfo())
	// console.log(`Sprite (Front, Shiny): ${quilava.getSprite(true)}`)

	
</script>

<div></div>
