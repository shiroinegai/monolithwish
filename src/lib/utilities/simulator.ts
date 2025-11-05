import type { Banner, Disc } from '$lib/types/simulator';
import { TREKKERS_BANNER_POOL, DISCS_BANNER_POOL, COMMON_POOL } from '$lib/data/recruits';
import { simulatorState } from '../../routes/simulator.svelte';

const pool = generatePool(simulatorState.activeBanner);

function generatePool(banner: Banner) {
	switch (banner.type) {
		case 'trekker_limited': {
			const RATE_UP_5_STAR_TREKKERS = banner.rateUps.filter((trekker) => trekker.rarity === 5);
			const RATE_UP_4_STAR_TREKKERS = banner.rateUps.filter((trekker) => trekker.rarity === 4);
			const OFF_RATE_5_STAR_TREKKERS = TREKKERS_BANNER_POOL.filter(
				(trekker) => trekker.rarity === 5
			);
			const OFF_RATE_4_STAR_TREKKERS = TREKKERS_BANNER_POOL.filter(
				(trekker) => trekker.rarity === 4 && !RATE_UP_4_STAR_TREKKERS.includes(trekker)
			);
			const COMMON_4_STAR_DISCS = COMMON_POOL.filter((disc) => disc.rarity === 4);
			const COMMON_3_STAR_DISCS = COMMON_POOL.filter((disc) => disc.rarity === 3);

			return {
				RATE_UP_5_STAR_TREKKERS,
				RATE_UP_4_STAR_TREKKERS,
				OFF_RATE_5_STAR_TREKKERS,
				OFF_RATE_4_STAR_TREKKERS,
				COMMON_4_STAR_DISCS,
				COMMON_3_STAR_DISCS
			};
		}
		case 'trekker_permanent': {
			const COMMON_5_STAR_TREKKERS = TREKKERS_BANNER_POOL.filter((trekker) => trekker.rarity === 5);
			const COMMON_4_STAR_TREKKERS = TREKKERS_BANNER_POOL.filter((trekker) => trekker.rarity === 4);
			const COMMON_4_STAR_DISCS = COMMON_POOL.filter((disc) => disc.rarity === 4);
			const COMMON_3_STAR_DISCS = COMMON_POOL.filter((disc) => disc.rarity === 3);

			return {
				COMMON_5_STAR_TREKKERS,
				COMMON_4_STAR_TREKKERS,
				COMMON_4_STAR_DISCS,
				COMMON_3_STAR_DISCS
			};
		}

		case 'disc_limited': {
			const RATE_UP_5_STAR_DISCS = banner.rateUps.filter((disc) => disc.rarity === 5);
			const RATE_UP_4_STAR_DISCS = banner.rateUps.filter((disc) => disc.rarity === 4);
			const OFF_RATE_5_STAR_DISCS = DISCS_BANNER_POOL;
			const OFF_RATE_4_STAR_DISCS = DISCS_BANNER_POOL.filter(
				(disc) => disc.rarity === 4 && !RATE_UP_4_STAR_DISCS.includes(disc)
			);
			const COMMON_3_STAR_DISCS = COMMON_POOL.filter((disc) => disc.rarity === 3);

			return {
				RATE_UP_5_STAR_DISCS,
				RATE_UP_4_STAR_DISCS,
				OFF_RATE_5_STAR_DISCS,
				OFF_RATE_4_STAR_DISCS,
				COMMON_3_STAR_DISCS
			};
		}
		case 'disc_permanent': {
			const COMMON_5_STAR_DISCS = DISCS_BANNER_POOL;
			const COMMON_4_STAR_DISCS = COMMON_POOL.filter((disc) => disc.rarity === 4);
			const COMMON_3_STAR_DISCS = COMMON_POOL.filter((disc) => disc.rarity === 3);

			return {
				COMMON_5_STAR_DISCS,
				COMMON_4_STAR_DISCS,
				COMMON_3_STAR_DISCS
			};
		}
	}
}

function seed() {
	return crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1);
}

function isRateUp() {
	if (simulatorState.activeBanner.type === 'trekker_limited') {
		return seed() < 0.5;
	}
	if (simulatorState.activeBanner.type === 'disc_limited') {
		return seed() < 0.75;
	}
}

function incrementPity() {
	if (simulatorState.activeBanner.type === 'trekker_limited') {
		simulatorState.pityCounter.trekker_limited += 1;
	}
	if (simulatorState.activeBanner.type === 'trekker_permanent') {
		simulatorState.pityCounter.trekker_permanent += 1;
	}
	if (simulatorState.activeBanner.type === 'disc_limited') {
		simulatorState.pityCounter.disc_limited += 1;
	}
	if (simulatorState.activeBanner.type === 'disc_permanent') {
		simulatorState.pityCounter.disc_permanent += 1;
	}
}

function isPity() {
	if (simulatorState.activeBanner.type === 'trekker_limited') {
		return simulatorState.pityCounter.trekker_limited === 159;
	}
	if (simulatorState.activeBanner.type === 'trekker_permanent') {
		return simulatorState.pityCounter.trekker_permanent === 159;
	}
	if (simulatorState.activeBanner.type === 'disc_limited') {
		return simulatorState.pityCounter.disc_limited === 119;
	}
	if (simulatorState.activeBanner.type === 'disc_permanent') {
		return simulatorState.pityCounter.disc_permanent === 119;
	}
}

function resetPity() {
	if (simulatorState.activeBanner.type === 'trekker_limited') {
		simulatorState.pityCounter.trekker_limited = 0;
	}
	if (simulatorState.activeBanner.type === 'trekker_permanent') {
		simulatorState.pityCounter.trekker_permanent = 0;
	}
	if (simulatorState.activeBanner.type === 'disc_limited') {
		simulatorState.pityCounter.disc_limited = 0;
	}
	if (simulatorState.activeBanner.type === 'disc_permanent') {
		simulatorState.pityCounter.disc_permanent = 0;
	}
	reset4StarGuarantee();
}

function increment4StarPity() {
	if (simulatorState.activeBanner.type === 'trekker_limited') {
		simulatorState.pityCounter.trekker_limited_4star_guarantee += 1;
	}
	if (simulatorState.activeBanner.type === 'trekker_permanent') {
		simulatorState.pityCounter.trekker_permanent_4star_guarantee += 1;
	}
	if (simulatorState.activeBanner.type === 'disc_limited') {
		simulatorState.pityCounter.disc_limited_4star_guarantee += 1;
	}
	if (simulatorState.activeBanner.type === 'disc_permanent') {
		simulatorState.pityCounter.disc_permanent_4star_guarantee += 1;
	}
}

function is4StarGuarantee() {
	if (simulatorState.activeBanner.type === 'trekker_limited') {
		return simulatorState.pityCounter.trekker_limited_4star_guarantee === 9;
	}
	if (simulatorState.activeBanner.type === 'trekker_permanent') {
		return simulatorState.pityCounter.trekker_permanent_4star_guarantee === 9;
	}
	if (simulatorState.activeBanner.type === 'disc_limited') {
		return simulatorState.pityCounter.disc_limited_4star_guarantee === 9;
	}
	if (simulatorState.activeBanner.type === 'disc_permanent') {
		return simulatorState.pityCounter.disc_permanent_4star_guarantee === 9;
	}
}

function reset4StarGuarantee() {
	if (simulatorState.activeBanner.type === 'trekker_limited') {
		simulatorState.pityCounter.trekker_limited_4star_guarantee = 0;
	}
	if (simulatorState.activeBanner.type === 'trekker_permanent') {
		simulatorState.pityCounter.trekker_permanent_4star_guarantee = 0;
	}
	if (simulatorState.activeBanner.type === 'disc_limited') {
		simulatorState.pityCounter.disc_limited_4star_guarantee = 0;
	}
	if (simulatorState.activeBanner.type === 'disc_permanent') {
		simulatorState.pityCounter.disc_permanent_4star_guarantee = 0;
	}
}

function roll5Star() {
	switch (simulatorState.activeBanner.type) {
		case 'trekker_limited':
			if (isRateUp() || isPity()) {
				resetPity();
				return pool!.RATE_UP_5_STAR_TREKKERS![
					Math.floor(seed() * pool!.RATE_UP_5_STAR_TREKKERS!.length)
				];
			} else {
				incrementPity();
				return pool!.OFF_RATE_5_STAR_TREKKERS![
					Math.floor(seed() * pool!.OFF_RATE_5_STAR_TREKKERS!.length)
				];
			}
		case 'trekker_permanent':
			resetPity();
			return pool!.COMMON_5_STAR_TREKKERS![
				Math.floor(seed() * pool!.COMMON_5_STAR_TREKKERS!.length)
			];
		case 'disc_limited':
			if (isRateUp() || isPity()) {
				resetPity();
				return pool!.RATE_UP_5_STAR_DISCS![Math.floor(seed() * pool!.RATE_UP_5_STAR_DISCS!.length)];
			} else {
				incrementPity();
				return pool!.OFF_RATE_5_STAR_DISCS![
					Math.floor(seed() * pool!.OFF_RATE_5_STAR_DISCS!.length)
				];
			}
		case 'disc_permanent':
			resetPity();
			return pool!.COMMON_5_STAR_DISCS![Math.floor(seed() * pool!.COMMON_5_STAR_DISCS!.length)];
	}
}

function roll4Star() {
	incrementPity();
	reset4StarGuarantee();

	switch (simulatorState.activeBanner.type) {
		case 'trekker_limited':
			if (seed() < 0.5) {
				if (isRateUp()) {
					return pool!.RATE_UP_4_STAR_TREKKERS![
						Math.floor(seed() * pool!.RATE_UP_4_STAR_TREKKERS!.length)
					];
				} else {
					return pool!.OFF_RATE_4_STAR_TREKKERS![
						Math.floor(seed() * pool!.OFF_RATE_4_STAR_TREKKERS!.length)
					];
				}
			} else {
				return pool!.COMMON_4_STAR_DISCS![Math.floor(seed() * pool!.COMMON_4_STAR_DISCS!.length)];
			}
		case 'trekker_permanent':
			if (seed() < 0.5) {
				return pool!.COMMON_4_STAR_TREKKERS![
					Math.floor(seed() * pool!.COMMON_4_STAR_TREKKERS!.length)
				];
			} else {
				return pool!.COMMON_4_STAR_DISCS![Math.floor(seed() * pool!.COMMON_4_STAR_DISCS!.length)];
			}
		case 'disc_limited':
			if (seed() < 0.5) {
				return pool!.RATE_UP_4_STAR_DISCS![Math.floor(seed() * pool!.RATE_UP_4_STAR_DISCS!.length)];
			} else {
				return pool!.COMMON_4_STAR_DISCS![Math.floor(seed() * pool!.COMMON_4_STAR_DISCS!.length)];
			}
		case 'disc_permanent':
			return pool!.COMMON_4_STAR_DISCS![Math.floor(seed() * pool!.COMMON_4_STAR_DISCS!.length)];
	}
}

function roll3Star() {
	incrementPity();
	increment4StarPity();
	return pool!.COMMON_3_STAR_DISCS![Math.floor(seed() * pool!.COMMON_3_STAR_DISCS!.length)];
}

function recruit() {
	const recruitSeed = seed();
	if (recruitSeed < 0.02 || isPity()) {
		return roll5Star();
	} else if (recruitSeed < 0.1 || is4StarGuarantee()) {
		return roll4Star();
	} else {
		return roll3Star();
	}
}

export function recruit10() {
	for (let i = 0; i < 10; i++) {
		switch (simulatorState.activeBanner.type) {
			case 'trekker_limited':
				simulatorState.recruitHistory.trekker_limited.push(recruit());
				break;
			case 'trekker_permanent':
				simulatorState.recruitHistory.trekker_permanent.push(recruit());
				break;
			case 'disc_limited':
				simulatorState.recruitHistory.disc_limited.push(recruit() as Disc);
				break;
			case 'disc_permanent':
				simulatorState.recruitHistory.disc_permanent.push(recruit() as Disc);
				break;
		}
	}
}
