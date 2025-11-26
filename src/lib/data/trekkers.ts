import TREKKERS_JSON from '$SSData/character.json';

const trekkers = TREKKERS_JSON;

export const TREKKERS = Object.entries(trekkers).map((trekker) => ({
	id: trekker[1].id,
	name: trekker[1].name,
	quality: trekker[1].star,
	element: trekker[1].element,
	attackType: trekker[1].attackType,
	position: trekker[1].class,
	style: trekker[1].tag[1],
	faction: trekker[1].tag[2]
}));
