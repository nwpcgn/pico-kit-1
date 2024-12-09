<script lang="ts">
	class Character {
		constructor({
			name,
			hp,
			maxHp,
			hardAttackDamage,
			hardAttackDice,
			weakAttackDamage,
			weakAttackDice
		}) {
			this.name = name
			this.hp = hp
			this.maxHp = maxHp
			this.hardAttackDamage = hardAttackDamage
			this.hardAttackDice = hardAttackDice
			this.weakAttackDamage = weakAttackDamage
			this.weakAttackDice = weakAttackDice
		}

		// Methode für einen starken Angriff
		hardAttack() {
			const damage =
				this.hardAttackDamage +
				Math.floor(Math.random() * this.hardAttackDice) +
				1
			return damage
		}

		// Methode für einen schwachen Angriff
		weakAttack() {
			const damage =
				this.weakAttackDamage +
				Math.floor(Math.random() * this.weakAttackDice) +
				1
			return damage
		}

		// Methode, um Schaden zu erleiden
		takeDamage(amount) {
			this.hp = Math.max(0, this.hp - amount)
		}

		// Methode, um Charakterinformationen anzuzeigen
		getInfo() {
			return `${this.name} - HP: ${this.hp}/${this.maxHp}`
		}
	}

	// Charaktere aus dem Array instanziieren
	const charactersData = [
		{
			name: '👾 Goblin Warrior',
			hp: 12,
			maxHp: 12,
			hardAttackDamage: 6,
			hardAttackDice: 8,
			weakAttackDamage: 3,
			weakAttackDice: 4
		},
		{
			name: '👽 Cuuwing',
			hp: 12,
			maxHp: 12,
			hardAttackDamage: 4,
			hardAttackDice: 8,
			weakAttackDamage: 2,
			weakAttackDice: 3
		},
		{
			name: '🥷 Wispfree Jones',
			hp: 12,
			maxHp: 12,
			hardAttackDamage: 4,
			hardAttackDice: 8,
			weakAttackDamage: 2,
			weakAttackDice: 3
		},
		{
			name: '🧛 Break Gett',
			hp: 25,
			maxHp: 25,
			hardAttackDamage: 6,
			hardAttackDice: 8,
			weakAttackDamage: 6,
			weakAttackDice: 6
		}
	]

	const characters = charactersData.map((data) => new Character(data))

	// Beispiel: Angriffe und Infos
	characters.forEach((character) => {
		console.log(character.getInfo())
		console.log(`Hard Attack Damage: ${character.hardAttack()}`)
		console.log(`Weak Attack Damage: ${character.weakAttack()}`)
	})

	let { data } = $props()
</script>

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

