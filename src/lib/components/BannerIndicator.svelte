<script lang="ts">
	import { simulatorState } from '$lib/states/simulator.svelte';

	import { images } from '$lib/utilities/assets';

	let basesrc = $derived(`/src/lib/images/cover_${simulatorState.activeBanner.id}`);
</script>

<picture>
	<source srcset={images[`${basesrc}.avif`]} type="image/avif" />
	<source srcset={images[`${basesrc}.webp`]} type="image/webp" />
	<img src={images[`${basesrc}.png`]} alt="" />
</picture>

<style>
	picture {
		align-self: start;
		grid-area: 1 / 3;
		margin-block: 1cqi;
		z-index: 1;
	}
</style>
