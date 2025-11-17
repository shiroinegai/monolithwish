<script lang="ts">
	import { trekkers } from '$lib/data/trekkers';
</script>

<div>
	{#each trekkers as { id, detail, skill }, i (`${i}${id}`)}
		<p>{id}: {detail.name}, {detail.quality} star</p>
		<p>
			{detail.element}, {detail.position}, {detail.attackType}, {detail.style},
			{detail.faction}
		</p>
		<p>Normal Attack: {skill.attack.name}</p>
		<p>{skill.attack.briefDesc}</p>
		<p>{skill.attack.desc}</p>
	{/each}
</div>

<style>
	div {
		max-height: 100dvh;
		overflow: auto;
		scrollbar-width: none;
	}
</style>
