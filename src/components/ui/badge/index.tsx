import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'
import { cn } from '@/lib/cn'

const badgeVariants = cva(
	'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				neutral:
					'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
				success:
					'border-transparent bg-green-500/10 text-green-700 dark:text-green-400',
				warning:
					'border-transparent bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
				danger:
					'border-transparent bg-destructive/10 text-destructive hover:bg-destructive/20',
				accent:
					'border-transparent bg-accent text-accent-foreground hover:bg-accent/80',
			},
			size: {
				sm: 'px-2 py-0 text-xs',
				base: 'px-2.5 py-0.5 text-xs',
			},
		},
		defaultVariants: {
			variant: 'neutral',
			size: 'base',
		},
	},
)

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant, size }), className)}
			data-slot="badge"
			{...props}
		/>
	)
}
