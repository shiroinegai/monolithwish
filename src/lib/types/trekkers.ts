import type { DamageType, EffectType, AttributeType } from './data';

export type Trekker = {
	id: number;
	detail: {
		name: string;
		quality: 4 | 5;
		element: Element;
		position: Position;
		attackType: 'Melee' | 'Ranged';
		style: Style;
		faction: Faction;
	};
	skill: {
		attack: Skill;
		main: Skill;
		support: Skill;
		ultimate: Skill;
	} & { [key: string]: Skill };
};

export type Element = 'Aqua' | 'Ignis' | 'Terra' | 'Ventus' | 'Lux' | 'Umbra';

export type Position = 'Versatile' | 'Vanguard' | 'Support';

export type Style = 'Collector' | 'Steady' | 'Adventurous' | 'Creative' | 'Inquisitive';

export type Faction =
	| 'New Star Guild'
	| 'Imperial Guard'
	| 'White Cat Troupe'
	| 'United Harvest'
	| 'Baize Bureau'
	| 'Trekker Association'
	| 'Fenghuang Diner'
	| 'Goodwind Homecare'
	| 'Post Haste'
	| 'Freelance Trekker'
	| 'Ashwind Clan'
	| 'Scarlet Sights Media'
	| 'Yunji Studio'
	| 'Grace Imperium'
	| 'Petal Bloom Guild'
	| 'Neo Grace Organization';

export type Skill = {
	name: string;
	briefDesc: string;
	desc: string;
	cooldown?: number;
	icon: string;
	damageType: DamageType[];
	effectType: (EffectType | AttributeType)[];
};
