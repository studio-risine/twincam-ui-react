import { Header, HeaderCenter, HeaderLeft, HeaderRight } from '@/components/blocks/header'
import { TwincamLogo } from '@/components/twincam-logo'
import { Button } from '@/components/ui/button'
import { NavigationLinks } from '@/components/ui/navigation-links'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sun } from 'lucide-react'
import { expect, within } from 'storybook/test'

const meta = {
	component: Header,
	parameters: {
		a11y: { test: 'error' },
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	title: 'Blocks/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: (
			<NavigationLinks
				data={{
					groups: [
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
							description: 'Learn how to get started with our platform',
							href: '/',
							title: 'Home',
						},
						{
							description: 'Browse our component library and examples',
							href: '/components',
							title: 'Components',
						},
					],
				}}
			/>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const header = canvas.getByRole('banner')

		await expect(header).toBeInTheDocument()
	},
	render: ({ children }) => (
		<Header>
			<HeaderLeft>
				<TwincamLogo />
			</HeaderLeft>
			<HeaderCenter>{children}</HeaderCenter>
			<HeaderRight>
				<Button aria-label="Mode theme action" isIcon variant="ghost">
					<Sun className="h-4 w-4" />
				</Button>
				<Button>Download</Button>
			</HeaderRight>
		</Header>
	),
}

export const WithAuthButtons: Story = {
	args: {
		children: (
			<NavigationLinks
				data={{
					groups: [
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
							description: 'Learn how to get started with our platform',
							href: '/',
							title: 'Home',
						},
						{
							description: 'Browse our component library and examples',
							href: '/components',
							title: 'Components',
						},
					],
				}}
			/>
		),
	},
	render: ({ children }) => (
		<Header>
			<HeaderLeft>
				<TwincamLogo />
			</HeaderLeft>
			<HeaderCenter>{children}</HeaderCenter>
			<HeaderRight>
				<div className="flex gap-2">
					<Button variant="ghost">Login</Button>
					<Button>Sign Up</Button>
				</div>
			</HeaderRight>
		</Header>
	),
}
