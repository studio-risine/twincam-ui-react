import { Input } from '@/components/ui/input'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, within } from 'storybook/test'

const meta = {
	args: {
		onChange: fn(),
	},
	component: Input,
	parameters: {
		a11y: { test: 'error' },
	},
	tags: ['autodocs'],
	title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		placeholder: 'Enter text...',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const input = canvas.getByPlaceholderText('Enter text...')

		await expect(input).toHaveAttribute('data-slot', 'input')
		await expect(input).toHaveAttribute('type', 'text')
		await expect(input).not.toBeDisabled()
	},
}

export const Small: Story = {
	args: {
		placeholder: 'Small input',
		size: 'sm',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const input = canvas.getByPlaceholderText('Small input')

		await expect(input).toHaveClass(/h-8/)
		await expect(input).toHaveClass(/text-xs/)
	},
}

export const Base: Story = {
	args: {
		placeholder: 'Base input',
		size: 'base',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const input = canvas.getByPlaceholderText('Base input')

		await expect(input).toHaveClass(/h-10/)
	},
}

export const Large: Story = {
	args: {
		placeholder: 'Large input',
		size: 'lg',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const input = canvas.getByPlaceholderText('Large input')

		await expect(input).toHaveClass(/h-12/)
		await expect(input).toHaveClass(/text-base/)
	},
}

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'Disabled input',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const input = canvas.getByPlaceholderText('Disabled input')

		await expect(input).toBeDisabled()
		await expect(input).toHaveClass(/disabled:cursor-not-allowed/)
		await expect(input).toHaveClass(/disabled:opacity-50/)
	},
}

export const Invalid: Story = {
	args: {
		'aria-invalid': true,
		placeholder: 'Invalid input',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const input = canvas.getByPlaceholderText('Invalid input')

		await expect(input).toHaveAttribute('aria-invalid', 'true')
		await expect(input).toHaveClass(/aria-invalid:border-destructive/)
	},
}

export const WithValue: Story = {
	args: {
		defaultValue: 'Pre-filled value',
		placeholder: 'Enter text...',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const input = canvas.getByDisplayValue('Pre-filled value')

		await expect(input).toHaveValue('Pre-filled value')
	},
}

export const Email: Story = {
	args: {
		placeholder: 'email@example.com',
		type: 'email',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const input = canvas.getByPlaceholderText('email@example.com')

		await expect(input).toHaveAttribute('type', 'email')
	},
}

export const Password: Story = {
	args: {
		placeholder: 'Enter password',
		type: 'password',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const input = canvas.getByPlaceholderText('Enter password')

		await expect(input).toHaveAttribute('type', 'password')
	},
}

export const NumberInput: Story = {
	args: {
		placeholder: 'Enter number',
		type: 'number',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const input = canvas.getByPlaceholderText('Enter number')

		await expect(input).toHaveAttribute('type', 'number')
	},
}

export const WithOnChange: Story = {
	args: {
		placeholder: 'Type something...',
	},
	play: async ({ canvasElement, userEvent, args }) => {
		const canvas = within(canvasElement)
		const input = canvas.getByPlaceholderText('Type something...')

		await userEvent.type(input, 'Hello')
		await expect(input).toHaveValue('Hello')
		await expect(args.onChange).toHaveBeenCalled()
	},
}
