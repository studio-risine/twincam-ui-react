import { cva, type VariantProps } from 'class-variance-authority'

export type ButtonProps = VariantProps<typeof buttonVariants>

export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-color ease-linear duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0",
	{
		variants: {
			variant: {
				solid: 'bg-accent text-accent-foreground hover:bg-accent/90',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline:
					'border border-accent/20 bg-transparent hover:bg-accent hover:text-accent-foreground text-accent',
				ghost: 'text-accent hover:bg-accent hover:text-accent-foreground',
				link: 'text-accent underline-offset-4 hover:underline',
			},
			size: {
				sm: 'h-8 rounded-md px-3 has-[>svg]:px-2.5',
				base: 'h-10 px-4 py-2 has-[>svg]:px-3',
				lg: 'h-12 rounded-md px-6 has-[>svg]:px-4',
				icon: 'size-9',
			},
		},
		defaultVariants: {
			variant: 'solid',
			size: 'base',
		},
	},
)
