<script lang="ts">
	import { theme, template, tempArr, themeArr } from './stores'
	let sel1 = 'nwp-gb-mockup'
	let sel2 = 'cyberpunk'
	$: {
		template.set(sel1)
		theme.set(sel2)
	}
</script>

<section class="absolute inset-x-0 p-4 top-0 z-20">
	<div class="flex gap-4 justify-center">
		{#each tempArr as { label, value }}
			<div class="form-control">
				<label class="cursor-pointer gap-4 label">
					<span class="label-text">{label}</span>
					<input type="radio" bind:group={sel1} class="radio" {value} />
				</label>
			</div>
		{/each}
		<div class="divider divider-horizontal"></div>
		{#each themeArr as { label, value }}
			<div class="form-control">
				<label class="cursor-pointer gap-4 label">
					<span class="label-text">{label}</span>
					<input type="radio" bind:group={sel2} class="radio" {value} />
				</label>
			</div>
		{/each}
	</div>
</section>
