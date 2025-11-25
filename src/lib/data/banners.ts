import LIMITED_BANNERS_JSON from '$SSData/gacha.json';

import type { Banner, RateUp } from '$lib/types/banners';

const PERMANENT_BANNERS: Banner[] = [
	{
		id: 1,
		name: "Boss's Regulars",
		type: 'trekker_permanent'
	},
	{
		id: 2,
		name: 'Memories Rewind',
		type: 'disc_permanent'
	}
];

const limitedBanners = LIMITED_BANNERS_JSON;

const formattedLimitedBanners: Banner[] = Object.entries(limitedBanners).map((banner) => ({
	id: banner[1].id,
	name: banner[1].name,
	rateUp5Star: banner[1].rateUp5Star.map((rateUp) => ({
		...attributeRateUpProps(rateUp, banner[1].id),
		rarity: 5
	})),
	rateUp4Star: banner[1].rateUp4Star.map((rateUp) => ({
		...attributeRateUpProps(rateUp, banner[1].id),
		rarity: 4
	})),
	startTime: banner[1].startTime,
	endTime: banner[1].endTime,
	type: isTrekkerBanner(banner[1].id) ? 'trekker_limited' : 'disc_limited'
}));

export const BANNERS: Banner[] = [
	...formattedLimitedBanners
		.filter((banner) => banner.type === 'trekker_limited')
		.sort((a, b) => new Date(b.startTime!).getTime() - new Date(a.startTime!).getTime()),
	...formattedLimitedBanners
		.filter((banner) => banner.type === 'disc_limited')
		.sort((a, b) => new Date(b.startTime!).getTime() - new Date(a.startTime!).getTime()),
	...PERMANENT_BANNERS
];

function isTrekkerBanner(id: number) {
	return id.toString().startsWith('10');
}

function attributeRateUpProps(rateUp: Omit<RateUp, 'type'>, bannerId: number): RateUp {
	return isTrekkerBanner(bannerId)
		? { ...rateUp, type: 'trekker' }
		: { ...rateUp, id: +rateUp.id.toString().slice(-4), type: 'disc' };
}
