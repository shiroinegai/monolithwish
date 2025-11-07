<script lang="ts">
	import { Button } from 'bits-ui';

	import gacha_ten from '$lib/images/btn_gacha_ten.png';
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
</script>

<Button.Root onclick={recruit10}>
	<div class="recruit_button">
		<img src={gacha_ten} alt="" />
		<div>Recruit x10</div>
		<p>{pityMessage}</p>
	</div>
</Button.Root>

<style>
	.recruit_button {
		position: absolute;
		display: grid;
		grid-template-columns: 1fr;
		bottom: 1vw;
		right: 1vw;
		max-width: 15vw;
	}

	.recruit_button img {
		grid-area: 1 / 1;
	}

	.recruit_button div {
		color: white;
		grid-area: 1 /1;
		font-size: 1.5cqi;
		margin: 0.75em auto;
	}

	.recruit_button p {
		color: white;
		grid-area: 1 / 1;
		align-self: self-end;
		margin-block-end: 1.5em;
	}
</style>
