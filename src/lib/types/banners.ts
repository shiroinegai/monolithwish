import * as v from 'valibot';

export const RateUpSchema = v.object({
	id: v.number(),
	name: v.string(),
	type: v.picklist(['trekker', 'disc'])
});

export type RateUp = v.InferOutput<typeof RateUpSchema>;

export const BannerSchema = v.object({
	id: v.number(),
	name: v.string(),
	rateUp5Star: v.optional(v.array(RateUpSchema)),
	rateUp4Star: v.optional(v.array(RateUpSchema)),
	startTime: v.optional(v.pipe(v.string(), v.isoDateTime())),
	endTime: v.optional(v.pipe(v.string(), v.isoDateTime())),
	type: v.picklist(['trekker_limited', 'disc_limited', 'trekker_permanent', 'disc_permanent'])
});

export type Banner = v.InferOutput<typeof BannerSchema>;
