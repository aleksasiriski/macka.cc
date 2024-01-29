import { shuffle } from '$lib/functions/shuffle';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const modules: Record<string, any> = import.meta.glob(
		'$lib/assets/images/*.{png,jpg,jpeg,webp}',
		{
			import: 'default',
			eager: true,
			query: {
				as: 'run'
			}
		}
	);
	const images = Object.entries(modules).map((i) => i[1]);
	shuffle(images);

	return {
		images: images
	};
};
