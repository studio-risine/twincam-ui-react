import { MainContent, type MainContentProps } from '@/components/layout/main-content'
import { Heading, Text } from '@/components/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'

const meta = {
	args: {
		children: (
			<div>
				<Heading>Welcome to the Dashboard</Heading>
				<Text as="p" variant="muted">
					This is an example of the main content area with custom content.
				</Text>
			</div>
		),
		size: 'base',
	},
	argTypes: {
		size: {
			control: 'inline-radio',
			defaultValue: 'base',
			options: ['sm', 'base', 'lg', 'xl', '2xl'],
		},
	},
	component: ({ children }) => (
		<MainContent data-testid="main-content" size="base">
			{children}
		</MainContent>
	),
	parameters: {
		a11y: { test: 'error' },
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	title: 'Layout/MainContent',
} satisfies Meta<MainContentProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		size: 'base',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const main = canvas.getByTestId('main-content')

		await expect(main).toBeInTheDocument()
		await expect(main).toHaveAttribute('data-slot', 'main-content')
		await expect(main).toHaveClass(/max-w-3xl/)
		await expect(main).toHaveClass(/flex/)
		await expect(main).toHaveClass(/flex-col/)
	},
}

export const Small: Story = {
	args: {
		size: 'sm',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const main = canvas.getByTestId('main-content')

		await expect(main).toHaveClass(/max-w-2xl/)
	},
}

export const Large: Story = {
	args: {
		size: 'lg',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const main = canvas.getByTestId('main-content')

		await expect(main).toHaveClass(/max-w-4xl/)
	},
}

export const ExtraLarge: Story = {
	args: {
		size: 'xl',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const main = canvas.getByTestId('main-content')

		await expect(main).toHaveClass(/max-w-6xl/)
	},
}

export const ExtraExtraLarge: Story = {
	args: {
		size: '2xl',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const main = canvas.getByTestId('main-content')

		await expect(main).toHaveClass(/max-w-7xl/)
	},
}
