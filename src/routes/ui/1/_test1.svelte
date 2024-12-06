<script lang="ts">
	import { onMount } from 'svelte'
	import { slide } from 'svelte/transition'
	import { uuid, sleep } from '$lib'

	function typewriter(node, { speed = 1 }) {
		const valid =
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE

		if (!valid) {
			throw new Error(
				`This transition only works on elements with a single text node child`
			)
		}

		const text = node.textContent
		const duration = text.length / (speed * 0.01)

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t)
				node.textContent = text.slice(0, i)
			}
		}
	}
	let processing = $state(false)
	let toasts = $state([])
	let buffer = $state([])

	const drop = async () => {
		console.log('drop')
		if (buffer[0]) {
			const duration = buffer[0].length / (1 * 0.01)
			addToast({ txt: buffer[0] })
			buffer.shift()
			await sleep(duration)
			drop()
		}
	}

	export const addToast = (toast) => {
		const id = uuid()
		const defaults = {
			id,
			type: 'info',
			static: false
		}
		toasts = [...toasts, { ...defaults, ...toast }]
		if (!toast.static) sleep(9000).then(() => dismissToast(id))
	}

	export const dismissToast = (id) => {
		toasts = toasts.filter((t) => t.id !== id)
	}

	onMount(async () => {
		await sleep(2000)
		drop()
	})
</script>

<hr />
<div class="s-container">
	<div class="s-grid" style="--span: 3; --gap: 1rem; ">
		<div>
			{#each [1, 2, 3] as item}
				<div>
					<button
						onclick={() => addToast({ txt: `This is Message Nr ${item}` })}
						>Action {item}</button>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="s-container">
	<div class="list">
		{#each toasts as item (item.id)}
			<div class={item.type} in:typewriter out:slide>{item.txt}</div>
		{/each}
	</div>
</div>

<style>
	.list {
		display: flex;
		flex-direction: column;
		gap: 0;
		font-size: 1.25rem;
		font-weight: 600;
	}
	.info {
		color: var(--sky-600);
	}
</style>
