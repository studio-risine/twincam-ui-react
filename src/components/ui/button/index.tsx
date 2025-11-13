import { cn } from '@/libs/utils'
import { Slot } from '@radix-ui/react-slot'
import { type ButtonProps, buttonVariants } from './button.variants'

export function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	ButtonProps & {
		asChild?: boolean
	}) {
	const Component = asChild ? Slot : 'button'

	return (
		<Component
			className={cn(buttonVariants({ className, size, variant }))}
			data-slot="button"
			{...props}
		/>
	)
}
