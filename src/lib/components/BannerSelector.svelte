<script lang="ts">
	import { BANNERS } from '$lib/data/banners';

	import { Button } from 'bits-ui';

	import { simulatorState } from '$lib/states/simulator.svelte';

	import { images } from '$lib/utilities/assets';
</script>

<div>
	{#each BANNERS as banner, i (`${i}${banner.bannerID}`)}
		<Button.Root onclick={() => (simulatorState.activeBanner = banner)}>
			<picture>
				<source
					srcset={images[`/src/lib/images/tab_gacha_${banner.bannerID}.avif`]}
					type="image/avif"
				/>
				<source
					srcset={images[`/src/lib/images/tab_gacha_${banner.bannerID}.webp`]}
					type="image/webp"
				/>
				<img src={images[`/src/lib/images/tab_gacha_${banner.bannerID}.png`]} alt="" />
			</picture>
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
