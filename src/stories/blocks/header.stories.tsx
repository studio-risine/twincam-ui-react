import { Header, HeaderCenter, HeaderLeft, HeaderRight } from '@/components/blocks/header'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { type NavigationItem, NavigationLinks } from '@/components/ui/navigation-links'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sun } from 'lucide-react'
import { expect, within } from 'storybook/test'

const navigationItemsLinks = [
	{
		href: '/',
		title: 'Home',
	},
	{
		href: '/about',
		title: 'About',
	},
	{
		href: '/pricing',
		title: 'Pricing',
	},
	{
		href: '/contact',
		title: 'Contact',
	},
] satisfies NavigationItem[]

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
					items: navigationItemsLinks,
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
				<Logo />
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
					items: navigationItemsLinks,
				}}
			/>
		),
	},
	render: ({ children }) => (
		<Header>
			<HeaderLeft>
				<Logo />
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
