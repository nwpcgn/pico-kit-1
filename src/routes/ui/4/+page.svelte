<script lang="ts">
	import T2 from './T2.svelte'
	// import T1 from './T1.svelte'
	let { data } = $props()
</script>

<svelte:head><title>Ui-Elements 4</title></svelte:head>

<T2 {data}></T2>
