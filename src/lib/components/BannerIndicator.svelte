<script lang="ts">
	import { simulatorState } from '$lib/states/simulator.svelte';

	import { images } from '$lib/utilities/assets';

	let basesrc = $derived(`/src/lib/images/cover_${simulatorState.activeBanner.bannerID}`);
</script>

<picture>
	<source srcset={images[`${basesrc}.avif`]} type="image/avif" />
	<source srcset={images[`${basesrc}.webp`]} type="image/webp" />
	<img src={images[`${basesrc}.png`]} alt="" />
</picture>

<style>
	picture {
		position: absolute;
		top: 1vw;
		right: 1vw;
		max-width: 15vw;
		max-height: 15dvh;
	}
</style>
