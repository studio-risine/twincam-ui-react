import { cva, type VariantProps } from 'class-variance-authority'

export type TextProps = VariantProps<typeof textVariants>

export const textVariants = cva('leading-normal text-foreground', {
	defaultVariants: {
		size: 'base',
	},
	variants: {
		size: {
			base: 'text-base',
			lg: 'text-lg',
			sm: 'text-sm',
			xl: 'text-xl',
		},
	},
})
