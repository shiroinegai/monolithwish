<script lang="ts">
	import type { Disc, Trekker } from '$lib/types/simulator';

	let { type, rarity, assetID, name }: Disc | Trekker = $props();

	const recruitCardAssets: Record<string, string> = import.meta.glob('$lib/images/*.png', {
		eager: true,
		query: '?url',
		import: 'default'
	});
</script>

<div class="template">
	<img
		class={`stack background_${rarity}`}
		src={recruitCardAssets[`/src/lib/images/fx_ui_character_gacha_${rarity}.png`]}
		alt=""
	/>
	<div class="stack card">
		{#if type === 'disc'}
			<img
				class="stack"
				src={recruitCardAssets[`/src/lib/images/db_gacha_outfit_${rarity}.png`]}
				alt=""
			/>
			<img
				class="stack"
				src={recruitCardAssets[`/src/lib/images/outfit_${assetID}_gacha.png`]}
				alt={name}
			/>
			<img
				class="stack foreground"
				src={recruitCardAssets[`/src/lib/images/zs_gacha_outfit.png`]}
				alt=""
			/>
		{/if}
		{#if type === 'trekker'}
			<img
				class="stack"
				src={recruitCardAssets[`/src/lib/images/db_gacha_character_${rarity}.png`]}
				alt=""
			/>
			<img
				class="stack"
				src={recruitCardAssets[`/src/lib/images/head_${assetID}_GC.png`]}
				alt={name}
			/>
			<img
				class="stack foreground"
				src={recruitCardAssets[`/src/lib/images/zs_gacha_character_${rarity}.png`]}
				alt=""
			/>
		{/if}
		<img
			class="stack rarity"
			src={recruitCardAssets[`/src/lib/images/rare_character_gacha_${rarity}.png`]}
			alt=""
		/>
	</div>
</div>

<style>
	.template {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
	}

	.stack {
		grid-area: 1 / 1;
	}

	.background_3 {
		scale: 1.2;
	}
	.background_4 {
		scale: 1.225 1.33;
	}
	.background_5 {
		scale: 1.25 1.5;
	}

	.card {
		display: grid;
		grid-template-columns: 1fr;
		scale: 1;
	}

	.foreground {
		align-self: self-end;
		justify-self: center;
		padding: 0.25cqi;
	}

	.rarity {
		align-self: center;
		justify-self: center;
		translate: 0% 625%;
		max-height: calc(92 / 600 * 10cqi);
	}
</style>
