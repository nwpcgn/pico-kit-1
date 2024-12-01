<script lang="ts">
	import { _user } from '.'
	import { setHash } from './stores/url'
	let { current, nav } = $props()
</script>

<footer class="foobar">
	{#each nav as { name, href, icon }}
		<button
			class="nav-item"
			class:active={current === href}
			onclick={() => setHash(href)}
			disabled={!$_user}>
			<div class="icon">
				<svg class="nwp-icon">
					<use xlink:href="#{icon}"></use>
				</svg>
			</div>
			<span>{name}</span>
		</button>
	{/each}
</footer>
