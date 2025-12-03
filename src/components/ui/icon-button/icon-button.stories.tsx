import { IconButton } from '@/components/ui/icon-button'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, within } from 'storybook/test'

const meta = {
	args: {
		onClick: fn(),
	},
	component: IconButton,
	tags: ['autodocs'],
	title: 'Components/IconButton',
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		'aria-label': 'Search',
		children: '⚡︎',
		variant: 'solid',
	},
	play: async ({ canvasElement, userEvent, args }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Search' })

		await expect(button).toHaveAttribute('data-slot', 'icon-button')
		await expect(button).toHaveAttribute('aria-label', 'Search')
		await expect(button).not.toBeDisabled()

		await userEvent.click(button)
		await expect(args.onClick).toHaveBeenCalledTimes(1)
	},
}

export const Solid: Story = {
	args: {
		'aria-label': 'Heart',
		children: '⚡︎',
		variant: 'solid',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Heart' })

		await expect(button).toHaveClass(/bg-accent/)
	},
}

export const Outline: Story = {
	args: {
		'aria-label': 'Settings',
		children: '⚡︎',
		variant: 'outline',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Settings' })

		await expect(button).toHaveClass(/border/)
		await expect(button).toHaveClass(/bg-transparent/)
	},
}

export const Ghost: Story = {
	args: {
		'aria-label': 'Menu',
		children: '☰',
		variant: 'ghost',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Menu' })

		await expect(button).toHaveClass(/hover:bg-accent/)
	},
}

export const Destructive: Story = {
	args: {
		'aria-label': 'Delete',
		children: '⚡︎',
		variant: 'destructive',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Delete' })

		await expect(button).toHaveClass(/bg-destructive/)
	},
}

export const Disabled: Story = {
	args: {
		'aria-disabled': 'true',
		'aria-label': 'Disabled button',
		children: '⚡︎',
		disabled: true,
		variant: 'solid',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Disabled button' })

		await expect(button).toBeDisabled()
		await expect(button).toHaveAttribute('disabled')
		await expect(button).toHaveAttribute('aria-disabled', 'true')

		await expect(button).toHaveClass(/disabled:bg-slate-300/)
		await expect(button).toHaveClass(/disabled:text-slate-500/)
	},
}

export const Small: Story = {
	args: {
		'aria-label': 'Small icon button',
		children: '⚡︎',
		size: 'sm',
		variant: 'solid',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Small icon button' })

		await expect(button).toHaveClass(/size-8/)
		await expect(button).toHaveClass(/rounded-md/)
	},
}

export const Base: Story = {
	args: {
		'aria-label': 'Base icon button',
		children: '⚡︎',
		size: 'base',
		variant: 'solid',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Base icon button' })

		await expect(button).toHaveClass(/size-10/)
	},
}

export const Large: Story = {
	args: {
		'aria-label': 'Large icon button',
		children: '⚡︎',
		size: 'lg',
		variant: 'solid',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button', { name: 'Large icon button' })

		await expect(button).toHaveClass(/size-12/)
		await expect(button).toHaveClass(/rounded-md/)
	},
}
