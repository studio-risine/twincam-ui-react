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
	component: (args) => (
		<MainContent data-testid="main-content" {...args}>
			{args.children}
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
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const element = canvas.getByTestId('main-content')

		await expect(element).toBeInTheDocument()
		await expect(element).toHaveAttribute('data-slot', 'main-content')
		await expect(element).toHaveClass(/flex/)
		await expect(element).toHaveClass(/flex-col/)
		await expect(element).toHaveClass(/max-w-3xl/)
	},
}

export const Small: Story = {
	args: {
		size: 'base',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const element = canvas.getByTestId('main-content')

		await expect(element).toBeInTheDocument()
		await expect(element).toHaveAttribute('data-slot', 'main-content')
		await expect(element).toHaveClass(/max-w-3xl/)
	},
}

export const Large: Story = {
	args: {
		size: 'lg',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const element = canvas.getByTestId('main-content')

		await expect(element).toBeInTheDocument()
		await expect(element).toHaveAttribute('data-slot', 'main-content')
		await expect(element).toHaveClass(/max-w-4xl/)
	},
}

export const ExtraLarge: Story = {
	args: {
		size: 'xl',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const element = canvas.getByTestId('main-content')

		await expect(element).toBeInTheDocument()
		await expect(element).toHaveAttribute('data-slot', 'main-content')
		await expect(element).toHaveClass(/max-w-6xl/)
	},
}

export const ExtraExtraLarge: Story = {
	args: {
		size: '2xl',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const element = canvas.getByTestId('main-content')

		await expect(element).toBeInTheDocument()
		await expect(element).toHaveAttribute('data-slot', 'main-content')
		await expect(element).toHaveClass(/max-w-7xl/)
	},
}
