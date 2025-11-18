import type { SimulatorState } from '$lib/types/simulator';
import { THE_PROMISE_OF_MELTING_SNOW } from '$lib/data/banners';
import { generatePool } from '$lib/utilities/simulator';

export const simulatorState: SimulatorState = $state({
	activeBanner: THE_PROMISE_OF_MELTING_SNOW,
	pityCounter: {
		trekker_limited: 0,
		trekker_limited_4star_guarantee: 0,
		trekker_permanent: 0,
		trekker_permanent_4star_guarantee: 0,
		disc_limited: 0,
		disc_limited_4star_guarantee: 0,
		disc_permanent: 0,
		disc_permanent_4star_guarantee: 0
	},
	recruitHistory: {
		trekker_limited: [],
		trekker_permanent: [],
		disc_limited: [],
		disc_permanent: []
	}
});

const pool = $derived(generatePool(simulatorState.activeBanner));

export function activePool() {
	return pool;
}
