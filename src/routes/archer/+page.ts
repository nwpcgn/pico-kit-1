import { fetchTemplates } from '$lib/utils/fetchTemplates'

export const load = async () => {
	const res = await fetchTemplates()
	return {
		name: 'Archer Agency',
		memes: res
	}
}
