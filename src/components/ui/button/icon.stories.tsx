import { TwincamIcon } from '@/components/twincam-logo'
import { Button, type ButtonProps } from '@/components/ui/button'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, within } from 'storybook/test'

const meta = {
	args: {
		children: <TwincamIcon />,
		onClick: fn(),
	},
	component: Button,
	parameters: {
		a11y: { test: 'error' },
	},
	tags: ['autodocs'],
	title: 'Components/Button/Icons',
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		'aria-label': 'Add item',
		isIcon: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveAttribute('aria-label', 'Add item')
		await expect(button).toHaveClass(/size-10/)
		await expect(button).toHaveClass(/p-0/)
		await expect(button).toHaveClass(/gap-0/)
		await expect(button).toHaveClass(/rounded-sm/)
	},
}

export const Small: Story = {
	args: {
		'aria-label': 'Add item',
		isIcon: true,
		size: 'sm',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveRole('button')
		await expect(button).toHaveClass(/size-8/)
		await expect(button).toHaveClass(/p-0/)
	},
}

export const Base: Story = {
	args: {
		isIcon: true,
		size: 'base',
		variant: 'primary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveClass(/size-10/)
		await expect(button).toHaveClass(/p-0/)
	},
}

export const Large: Story = {
	args: {
		'aria-label': 'Add',
		isIcon: true,
		size: 'lg',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveClass(/size-12/)
		await expect(button).toHaveClass(/p-0/)
	},
}

export const Ghost: Story = {
	args: {
		'aria-label': 'Favorite',
		isIcon: true,
		variant: 'ghost',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveClass(/bg-transparent/)
	},
}

export const All: Story = {
	render: (args) => (
		<div className="space-y-6">
			<div className="flex items-end gap-4">
				<Button isIcon size="sm" variant="primary">
					{args.children}
				</Button>
				<Button isIcon size="base" variant="primary">
					{args.children}
				</Button>
				<Button isIcon size="lg" variant="primary">
					{args.children}
				</Button>
			</div>
			<div className="flex items-end gap-4">
				<Button isIcon size="sm" variant="ghost">
					{args.children}
				</Button>
				<Button isIcon size="base" variant="ghost">
					{args.children}
				</Button>
				<Button isIcon size="lg" variant="ghost">
					{args.children}
				</Button>
			</div>
		</div>
	),
}
