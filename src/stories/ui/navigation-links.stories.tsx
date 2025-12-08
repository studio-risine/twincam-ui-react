import { type NavigationData, NavigationLinks } from '@/components/ui/navigation-links'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, within } from 'storybook/test'

const data: NavigationData = {
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

const meta = {
	args: {
		onClick: fn(),
	},
	component: NavigationLinks,
	parameters: {
		a11y: { test: 'error' },
	},
	tags: ['autodocs'],
	title: 'Components/NavigationLinks',
} satisfies Meta<typeof NavigationLinks>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
	args: {
		data,
		orientation: 'horizontal',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const nav = canvasElement.querySelector('nav')
		await expect(nav).toHaveAttribute('data-orientation', 'horizontal')

		await expect(nav).toHaveClass(/flex-row/)

		const links = canvas.getAllByRole('link')
		const buttons = canvas.getAllByRole('button')

		await expect(links.length).toBe(data.items?.length || 0)
		await expect(buttons.length).toBe(data.groups?.length || 0)
	},
}

export const SimpleLinks: Story = {
	args: {
		data: {
			items: [
				{
					description: 'Homepage',
					href: '/',
					title: 'Home',
				},
				{
					description: 'About page',
					href: '/about',
					title: 'About',
				},
				{
					description: 'Contact page',
					href: '/contact',
					title: 'Contact',
				},
			],
		},
		orientation: 'horizontal',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const links = canvas.getAllByRole('link')
		await expect(links.length).toBe(3)

		await expect(links[0]).toHaveTextContent('Home')
		await expect(links[0]).toHaveAttribute('href', '/')
	},
}
