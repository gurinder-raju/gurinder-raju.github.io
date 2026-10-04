import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each post lives in its own folder (posts/<year>/<slug>/index.md) with its images beside it.
const posts = defineCollection({
	loader: glob({
		pattern: '**/index.md',
		base: './src/content/posts',
		generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			description: z.string(),
			image: image(),
			imageAlt: z.string().default(''),
		}),
});

export const collections = { posts };
