import { cn } from '@/libs/utils'
import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps, ComponentRef } from 'react'
import { forwardRef } from 'react'
import { buttonVariants } from './button.variants'

export type ButtonProps = ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}

const Button = forwardRef<ComponentRef<'button'>, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Component = asChild ? Slot : 'button'

		return (
			<Component
				className={cn(buttonVariants({ className, size, variant }))}
				data-slot="button"
				data-testid="button"
				ref={ref}
				{...props}
			/>
		)
	},
)

Button.displayName = 'Button'

export { Button }
