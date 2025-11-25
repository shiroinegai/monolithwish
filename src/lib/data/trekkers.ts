import TREKKERS_JSON from '$SSData/character.json';

const trekkers = TREKKERS_JSON;

export const TREKKERS = Object.entries(trekkers).map((trekker) => trekker[1]);
