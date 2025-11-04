<script lang="ts">
	import gacha_ten from '$lib/images/btn_gacha_ten.png';
	import RecruitCard from '$lib/components/RecruitCard.svelte';

	import { simulatorState } from './simulator.svelte';
	import { recruit10 } from '$lib/utilities/simulator';

	let displayedRecruits = $derived(
		simulatorState.activeBanner.type === 'trekker_limited'
			? simulatorState.recruitHistory.trekker_limited.slice(-10)
			: simulatorState.activeBanner.type === 'trekker_permanent'
				? simulatorState.recruitHistory.trekker_permanent.slice(-10)
				: simulatorState.activeBanner.type === 'disc_limited'
					? simulatorState.recruitHistory.disc_limited.slice(-10)
					: simulatorState.activeBanner.type === 'disc_permanent'
						? simulatorState.recruitHistory.disc_permanent.slice(-10)
						: []
	);
</script>

<svelte:head>
	<title>Monolith Wish | Home</title>
</svelte:head>

<section class="result">
	{#each displayedRecruits as recruit, i (i + recruit.assetID.toString())}
		<RecruitCard {...recruit} />
	{/each}
</section>
<button onclick={recruit10}>
	<img src={gacha_ten} alt="" />
	<div>Recruit x10</div>
</button>

<style>
	button {
		position: absolute;
		display: grid;
		grid-template-columns: 1fr;
		bottom: 1vw;
		right: 1vw;
		max-width: 15vw;
	}

	button img {
		grid-area: 1 / 1;
	}

	button div {
		color: white;
		grid-area: 1 /1;
		font-size: 1.5cqi;
		margin: 0.75em auto;
	}

	.result {
		padding: 5%;
		height: 100%;
		max-width: 1920px;
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		align-items: center;
		gap: 0.5em;
	}
</style>
