import type { Meta, StoryObj } from '@storybook/react'
import { Info } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const meta: Meta = {
	title: 'Foundation/Token Propagation',
	parameters: {
		layout: 'padded',
	},
}

export default meta
type Story = StoryObj

export const DefaultBrand: Story = {
	name: 'Default Brand Colors',
	render: () => (
		<div className="space-y-8">
			<div>
				<h2 className="mb-4 font-bold text-2xl">
					Default Brand (Accent Token)
				</h2>
				<p className="mb-4 text-muted-foreground">
					The default accent color is <code>oklch(0.67 0.16 58)</code> - an
					orange/amber hue.
				</p>
			</div>

			<div className="space-y-4">
				<h3 className="font-semibold text-lg">Components Using Accent Token</h3>

				<div className="flex flex-wrap items-center gap-4">
					<Badge variant="accent">Accent Badge</Badge>
					<Button variant="solid">Primary Button</Button>
					<Button variant="outline">Outline Button</Button>
				</div>

				<Card className="max-w-md">
					<CardHeader>
						<CardTitle>Featured Card</CardTitle>
						<CardDescription>
							Cards can use accent colors for highlights
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-center gap-2 rounded-md bg-accent/10 p-3">
							<Info className="size-4 text-accent" />
							<p className="text-accent-foreground text-sm">
								Accent backgrounds work automatically
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	),
}

export const CustomBrandBlue: Story = {
	name: 'Custom Brand - Blue',
	render: () => (
		<div
			className="space-y-8"
			style={
				{
					'--accent': 'oklch(0.55 0.22 250)',
					'--accent-foreground': 'oklch(0.97 0.01 250)',
				} as React.CSSProperties
			}
		>
			<div>
				<h2 className="mb-4 font-bold text-2xl">Custom Brand (Blue)</h2>
				<p className="mb-4 text-muted-foreground">
					Override accent to <code>oklch(0.55 0.22 250)</code> - a vibrant blue.
					<br />
					<strong>No component changes needed!</strong> All accent colors update
					automatically.
				</p>
			</div>

			<div className="space-y-4">
				<h3 className="font-semibold text-lg">
					Same Components, Different Brand
				</h3>

				<div className="flex flex-wrap items-center gap-4">
					<Badge variant="accent">Accent Badge</Badge>
					<Button variant="solid">Primary Button</Button>
					<Button variant="outline">Outline Button</Button>
				</div>

				<Card className="max-w-md">
					<CardHeader>
						<CardTitle>Featured Card</CardTitle>
						<CardDescription>
							Cards use the new blue accent automatically
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-center gap-2 rounded-md bg-accent/10 p-3">
							<Info className="size-4 text-accent" />
							<p className="text-accent-foreground text-sm">
								Token propagation in action!
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	),
}

export const CustomBrandPurple: Story = {
	name: 'Custom Brand - Purple',
	render: () => (
		<div
			className="space-y-8"
			style={
				{
					'--accent': 'oklch(0.6 0.24 300)',
					'--accent-foreground': 'oklch(0.97 0.01 300)',
				} as React.CSSProperties
			}
		>
			<div>
				<h2 className="mb-4 font-bold text-2xl">Custom Brand (Purple)</h2>
				<p className="mb-4 text-muted-foreground">
					Override accent to <code>oklch(0.6 0.24 300)</code> - a rich purple.
				</p>
			</div>

			<div className="space-y-4">
				<h3 className="font-semibold text-lg">
					Same Components, Different Brand
				</h3>

				<div className="flex flex-wrap items-center gap-4">
					<Badge variant="accent">Accent Badge</Badge>
					<Button variant="solid">Primary Button</Button>
					<Button variant="outline">Outline Button</Button>
				</div>

				<Card className="max-w-md">
					<CardHeader>
						<CardTitle>Featured Card</CardTitle>
						<CardDescription>Purple brand applied globally</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-center gap-2 rounded-md bg-accent/10 p-3">
							<Info className="size-4 text-accent" />
							<p className="text-accent-foreground text-sm">
								All accent references update together
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	),
}

export const CustomBrandGreen: Story = {
	name: 'Custom Brand - Green',
	render: () => (
		<div
			className="space-y-8"
			style={
				{
					'--accent': 'oklch(0.65 0.2 145)',
					'--accent-foreground': 'oklch(0.15 0.05 145)',
				} as React.CSSProperties
			}
		>
			<div>
				<h2 className="mb-4 font-bold text-2xl">Custom Brand (Green)</h2>
				<p className="mb-4 text-muted-foreground">
					Override accent to <code>oklch(0.65 0.2 145)</code> - an emerald
					green.
				</p>
			</div>

			<div className="space-y-4">
				<h3 className="font-semibold text-lg">
					Same Components, Different Brand
				</h3>

				<div className="flex flex-wrap items-center gap-4">
					<Badge variant="accent">Accent Badge</Badge>
					<Button variant="solid">Primary Button</Button>
					<Button variant="outline">Outline Button</Button>
				</div>

				<Card className="max-w-md">
					<CardHeader>
						<CardTitle>Featured Card</CardTitle>
						<CardDescription>Green brand without touching code</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-center gap-2 rounded-md bg-accent/10 p-3">
							<Info className="size-4 text-accent" />
							<p className="text-accent-foreground text-sm">
								Centralized token management works!
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	),
}

export const AllBrandsComparison: Story = {
	name: 'All Brands Comparison',
	render: () => (
		<div className="space-y-8">
			<div>
				<h2 className="mb-4 font-bold text-2xl">Token Propagation Demo</h2>
				<p className="mb-4 text-muted-foreground">
					This example shows how changing a single CSS variable (
					<code>--accent</code>) updates all components automatically.
				</p>
			</div>

			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				{/* Default */}
				<div className="space-y-4">
					<h3 className="font-semibold">Default (Orange)</h3>
					<div className="space-y-3 rounded-lg border p-4">
						<Badge variant="accent">Badge</Badge>
						<Button className="w-full">Button</Button>
						<div className="flex items-center gap-2 rounded-md bg-accent/10 p-2">
							<Info className="size-4 text-accent" />
						</div>
					</div>
				</div>

				{/* Blue */}
				<div
					className="space-y-4"
					style={
						{
							'--accent': 'oklch(0.55 0.22 250)',
							'--accent-foreground': 'oklch(0.97 0.01 250)',
						} as React.CSSProperties
					}
				>
					<h3 className="font-semibold">Blue</h3>
					<div className="space-y-3 rounded-lg border p-4">
						<Badge variant="accent">Badge</Badge>
						<Button className="w-full">Button</Button>
						<div className="flex items-center gap-2 rounded-md bg-accent/10 p-2">
							<Info className="size-4 text-accent" />
						</div>
					</div>
				</div>

				{/* Purple */}
				<div
					className="space-y-4"
					style={
						{
							'--accent': 'oklch(0.6 0.24 300)',
							'--accent-foreground': 'oklch(0.97 0.01 300)',
						} as React.CSSProperties
					}
				>
					<h3 className="font-semibold">Purple</h3>
					<div className="space-y-3 rounded-lg border p-4">
						<Badge variant="accent">Badge</Badge>
						<Button className="w-full">Button</Button>
						<div className="flex items-center gap-2 rounded-md bg-accent/10 p-2">
							<Info className="size-4 text-accent" />
						</div>
					</div>
				</div>

				{/* Green */}
				<div
					className="space-y-4"
					style={
						{
							'--accent': 'oklch(0.65 0.2 145)',
							'--accent-foreground': 'oklch(0.15 0.05 145)',
						} as React.CSSProperties
					}
				>
					<h3 className="font-semibold">Green</h3>
					<div className="space-y-3 rounded-lg border p-4">
						<Badge variant="accent">Badge</Badge>
						<Button className="w-full">Button</Button>
						<div className="flex items-center gap-2 rounded-md bg-accent/10 p-2">
							<Info className="size-4 text-accent" />
						</div>
					</div>
				</div>
			</div>

			<Alert variant="info" className="max-w-3xl">
				<Info className="size-4" />
				<AlertTitle>How It Works</AlertTitle>
				<AlertDescription>
					Each brand variant uses inline CSS to override <code>--accent</code>{' '}
					and <code>--accent-foreground</code> tokens. All components within
					that scope automatically use the new colors. In your app, you'd set
					these tokens at the root level or on a brand-specific wrapper.
				</AlertDescription>
			</Alert>
		</div>
	),
}
