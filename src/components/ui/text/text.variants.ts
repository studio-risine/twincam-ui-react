import { cva } from 'class-variance-authority'

export const textVariants = cva('leading-normal font-normal', {
	defaultVariants: {
		size: 'base',
		variant: 'primary',
	},
	variants: {
		size: {
			base: 'text-base',
			lg: 'text-lg',
			sm: 'text-sm',
			xl: 'text-xl',
		},
		variant: {
			muted: 'text-muted',
			primary: 'text-primary',
		},
	},
})
