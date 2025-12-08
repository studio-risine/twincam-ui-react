import { Button, type ButtonProps } from '@/components/ui/button'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, within } from 'storybook/test'

const meta = {
	args: {
		children: 'Button',
		onClick: fn(),
		size: 'base',
	},
	argTypes: {
		size: {
			control: 'inline-radio',
			defaultValue: 'base',
			options: ['sm', 'base', 'lg'],
		},
		variant: {
			control: 'select',
			defaultValue: 'primary',
			options: ['primary', 'secondary', 'accent', 'ghost', 'link'],
		},
	},
	component: Button,
	parameters: {
		a11y: { test: 'error' },
	},
	tags: ['autodocs'],
	title: 'Components/Button',
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		size: 'base',
		variant: 'primary',
	},
	play: async ({ canvasElement, userEvent, args }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveRole('button')
		await expect(button).toHaveAttribute('data-slot', 'button')
		await expect(button).toHaveTextContent('Button')
		await expect(button).toHaveClass(/bg-primary/)
		await expect(button).toHaveClass(/rounded-sm/)

		await expect(button).not.toBeDisabled()

		await userEvent.click(button)
		await expect(args.onClick).toHaveBeenCalledTimes(1)
	},
}

export const Secondary: Story = {
	args: {
		size: 'base',
		variant: 'secondary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveClass(/bg-secondary/)
		await expect(button).toHaveClass(/text-secondary-foreground/)
	},
}

export const Accent: Story = {
	args: {
		size: 'base',
		variant: 'accent',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveClass(/bg-accent/)
		await expect(button).toHaveClass(/text-accent-foreground/)
	},
}

export const Destructive: Story = {
	args: {
		size: 'base',
		variant: 'destructive',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveClass(/bg-destructive/)
		await expect(button).toHaveClass(/text-destructive-foreground/)
	},
}

export const Outline: Story = {
	args: {
		size: 'base',
		variant: 'outline',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveClass(/border/)
		await expect(button).toHaveClass(/bg-transparent/)
		await expect(button).toHaveClass(/text-foreground/)
	},
}

export const Ghost: Story = {
	args: {
		size: 'base',
		variant: 'ghost',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveRole('button')
		await expect(button).toHaveClass(/text-foreground/)
		await expect(button).toHaveClass(/bg-transparent/)
	},
}

export const Link: Story = {
	args: {
		size: 'base',
		variant: 'link',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveClass(/text-primary/)
		await expect(button).toHaveClass(/underline-offset-4/)
	},
}

export const Small: Story = {
	args: {
		size: 'sm',
		variant: 'primary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveClass(/h-9/)
	},
}

export const Base: Story = {
	args: {
		size: 'base',
		variant: 'primary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveClass(/h-10/)
	},
}

export const Large: Story = {
	args: {
		size: 'lg',
		variant: 'primary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toHaveClass(/h-12/)
	},
}

export const Disabled: Story = {
	args: {
		'aria-disabled': 'true',
		disabled: true,
		variant: 'primary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const button = canvas.getByRole('button')

		await expect(button).toBeDisabled()
		await expect(button).toHaveAttribute('disabled')
		await expect(button).toHaveAttribute('aria-disabled', 'true')
	},
}
