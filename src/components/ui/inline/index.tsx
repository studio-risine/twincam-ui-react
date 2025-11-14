import { cn } from '@/libs/utils'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { inlineVariants } from './inline.variants'

type InlineElement = 'div' | 'section' | 'nav'

export type InlineProps = ComponentPropsWithoutRef<'div'> &
	VariantProps<typeof inlineVariants> & {
		as?: InlineElement
	}

export const Inline = forwardRef<HTMLElement, InlineProps>(
	({ className, space, align, justify, wrap, as, ...props }) => {
		const Component: ElementType = as || 'div'

		return (
			<Component
				className={cn(inlineVariants({ align, justify, space, wrap }), className)}
				data-slot="inline"
				data-testid="inline"
				{...props}
			/>
		)
	},
)

Inline.displayName = 'Inline'
