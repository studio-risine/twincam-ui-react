import { cn } from '@/libs/utils'
import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import { iconButtonVariants } from './icon-button.variants'

export type IconButtonProps = ComponentPropsWithoutRef<'button'> &
	VariantProps<typeof iconButtonVariants> & {
		asChild?: boolean
	}

export const IconButton = forwardRef<ComponentRef<'button'>, IconButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Component = asChild ? Slot : 'button'

		return (
			<Component
				className={cn(iconButtonVariants({ className, size, variant }))}
				data-slot="icon-button"
				data-testid="icon-button"
				ref={ref}
				{...props}
			/>
		)
	},
)

IconButton.displayName = 'IconButton'
