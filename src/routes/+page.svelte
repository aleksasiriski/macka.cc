<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import { getIdFromUrl } from '$lib/functions/url';

	import type { PageData } from './$types';
	export let data: PageData;
	let images = data.images;

	import type { Snapshot } from './$types';
	export const snapshot: Snapshot = {
		capture: () => images,
		restore: (value) => (images = value)
	};
</script>

<section
	id="images"
	class="gap-0 columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-8 border dark:border-black"
>
	{#each images as src, i (src.img.src)}
		<a href={`/image/${getIdFromUrl(src.img.src)}`}>
			<Img id="img-{i}" class="h-auto w-full" {src} alt="" loading="lazy" />
		</a>
	{/each}
</section>
