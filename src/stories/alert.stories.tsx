import type { Meta, StoryObj } from '@storybook/react'
import {
	AlertTriangle,
	CheckCircle,
	Info as InfoIcon,
	XCircle,
} from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const meta: Meta<typeof Alert> = {
	title: 'Components/Alert',
	component: Alert,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['info', 'success', 'warning', 'error'],
		},
	},
}

export default meta
type Story = StoryObj<typeof Alert>

export const InfoVariant: Story = {
	args: {
		variant: 'info',
		children: (
			<>
				<AlertTitle>Information</AlertTitle>
				<AlertDescription>
					This is an informational message to help you understand something.
				</AlertDescription>
			</>
		),
	},
}

export const Success: Story = {
	args: {
		variant: 'success',
		children: (
			<>
				<AlertTitle>Success!</AlertTitle>
				<AlertDescription>
					Your action was completed successfully.
				</AlertDescription>
			</>
		),
	},
}

export const Warning: Story = {
	args: {
		variant: 'warning',
		children: (
			<>
				<AlertTitle>Warning</AlertTitle>
				<AlertDescription>
					Please be aware of this important information before proceeding.
				</AlertDescription>
			</>
		),
	},
}

export const ErrorVariant: Story = {
	args: {
		variant: 'error',
		children: (
			<>
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>
					Something went wrong. Please try again later.
				</AlertDescription>
			</>
		),
	},
}

export const WithIcon: Story = {
	render: () => (
		<div className="flex w-[500px] flex-col gap-4">
			<Alert variant="info">
				<InfoIcon className="size-4" />
				<AlertTitle>Information</AlertTitle>
				<AlertDescription>
					This alert includes an icon for better visual communication.
				</AlertDescription>
			</Alert>
			<Alert variant="success">
				<CheckCircle className="size-4" />
				<AlertTitle>Success!</AlertTitle>
				<AlertDescription>Your changes have been saved.</AlertDescription>
			</Alert>
			<Alert variant="warning">
				<AlertTriangle className="size-4" />
				<AlertTitle>Warning</AlertTitle>
				<AlertDescription>This action may have consequences.</AlertDescription>
			</Alert>
			<Alert variant="error">
				<XCircle className="size-4" />
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>Failed to process your request.</AlertDescription>
			</Alert>
		</div>
	),
}

export const TitleOnly: Story = {
	render: () => (
		<Alert variant="info" className="w-[500px]">
			<AlertTitle>Quick notification without description</AlertTitle>
		</Alert>
	),
}

export const DescriptionOnly: Story = {
	render: () => (
		<Alert variant="success" className="w-[500px]">
			<AlertDescription>
				A simple success message without a title.
			</AlertDescription>
		</Alert>
	),
}
