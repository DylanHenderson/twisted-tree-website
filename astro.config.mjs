import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://twistedtreedev.com',
	integrations: [
		starlight({
			title: 'Twisted Tree Dev',
			sidebar: [
				{
					label: 'Scan Picker Documentation',
				
					items: [
						//Each item here is one entry in the navigation menu.
						
						{ label: 'Scan Picker', link: '/scanpickerdocs/docs' },
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
