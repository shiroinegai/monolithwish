<script lang="ts">
	import { resolve } from '$app/paths';

	import { TREKKERS } from '$lib/data/trekkers';
</script>

<svelte:head>
	<title>Trekkers • Monolith Wish</title>
</svelte:head>

<div>
	{#each TREKKERS as { id, name, quality, element, attackType, position }, i (`${i}${id}`)}
		<a href={resolve('/trekkers/[id]', { id: id.toString() })}>
			<p>{name} {quality} star</p>
			<p>
				{element}, {position}, {attackType}
			</p>
		</a>
	{/each}
</div>

<style>
	div {
		display: flex;
		max-height: 100dvb;
		overflow: auto;
		scrollbar-width: none;
	}
</style>
