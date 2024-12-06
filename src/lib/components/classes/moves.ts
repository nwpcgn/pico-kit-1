class Move {
	move: string
	baseDmg: number
	baseDice: number

	constructor(move: string, baseDmg: number, baseDice: number) {
		this.move = move
		this.baseDmg = baseDmg
		this.baseDice = baseDice
	}
}

const moves: Move[] = [
	new Move('Slam', 5, 6),
	new Move('Headbutt', 4, 4),
	new Move('Tackle', 3, 4),
	new Move('Cut', 4, 4)
]

export default moves
