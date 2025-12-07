import { cva } from 'class-variance-authority'

const headerVariants = cva('w-full border-b border-border transition-all duration-200', {
	defaultVariants: {
		position: 'relative',
		variant: 'default',
	},
	variants: {
		position: {
			fixed: 'fixed top-0 left-0 right-0 z-50',
			relative: 'relative',
			sticky: 'sticky top-0 z-50',
		},
		variant: {
			default: 'bg-background/90 backdrop-blur-sm',
			ghost: 'border-transparent bg-transparent backdrop-blur-sm',
			transparent: 'border-transparent bg-transparent',
		},
	},
})

const headerContainerVariants = cva(
	'container mx-auto flex h-20 items-center justify-between px-4 md:px-6',
)

const headerLeftVariants = cva('flex items-center gap-4')

const headerCenterVariants = cva('flex flex-1 items-center justify-center gap-4')

const headerRightVariants = cva('flex items-center gap-4')

export {
	headerCenterVariants,
	headerContainerVariants,
	headerLeftVariants,
	headerRightVariants,
	headerVariants,
}
