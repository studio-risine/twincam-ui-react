import { Badge, type BadgeProps } from '@/components/ui/badge'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'

const meta = {
	component: Badge,
	tags: ['autodocs'],
	title: 'Components/Badge',
} satisfies Meta<BadgeProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Default',
		variant: 'default',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge')

		await expect(badge).toHaveClass(/inline-flex/)
		await expect(badge).toHaveClass(/items-center/)
		await expect(badge).toHaveClass(/rounded-full/)
		await expect(badge).toHaveClass(/border/)
		await expect(badge).toHaveClass(/text-sm/)
		await expect(badge).toHaveClass(/font-medium/)

		await expect(badge).toHaveClass(/bg-primary/)
		await expect(badge).toHaveClass(/text-primary-foreground/)
		await expect(badge).toHaveClass(/border-transparent/)

		await expect(badge).toHaveTextContent('Default')
	},
}

export const Secondary: Story = {
	args: {
		children: 'Secondary',
		variant: 'secondary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge')

		await expect(badge).toHaveClass(/bg-secondary/)
		await expect(badge).toHaveClass(/text-secondary-foreground/)
		await expect(badge).toHaveClass(/border-transparent/)

		await expect(badge).toHaveTextContent('Secondary')
	},
}

export const Destructive: Story = {
	args: {
		children: 'Destructive',
		variant: 'destructive',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge')

		await expect(badge).toHaveClass(/bg-destructive/)
		await expect(badge).toHaveClass(/text-destructive-foreground/)
		await expect(badge).toHaveClass(/border-transparent/)

		await expect(badge).toHaveTextContent('Destructive')
	},
}

export const Outline: Story = {
	args: {
		children: 'Outline',
		variant: 'outline',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge')

		await expect(badge).toHaveClass(/text-foreground/)

		await expect(badge).toHaveTextContent('Outline')
	},
}

export const CustomClassName: Story = {
	args: {
		children: 'Custom',
		className: 'bg-blue-500 text-white',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge')

		await expect(badge).toHaveClass(/bg-blue-500/)
		await expect(badge).toHaveClass(/text-white/)

		await expect(badge).toHaveTextContent('Custom')
	},
}

export const AllVariants: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Badge variant="default">Default</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="destructive">Destructive</Badge>
			<Badge variant="outline">Outline</Badge>
		</div>
	),
}

export const WithNumbers: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Badge variant="default">99+</Badge>
			<Badge variant="secondary">12</Badge>
			<Badge variant="destructive">5</Badge>
			<Badge variant="outline">0</Badge>
		</div>
	),
}

export const StatusLabels: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-2">
				<Badge variant="default">Active</Badge>
				<Badge variant="secondary">Pending</Badge>
				<Badge variant="destructive">Error</Badge>
				<Badge variant="outline">Inactive</Badge>
			</div>
			<div className="flex items-center gap-2">
				<Badge variant="default">New</Badge>
				<Badge variant="secondary">In Progress</Badge>
				<Badge variant="destructive">Failed</Badge>
				<Badge variant="outline">Completed</Badge>
			</div>
		</div>
	),
}
