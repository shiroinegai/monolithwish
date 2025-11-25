<script lang="ts">
	let { type, rarity, id } = $props();

	import { images } from '$lib/utilities/assets';
</script>

{#snippet stack({ basesrc, classnames = '' }: { basesrc: string; classnames?: string })}
	<picture class={`stack ${classnames}`}>
		<source srcset={images[`${basesrc}.avif`]} type="image/avif" />
		<source srcset={images[`${basesrc}.webp`]} type="image/webp" />
		<img src={images[`${basesrc}.png`]} alt="" />
	</picture>
{/snippet}

<div class="template">
	{@render stack({
		basesrc: `/src/lib/images/fx_ui_character_gacha_${rarity}`,
		classnames: `background_${rarity}`
	})}
	<div class="stack card">
		{#if type === 'disc'}
			{@render stack({ basesrc: `/src/lib/images/db_gacha_outfit_${rarity}` })}
			{@render stack({ basesrc: `/src/lib/images/outfit_${id}_gacha` })}
			{@render stack({ basesrc: `/src/lib/images/zs_gacha_outfit`, classnames: 'foreground' })}
		{/if}
		{#if type === 'trekker'}
			{@render stack({ basesrc: `/src/lib/images/db_gacha_character_${rarity}` })}
			{@render stack({ basesrc: `/src/lib/images/head_${id}01_GC` })}
			{@render stack({
				basesrc: `/src/lib/images/zs_gacha_character_${rarity}`,
				classnames: 'foreground'
			})}
		{/if}
		{@render stack({
			basesrc: `/src/lib/images/rare_character_gacha_${rarity}`,
			classnames: 'rarity'
		})}
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
		z-index: 1;
		container-type: inline-size;
	}

	.foreground {
		align-self: self-end;
		justify-self: center;
		padding: 2.5cqi;
	}

	.rarity {
		align-self: center;
		justify-self: center;
		translate: 0% 600%;
	}

	.rarity :global(img) {
		max-height: 22cqi;
	}
</style>
