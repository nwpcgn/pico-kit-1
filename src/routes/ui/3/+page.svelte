<script lang="ts">
	import PkmnBattle from '$lib/components/PkmnBattle.svelte'
	let { data } = $props()
</script>

<svelte:head><title>Ui-Elements 3 | {data.name}</title></svelte:head>

	<PkmnBattle />

