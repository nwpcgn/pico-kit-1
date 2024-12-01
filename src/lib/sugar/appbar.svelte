<script lang="ts">
	import { page } from '$app/stores'
	const nav = [
		{ name: 'Start', href: '/', icon: 'icon-start' },
		{ name: 'Ui-Docs', href: '/ui', icon: 'icon-char' },
		{ name: 'Sandbox', href: '/sandbox', icon: 'icon-storage' },
		{ name: 'Archer', href: '/archer', icon: 'icon-cast' }
	]
</script>

<header>
	<nav class="s-container">
		<a class="brand" href="/"
			><svg viewBox="0 0 24 24" class="nwp-icon">
				<g>
					<path fill="none" d="M0 0h24v24H0z" />
					<path
						d="M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h4v-8h-2V9h3a1 1 0 0 1 1 1v9zM5 5v14h8V5H5zm2 6h4v2H7v-2zm0-4h4v2H7V7z" />
				</g>
			</svg><strong>nwp-app</strong></a>
		<menu>
			{#each nav as { name, href, icon }}
				<li>
					<a {href}
						><svelte:element this={$page.url.pathname === href ? 'u' : 'span'}
							>{name}</svelte:element
						></a>
				</li>
			{/each}
		</menu>
	</nav>
</header>
