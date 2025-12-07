import { Badge, type BadgeProps } from '@/components/ui/badge'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { CheckCircle } from 'lucide-react'
import { expect, within } from 'storybook/test'

const meta = {
	component: Badge,
	tags: ['autodocs'],
	title: 'Components/Badge',
} satisfies Meta<BadgeProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children: 'Primary',
		variant: 'primary',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge')

		await expect(badge).toHaveClass(/inline-flex/)
		await expect(badge).toHaveClass(/items-center/)
		await expect(badge).toHaveClass(/rounded-sm/)
		await expect(badge).toHaveClass(/border/)
		await expect(badge).toHaveClass(/text-sm/)
		await expect(badge).toHaveClass(/font-medium/)

		await expect(badge).toHaveClass(/bg-background/)
		await expect(badge).toHaveClass(/border/)

		await expect(badge).toHaveTextContent('Primary')
	},
	render: () => <Badge data-testid="badge">Primary</Badge>,
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
	render: () => (
		<Badge data-testid="badge" variant="secondary">
			Secondary
		</Badge>
	),
}

export const States: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badges = canvas.getAllByRole('generic')

		await expect(badges.length).toBeGreaterThanOrEqual(3)

		const successBadge = canvas.getByTestId('badge-success')
		await expect(successBadge).toHaveClass(/bg-lime-100/)
		await expect(successBadge).toHaveClass(/border-lime-200/)
		await expect(successBadge).toHaveClass(/text-lime-700/)

		const warningBadge = canvas.getByTestId('badge-warning')
		await expect(warningBadge).toHaveClass(/bg-amber-100/)
		await expect(warningBadge).toHaveClass(/border-amber-200/)
		await expect(warningBadge).toHaveClass(/text-amber-700/)

		const errorBadge = canvas.getByTestId('badge-error')
		await expect(errorBadge).toHaveClass(/bg-red-100/)
		await expect(errorBadge).toHaveClass(/border-red-200/)
		await expect(errorBadge).toHaveClass(/text-red-700/)
	},
	render: () => (
		<div className="flex items-center gap-3">
			<Badge data-testid="badge-success" variant="success">
				Success
			</Badge>
			<Badge data-testid="badge-warning" variant="warning">
				Warning
			</Badge>
			<Badge data-testid="badge-error" variant="error">
				Error
			</Badge>
		</div>
	),
}

export const WithIcon: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const badge = canvas.getByTestId('badge-icon')

		await expect(badge).toHaveClass(/bg-background/)
		await expect(badge).toHaveClass(/border/)

		const icon = badge.querySelector('svg')
		await expect(icon).toBeInTheDocument()
	},
	render: () => (
		<Badge data-testid="badge-icon" variant="primary">
			<CheckCircle />
			Verified
		</Badge>
	),
}
