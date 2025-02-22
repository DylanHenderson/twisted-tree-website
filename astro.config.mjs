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
						{ label: 'Getting started', link: '/scanpickerdocs/gettingstarted' },
						{ label: 'Add barcodes to packing slips', link: '/scanpickerdocs/packingslips' },
						{ label: 'Packing slips template', link: '/scanpickerdocs/packingslipstemplate' },
						{ label: 'Changelog', link: '/scanpickerdocs/changelogs' },

					],
				},
				// {
				// 	label: 'Quick Stock Documentation',
				
				// 	items: [
				// 		//Each item here is one entry in the navigation menu.
						
				// 		{ label: 'Getting started', link: '/quickscandocs/gettingstarted' },
				// 		{ label: 'Settings adjustments', link: '/quickscandocs/settings' },
				// 		{ label: 'Changelog', link: '/quickscandocs/changelogs' },

				// 	],
				// },
				{
					label: 'Simple Calendar Documentation',
				
					items: [
						//Each item here is one entry in the navigation menu.
						
						{ label: 'Getting started', link: '/simplecalendardocs/gettingstarted' },
						{ label: 'Changelog', link: '/simplecalendardocs/changelogs' },

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
