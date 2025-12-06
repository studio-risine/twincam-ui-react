import { Header, HeaderCenter, HeaderLeft, HeaderRight } from '@/components/blocks/header'
import { TwincamLogo } from '@/components/twincam-logo'
import { Button } from '@/components/ui/button'
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
	args: { children: null },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const header = canvas.getByRole('banner')

		await expect(header).toBeInTheDocument()
	},
	render: () => (
		<Header>
			<HeaderLeft>
				<TwincamLogo />
			</HeaderLeft>
			<HeaderCenter>
				<nav className="flex gap-6">
					<a className="font-semibold text-accent text-base hover:text-accent/80" href="/">
						Home
					</a>
					<a
						className="font-semibold text-base text-primary hover:text-primary/80"
						href="/features"
					>
						Features
					</a>
					<a className="font-semibold text-base text-primary hover:text-primary/80" href="/pricing">
						Pricing
					</a>
				</nav>
			</HeaderCenter>
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
	args: { children: null },
	render: () => (
		<Header>
			<HeaderLeft>
				<TwincamLogo />
			</HeaderLeft>
			<HeaderCenter>
				<nav className="flex gap-6">
					<a className="font-semibold text-accent text-base hover:text-accent/80" href="/">
						Home
					</a>
					<a
						className="font-semibold text-base text-primary hover:text-primary/80"
						href="/features"
					>
						Features
					</a>
					<a className="font-semibold text-base text-primary hover:text-primary/80" href="/pricing">
						Pricing
					</a>
				</nav>
			</HeaderCenter>
			<HeaderRight>
				<div className="flex gap-2">
					<Button variant="ghost">Login</Button>
					<Button>Sign Up</Button>
				</div>
			</HeaderRight>
		</Header>
	),
}
