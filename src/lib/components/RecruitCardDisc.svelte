<script lang="ts">
	export let rarity: number;
	export let assetID: number;

	const images: Record<string, string> = import.meta.glob('$lib/images/*.png', {
		eager: true,
		query: '?url',
		import: 'default'
	});
</script>

<div class="main">
	<img
		class={`background_${rarity}`}
		src={images[`/src/lib/images/fx_ui_character_gacha_${rarity}.png`]}
		alt=""
	/>
	<div class="card">
		<img class="card_border" src={images[`/src/lib/images/db_gacha_outfit_${rarity}.png`]} alt="" />
		<img class="disc" src={images[`/src/lib/images/outfit_${assetID}_gacha.png`]} alt="" />
		<img class="foreground" src={images[`/src/lib/images/zs_gacha_outfit.png`]} alt="" />
		<img class="rarity" src={images[`/src/lib/images/rare_character_text_${rarity}.png`]} alt="" />
	</div>
</div>

<style>
	.main {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		align-items: center;
	}

	.background_3 {
		grid-area: 1 / 1;
		scale: 1.2125;
	}
	.background_4 {
		grid-area: 1 / 1;
		scale: 1.2125 1.33;
	}
	.background_5 {
		grid-area: 1 / 1;
		scale: 1.2125 1.5;
	}

	.card {
		display: grid;
		grid-template-columns: 1fr;
		grid-area: 1 / 1;
		scale: 1;
	}

	.card_border,
	.disc,
	.foreground,
	.rarity {
		grid-area: 1 / 1;
	}

	.disc {
		padding: 4%;
		justify-self: center;
	}

	.foreground {
		padding: 0 3% 4%;
		align-self: self-end;
		justify-self: center;
	}

	.rarity {
		margin-block-start: 265%;
		align-self: center;
		justify-self: center;
		max-height: calc(47 / 597 * 100%);
	}
</style>
