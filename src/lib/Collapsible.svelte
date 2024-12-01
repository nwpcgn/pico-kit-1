<script>
	import { createCollapsible, melt } from '@melt-ui/svelte'
	import { slide } from 'svelte/transition'

	const {
		elements: { root, content, trigger },
		states: { open }
	} = createCollapsible({
		forceVisible: true
	})

	/** @type {{children?: import('svelte').Snippet}} */
	let { children, card = false } = $props()
</script>

<div use:melt={$root} class="root">
	<div class:card>
		<button use:melt={$trigger}>
			<span aria-hidden="true" class="arrow">⤵︎</span>
			{$open ? 'Close' : 'Open'}</button>
	</div>

	{#if $open}
		<svelte:element
			this={card ? 'article' : 'div'}
			use:melt={$content}
			transition:slide>
			{@render children?.()}
		</svelte:element>
	{/if}
</div>

<style>
	.arrow {
		display: inline-block;
	}
	button[data-state='open'] .arrow {
		rotate: -180deg;
	}
	.card {
		margin-bottom: 1rem;
	}
</style>
