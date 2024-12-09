export const load = async () => {
	return {
		name: 'Pkmn 4',
		daten: [
			{
				name: 'Quilava',
				health: 30,
				maxHealth: 30,
				battle: {
					hard: {
						damage: 8,
						dice: 5
					},
					weak: {
						damage: 3,
						dice: 2
					}
				},
				attacks: [
					{
						name: 'Snore',
						damage: 4,
						dice: 4
					},
					{
						name: 'flame-charge',
						damage: 3,
						dice: 4
					}
				],
				sprites: {
					back_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/156.png',
					back_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/156.png',
					front_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png',
					front_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/156.png'
				}
			},
			{
				health: 30,
				maxHealth: 30,
				name: 'Elekid',
				sprites: {
					back_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/239.png',
					back_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/239.png',
					front_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png',
					front_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/239.png'
				},
				attacks: [
					{
						name: 'zap-cannon',
						damage: 4,
						dice: 4
					},
					{
						name: 'psychic',
						damage: 5,
						dice: 3
					}
				],
				battle: {
					weak: {
						damage: 3,
						dice: 3
					},
					hard: {
						damage: 8,
						dice: 6
					}
				}
			},
			{
				health: 30,
				maxHealth: 30,
				name: 'Spoink',
				sprites: {
					back_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/325.png',
					back_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/325.png',
					front_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png',
					front_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/325.png'
				},
				attacks: [
					{
						name: 'magic-coat',
						damage: 4,
						dice: 4
					},
					{
						name: 'lunge',
						damage: 5,
						dice: 4
					}
				],
				battle: {
					weak: {
						damage: 3,
						dice: 2
					},
					hard: {
						damage: 5,
						dice: 5
					}
				}
			},
			{
				health: 30,
				maxHealth: 30,
				name: 'Rattata',
				sprites: {
					back_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png',
					back_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/19.png',
					front_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
					front_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/19.png'
				},
				attacks: [
					{
						name: 'attract',
						damage: 5,
						dice: 2
					},
					{
						name: 'skull-bash',
						damage: 5,
						dice: 2
					}
				],
				battle: {
					weak: {
						damage: 2,
						dice: 1
					},
					hard: {
						damage: 5,
						dice: 4
					}
				}
			},
			{
				health: 30,
				maxHealth: 30,
				name: 'Mightyena',
				sprites: {
					back_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/262.png',
					back_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/262.png',
					front_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png',
					front_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/262.png'
				},
				attacks: [
					{
						name: 'snatch',
						damage: 4,
						dice: 2
					},
					{
						name: 'spite',
						damage: 3,
						dice: 2
					}
				],
				battle: {
					weak: {
						damage: 3,
						dice: 2
					},
					hard: {
						damage: 8,
						dice: 5
					}
				}
			},
			{
				health: 30,
				maxHealth: 30,
				name: 'Metapod',
				sprites: {
					back_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png',
					back_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/11.png',
					front_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
					front_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/11.png'
				},
				attacks: [
					{
						name: 'iron-defense',
						damage: 5,
						dice: 3
					},
					{
						name: 'bug-bite',
						damage: 4,
						dice: 3
					}
				],
				battle: {
					weak: {
						damage: 2,
						dice: 1
					},
					hard: {
						damage: 6,
						dice: 4
					}
				}
			},
			{
				health: 30,
				maxHealth: 30,
				name: 'Wynaut',
				sprites: {
					back_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/360.png',
					back_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/360.png',
					front_default:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png',
					front_shiny:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/360.png'
				},
				attacks: [
					{
						name: 'amnesia',
						damage: 3,
						dice: 4
					},
					{
						name: 'destiny-bond',
						damage: 4,
						dice: 2
					}
				],
				battle: {
					weak: {
						damage: 4,
						dice: 2
					},
					hard: {
						damage: 7,
						dice: 5
					}
				}
			}
		]
	}
}
