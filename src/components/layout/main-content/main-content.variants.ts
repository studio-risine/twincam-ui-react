import { cva } from 'class-variance-authority'

export const mainContentVariants = cva(
	'container mx-auto flex h-20 items-center justify-between px-4 md:px-6',
	{
		defaultVariants: {
			size: 'base',
		},
		variants: {
			size: {
				'2xl': 'max-w-7xl',
				base: 'max-w-3xl',
				lg: 'max-w-4xl',
				sm: 'max-w-2xl',
				xl: 'max-w-6xl',
			},
		},
	},
)
