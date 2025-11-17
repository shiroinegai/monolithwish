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
import _EFFECT_VALUE from '$SSData/EN/bin/EffectValue.json';
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
import type { Character, CharacterDes, Skill } from '$lib/types/data';

const trekkers: Trekker[] = [];

for (const id in CHARACTER) {
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
				desc: LANG_SKILL[SKILL[CHARACTER[id].NormalAtkId].Desc]
			},
			main: {
				name: LANG_SKILL[SKILL[CHARACTER[id].SkillId].Title],
				briefDesc: LANG_SKILL[SKILL[CHARACTER[id].SkillId].BriefDesc],
				desc: LANG_SKILL[SKILL[CHARACTER[id].SkillId].Desc]
			},
			support: {
				name: LANG_SKILL[SKILL[CHARACTER[id].AssistSkillId].Title],
				briefDesc: LANG_SKILL[SKILL[CHARACTER[id].AssistSkillId].BriefDesc],
				desc: LANG_SKILL[SKILL[CHARACTER[id].AssistSkillId].Desc]
			},
			ultimate: {
				name: LANG_SKILL[SKILL[CHARACTER[id].UltimateId].Title],
				briefDesc: LANG_SKILL[SKILL[CHARACTER[id].UltimateId].BriefDesc],
				desc: LANG_SKILL[SKILL[CHARACTER[id].UltimateId].Desc]
			}
		}
	});
}

export { trekkers };
