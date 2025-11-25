<script lang="ts">
	import { TREKKERS } from '$lib/data/trekkers';
</script>

<div>
	{#each TREKKERS as { id, name, star, element, attackType, tag, ...rest }, i (`${i}${id}`)}
		<p>{id} {name} {star} star</p>
		<p>
			{element}, {rest.class}, {attackType}, {tag},
		</p>
	{/each}
</div>

<style>
	div {
		max-height: 100dvb;
		overflow: auto;
		scrollbar-width: none;
	}
</style>
