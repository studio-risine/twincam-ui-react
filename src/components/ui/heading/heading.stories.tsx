import { Heading } from '@/components/ui/heading'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'

const meta = {
	argTypes: {
		as: {
			control: 'select',
			description: 'The HTML heading element to render',
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
		},
		size: {
			control: 'select',
			description: 'The text size of the heading',
			options: ['2xl', 'xl', 'lg', 'base', 'sm', 'xs'],
		},
	},
	component: Heading,
	parameters: { a11y: { test: 'error' } },
	tags: ['autodocs'],
	title: 'Components/Heading',
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Sizes: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const levels = [
			{ level: 1, text: 'Heading 2xl' },
			{ level: 2, text: 'Heading xl' },
			{ level: 3, text: 'Heading lg' },
			{ level: 4, text: 'Heading base' },
			{ level: 5, text: 'Heading sm' },
			{ level: 6, text: 'Heading xs' },
		]

		for (const item of levels) {
			const element = canvas.getByTestId(`heading-h${item.level}`)
			await expect(element).toBeInTheDocument()
			await expect(element.tagName).toBe(`H${item.level}`)
			await expect(element).toHaveAttribute('data-slot', 'heading')
		}
	},
	render: () => (
		<div className="space-y-6">
			<Heading as="h1" size="2xl">
				Heading 2xl
			</Heading>

			<Heading as="h2" size="xl">
				Heading xl
			</Heading>

			<Heading as="h3" size="lg">
				Heading lg
			</Heading>

			<Heading as="h4" size="base">
				Heading base
			</Heading>

			<Heading as="h5" size="sm">
				Heading sm
			</Heading>

			<Heading as="h6" size="xs">
				Heading xs
			</Heading>
		</div>
	),
}
