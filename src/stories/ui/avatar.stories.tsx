import { Avatar, AvatarFallback, AvatarImage, type AvatarProps } from '@/components/ui'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
	args: {
		size: 'base',
	},
	argTypes: {
		size: {
			control: 'select',
			options: ['sm', 'base', 'lg'],
		},
	},
	component: Avatar,
	tags: ['autodocs'],
	title: 'Components/Avatar',
} satisfies Meta<AvatarProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Avatar {...args}>
			<AvatarImage alt="@gabrielmelo" src="https://avatars.githubusercontent.com/u/4544108" />
			<AvatarFallback>GM</AvatarFallback>
		</Avatar>
	),
}

export const Small: Story = {
	args: {
		size: 'sm',
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarImage alt="@gabrielmelo" src="https://avatars.githubusercontent.com/u/4544108" />
			<AvatarFallback>GM</AvatarFallback>
		</Avatar>
	),
}

export const Large: Story = {
	args: {
		size: 'lg',
	},
	render: (args) => (
		<Avatar {...args}>
			<AvatarImage alt="@gabrielmelo" src="https://avatars.githubusercontent.com/u/4544108" />
			<AvatarFallback>GM</AvatarFallback>
		</Avatar>
	),
}

export const AllSizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Avatar size="sm">
				<AvatarImage alt="@gabrielmelo" src="https://avatars.githubusercontent.com/u/4544108" />
				<AvatarFallback>GM</AvatarFallback>
			</Avatar>
			<Avatar size="base">
				<AvatarImage alt="@gabrielmelo" src="https://avatars.githubusercontent.com/u/4544108" />
				<AvatarFallback>GM</AvatarFallback>
			</Avatar>
			<Avatar size="lg">
				<AvatarImage alt="@gabrielmelo" src="https://avatars.githubusercontent.com/u/4544108" />
				<AvatarFallback>GM</AvatarFallback>
			</Avatar>
		</div>
	),
}

export const Fallback: Story = {
	render: (args) => (
		<div className="flex items-center gap-4">
			<Avatar {...args}>
				<AvatarFallback>GM</AvatarFallback>
			</Avatar>
			<Avatar {...args}>
				<AvatarFallback>AB</AvatarFallback>
			</Avatar>
			<Avatar {...args}>
				<AvatarFallback>TC</AvatarFallback>
			</Avatar>
		</div>
	),
}
