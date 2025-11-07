<script lang="ts">
	import { simulatorState } from '$lib/states/simulator.svelte';

	const bannerIndicatorAssets: Record<string, string> = import.meta.glob('$lib/images/*.png', {
		eager: true,
		query: '?url',
		import: 'default'
	});
</script>

<img
	src={bannerIndicatorAssets[`/src/lib/images/cover_${simulatorState.activeBanner.bannerID}.png`]}
	alt=""
/>

<style>
	img {
		position: absolute;
		top: 1vw;
		right: 1vw;
		max-width: 15vw;
		max-height: 15dvh;
	}
</style>
