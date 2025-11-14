import { cn } from '@/libs/utils'
import { type BadgeProps, badgeVariants } from './badge.variants'

export function Badge({
	className,
	variant,
	...props
}: React.HTMLAttributes<HTMLDivElement> & BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} data-testId="badge" {...props} />
	)
}

export { badgeVariants, type BadgeProps }
