import type { NavigationData } from './navigation-links'

export const data: NavigationData = {
	groups: [
		{
			items: [
				{
					description: 'Learn how to get started with our platform',
					href: '/getting-started',
					title: 'Getting Started',
				},
				{
					description: 'Browse our component library and examples',
					href: '/components',
					title: 'Components',
				},
			],
			title: 'Documentation',
		},
		{
			items: [
				{
					description: 'View detailed API documentation',
					href: '/api',
					title: 'API Reference',
				},
				{
					description: 'Learn about best practices',
					href: '/guides',
					title: 'Guides',
				},
			],
			title: 'Resources',
		},
	],
	items: [
		{
			description: 'Go to homepage',
			href: '/',
			title: 'Home',
		},
		{
			description: 'Learn about us',
			href: '/about',
			title: 'About',
		},
	],
}
