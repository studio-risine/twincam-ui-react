import { cn } from '@/libs/utils'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { headingVariants } from './heading.variants'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = ComponentPropsWithoutRef<'h1'> &
	VariantProps<typeof headingVariants> & {
		as?: HeadingLevel
	}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
	({ className, size, as, ...props }, ref) => {
		const Tag = as || 'h1'

		return (
			<Tag
				className={cn(headingVariants({ size }), className)}
				data-slot="heading"
				ref={ref}
				{...props}
			/>
		)
	},
)

Heading.displayName = 'Heading'
