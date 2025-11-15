export const images: Record<string, string> = import.meta.glob('$lib/images/*.{avif,webp,png}', {
	eager: true,
	query: '?url',
	import: 'default'
});
