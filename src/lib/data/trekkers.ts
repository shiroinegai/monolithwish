import * as v from 'valibot';

import _trekkers from '$SSData/character.json';
export const trekkers = _trekkers;

export const AttackTypeSchema = v.pipe(v.string(), v.values(['Melee', 'Ranged']));

export type AttackType = v.InferOutput<typeof AttackTypeSchema>;

export const PositionSchema = v.pipe(v.string(), v.values(['Vanguard', 'Versatile', 'Support']));

export type Position = v.InferOutput<typeof PositionSchema>;

export const ClueSchema = v.pipe(
	v.string(),
	v.values([
		'Visit the Academy to unlock',
		'Visit the Cave to unlock',
		'Visit the Dessert Shop to unlock',
		'Visit the Market to unlock',
		'Visit the Port to unlock'
	])
);

export type Clue = v.InferOutput<typeof ClueSchema>;

export const DamageTypeSchema = v.pipe(
	v.string(),
	v.values(['Auto Attack', 'Mark', 'Minion', 'Projectile', 'Skill', 'Ultimate'])
);

export type DamageType = v.InferOutput<typeof DamageTypeSchema>;

export const PotentialRaritySchema = v.pipe(v.string(), v.values(['common', 'core', 'rare']));

export type PotentialRarity = v.InferOutput<typeof PotentialRaritySchema>;

export const DateEventSchema = v.object({
	id: v.number(),
	name: v.string(),
	clue: ClueSchema,
	secondChoice: v.string()
});

export type DateEvent = v.InferOutput<typeof DateEventSchema>;

export const NormalAttackSchema = v.object({
	name: v.string(),
	briefDesc: v.string(),
	desc: v.string(),
	damageType: v.array(DamageTypeSchema),
	effectType: v.array(v.string()),
	params: v.array(v.string()),
	icon: v.string(),
	rarity: v.optional(PotentialRaritySchema),
	cooldown: v.optional(v.string()),
	energy: v.optional(v.number())
});

export type NormalAttack = v.InferOutput<typeof NormalAttackSchema>;

export const SkillSchema = v.object({
	name: v.string(),
	briefDesc: v.string(),
	desc: v.string(),
	damageType: v.array(DamageTypeSchema),
	effectType: v.array(v.string()),
	params: v.array(v.union([v.number(), v.string()])),
	icon: v.string(),
	rarity: v.optional(PotentialRaritySchema),
	cooldown: v.optional(v.string()),
	energy: v.optional(v.number())
});

export type Skill = v.InferOutput<typeof SkillSchema>;

export const StatSchema = v.object({
	hp: v.number(),
	atk: v.number()
});

export type Stat = v.InferOutput<typeof StatSchema>;

export const BoostSchema = v.object({
	name: v.string(),
	desc: v.string(),
	params: v.array(v.union([v.number(), v.string()]))
});

export type Boost = v.InferOutput<typeof BoostSchema>;

export const PotentialSchema = v.object({
	mainCore: v.array(SkillSchema),
	mainNormal: v.array(SkillSchema),
	common: v.array(SkillSchema),
	supportCore: v.array(SkillSchema),
	supportNormal: v.array(SkillSchema)
});

export type Potential = v.InferOutput<typeof PotentialSchema>;

export const TalentSchema = v.object({
	name: v.string(),
	boost: v.array(BoostSchema)
});

export type Talent = v.InferOutput<typeof TalentSchema>;

export const UpgradeSchema = v.record(v.string(), v.number());

export type Upgrade = v.InferOutput<typeof UpgradeSchema>;

export const TrekkerSchema = v.object({
	id: v.number(),
	name: v.string(),
	star: v.number(),
	element: v.string(),
	class: PositionSchema,
	attackType: AttackTypeSchema,
	tag: v.array(v.string()),
	loveGift: v.array(v.string()),
	hateGift: v.array(v.string()),
	date: v.array(DateEventSchema),
	normalAtk: NormalAttackSchema,
	skill: SkillSchema,
	supportSkill: SkillSchema,
	ultimate: SkillSchema,
	potential: PotentialSchema,
	talent: v.array(TalentSchema),
	stat: v.array(StatSchema),
	upgrade: v.array(UpgradeSchema),
	skillUpgrade: v.array(UpgradeSchema)
});

export type Trekker = v.InferOutput<typeof TrekkerSchema>;
