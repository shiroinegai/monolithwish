<script lang="ts">
	import { BANNERS } from '$lib/data/banners';

	import { Button } from 'bits-ui';

	import { simulatorState } from '$lib/states/simulator.svelte';

	const bannerAssets: Record<string, string> = import.meta.glob('$lib/images/*.png', {
		eager: true,
		query: '?url',
		import: 'default'
	});
</script>

<div>
	{#each BANNERS as banner, i (i + banner.bannerID.toString())}
		<Button.Root onclick={() => (simulatorState.activeBanner = banner)}>
			<img src={bannerAssets[`/src/lib/images/tab_gacha_${banner.bannerID}.png`]} alt="" />
		</Button.Root>
	{/each}
</div>

<style>
	div {
		display: flex;
		place-items: center;
		flex-direction: column;
		gap: 1cqi;
		padding: 1cqi;
		height: 100dvh;
		overflow: auto;
		scrollbar-width: none;
	}
</style>
