import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
	'inline-flex items-center rounded-sm border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-3.5 [&_svg]:shrink-0 gap-2',
	{
		defaultVariants: {
			variant: 'primary',
		},
		variants: {
			variant: {
				error: 'border border-red-200 bg-red-100 text-red-700',
				primary: 'border bg-background',
				secondary: 'border border-transparent bg-secondary text-secondary-foreground',
				success: 'border border-lime-200 bg-lime-100 text-lime-700',
				warning: 'border border-amber-200 bg-amber-100 text-amber-700',
			},
		},
	},
)
