import { cva } from 'class-variance-authority'

export const mainContentVariants = cva(
	'flex flex-col px-6 py-6 md:py-10 lg:py-14 w-full mx-auto gap-6 lg:gap-10',
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
