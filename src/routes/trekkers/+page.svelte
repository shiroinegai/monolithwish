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
		{#each ['attack', 'main', 'support', 'ultimate'] as type, i (`${i}${type}`)}
			<p>
				{type === 'attack'
					? 'Normal Attack'
					: `${type.charAt(0).toUpperCase() + type.slice(1)} Skill`}: {skill[type].name}
			</p>
			<p>{skill[type].briefDesc}</p>
			<p>{skill[type].desc}</p>
			<p>{skill[type].damageType}</p>
			<p>{skill[type].effectType}</p>
		{/each}
	{/each}
</div>

<style>
	div {
		max-height: 100svb;
		overflow: auto;
		scrollbar-width: none;
	}
</style>
