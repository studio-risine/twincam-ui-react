import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const meta: Meta<typeof Card> = {
	title: 'Components/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
	render: () => (
		<Card className="w-[400px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>
					Card description or subtitle goes here
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p>This is the card content area where you can place any content.</p>
			</CardContent>
		</Card>
	),
}

export const WithFooter: Story = {
	render: () => (
		<Card className="w-[400px]">
			<CardHeader>
				<CardTitle>Confirm Action</CardTitle>
				<CardDescription>
					Are you sure you want to proceed with this action?
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p>This action cannot be undone.</p>
			</CardContent>
			<CardFooter className="flex justify-end gap-2">
				<Button variant="ghost">Cancel</Button>
				<Button>Confirm</Button>
			</CardFooter>
		</Card>
	),
}

export const ContentOnly: Story = {
	render: () => (
		<Card className="w-[400px]">
			<CardContent className="pt-6">
				<p>A simple card with only content, no header or footer.</p>
			</CardContent>
		</Card>
	),
}

export const FullyComposed: Story = {
	render: () => (
		<Card className="w-[400px]">
			<CardHeader>
				<CardTitle>Product Features</CardTitle>
				<CardDescription>Everything you need to get started</CardDescription>
			</CardHeader>
			<CardContent>
				<ul className="list-inside list-disc space-y-2">
					<li>Feature one with description</li>
					<li>Feature two with benefits</li>
					<li>Feature three and more</li>
				</ul>
			</CardContent>
			<CardFooter className="flex justify-between">
				<span className="text-muted-foreground text-sm">$29/month</span>
				<Button>Get Started</Button>
			</CardFooter>
		</Card>
	),
}
