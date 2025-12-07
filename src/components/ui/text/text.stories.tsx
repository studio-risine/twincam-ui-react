import { Text } from '@/components/ui/text'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'

const meta = {
	argTypes: {
		as: {
			control: 'select',
			description: 'The HTML element to render',
			options: ['p', 'span', 'div', 'a', 'button', 'label'],
		},
		color: {
			control: 'select',
			description: 'The text color variant',
			options: ['primary', 'secondary', 'muted', 'destructive'],
		},
		size: {
			control: 'select',
			description: 'The text size variant',
			options: ['sm', 'base', 'lg', 'xl'],
		},
	},
	component: Text,
	parameters: { a11y: { test: 'error' } },
	tags: ['autodocs'],
	title: 'Components/Text',
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Sizes: Story = {
	args: { children: 'Text' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const levels = [
			{ className: 'text-sm', text: 'Small text (14px)' },
			{ className: 'text-base', text: 'Base text (16px)' },
			{ className: 'text-lg', text: 'Large text (18px)' },
			{ className: 'text-xl', text: 'Extra large text (20px)' },
		]

		for (const level of levels) {
			const element = canvas.getByTestId(level.className)
			await expect(element).toBeInTheDocument()
			await expect(element).toHaveTextContent(level.text)
			await expect(element).toHaveClass(level.className)
			await expect(element).toHaveAttribute('data-slot', 'text')
		}
	},
	render: () => (
		<div className="space-y-4">
			<Text data-testid="text-sm" size="sm">
				Small text (14px)
			</Text>
			<Text data-testid="text-base" size="base">
				Base text (16px)
			</Text>
			<Text data-testid="text-lg" size="lg">
				Large text (18px)
			</Text>
			<Text data-testid="text-xl" size="xl">
				Extra large text (20px)
			</Text>
		</div>
	),
}

export const Colors: Story = {
	args: { children: 'Text' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const colorCases = [
			{ className: 'text-primary', text: 'Primary color' },
			{ className: 'text-muted', text: 'Muted color' },
		]

		for (const colorCase of colorCases) {
			const element = canvas.getByTestId(colorCase.className)
			await expect(element).toBeInTheDocument()
			await expect(element).toHaveTextContent(colorCase.text)
			await expect(element).toHaveClass(colorCase.className)
			await expect(element).toHaveAttribute('data-slot', 'text')
		}
	},
	render: () => (
		<div className="space-y-4">
			<Text color="primary" data-testid="text-primary">
				Primary color
			</Text>
			<Text color="muted" data-testid="text-muted">
				Muted color
			</Text>
		</div>
	),
}

export const Polymorphic: Story = {
	args: { children: 'Text' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const p = canvas.getByTestId('text-p')
		await expect(p.tagName).toBe('P')
		await expect(p).toHaveAttribute('data-slot', 'text')

		const span = canvas.getByTestId('text-span')
		await expect(span.tagName).toBe('SPAN')
		await expect(span).toHaveAttribute('data-slot', 'text')

		const link = canvas.getByTestId('text-a')
		await expect(link.tagName).toBe('A')
		await expect(link).toHaveAttribute('href', '/docs')
		await expect(link).toHaveAttribute('data-slot', 'text')

		const button = canvas.getByTestId('text-button')
		await expect(button.tagName).toBe('BUTTON')
		await expect(button).toHaveAttribute('data-slot', 'text')

		const label = canvas.getByTestId('text-label')
		await expect(label.tagName).toBe('LABEL')
		await expect(label).toHaveAttribute('for', 'input-id')
		await expect(label).toHaveAttribute('data-slot', 'text')
	},
	render: () => (
		<div className="flex gap-4">
			<Text as="p" data-testid="text-p">
				Paragraph text
			</Text>
			<Text as="span" data-testid="text-span">
				Inline span
			</Text>
			<Text as="a" data-testid="text-a" href="/docs">
				Link text
			</Text>
			<Text as="button" data-testid="text-button">
				Button text
			</Text>
			<Text as="label" data-testid="text-label" htmlFor="input-id">
				Label text
			</Text>
		</div>
	),
}
