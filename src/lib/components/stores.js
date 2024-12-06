import { writable, get } from 'svelte/store'

export const theme = writable('cyberpunk')
export const template = writable('content')
export const wildPokmnId = writable(0)
export const moveId = writable(-1)
export const tempArr = [
	{ label: 'Default', value: 'content' },
	{ label: 'Mobil', value: 'nwp-mockup' },
	{ label: 'GameBoy', value: 'nwp-gb-mockup' }
]
export const themeArr = [
	{ label: 'Theme', value: 'cyberpunk' },
	{ label: 'Light', value: 'corporate' },
	{ label: 'Dark', value: 'dracula' }
]
