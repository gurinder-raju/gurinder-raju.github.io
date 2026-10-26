// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

// https://astro.build/config
export default defineConfig({
	site: 'https://gurinder-raju.github.io',
	trailingSlash: 'always',
	markdown: {
		// Keep post text exactly as written (no automatic curly quotes or dashes).
		// Footnotes ([^id]) render as a numbered "Notes" section at the end of a post.
		processor: satteri({ features: { smartPunctuation: false, gfm: { footnotes: { label: 'Notes' } } } }),
	},
});
