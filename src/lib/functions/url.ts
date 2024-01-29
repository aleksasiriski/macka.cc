export function getIdFromUrl(url: string): string {
	return url.replace(/\/@imagetools\//, '');
}

export function setIdIntoUrl(id: string): string {
	return `/@imagetools/${id}`;
}
