import type { Banner } from '$lib/types/simulator';

export const THE_PROMISE_OF_MELTING_SNOW: Banner = {
	bannerID: 10134,
	name: 'The Promise of Melting Snow',
	type: 'trekker_limited',
	rateUps: [
		{ type: 'trekker', rarity: 5, assetID: 13401, name: 'Fuyuka' },
		{ type: 'trekker', rarity: 4, assetID: 12601, name: 'Flora' },
		{ type: 'trekker', rarity: 4, assetID: 12001, name: 'Canace' }
	]
};

export const A_FATEFUL_ENCOUNTER: Banner = {
	bannerID: 10119,
	name: 'A Fateful Encounter',
	type: 'trekker_limited',
	rateUps: [
		{ type: 'trekker', rarity: 5, assetID: 11901, name: 'Nanoha' },
		{ type: 'trekker', rarity: 4, assetID: 10701, name: 'Tilia' },
		{ type: 'trekker', rarity: 4, assetID: 10801, name: 'Kasimira' }
	]
};

export const TIDE_TO_THE_FULL_MOON: Banner = {
	bannerID: 10155,
	name: 'Tide to the Full Moon',
	type: 'trekker_limited',
	rateUps: [
		{ type: 'trekker', rarity: 5, assetID: 15501, name: 'Shia' },
		{ type: 'trekker', rarity: 4, assetID: 10701, name: 'Tilia' },
		{ type: 'trekker', rarity: 4, assetID: 10801, name: 'Kasimira' }
	]
};

export const BLADES_BENEATH_THE_MOON: Banner = {
	bannerID: 10144,
	name: 'Blades Beneath the Moon',
	type: 'trekker_limited',
	rateUps: [
		{ type: 'trekker', rarity: 5, assetID: 14401, name: 'Chitose' },
		{ type: 'trekker', rarity: 4, assetID: 11701, name: 'Jinglin' },
		{ type: 'trekker', rarity: 4, assetID: 12701, name: 'Teresa' }
	]
};

export const FIREWORKS_DAZZLING_THE_NIGHT: Banner = {
	bannerID: 20134,
	name: 'Fireworks Dazzling the Night',
	type: 'disc_limited',
	rateUps: [
		{ type: 'disc', rarity: 5, assetID: 4017, name: 'Fireworks' },
		{ type: 'disc', rarity: 4, assetID: 3015, name: 'Unknown Fragrance' },
		{ type: 'disc', rarity: 4, assetID: 3016, name: 'Cage of Roses' }
	]
};

export const A_HEART_TUNED_MELODY: Banner = {
	bannerID: 20119,
	name: 'A Heart-Tuned Melody',
	type: 'disc_limited',
	rateUps: [
		{ type: 'disc', rarity: 5, assetID: 4028, name: 'Daylight Garden' },
		{ type: 'disc', rarity: 4, assetID: 3008, name: 'Tranquil Retreat' },
		{ type: 'disc', rarity: 4, assetID: 3005, name: '★ Bam Bam Girl ★' }
	]
};

export const OCEAN_MEETS_THE_SKY: Banner = {
	bannerID: 20155,
	name: 'Ocean Meets the Sky',
	type: 'disc_limited',
	rateUps: [
		{ type: 'disc', rarity: 5, assetID: 4038, name: 'Ripples of Nostalgia' },
		{ type: 'disc', rarity: 4, assetID: 3004, name: 'Twin Moon Mischief' },
		{ type: 'disc', rarity: 4, assetID: 3006, name: 'Good Night' }
	]
};

export const MOON_UPON_STILL_WATERS: Banner = {
	bannerID: 20144,
	name: 'Moon upon Still Waters',
	type: 'disc_limited',
	rateUps: [
		{ type: 'disc', rarity: 5, assetID: 4026, name: 'Sword Against Stream' },
		{ type: 'disc', rarity: 4, assetID: 3005, name: '★ Bam Bam Girl ★' },
		{ type: 'disc', rarity: 4, assetID: 3009, name: 'Rainy Tune' }
	]
};

export const BOSSS_REGULARS: Banner = {
	bannerID: 1,
	name: "Boss's Regulars",
	type: 'trekker_permanent',
	rateUps: []
};

export const MEMORIES_REWIND: Banner = {
	bannerID: 2,
	name: 'Memories Rewind',
	type: 'disc_permanent',
	rateUps: []
};

export const BANNERS: Banner[] = [
	THE_PROMISE_OF_MELTING_SNOW,
	A_FATEFUL_ENCOUNTER,
	TIDE_TO_THE_FULL_MOON,
	BLADES_BENEATH_THE_MOON,
	FIREWORKS_DAZZLING_THE_NIGHT,
	A_HEART_TUNED_MELODY,
	OCEAN_MEETS_THE_SKY,
	MOON_UPON_STILL_WATERS,
	BOSSS_REGULARS,
	MEMORIES_REWIND
];
