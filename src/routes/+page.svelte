<script lang="ts">
	import BannerSelector from '$lib/components/BannerSelector.svelte';
	import RecruitCard from '$lib/components/RecruitCard.svelte';
	import RecruitButton from '$lib/components/RecruitButton.svelte';
	import BannerIndicator from '$lib/components/BannerIndicator.svelte';

	import { simulatorState } from '$lib/states/simulator.svelte';

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

<div>
	<BannerSelector />
	<section class="result">
		{#each displayedRecruits as recruit, i (`${i}${recruit.assetID}`)}
			<RecruitCard {...recruit} />
		{/each}
	</section>
</div>
<BannerIndicator />
<RecruitButton />

<style>
	div {
		display: grid;
		grid-template-columns: 1fr 4fr;
		gap: 1cqi;
		place-items: center;
	}
	.result {
		height: 100%;
		max-width: 1920px;
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		align-items: center;
		gap: 0.5cqi;
	}
</style>
