interface Sprites {
	front: string
	back: string
}

class WildPokemon {
	private type: string
	private _level: number
	private _health: number
	private sprites: Sprites

	constructor(type: string, level: number, health: number, sprites: Sprites) {
		this.type = type
		this._level = level
		this._health = health
		this.sprites = sprites
	}

	get level(): number {
		return this._level
	}

	set level(newLevel: number) {
		if (newLevel > 0) {
			this._level = newLevel
		} else {
            this._level = 0
		}
	}

	get health(): number {
		return this._health
	}

	set health(newHealth: number) {
		if (newHealth >= 0) {
			this._health = newHealth
		} else {
            this._health = 0
		}
	}

	get frontSprite(): string {
		return this.sprites.front
	}

	get backSprite(): string {
		return this.sprites.back
	}
}

const wildPokemon: WildPokemon[] = [
	new WildPokemon('Quilava', 6, 9, {
		front:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png',
		back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/156.png'
	}),
	new WildPokemon('Rhydon', 6, 9, {
		front:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
		back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/112.png'
	}),
	new WildPokemon('Makuhita', 7, 9, {
		front:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png',
		back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/296.png'
	}),
	new WildPokemon('Mew', 8, 9, {
		front:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
		back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/151.png'
	})
]
export default wildPokemon

// Beispiel für die Verwendung der Getter- und Setter-Methoden
// console.log(zubat.level); // 6
// zubat.level = 7;
// console.log(zubat.level); // 7

// console.log(zubat.health); // 20
// zubat.health = 18;
// console.log(zubat.health); // 18
