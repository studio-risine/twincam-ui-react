import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

const meta: Meta<typeof Dialog> = {
	title: 'Components/Dialog',
	component: Dialog,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Open Dialog</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Dialog Title</DialogTitle>
					<DialogDescription>
						This is a description of what the dialog is for.
					</DialogDescription>
				</DialogHeader>
				<div className="py-4">
					<p>Dialog content goes here.</p>
				</div>
			</DialogContent>
		</Dialog>
	),
}

export const WithFooter: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Confirm Action</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						data.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button variant="ghost">Cancel</Button>
					<Button variant="destructive">Delete</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
}

export const WithForm: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Edit Profile</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit Profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<div className="space-y-4 py-4">
					<div className="space-y-2">
						<label htmlFor="name" className="font-medium text-sm">
							Name
						</label>
						<Input id="name" placeholder="Enter your name" />
					</div>
					<div className="space-y-2">
						<label htmlFor="email" className="font-medium text-sm">
							Email
						</label>
						<Input id="email" type="email" placeholder="Enter your email" />
					</div>
				</div>
				<DialogFooter>
					<Button>Save Changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
}
