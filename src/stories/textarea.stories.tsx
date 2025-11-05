import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@/components/ui/textarea'

const meta: Meta<typeof Textarea> = {
	title: 'Components/Textarea',
	component: Textarea,
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
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
	args: {
		placeholder: 'Enter your message...',
		rows: 4,
	},
}

export const Small: Story = {
	args: {
		size: 'sm',
		placeholder: 'Small textarea',
		rows: 3,
	},
}

export const Large: Story = {
	args: {
		size: 'lg',
		placeholder: 'Large textarea',
		rows: 6,
	},
}

export const Disabled: Story = {
	args: {
		placeholder: 'Disabled textarea',
		disabled: true,
		value: 'Cannot edit this text',
		rows: 4,
	},
}

export const WithValue: Story = {
	args: {
		value: 'This is a pre-filled message.\nIt can span multiple lines.',
		rows: 5,
	},
}
