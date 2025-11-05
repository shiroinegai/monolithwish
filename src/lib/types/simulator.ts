export type Trekker = {
	type: 'trekker';
	rarity: 4 | 5;
	assetID: number;
	name: string;
};

export type Disc = {
	type: 'disc';
	rarity: 3 | 4 | 5;
	assetID: number;
	name: string;
};

export type Banner = {
	bannerID: number;
	name: string;
	type: 'trekker_limited' | 'disc_limited' | 'trekker_permanent' | 'disc_permanent';
	rateUps: Trekker[] | Disc[];
};

export type PityCounter = {
	trekker_limited: number;
	trekker_limited_4star_guarantee: number;
	trekker_permanent: number;
	trekker_permanent_4star_guarantee: number;
	disc_limited: number;
	disc_limited_4star_guarantee: number;
	disc_permanent: number;
	disc_permanent_4star_guarantee: number;
};

export type RecruitHistory = {
	trekker_limited: (Disc | Trekker)[];
	trekker_permanent: (Disc | Trekker)[];
	disc_limited: Disc[];
	disc_permanent: Disc[];
};

export type SimulatorState = {
	activeBanner: Banner;
	pityCounter: PityCounter;
	recruitHistory: RecruitHistory;
};
