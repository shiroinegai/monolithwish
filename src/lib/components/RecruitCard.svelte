<script lang="ts">
	import type { Disc, Trekker } from '$lib/types/simulator';

	let { type, rarity, assetID, name }: Disc | Trekker = $props();

	const recruitCardAssets: Record<string, string> = import.meta.glob('$lib/images/*.png', {
		eager: true,
		query: '?url',
		import: 'default'
	});
</script>

<div class={`template ${type}`}>
	<img
		class={`stack background_${rarity}`}
		src={recruitCardAssets[`/src/lib/images/fx_ui_character_gacha_${rarity}.png`]}
		alt=""
	/>
	<div class="stack card">
		{#if type === 'disc'}
			<img
				class="stack card_border"
				src={recruitCardAssets[`/src/lib/images/db_gacha_outfit_${rarity}.png`]}
				alt=""
			/>
			<img
				class="stack art"
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
				class="stack art"
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
			src={recruitCardAssets[`/src/lib/images/rare_character_text_${rarity}.png`]}
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
		scale: 1.2125;
	}
	.background_4 {
		scale: 1.2125 1.33;
	}
	.background_5 {
		scale: 1.2125 1.5;
	}

	.card {
		display: grid;
		grid-template-columns: 1fr;
		scale: 1;
	}

	.foreground {
		align-self: self-end;
		justify-self: center;
	}

	.rarity {
		margin-block-start: 265%;
		align-self: center;
		justify-self: center;
	}

	.disc .art {
		padding: 4%;
		justify-self: center;
	}

	.disc .foreground {
		padding: 0 3% 4%;
	}

	.disc .rarity {
		max-height: calc(47 / 597 * 100%);
	}

	.trekker .art {
		padding: calc((100% - (186 / 204 * 100%)) / 2);
		align-self: self-end;
	}

	.trekker .foreground {
		padding: 0 calc((100% - (186 / 204 * 100%)) / 2) 4%;
	}

	.trekker .rarity {
		max-height: calc(47 / 711 * 104.5%);
	}
</style>
