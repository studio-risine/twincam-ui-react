import { Stack } from '@/components/ui'
import { Input, InputField } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useId } from 'react'
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

export const Base: Story = {
	args: {
		placeholder: 'Base input',
		size: 'base',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const input = canvas.getByTestId('input')
		await expect(input).toHaveClass(
			'h-10',
			'text-foreground',
			'rounded',
			'border',
			'border-input',
			'bg-transparent',
		)
	},
	render: () => <Input data-testId="input" placeholder="Base" />,
}

export const SingleInput: Story = {
	args: {
		placeholder: 'Enter text...',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const input = canvas.getByTestId('input')

		await expect(input).toHaveAttribute('data-slot', 'input')
		await expect(input).toHaveAttribute('type', 'text')
		await expect(input).not.toBeDisabled()
	},
	render: () => {
		const id = useId()
		return (
			<InputField>
				<Label htmlFor={id}>Simple input</Label>
				<Input data-testId="input" id={id} placeholder="Email" type="text" />
			</InputField>
		)
	},
}

export const Sizes: Story = {
	args: {
		placeholder: 'Placeholder',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const elementSmallInput = canvas.getByPlaceholderText('Small input')

		await expect(elementSmallInput).toHaveClass(/h-9/)
		await expect(elementSmallInput).toHaveClass(/text-xs/)

		const elementBaseInput = canvas.getByPlaceholderText('Base input')

		await expect(elementBaseInput).toHaveClass(/h-10/)
		await expect(elementBaseInput).toHaveClass(/text-sm/)

		const elementLargeInput = canvas.getByPlaceholderText('Large input')

		await expect(elementLargeInput).toHaveClass(/h-12/)
		await expect(elementLargeInput).toHaveClass(/text-base/)
	},
	render: () => {
		return (
			<Stack space="sm">
				<Input placeholder="Small input" size="sm" />
				<Input placeholder="Base input" size="base" />
				<Input placeholder="Large input" size="lg" />
			</Stack>
		)
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
