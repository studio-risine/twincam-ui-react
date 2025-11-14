import { cva, type VariantProps } from 'class-variance-authority'

export const headingVariants = cva('font-semibold text-foreground', {
	defaultVariants: {
		size: 'base',
	},
	variants: {
		size: {
			'2xl': 'text-5xl',
			base: 'text-2xl',
			lg: 'text-3xl',
			sm: 'text-xl',
			xl: 'text-4xl',
			xs: 'text-lg',
		},
	},
})
