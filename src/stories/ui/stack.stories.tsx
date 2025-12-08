import { Stack, type StackProps } from '@/components/ui/stack'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'

const meta = {
	args: {
		style: {
			backgroundColor: 'white',
			height: '300px',
			padding: '20px',
			width: '300px',
		},
	},
	argTypes: {
		align: {
			control: 'select',
			description: 'Horizontal alignment of children',
			options: ['start', 'center', 'end', 'stretch'],
		},
		as: {
			control: 'select',
			description: 'HTML element to render',
			options: ['div', 'section'],
		},
		justify: {
			control: 'select',
			description: 'Vertical justification of children',
			options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
		},
		space: {
			control: 'select',
			description: 'Vertical spacing between children',
			options: ['sm', 'base', 'lg', 'xl'],
		},
	},
	component: Stack,
	parameters: {
		a11y: { test: 'error' },
	},
	tags: ['autodocs'],
	title: 'Components/Stack',
} satisfies Meta<StackProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		align: 'stretch',
		children: (
			<>
				<div className="w-20 rounded border border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border border-pink-300 bg-pink-200 p-4" />
			</>
		),
		justify: 'start',
		space: 'base',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const stack = canvas.getByTestId('stack')

		await expect(stack).toHaveAttribute('data-slot', 'stack')
		await expect(stack).toHaveClass('flex', 'flex-col', 'items-stretch')
		await expect(stack).toHaveClass('space-y-8')
	},
}

export const SpaceSmall: Story = {
	args: {
		children: (
			<>
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
			</>
		),
		space: 'sm',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const stack = canvas.getByTestId('stack')

		await expect(stack).toHaveClass('space-y-4')
	},
}

export const SpaceLarge: Story = {
	args: {
		children: (
			<>
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
			</>
		),
		space: 'lg',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const stack = canvas.getByTestId('stack')

		await expect(stack).toHaveClass('space-y-12')
	},
}

export const SpaceXLarge: Story = {
	args: {
		children: (
			<>
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
			</>
		),
		space: 'xl',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const stack = canvas.getByTestId('stack')

		await expect(stack).toHaveClass('space-y-16')
	},
}

export const AlignCenter: Story = {
	args: {
		align: 'center',
		children: (
			<>
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const stack = canvas.getByTestId('stack')

		await expect(stack).toHaveClass('items-center')
	},
}

export const AlignEnd: Story = {
	args: {
		align: 'end',
		children: (
			<>
				<div className="w-20 rounded border border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border border-pink-300 bg-pink-200 p-4" />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const stack = canvas.getByTestId('stack')

		await expect(stack).toHaveClass('items-end')
	},
}

export const JustifyCenter: Story = {
	args: {
		children: (
			<>
				<div className="w-20 rounded border border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border border-pink-300 bg-pink-200 p-4" />
			</>
		),
		justify: 'center',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const stack = canvas.getByTestId('stack')

		await expect(stack).toHaveClass('justify-center')
	},
}

export const JustifyBetween: Story = {
	args: {
		children: (
			<>
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
			</>
		),
		justify: 'between',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const stack = canvas.getByTestId('stack')

		await expect(stack).toHaveClass('justify-between')
	},
}

export const AsSection: Story = {
	args: {
		as: 'section',
		children: (
			<>
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const stack = canvas.getByTestId('stack')

		await expect(stack.tagName).toBeTruthy()
		await expect(stack.tagName).toBe('SECTION')
	},
}

export const WithCustomClass: Story = {
	args: {
		children: (
			<>
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
				<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
			</>
		),
		className: 'rounded-lg border border-slate-200 bg-white p-6',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const stack = canvas.getByTestId('stack')

		await expect(stack).toHaveClass('p-6')
		await expect(stack).toHaveClass('bg-white')
		await expect(stack).toHaveClass('border')
	},
}

export const AllSpacings: Story = {
	render: () => (
		<div className="space-y-8">
			<div>
				<div className="mb-2 font-semibold">sm (space-y-4)</div>
				<Stack className="rounded bg-slate-50 p-4" space="sm">
					<div className="w-20 rounded border border-pink-300 bg-pink-200 p-4" />
					<div className="w-20 rounded border border-pink-300 bg-pink-200 p-4" />
					<div className="w-20 rounded border border-pink-300 bg-pink-200 p-4" />
				</Stack>
			</div>
			<div>
				<div className="mb-2 font-semibold">base (space-y-8)</div>
				<Stack className="rounded bg-slate-50 p-4" space="base">
					<div className="rounded bg-green-100 p-4" />
					<div className="rounded bg-green-100 p-4" />
					<div className="rounded bg-green-100 p-4" />
				</Stack>
			</div>
			<div>
				<div className="mb-2 font-semibold">lg (space-y-12)</div>
				<Stack className="rounded bg-slate-50 p-4" space="lg">
					<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
					<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
					<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
				</Stack>
			</div>
			<div>
				<div className="mb-2 font-semibold">xl (space-y-16)</div>
				<Stack className="rounded bg-slate-50 p-4" space="xl">
					<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
					<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
					<div className="w-20 rounded border-pink-300 bg-pink-200 p-4" />
				</Stack>
			</div>
		</div>
	),
}
