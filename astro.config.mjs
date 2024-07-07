import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://twistedtreedev.com',
	integrations: [
		starlight({
			favicon: '/favicon.png',
			title: 'Twisted Tree Dev',
			sidebar: [
				{
					label: 'Scan Picker Documentation',
				
					items: [
						//Each item here is one entry in the navigation menu.
						
						{ label: 'Add barcodes to packing slips', link: '/scanpickerdocs/packingslips' },
						{ label: 'Changelog', link: '/scanpickerdocs/changelogs' },

					],
				},
				{
					label: 'Twisted Tree',
					autogenerate: { directory: 'twistedTree' },
				},
			],
		}),
	],
});
