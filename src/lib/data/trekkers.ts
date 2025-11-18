import _CHARACTER from '$SSData/EN/bin/Character.json';
const CHARACTER: Record<string, Character> = _CHARACTER;
import _CHARACTER_ADVANCE from '$SSData/EN/bin/CharacterAdvance.json';
import _CHARACTER_DES from '$SSData/EN/bin/CharacterDes.json';
const CHARACTER_DES: Record<string, CharacterDes> = _CHARACTER_DES;
import _CHARACTER_SKILL_UPGRADE from '$SSData/EN/bin/CharacterSkillUpgrade.json';
import _CHAR_POTENTIAL from '$SSData/EN/bin/CharPotential.json';
import _SKILL from '$SSData/EN/bin/Skill.json';
const SKILL: Record<string, Skill> = _SKILL;
import _HIT_DAMAGE from '$SSData/EN/bin/HitDamage.json';
const HIT_DAMAGE: Record<string, HitDamage> = _HIT_DAMAGE;
import _EFFECT_VALUE from '$SSData/EN/bin/EffectValue.json';
const EFFECT_VALUE: Record<string, EffectValue> = _EFFECT_VALUE;
import _BUFF_VALUE from '$SSData/EN/bin/BuffValue.json';
import _SHIELD_VALUE from '$SSData/EN/bin/ShieldValue.json';
import _ITEM from '$SSData/EN/bin/Item.json';
import _POTENTIAL from '$SSData/EN/bin/Potential.json';
import _ATTRIBUTE from '$SSData/EN/bin/Attribute.json';
import _AFFINITY_GIFT from '$SSData/EN/bin/AffinityGift.json';
import _TALENT from '$SSData/EN/bin/Talent.json';
import _TALENT_GROUP from '$SSData/EN/bin/TalentGroup.json';
import _DATING_CHARACTER_EVENT from '$SSData/EN/bin/DatingCharacterEvent.json';
import _DATING_BRANCH from '$SSData/EN/bin/DatingBranch.json';
import _ONCE_ADDITTIONAL_ATTRIBUTE_VALUE from '$SSData/EN/bin/OnceAdditionalAttributeValue.json';
import _SCRIPT_PARAMETER_VALUE from '$SSData/EN/bin/ScriptParameterValue.json';
import _LANG_CHARACTER from '$SSData/EN/language/en_US/Character.json';
const LANG_CHARACTER: Record<string, string> = _LANG_CHARACTER;
import _LANG_CHARACTER_TAG from '$SSData/EN/language/en_US/CharacterTag.json';
const LANG_CHARACTER_TAG: Record<string, string> = _LANG_CHARACTER_TAG;
import _LANG_SKILL from '$SSData/EN/language/en_US/Skill.json';
const LANG_SKILL: Record<string, string> = _LANG_SKILL;
import _LANG_UI_TEXT from '$SSData/EN/language/en_US/UIText.json';
const LANG_UI_TEXT: Record<string, string> = _LANG_UI_TEXT;
import _LANG_ITEM from '$SSData/EN/language/en_US/Item.json';
import _LANG_POTENTIAL from '$SSData/EN/language/en_US/Potential.json';
import _LANG_TALENT from '$SSData/EN/language/en_US/Talent.json';
import _LANG_TALENT_GROUP from '$SSData/EN/language/en_US/TalentGroup.json';
import _LANG_DATING_CHARACTER_EVENT from '$SSData/EN/language/en_US/DatingCharacterEvent.json';
import _LANG_DATING_BRANCH from '$SSData/EN/language/en_US/DatingBranch.json';

import type { Trekker, Element, Position, Style, Faction } from '$lib/types/trekkers';
import type {
	Character,
	CharacterDes,
	Skill,
	HitDamage,
	DamageType,
	EffectType,
	AttributeType,
	EffectValue
} from '$lib/types/data';

const DAMAGE_TYPE: Record<number, DamageType> = {
	1: 'Auto Attack',
	2: 'Skill',
	3: 'Ultimate',
	4: 'Other',
	5: 'Mark',
	6: 'Projectile',
	7: 'Minion'
};

const EFFECT_TYPE: Record<number, EffectType> = {
	1: 'STATE_CHANGE',
	2: 'CURRENTCD',
	3: 'CD',
	6: 'ADDBUFF',
	7: 'ADD_SKILL_LV',
	8: 'SET_SKILL_LV',
	9: 'IMM_BUFF',
	10: 'ADDSKILLAMOUNT',
	11: 'RESUMSKILLAMOUNT',
	12: 'ATTR_FIX',
	13: 'REMOVE_BUFF',
	14: 'EFFECT_CD_FIX',
	15: 'EFFECT_MAX_CD_FIX',
	16: 'AMEND_NO_COST',
	17: 'DAMAGE_IMM_ACC',
	18: 'EFFECT_MUL',
	19: 'EFFECT_HP_RECOVERY',
	21: 'KILL_IMMEDIATELY',
	22: 'ADD_BUFF_DURATION_EXISTING',
	23: 'HIT_ELEMENT_TYPE_EXTEND',
	24: 'CHANGE_EFFECT_RATE',
	25: 'ADD_TAG',
	27: 'EFFECT_HP_REVERTTO',
	28: 'EFFECT_HP_ABSORB',
	29: 'CHANGE_BUFF_LAMINATEDNUM',
	30: 'CHANGE_BUFF_TIME',
	31: 'EFFECT_REVIVE',
	32: 'EFFECT_POSTREVIVE',
	34: 'SPECIAL_ATTR_FIX',
	35: 'AMMO_FIX',
	36: 'MONSTER_ATTR_FIX',
	37: 'PLAYER_ATTR_FIX',
	38: 'IMMUNE_DEAD',
	39: 'ENTER_TRANSPARENT',
	40: 'UNABLE_RECOVER_ENERGY',
	41: 'CLEAR_MONSTER_AI_BRANCH_CD',
	42: 'ADD_SHIELD',
	43: 'REDUCE_HP_BY_CURRENTHP',
	44: 'REDUCE_HP_BY_MAXHP',
	45: 'HITTED_ADDITIONAL_ATTR_FIX',
	46: 'ATTR_ASSIGNMENT',
	47: 'CAST_AREAEFFECT',
	48: 'PASSIVE_SKILL',
	49: 'IMM_CERTAIN_HITDAMAGEID',
	50: 'STATE_AMOUNT',
	51: 'DROP_ITEM_PICKUP_RANGE_FIX'
};

const ATTRIBUTE_TYPE: Record<number, AttributeType> = {
	1: 'ATK',
	2: 'DEF',
	3: 'HP',
	4: 'Accuracy',
	5: 'Evasion',
	6: 'Crit Rate',
	7: 'Crit RES',
	8: 'Crit DMG',
	9: 'DEF PEN',
	10: 'Ignore DEF',
	11: 'Aqua RES',
	12: 'Ignis RES',
	13: 'Terra RES',
	14: 'Ventus RES',
	15: 'Lux RES',
	16: 'Umbra RES',
	17: 'Aqua DMG',
	18: 'Ignis DMG',
	19: 'Terra DMG',
	20: 'Ventus DMG',
	21: 'Lux DMG',
	22: 'Umbra DMG',
	23: 'Aqua PEN',
	24: 'Ignis PEN',
	25: 'Terra PEN',
	26: 'Ventus PEN',
	27: 'Lux PEN',
	28: 'Umbra PEN',
	29: 'Ignore Aqua RES',
	30: 'Ignore Ignis RES',
	31: 'Ignore Terra RES',
	32: 'Ignore Ventus RES',
	33: 'Ignore Lux RES',
	34: 'Ignore Umbra RES',
	35: 'Aqua DMG Taken',
	36: 'Ignis DMG Taken',
	37: 'Terra DMG Taken',
	38: 'Ventus DMG Taken',
	39: 'Lux DMG Taken',
	40: 'Umbra DMG Taken',
	41: 'Weight',
	42: 'Resilience',
	43: 'Resilience Break Efficiency',
	44: 'Max Shield',
	45: 'Shield PEN',
	46: 'Movement Speed',
	47: 'Attack Speed',
	48: 'Intensity',
	49: 'DMG Dealt',
	50: 'DMG',
	51: 'Final DMG',
	52: 'Final DMG+',
	53: 'DMG Taken',
	54: 'DMG Taken+',
	55: 'VUL Exploit',
	56: 'Auto Attack Damage',
	57: 'Skill DMG',
	58: 'Ultimate DMG',
	59: 'Other DMG',
	60: 'Auto Attack DMG Taken',
	61: 'Skill DMG Taken',
	62: 'Ultimate DMG Taken',
	63: 'Other DMG Taken',
	64: 'Mark DMG',
	65: 'Mark DMG Taken',
	66: 'Minion DMG',
	67: 'Minion DMG Taken',
	68: 'Derivative DMG',
	69: 'Derivative DMG Taken',
	70: 'Auto Attack Crit Rate',
	71: 'Skill Crit Rate',
	72: 'Ultimate Crit Rate',
	73: 'Mark Crit Rate',
	74: 'Minion Crit Rate',
	75: 'Derivative Crit Rate',
	76: 'Other Crit',
	77: 'Normal Attack Crit DMG',
	78: 'Skill Crit DMG',
	79: 'Ultimate Crit DMG',
	80: 'Mark Crit DMG',
	81: 'Minion Crit DMG',
	82: 'Derivative Crit DMG',
	83: 'Other Crit DMG',
	84: 'Max Energy',
	85: 'Skill Intensity',
	86: 'ADD_SHIELD_STRENGTHEN',
	87: 'BE_ADD_SHIELD_STRENGTHEN'
};

const trekkers: Trekker[] = [];

for (const id in CHARACTER) {
	if (LANG_CHARACTER[CHARACTER[id].Name] === '???') continue;

	trekkers.push({
		id: +id,
		detail: {
			name: LANG_CHARACTER[CHARACTER[id].Name],
			quality: CHARACTER[id].Grade === 1 ? 5 : 4,
			element: LANG_UI_TEXT[`UIText.T_Element_Attr_${CHARACTER[id].EET}.1`] as Element,
			position: LANG_UI_TEXT[`UIText.Char_JobClass_${CHARACTER[id].Class}.1`] as Position,
			attackType: CHARACTER[id].CharacterAttackType === 1 ? 'Melee' : 'Ranged',
			style: LANG_CHARACTER_TAG[`CharacterTag.${CHARACTER_DES[id].Tag[1]}.1`] as Style,
			faction: LANG_CHARACTER_TAG[`CharacterTag.${CHARACTER_DES[id].Tag[2]}.1`] as Faction
		},
		skill: {
			attack: {
				name: LANG_SKILL[SKILL[CHARACTER[id].NormalAtkId].Title],
				briefDesc: LANG_SKILL[SKILL[CHARACTER[id].NormalAtkId].BriefDesc],
				desc: LANG_SKILL[SKILL[CHARACTER[id].NormalAtkId].Desc],
				icon: SKILL[CHARACTER[id].NormalAtkId].Icon!,
				damageType: getSkillDamageTypes(CHARACTER[id].NormalAtkId),
				effectType: getSkillEffectTypes(CHARACTER[id].NormalAtkId),
				params: collateParams(SKILL[CHARACTER[id].NormalAtkId])
			},
			main: {
				name: LANG_SKILL[SKILL[CHARACTER[id].SkillId].Title],
				briefDesc: LANG_SKILL[SKILL[CHARACTER[id].SkillId].BriefDesc],
				desc: LANG_SKILL[SKILL[CHARACTER[id].SkillId].Desc],
				cooldown: SKILL[CHARACTER[id].SkillId].SkillCD,
				icon: SKILL[CHARACTER[id].SkillId].Icon!,
				damageType: getSkillDamageTypes(CHARACTER[id].SkillId),
				effectType: getSkillEffectTypes(CHARACTER[id].SkillId),
				params: collateParams(SKILL[CHARACTER[id].SkillId])
			},
			support: {
				name: LANG_SKILL[SKILL[CHARACTER[id].AssistSkillId].Title],
				briefDesc: LANG_SKILL[SKILL[CHARACTER[id].AssistSkillId].BriefDesc],
				desc: LANG_SKILL[SKILL[CHARACTER[id].AssistSkillId].Desc],
				cooldown: SKILL[CHARACTER[id].AssistSkillId].SkillCD,
				icon: SKILL[CHARACTER[id].AssistSkillId].Icon!,
				damageType: getSkillDamageTypes(CHARACTER[id].AssistSkillId),
				effectType: getSkillEffectTypes(CHARACTER[id].AssistSkillId),
				params: collateParams(SKILL[CHARACTER[id].AssistSkillId])
			},
			ultimate: {
				name: LANG_SKILL[SKILL[CHARACTER[id].UltimateId].Title],
				briefDesc: LANG_SKILL[SKILL[CHARACTER[id].UltimateId].BriefDesc],
				desc: LANG_SKILL[SKILL[CHARACTER[id].UltimateId].Desc],
				cooldown: SKILL[CHARACTER[id].UltimateId].SkillCD,
				icon: SKILL[CHARACTER[id].UltimateId].Icon!,
				damageType: getSkillDamageTypes(CHARACTER[id].UltimateId),
				effectType: getSkillEffectTypes(CHARACTER[id].UltimateId),
				params: collateParams(SKILL[CHARACTER[id].UltimateId])
			}
		}
	});
}

function collateParams(data: { [key: string]: number | string | boolean }) {
	const params: string[][] = [];

	Object.keys(data)
		.filter((key) => key.startsWith('Param'))
		.map((key) => params.push((data[key] as string).split(',')));

	return params;
}

function getSkillDamageTypes(skillId: number) {
	const damageTypes: DamageType[] = [];

	const params = collateParams(SKILL[skillId]).filter((param) => param.includes('HitDamage'));
	params.forEach((param) => {
		if (HIT_DAMAGE[param[2]]) damageTypes.push(DAMAGE_TYPE[HIT_DAMAGE[param[2]].DamageType]);
	});

	return [...new Set(damageTypes)];
}

function getSkillEffectTypes(skillId: number) {
	const effectTypes: (EffectType | AttributeType)[] = [];

	const params = collateParams(SKILL[skillId]).filter((param) => param.includes('Effect'));

	for (const param of params) {
		let currentId = +param[2];
		if (!EFFECT_VALUE[currentId]) currentId += 10;
		if (!EFFECT_VALUE[currentId]) continue;

		let type = EFFECT_VALUE[currentId].EffectTypeFirstSubtype;
		if (!type)
			type = EFFECT_VALUE[EFFECT_VALUE[currentId].EffectTypeParam1!]?.EffectTypeFirstSubtype;

		effectTypes.push(ATTRIBUTE_TYPE[type!] || EFFECT_TYPE[EFFECT_VALUE[currentId].EffectType!]);
	}

	return [...new Set(effectTypes)];
}

export { trekkers };
