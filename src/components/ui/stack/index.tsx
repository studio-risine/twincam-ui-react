import { cn } from '@/libs/utils'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { stackVariants } from './stack.variants'

type StackElement = 'div' | 'section'

export type StackProps = ComponentPropsWithoutRef<'div'> &
	VariantProps<typeof stackVariants> & {
		as?: StackElement
	}

export const Stack = forwardRef<HTMLElement, StackProps>(
	({ className, space, align, justify, as, ...props }) => {
		const Component: ElementType = as || 'div'

		return (
			<Component
				className={cn(stackVariants({ align, justify, space }), className)}
				data-slot="stack"
				data-testid="stack"
				{...props}
			/>
		)
	},
)

Stack.displayName = 'Stack'
