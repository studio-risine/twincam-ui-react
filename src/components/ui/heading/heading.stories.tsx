import { Heading } from '@/components/ui/heading'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'

const meta = {
	args: {
		children: 'Heading Text',
		size: 'base',
	},
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
	parameters: {
		a11y: { test: 'error' },
	},
	tags: ['autodocs'],
	title: 'Components/Heading',
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Default Heading',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const heading = canvas.getByRole('heading', { name: 'Default Heading' })

		await expect(heading).toHaveAttribute('data-slot', 'heading')
		await expect(heading).toHaveTextContent('Default Heading')
		await expect(heading.tagName).toBe('H1')
	},
}

export const WithAs: Story = {
	args: {
		as: 'h2',
		children: 'H2 Heading',
		size: '2xl',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const heading = canvas.getByRole('heading', { level: 2, name: 'H2 Heading' })

		await expect(heading.tagName).toBe('H2')
	},
}

export const Size2XL: Story = {
	args: {
		children: 'Heading XXLarge',
		size: '2xl',
	},
}

export const SizeXL: Story = {
	args: {
		children: 'Heading XLarge',
		size: 'xl',
	},
}

export const SizeLarge: Story = {
	args: {
		children: 'Heading Large',
		size: 'lg',
	},
}

export const SizeBase: Story = {
	args: {
		children: 'Heading Medium',
		size: 'base',
	},
}

export const SizeSmall: Story = {
	args: {
		children: 'Heading Small',
		size: 'sm',
	},
}

export const SizeXSmall: Story = {
	args: {
		children: 'Heading XSmall',
		size: 'xs',
	},
}

export const WithCustomClass: Story = {
	args: {
		as: 'h1',
		children: 'Custom Styled Heading',
		className: 'text-blue-600 underline',
		size: 'xl',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const heading = canvas.getByRole('heading', { name: 'Custom Styled Heading' })

		await expect(heading).toHaveClass('text-blue-600')
		await expect(heading).toHaveClass('underline')
	},
}

export const AllSizes: Story = {
	render: () => (
		<div className="space-y-4">
			<Heading as="h1" size="2xl">
				Heading XXLarge
			</Heading>
			<Heading as="h2" size="xl">
				Heading XLarge
			</Heading>
			<Heading as="h3" size="lg">
				Heading Large
			</Heading>
			<Heading as="h4" size="base">
				Heading Medium
			</Heading>
			<Heading as="h5" size="sm">
				Heading Small
			</Heading>
			<Heading as="h6" size="xs">
				Heading XSmall
			</Heading>
		</div>
	),
}
