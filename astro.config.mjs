// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

// https://astro.build/config
export default defineConfig({
	site: 'https://gurinder-raju.github.io',
	trailingSlash: 'always',
	markdown: {
		// Keep post text exactly as written (no automatic curly quotes or dashes).
		processor: satteri({ features: { smartPunctuation: false } }),
	},
});
