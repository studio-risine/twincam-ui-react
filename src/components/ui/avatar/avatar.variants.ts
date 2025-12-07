import { cva } from 'class-variance-authority'

export const avatarVariants = cva('relative flex shrink-0 overflow-hidden rounded-full', {
	defaultVariants: {
		size: 'base',
	},
	variants: {
		size: {
			base: 'size-10',
			lg: 'size-12',
			sm: 'size-8',
		},
	},
})

export const avatarImageVariants = cva('aspect-square h-full w-full')

export const avatarFallbackVariants = cva(
	'flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground',
)
