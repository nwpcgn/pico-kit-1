export { default as Collapsible } from './Collapsible.svelte'
import { writable } from 'svelte/store'
export const theme = writable('corporate')
export const tour = writable(0)
export const groups = writable({})
export { default as clickOutside } from './utils/clickOutside'
export { default as copyToClip } from './utils/copyToClip'
export { default as fetchData } from './utils/fetchData'
export { default as randInt } from './utils/randInt'
export { default as randNum } from './utils/randNum'
export { default as sleep } from './utils/sleep'
export { default as uuid } from './utils/uuid'
export const themes = [
	'light',
	'dark',
	'cupcake',
	'bumblebee',
	'emerald',
	'corporate',
	'synthwave',
	'retro',
	'cyberpunk',
	'valentine',
	'halloween',
	'garden',
	'forest',
	'aqua',
	'lofi',
	'pastel',
	'fantasy',
	'wireframe',
	'black',
	'luxury',
	'dracula',
	'cmyk',
	'autumn',
	'business',
	'acid',
	'lemonade',
	'night',
	'coffee',
	'winter',
	'dim',
	'nord',
	'sunset'
]
export const icons = [
	'icon-error',
	'icon-warning',
	'icon-char',
	'icon-reload',
	'icon-close',
	'icon-edit',
	'icon-send',
	'icon-sidebar',
	'icon-storage',
	'icon-cast',
	'icon-arrow-left',
	'icon-arrow_right',
	'icon-settings',
	'icon-menu',
	'icon-user',
	'icon-save',
	'icon-explore',
	'icon-start',
	'icon-home',
	'icon-off',
	'icon-on',
	'icon-photo',
	'icon-upload'
]
// @index('./*.svelte', f => `export { default as ${f.name} } from '${f.path}${f.ext}'`)

// @endindex
// export { supabase, signIn, signOut, getUser, fetchDb, _user, _profil } from './db'
// @index('./utils/*.js', f => `export { default as ${f.name} } from '${f.path}'`)

// @endindex

// @index('./stores/*.js', f => `export { default as ${f.name} } from '${f.path}'`)
// @endindex
