import type { Meta, StoryObj } from '@storybook/react'
import { CheckCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const meta: Meta = {
	title: 'Examples/Landing Page',
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj

export const ProductLanding: Story = {
	render: () => (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="container mx-auto px-4 py-16 text-center">
				<Badge variant="accent" className="mb-4">
					New Release
				</Badge>
				<h1 className="mb-4 font-bold text-4xl tracking-tight md:text-6xl">
					Build Faster with TC96
				</h1>
				<p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl">
					A modern design system built with React, Tailwind CSS, and Radix UI.
					Ship beautiful products in record time.
				</p>
				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Button size="lg">Get Started</Button>
					<Button size="lg" variant="outline">
						View Docs
					</Button>
				</div>
			</section>

			{/* Alert Section */}
			<section className="container mx-auto px-4 py-8">
				<Alert variant="success" className="mx-auto max-w-3xl">
					<CheckCircle className="size-4" />
					<AlertTitle>Early Access Available</AlertTitle>
					<AlertDescription>
						Join our beta program and get access to exclusive features before
						anyone else.
					</AlertDescription>
				</Alert>
			</section>

			{/* Features Section */}
			<section className="container mx-auto px-4 py-16">
				<h2 className="mb-12 text-center font-bold text-3xl tracking-tight">
					Everything You Need
				</h2>
				<div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
					<Card>
						<CardHeader>
							<CardTitle>Token-Based Design</CardTitle>
							<CardDescription>
								Consistent styling with centralized design tokens
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground text-sm">
								Update your brand colors, typography, and spacing in one place.
								Changes propagate instantly across all components.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Accessible by Default</CardTitle>
							<CardDescription>
								Built on Radix UI primitives for robust a11y
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground text-sm">
								Keyboard navigation, focus management, and ARIA attributes work
								out of the box. WCAG 2.1 AA compliant.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Developer Experience</CardTitle>
							<CardDescription>
								TypeScript-first with excellent IntelliSense
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground text-sm">
								Full type safety, autocomplete, and inline documentation. Build
								with confidence.
							</p>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* CTA Section */}
			<section className="container mx-auto px-4 py-16">
				<Card className="mx-auto max-w-2xl">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
						<CardDescription>
							Sign up for our newsletter and get the latest updates
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form className="flex flex-col gap-4 sm:flex-row">
							<div className="flex-1">
								<label htmlFor="email" className="sr-only">
									Email address
								</label>
								<Input
									id="email"
									type="email"
									placeholder="Enter your email"
									size="lg"
								/>
							</div>
							<Button type="submit" size="lg">
								Subscribe
							</Button>
						</form>
					</CardContent>
					<CardFooter className="justify-center">
						<p className="text-muted-foreground text-xs">
							No spam. Unsubscribe anytime.
						</p>
					</CardFooter>
				</Card>
			</section>
		</div>
	),
}
