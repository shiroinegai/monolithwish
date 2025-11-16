<script lang="ts">
	import { trekkers } from '$lib/data/trekkers';
</script>

{#each trekkers as trekker, i (`${i}${trekker}`)}
	<p>{trekker.id}: {trekker.name}</p>
{/each}
