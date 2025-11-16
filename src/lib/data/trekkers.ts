import CHARACTER from '$SSData/EN/bin/Character.json';
import CHARACTER_ADVANCE from '$SSData/EN/bin/CharacterAdvance.json';
import CHARACTER_DES from '$SSData/EN/bin/CharacterDes.json';
import CHARACTER_SKILL_UPGRADE from '$SSData/EN/bin/CharacterSkillUpgrade.json';
import CHAR_POTENTIAL from '$SSData/EN/bin/CharPotential.json';
import SKILL from '$SSData/EN/bin/Skill.json';
import HIT_DAMAGE from '$SSData/EN/bin/HitDamage.json';
import EFFECT_VALUE from '$SSData/EN/bin/EffectValue.json';
import BUFF_VALUE from '$SSData/EN/bin/BuffValue.json';
import SHIELD_VALUE from '$SSData/EN/bin/ShieldValue.json';
import ITEM from '$SSData/EN/bin/Item.json';
import POTENTIAL from '$SSData/EN/bin/Potential.json';
import ATTRIBUTE from '$SSData/EN/bin/Attribute.json';
import AFFINITY_GIFT from '$SSData/EN/bin/AffinityGift.json';
import TALENT from '$SSData/EN/bin/Talent.json';
import TALENT_GROUP from '$SSData/EN/bin/TalentGroup.json';
import DATING_CHARACTER_EVENT from '$SSData/EN/bin/DatingCharacterEvent.json';
import DATING_BRANCH from '$SSData/EN/bin/DatingBranch.json';
import ONCE_ADDITTIONAL_ATTRIBUTE_VALUE from '$SSData/EN/bin/OnceAdditionalAttributeValue.json';
import SCRIPT_PARAMETER_VALUE from '$SSData/EN/bin/ScriptParameterValue.json';
import LANG_CHARACTER from '$SSData/EN/language/en_US/Character.json';
import LANG_CHARACTER_TAG from '$SSData/EN/language/en_US/CharacterTag.json';
import LANG_SKILL from '$SSData/EN/language/en_US/Skill.json';
import LANG_UI_TEXT from '$SSData/EN/language/en_US/UIText.json';
import LANG_ITEM from '$SSData/EN/language/en_US/Item.json';
import LANG_POTENTIAL from '$SSData/EN/language/en_US/Potential.json';
import LANG_TALENT from '$SSData/EN/language/en_US/Talent.json';
import LANG_TALENT_GROUP from '$SSData/EN/language/en_US/TalentGroup.json';
import LANG_DATING_CHARACTER_EVENT from '$SSData/EN/language/en_US/DatingCharacterEvent.json';
import LANG_DATING_BRANCH from '$SSData/EN/language/en_US/DatingBranch.json';

const trekkers = [];

for (const id in CHARACTER) {
	trekkers.push({
		id: +id,
		name: LANG_CHARACTER[CHARACTER[id].Name]
	});
}

export { trekkers };
