<script lang="ts">
	import { Button } from 'bits-ui';

	import gacha_ten from '$lib/images/btn_gacha_ten.png';
	import { recruit10 } from '$lib/utilities/simulator';
</script>

<Button.Root onclick={recruit10}>
	<div class="recruit_button">
		<img src={gacha_ten} alt="" />
		<div>Recruit x10</div>
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
</style>
