import { Inline } from '@/components/ui/inline'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'

const meta = {
	args: {
		style: {
			backgroundColor: 'white',
			padding: '20px',
			width: '600px',
		},
	},
	argTypes: {
		align: {
			control: 'select',
			description: 'Vertical alignment of children',
			options: ['start', 'center', 'end', 'stretch', 'baseline'],
		},
		as: {
			control: 'select',
			description: 'HTML element to render',
			options: ['div', 'section', 'nav'],
		},
		justify: {
			control: 'select',
			description: 'Horizontal distribution of children',
			options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
		},
		space: {
			control: 'select',
			description: 'Horizontal spacing between children',
			options: ['sm', 'base', 'lg', 'xl'],
		},
		wrap: {
			control: 'boolean',
			description: 'Whether children should wrap to new lines',
		},
	},
	component: Inline,
	parameters: {
		a11y: { test: 'error' },
	},
	tags: ['autodocs'],
	title: 'Components/Inline',
} satisfies Meta<typeof Inline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		align: 'center',
		children: (
			<>
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
			</>
		),
		justify: 'start',
		space: 'base',
		wrap: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const inline = canvas.getByTestId('inline')

		await expect(inline).toHaveAttribute('data-slot', 'inline')
		await expect(inline).toHaveClass('flex', 'flex-row', 'items-center')
		await expect(inline).toHaveClass('gap-8')
		await expect(inline).toHaveClass('flex-wrap')
	},
}

export const SpaceSmall: Story = {
	args: {
		children: (
			<>
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
			</>
		),
		space: 'sm',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline).toHaveClass('gap-4')
	},
}

export const SpaceLarge: Story = {
	args: {
		children: (
			<>
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
			</>
		),
		space: 'lg',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline).toHaveClass('gap-12')
	},
}

export const SpaceXLarge: Story = {
	args: {
		children: (
			<>
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
			</>
		),
		space: 'xl',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline).toHaveClass('gap-16')
	},
}

export const AlignStart: Story = {
	args: {
		align: 'start',
		children: (
			<>
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-20 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-16 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline).toHaveClass('items-start')
	},
}

export const AlignEnd: Story = {
	args: {
		align: 'end',
		children: (
			<>
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-20 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-16 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline).toHaveClass('items-end')
	},
}

export const AlignBaseline: Story = {
	args: {
		align: 'baseline',
		children: (
			<>
				<div className="rounded border border-blue-300 bg-blue-200 p-2 text-blue-600 text-sm" />
				<div className="rounded border border-blue-300 bg-blue-200 p-2 text-2xl text-blue-600" />
				<div className="rounded border border-blue-300 bg-blue-200 p-2 text-base text-blue-600" />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline).toHaveClass('items-baseline')
	},
}

export const AlignStretch: Story = {
	args: {
		align: 'stretch',
		children: (
			<>
				<div className="w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="w-20 rounded border border-blue-300 bg-blue-200 p-2" />
			</>
		),
		style: {
			backgroundColor: 'white',
			height: '100px',
			padding: '20px',
			width: '600px',
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline).toHaveClass('items-stretch')
	},
}

export const JustifyCenter: Story = {
	args: {
		children: (
			<>
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
			</>
		),
		justify: 'center',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline).toHaveClass('justify-center')
	},
}

export const JustifyBetween: Story = {
	args: {
		children: (
			<>
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
			</>
		),
		justify: 'between',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline).toHaveClass('justify-between')
	},
}

export const JustifyEnd: Story = {
	args: {
		children: (
			<>
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
			</>
		),
		justify: 'end',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline).toHaveClass('justify-end')
	},
}

export const WrapEnabled: Story = {
	args: {
		children: (
			<>
				<div className="h-12 w-32 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-32 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-32 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-32 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-32 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-32 rounded border border-blue-300 bg-blue-200 p-2" />
			</>
		),
		wrap: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline).toHaveClass('flex-wrap')
	},
}

export const WrapDisabled: Story = {
	args: {
		children: (
			<>
				<div className="h-12 w-32 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-32 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-32 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-32 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-32 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-32 rounded border border-blue-300 bg-blue-200 p-2" />
			</>
		),
		wrap: false,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline).toHaveClass('flex-nowrap')
	},
}

export const AsNav: Story = {
	args: {
		as: 'nav',
		children: (
			<>
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline.tagName).toBeTruthy()
		await expect(inline.tagName).toBe('NAV')
	},
}

export const AsSpan: Story = {
	args: {
		as: 'span',
		children: (
			<>
				<span className="rounded border border-blue-300 bg-blue-200 p-2">Item 1</span>
				<span className="rounded border border-blue-300 bg-blue-200 p-2">Item 2</span>
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline.tagName).toBeTruthy()
		await expect(inline.tagName).toBe('SPAN')
	},
}

export const WithCustomClass: Story = {
	args: {
		children: (
			<>
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
			</>
		),
		className: 'rounded-lg border border-slate-200 bg-white p-6',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const inline = canvas.getByTestId('inline')

		await expect(inline).toHaveClass('p-6')
		await expect(inline).toHaveClass('bg-white')
		await expect(inline).toHaveClass('border')
	},
}

export const AllSpacings: Story = {
	render: () => (
		<div className="space-y-8">
			<div>
				<div className="mb-2 font-semibold">sm (gap-4)</div>
				<Inline className="rounded bg-slate-50 p-4" space="sm">
					<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
					<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
					<div className="h-12 w-20 rounded border border-blue-300 bg-blue-200 p-2" />
				</Inline>
			</div>
			<div>
				<div className="mb-2 font-semibold">base (gap-8)</div>
				<Inline className="rounded bg-slate-50 p-4" space="base">
					<div className="h-12 w-20 rounded border border-green-300 bg-green-200 p-2" />
					<div className="h-12 w-20 rounded border border-green-300 bg-green-200 p-2" />
					<div className="h-12 w-20 rounded border border-green-300 bg-green-200 p-2" />
				</Inline>
			</div>
			<div>
				<div className="mb-2 font-semibold">lg (gap-12)</div>
				<Inline className="rounded bg-slate-50 p-4" space="lg">
					<div className="h-12 w-20 rounded border border-purple-300 bg-purple-200 p-2" />
					<div className="h-12 w-20 rounded border border-purple-300 bg-purple-200 p-2" />
					<div className="h-12 w-20 rounded border border-purple-300 bg-purple-200 p-2" />
				</Inline>
			</div>
			<div>
				<div className="mb-2 font-semibold">xl (gap-16)</div>
				<Inline className="rounded bg-slate-50 p-4" space="xl">
					<div className="h-12 w-20 rounded border border-orange-300 bg-orange-200 p-2" />
					<div className="h-12 w-20 rounded border border-orange-300 bg-orange-200 p-2" />
					<div className="h-12 w-20 rounded border border-orange-300 bg-orange-200 p-2" />
				</Inline>
			</div>
		</div>
	),
}
