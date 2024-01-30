<script lang="ts">
	import { setIdIntoUrl } from '$lib/functions/url';

	import type { PageData } from './$types';
	export let data: PageData;
	const id = data.id;
</script>

<div class="mx-auto w-fit h-screen flex items-center">
	<img
		id="img-{id}"
		class="max-h-full w-full px-1 py-1 sm:px-5 sm:py-5 md:px-10 md:py-10 lg:px-16 lg:py-16 xl:px-20 xl:py-20"
		src={setIdIntoUrl(id)}
		alt=""
	/>
</div>
