export function shuffle(a: any[]) {
	let b, c, d: any;
	c = a.length;
	while (c) (b = (Math.random() * c--) | 0), (d = a[c]), (a[c] = a[b]), (a[b] = d);
}
