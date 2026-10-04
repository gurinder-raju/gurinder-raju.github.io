import { getCollection } from 'astro:content';

export async function getPosts() {
	const posts = await getCollection('posts');
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date, opts: Intl.DateTimeFormatOptions = { dateStyle: 'long' }) {
	return date.toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });
}
