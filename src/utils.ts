import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPosts() {
	const posts = await getCollection('posts');
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getTalks() {
	const talks = await getCollection('talks');
	return talks.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function talkHref(talk: CollectionEntry<'talks'>) {
	return talk.data.deck ?? `/talks/${talk.id}/`;
}

export function youtubeId(url: string) {
	const u = new URL(url);
	return u.hostname === 'youtu.be' ? u.pathname.slice(1) : (u.searchParams.get('v') ?? u.pathname.split('/').pop());
}

export function formatDate(date: Date, opts: Intl.DateTimeFormatOptions = { dateStyle: 'long' }) {
	return date.toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });
}
