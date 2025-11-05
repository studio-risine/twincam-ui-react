import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@/components/ui/input'

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['sm', 'base', 'lg'],
		},
		disabled: {
			control: 'boolean',
		},
	},
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
	args: {
		placeholder: 'Enter your email...',
		type: 'email',
	},
}

export const Small: Story = {
	args: {
		size: 'sm',
		placeholder: 'Small input',
	},
}

export const Large: Story = {
	args: {
		size: 'lg',
		placeholder: 'Large input',
	},
}

export const Disabled: Story = {
	args: {
		placeholder: 'Disabled input',
		disabled: true,
		value: 'Cannot edit this',
	},
}

export const WithValue: Story = {
	args: {
		value: 'Pre-filled value',
		placeholder: 'Enter text...',
	},
}

export const Password: Story = {
	args: {
		type: 'password',
		placeholder: 'Enter password',
	},
}
