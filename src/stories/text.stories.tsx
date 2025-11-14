import { Text } from '@/components/ui/text'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'

const meta = {
	args: {
		children: 'Text content',
		size: 'base',
	},
	argTypes: {
		as: {
			control: 'select',
			description: 'The HTML text element to render',
			options: ['p', 'span'],
		},
		size: {
			control: 'select',
			description: 'The text size',
			options: ['sm', 'base', 'lg', 'xl'],
		},
	},
	component: Text,
	parameters: {
		a11y: { test: 'error' },
	},
	tags: ['autodocs'],
	title: 'Components/Text',
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Default text content',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const text = canvas.getByText('Default text content')

		await expect(text).toHaveAttribute('data-slot', 'text')
		await expect(text).toHaveTextContent('Default text content')
		await expect(text.tagName).toBe('P')
	},
}

export const AsSpan: Story = {
	args: {
		as: 'span',
		children: 'Span text',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Span text')

		await expect(text.tagName).toBe('SPAN')
	},
}

export const SizeSmall: Story = {
	args: {
		children: 'Small text (14px)',
		size: 'sm',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Small text (14px)')

		await expect(text).toHaveClass('text-sm')
	},
}

export const SizeBase: Story = {
	args: {
		children: 'Base text (16px)',
		size: 'base',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Base text (16px)')

		await expect(text).toHaveClass('text-base')
	},
}

export const SizeLarge: Story = {
	args: {
		children: 'Large text (18px)',
		size: 'lg',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Large text (18px)')

		await expect(text).toHaveClass('text-lg')
	},
}

export const SizeXLarge: Story = {
	args: {
		children: 'Extra large text (20px)',
		size: 'xl',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Extra large text (20px)')

		await expect(text).toHaveClass('text-xl')
	},
}

export const WithCustomClass: Story = {
	args: {
		children: 'Custom styled text',
		className: 'text-blue-600 font-bold',
		size: 'lg',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const text = canvas.getByText('Custom styled text')

		await expect(text).toHaveClass('text-blue-600')
		await expect(text).toHaveClass('font-bold')
	},
}

export const AllSizes: Story = {
	render: () => (
		<div className="space-y-2">
			<Text size="sm">Small text (14px)</Text>
			<Text size="base">Base text (16px)</Text>
			<Text size="lg">Large text (18px)</Text>
			<Text size="xl">Extra large text (20px)</Text>
		</div>
	),
}

export const InlineUsage: Story = {
	render: () => (
		<Text>
			This is a paragraph with{' '}
			<Text as="span" className="font-bold text-accent">
				inline styled text
			</Text>{' '}
			using a span.
		</Text>
	),
}

export const AccessibleContrast: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="bg-white p-4">
				<Text className="text-slate-900">Dark text on light background</Text>
			</div>
			<div className="bg-slate-900 p-4">
				<Text className="text-white">Light text on dark background</Text>
			</div>
		</div>
	),
}
