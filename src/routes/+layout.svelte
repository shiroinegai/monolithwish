<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main>
	{@render children()}
</main>

<style>
	main {
		height: 100dvh;
		background-image: url($lib/images/bg_gacha_result.png);
		background-size: cover;
		overflow: hidden;
	}
</style>
