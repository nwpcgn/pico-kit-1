export const ssr = false

export const load: LayoutLoad = async () => {
	return {
		nav: [
			{ name: 'Start', href: '/', icon: 'icon-start' },
			{ name: 'Ui-Docs', href: '/ui', icon: 'icon-char' },
			{ name: 'Sandbox', href: '/sandbox', icon: 'icon-storage' },
			{ name: 'Archer', href: '/archer', icon: 'icon-cast' }
		]
	}
}
