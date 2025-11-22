<script lang="ts">
	import { images } from '$lib/utilities/assets';
	import { recruit10, pityThreshold } from '$lib/utilities/simulator';

	import { simulatorState } from '$lib/states/simulator.svelte';

	let pityMessage = $derived(
		`${
			pityThreshold()! +
			1 -
			(simulatorState.activeBanner.type === 'trekker_limited'
				? simulatorState.pityCounter.trekker_limited
				: simulatorState.activeBanner.type === 'trekker_permanent'
					? simulatorState.pityCounter.trekker_permanent
					: simulatorState.activeBanner.type === 'disc_limited'
						? simulatorState.pityCounter.disc_limited
						: simulatorState.activeBanner.type === 'disc_permanent'
							? simulatorState.pityCounter.disc_permanent
							: 0)
		} till guarantee`
	);

	let basesrc = `/src/lib/images/btn_gacha_ten`;
</script>

<button class="recruit_button" onclick={recruit10}>
	<picture>
		<source srcset={images[`${basesrc}.avif`]} type="image/avif" />
		<source srcset={images[`${basesrc}.webp`]} type="image/webp" />
		<img src={images[`${basesrc}.png`]} alt="" />
	</picture>
	<div>Recruit x10</div>
	<p>{pityMessage}</p>
</button>

<style>
	.recruit_button {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		container-type: inline-size;
		grid-area: 1 / 3;
		align-self: end;
		justify-self: end;
		align-items: center;
		justify-items: center;
		margin-block-end: 1cqi;
		z-index: 1;
	}

	.recruit_button picture {
		grid-area: 1 / 1;
	}

	.recruit_button div {
		color: white;
		grid-area: 1 /1;
		font-size: 10cqi;
		margin-block-end: 10cqi;
	}

	.recruit_button p {
		color: white;
		grid-area: 1 / 1;
		font-size: 8cqi;
		align-self: self-end;
		margin-block-end: 6.5cqi;
	}
</style>
