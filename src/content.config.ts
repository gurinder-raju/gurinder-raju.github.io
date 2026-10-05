import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each entry lives in its own folder (<collection>/<year>/<slug>/index.md) with its images beside it.
const folderEntries = (base: string) =>
	glob({
		pattern: '**/index.md',
		base,
		generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
	});

const posts = defineCollection({
	loader: folderEntries('./src/content/posts'),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			description: z.string(),
			image: image(),
			imageAlt: z.string().default(''),
		}),
});

// A talk is either a summary page rendered from its body (with an optional YouTube video),
// or just a listing that points at a self-contained deck in public/talks/.
const talks = defineCollection({
	loader: folderEntries('./src/content/talks'),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			event: z.string(),
			date: z.coerce.date(),
			description: z.string(),
			image: image().optional(),
			imageAlt: z.string().default(''),
			youtube: z.url().optional(),
			deck: z.string().optional(),
		}),
});

export const collections = { posts, talks };
