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

<ul class="flex flex-wrap">
	{#each images as src, i (src.img.src)}
		<li
			id="li-{i}"
			class="h-auto w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 2xl:w-1/12 border dark:border-black"
		>
			<a href={`/image/${getIdFromUrl(src.img.src)}`}>
				<Img id="img-{i}" class="h-full w-full" {src} alt="" loading="lazy" />
			</a>
		</li>
	{/each}
</ul>
