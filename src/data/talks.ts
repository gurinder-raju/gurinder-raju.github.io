// Talks are self-contained decks served as-is from public/talks/.
export interface Talk {
	title: string;
	event: string;
	date: Date;
	description: string;
	href: string;
}

export const talks: Talk[] = [
	{
		title: 'Human Intelligence In The Age Of AI',
		event: 'TPM Basecamp',
		date: new Date('2025-11-01'),
		description:
			'Twelve practical tips for keeping human intelligence at the centre while you supercharge your work with AI.',
		href: '/talks/2025/human-ai-intelligence/',
	},
];
