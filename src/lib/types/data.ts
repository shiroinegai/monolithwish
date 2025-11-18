export type Character = {
	Id: number;
	Name: string;
	Visible?: boolean;
	Available?: boolean;
	Grade: number;
	DefaultSkinId: number;
	AdvanceSkinId: number;
	AdvanceGroup: number;
	AdvanceSkinUnlockLevel: number;
	ViewId: number;
	Faction: number;
	Weight: number;
	EET: number;
	Class: number;
	CharacterAttackType: number;
	SearchTargetType: number;
	AtkSpd: number;
	MovType: number;
	WalkSpd: number;
	RunSpd: number;
	SpRunSpd: number;
	TransSpd: number;
	WalkToRunDuration?: number;
	DodgeToRunAccelerationOrNot?: boolean;
	MovAcc: number;
	RotSpd: number;
	RotAcc: number;
	VisionDeg: number;
	VisionRng: number;
	VisionAttackRng: number;
	HearRng: number;
	HearAttackRng: number;
	RaiseGunRng: number;
	BulletType?: number;
	Ammo?: number;
	AIId: number;
	NormalAtkId: number;
	DodgeId: number;
	SkillId: number;
	SpecialSkillId: number;
	UltimateId: number;
	AssistAIId: number;
	AssistNormalAtkId: number;
	AssistDodgeId: number;
	AssistSkillId: number;
	AssistSpecialSkillId: number;
	AssistUltimateId: number;
	TalentSkillId?: number;
	AssistSkillOnStageType: number;
	AssistSkillAngle?: number;
	AssistSkillRadius: number;
	AssistUltimateOnStageType: number;
	AssistUltimateAngle: number;
	AssistUltimateRadius: number;
	AssistUltimateOnStageOrientation?: number;
	SkillSemiAutoRng: number;
	UltimateSemiAutoRng: number;
	SwitchCD: number;
	EnergyConvRatio: number;
	EnergyEfficiency: number;
	FragmentsId: number;
	TransformQty: number;
	RecruitmentQty: number;
	AttributeId: string;
	PresentsTraitId: number;
	SkillsUpgradeGroup: number[];
	FrozenTimeHighlightUnit: number;
	GemSlots: number[];
	AssistSkillOnStageOrientation?: number;
};

export type CharacterDes = {
	Id: number;
	Alias: string;
	CnCv: string;
	JpCv: string;
	CharColor: string;
	CharSkillColor: string;
	CharDes: string;
	Tag: number[];
	Force: number;
	PreferTags?: number[];
	Birthday: string;
	PotentialMain1: string;
	PotentialMain2: string;
	PotentialAssistant1: string;
	PotentialAssistant2: string;
	PotentialMainContent1: string;
	PotentialMainContent2: string;
	PotentialAssistantContent1: string;
	PotentialAssistantContent2: string;
	HateTags?: number[];
};

export type Skill = {
	Id: number;
	Title: string;
	FCPath?: string;
	Type: number;
	BriefDesc: string;
	Desc: string;
	Icon?: string;
	MaxLevel?: number;
	GetEnergyLimit?: number;
	CheckSkillInterval?: boolean;
	SkillCD?: number;
	SectionAmount?: number;
	UseInterval?: number;
	UltraEnergy?: number;
	UseTimeHint?: number;
	Param1?: string;
	Param2?: string;
	Param3?: string;
	Param4?: string;
	Param5?: string;
	Param6?: string;
	Param7?: string;
	Param8?: string;
	Param9?: string;
	Param10?: string;
	CheckCDRestore?: boolean;
};

export type HitDamage = {
	Id: number;
	levelTypeData?: number;
	HitdamageInfo?: string;
	DistanceType?: number;
	SourceType: number;
	DamageType: number;
	EffectType: number;
	ElementType?: number;
	DamageTag?: number[];
	DamageBonusType?: number;
	SkillPercentAmend?: number[];
	SkillAbsAmend: number[];
	TalentPercentAmend?: number[];
	TalentAbsAmend?: number[];
	LevelData?: number;
	EnergyCharge?: number;
	SkillId?: number;
	SkillSlotType?: number;
	MainOrSupport?: number;
	IsDenseType?: boolean;
	PerkId?: number;
	HitImmunityTime?: number;
	AdditionalSource?: number;
	AdditionalType?: number;
	AdditionalPercent?: number[];
};

export type DamageType =
	| 'Auto Attack'
	| 'Skill'
	| 'Ultimate'
	| 'Other'
	| 'Mark'
	| 'Projectile'
	| 'Minion';

export type EffectType =
	| 'STATE_CHANGE'
	| 'CURRENTCD'
	| 'CD'
	| 'ADDBUFF'
	| 'ADD_SKILL_LV'
	| 'SET_SKILL_LV'
	| 'IMM_BUFF'
	| 'ADDSKILLAMOUNT'
	| 'RESUMSKILLAMOUNT'
	| 'ATTR_FIX'
	| 'REMOVE_BUFF'
	| 'EFFECT_CD_FIX'
	| 'EFFECT_MAX_CD_FIX'
	| 'AMEND_NO_COST'
	| 'DAMAGE_IMM_ACC'
	| 'EFFECT_MUL'
	| 'EFFECT_HP_RECOVERY'
	| 'KILL_IMMEDIATELY'
	| 'ADD_BUFF_DURATION_EXISTING'
	| 'HIT_ELEMENT_TYPE_EXTEND'
	| 'CHANGE_EFFECT_RATE'
	| 'ADD_TAG'
	| 'EFFECT_HP_REVERTTO'
	| 'EFFECT_HP_ABSORB'
	| 'CHANGE_BUFF_LAMINATEDNUM'
	| 'CHANGE_BUFF_TIME'
	| 'EFFECT_REVIVE'
	| 'EFFECT_POSTREVIVE'
	| 'SPECIAL_ATTR_FIX'
	| 'AMMO_FIX'
	| 'MONSTER_ATTR_FIX'
	| 'PLAYER_ATTR_FIX'
	| 'IMMUNE_DEAD'
	| 'ENTER_TRANSPARENT'
	| 'UNABLE_RECOVER_ENERGY'
	| 'CLEAR_MONSTER_AI_BRANCH_CD'
	| 'ADD_SHIELD'
	| 'REDUCE_HP_BY_CURRENTHP'
	| 'REDUCE_HP_BY_MAXHP'
	| 'HITTED_ADDITIONAL_ATTR_FIX'
	| 'ATTR_ASSIGNMENT'
	| 'CAST_AREAEFFECT'
	| 'PASSIVE_SKILL'
	| 'IMM_CERTAIN_HITDAMAGEID'
	| 'STATE_AMOUNT'
	| 'DROP_ITEM_PICKUP_RANGE_FIX';

export type AttributeType =
	| 'ATK'
	| 'DEF'
	| 'HP'
	| 'Accuracy'
	| 'Evasion'
	| 'Crit Rate'
	| 'Crit RES'
	| 'Crit DMG'
	| 'DEF PEN'
	| 'Ignore DEF'
	| 'Aqua RES'
	| 'Ignis RES'
	| 'Terra RES'
	| 'Ventus RES'
	| 'Lux RES'
	| 'Umbra RES'
	| 'Aqua DMG'
	| 'Ignis DMG'
	| 'Terra DMG'
	| 'Ventus DMG'
	| 'Lux DMG'
	| 'Umbra DMG'
	| 'Aqua PEN'
	| 'Ignis PEN'
	| 'Terra PEN'
	| 'Ventus PEN'
	| 'Lux PEN'
	| 'Umbra PEN'
	| 'Ignore Aqua RES'
	| 'Ignore Ignis RES'
	| 'Ignore Terra RES'
	| 'Ignore Ventus RES'
	| 'Ignore Lux RES'
	| 'Ignore Umbra RES'
	| 'Aqua DMG Taken'
	| 'Ignis DMG Taken'
	| 'Terra DMG Taken'
	| 'Ventus DMG Taken'
	| 'Lux DMG Taken'
	| 'Umbra DMG Taken'
	| 'Weight'
	| 'Resilience'
	| 'Resilience Break Efficiency'
	| 'Max Shield'
	| 'Shield PEN'
	| 'Movement Speed'
	| 'Attack Speed'
	| 'Intensity'
	| 'DMG Dealt'
	| 'DMG'
	| 'Final DMG'
	| 'Final DMG+'
	| 'DMG Taken'
	| 'DMG Taken+'
	| 'VUL Exploit'
	| 'Auto Attack Damage'
	| 'Skill DMG'
	| 'Ultimate DMG'
	| 'Other DMG'
	| 'Auto Attack DMG Taken'
	| 'Skill DMG Taken'
	| 'Ultimate DMG Taken'
	| 'Other DMG Taken'
	| 'Mark DMG'
	| 'Mark DMG Taken'
	| 'Minion DMG'
	| 'Minion DMG Taken'
	| 'Derivative DMG'
	| 'Derivative DMG Taken'
	| 'Auto Attack Crit Rate'
	| 'Skill Crit Rate'
	| 'Ultimate Crit Rate'
	| 'Mark Crit Rate'
	| 'Minion Crit Rate'
	| 'Derivative Crit Rate'
	| 'Other Crit'
	| 'Normal Attack Crit DMG'
	| 'Skill Crit DMG'
	| 'Ultimate Crit DMG'
	| 'Mark Crit DMG'
	| 'Minion Crit DMG'
	| 'Derivative Crit DMG'
	| 'Other Crit DMG'
	| 'Max Energy'
	| 'Skill Intensity'
	| 'ADD_SHIELD_STRENGTHEN'
	| 'BE_ADD_SHIELD_STRENGTHEN';

export type EffectValue = {
	Id: number;
	Name?: string;
	Tag?: string;
	EffectRate: number;
	EffectType?: number;
	EffectTypeFirstSubtype?: number;
	EffectTypeSecondSubtype?: number;
	EffectTypeParam1?: string;
	EffectTypeParam2?: string;
	EffectTypeParam3?: string;
	EffectTypeParam4?: string;
	TakeEffectLimit?: number;
	Remove?: boolean;
	CD?: number;
};
