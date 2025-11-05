import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/cn'

const alertVariants = cva(
	'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
	{
		variants: {
			variant: {
				info: 'bg-background text-foreground',
				success:
					'border-green-500/50 bg-green-50 text-green-900 dark:border-green-500/50 dark:bg-green-950 dark:text-green-100 [&>svg]:text-green-600 dark:[&>svg]:text-green-400',
				warning:
					'border-yellow-500/50 bg-yellow-50 text-yellow-900 dark:border-yellow-500/50 dark:bg-yellow-950 dark:text-yellow-100 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400',
				error:
					'border-destructive/50 bg-destructive/10 text-destructive dark:border-destructive dark:[&>svg]:text-destructive',
			},
		},
		defaultVariants: {
			variant: 'info',
		},
	},
)

export interface AlertProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof alertVariants> {}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
	({ className, variant, ...props }, ref) => (
		<div
			ref={ref}
			role="alert"
			className={cn(alertVariants({ variant }), className)}
			data-slot="alert"
			{...props}
		/>
	),
)
Alert.displayName = 'Alert'

export const AlertTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h5
		ref={ref}
		className={cn('mb-1 font-medium leading-none tracking-tight', className)}
		data-slot="alert-title"
		{...props}
	/>
))
AlertTitle.displayName = 'AlertTitle'

export const AlertDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('text-sm [&_p]:leading-relaxed', className)}
		data-slot="alert-description"
		{...props}
	/>
))
AlertDescription.displayName = 'AlertDescription'
