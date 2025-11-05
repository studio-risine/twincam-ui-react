import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@/components/ui/badge'

const meta: Meta<typeof Badge> = {
	title: 'Components/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['neutral', 'success', 'warning', 'danger', 'accent'],
		},
		size: {
			control: 'select',
			options: ['sm', 'base'],
		},
	},
}

export default meta
type Story = StoryObj<typeof Badge>

export const Neutral: Story = {
	args: {
		variant: 'neutral',
		children: 'Neutral',
	},
}

export const Success: Story = {
	args: {
		variant: 'success',
		children: 'Success',
	},
}

export const Warning: Story = {
	args: {
		variant: 'warning',
		children: 'Warning',
	},
}

export const Danger: Story = {
	args: {
		variant: 'danger',
		children: 'Danger',
	},
}

export const Accent: Story = {
	args: {
		variant: 'accent',
		children: 'Accent',
	},
}

export const Small: Story = {
	args: {
		size: 'sm',
		variant: 'success',
		children: 'Small',
	},
}

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Badge variant="neutral">Neutral</Badge>
			<Badge variant="success">Success</Badge>
			<Badge variant="warning">Warning</Badge>
			<Badge variant="danger">Danger</Badge>
			<Badge variant="accent">Accent</Badge>
		</div>
	),
}

export const AllSizes: Story = {
	args: {
		variant: 'neutral',
	},

	render: () => (
		<div className="flex flex-wrap items-center gap-2">
			<Badge size="sm" variant="accent">
				Small
			</Badge>
			<Badge size="base" variant="accent">
				Base
			</Badge>
		</div>
	),
}
