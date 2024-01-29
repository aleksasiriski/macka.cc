import { dev } from '$app/environment';

export function getIdFromUrl(url: string): string {
	return url.substring(url.lastIndexOf('/') + 1);
}

export function setIdIntoUrl(id: string): string {
	return dev ? `/@imagetools/${id}` : `/_app/immutable/assets/${id}`;
}
