import { cva, type VariantProps } from 'class-variance-authority'

export type IconButtonProps = VariantProps<typeof iconButtonVariants>

export const iconButtonVariants = cva(
	'inline-flex items-center justify-center transition-color ease-linear duration-75 rounded-sm font-semibold disabled:pointer-events-none disabled:bg-slate-300 disabled:border-slate-300 disabled:text-slate-500 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0',
	{
		defaultVariants: {
			size: 'base',
			variant: 'solid',
		},
		variants: {
			size: {
				base: 'size-10',
				lg: 'size-12 rounded-md',
				sm: 'size-8 rounded-md',
			},
			variant: {
				destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				ghost: 'text-accent hover:bg-accent/10 hover:text-accent',
				link: 'text-accent underline-offset-4 hover:underline',
				outline:
					'border border-accent/20 bg-transparent hover:bg-accent/10 hover:text-accent text-accent',
				solid: 'bg-accent text-accent-foreground hover:bg-accent/80',
			},
		},
	},
)
