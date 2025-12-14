import { cva } from 'class-variance-authority'

export const textVariants = cva('leading-normal font-normal', {
	defaultVariants: {
		size: 'base',
		variant: 'foreground',
	},
	variants: {
		size: {
			base: 'text-base',
			lg: 'text-lg',
			sm: 'text-sm',
			xl: 'text-xl',
		},
		variant: {
			foreground: 'text-foreground',
			muted: 'text-muted',
		},
	},
})
