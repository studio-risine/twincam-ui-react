import { cva } from 'class-variance-authority'

export const textVariants = cva('leading-normal text-foreground', {
	defaultVariants: {
		size: 'base',
	},
	variants: {
		color: {
			destructive: 'text-destructive',
			muted: 'text-muted',
			primary: 'text-primary',
		},
		size: {
			base: 'text-base',
			lg: 'text-lg',
			sm: 'text-sm',
			xl: 'text-xl',
		},
	},
})
