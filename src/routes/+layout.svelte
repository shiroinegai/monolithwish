<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main>
	<div>
		{@render children()}
	</div>
</main>

<style>
	main {
		height: 100dvb;
		background-image: url($lib/images/bg_gacha_result.png);
		background-size: cover;
	}
	div {
		margin-inline: auto;
		max-width: 1920px;
	}
</style>
