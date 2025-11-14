import { cn } from '@/libs/utils'
import { badgeVariants } from './badge.variants'
import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import type { VariantProps } from 'class-variance-authority'

export type BadgeProps = ComponentPropsWithoutRef<'div'> & VariantProps<typeof badgeVariants>

export const Badge = forwardRef<ComponentRef<'div'>, BadgeProps>(
	({ className, variant, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(badgeVariants({ variant }), className)}
			data-slot="badge"
			{...props}
		/>
	)
)

Badge.displayName = 'Badge'
export { badgeVariants, type BadgeProps }
