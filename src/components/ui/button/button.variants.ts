import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 transition-colors ease-linear duration-75 whitespace-nowrap rounded-sm font-semibold disabled:pointer-events-none disabled:bg-primary/30 disabled:border-primary/30 disabled:text-primary/50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0',
	{
		compoundVariants: [
			{
				class: 'size-8 p-0 gap-0',
				isIcon: true,
				size: 'sm',
			},
			{
				class: 'size-10 p-0 gap-0',
				isIcon: true,
				size: 'base',
			},
			{
				class: 'size-12 [&_svg:not([class*="size-"])]:size-6 p-0 gap-0',
				isIcon: true,
				size: 'lg',
			},
		],
		defaultVariants: {
			isIcon: false,
			size: 'base',
			variant: 'primary',
		},
		variants: {
			isIcon: {
				false: '',
				true: '',
			},
			size: {
				base: 'h-10 text-sm px-4 py-2 has-[>svg]:px-3',
				lg: 'h-12 text-base px-6 has-[>svg]:px-4',
				sm: 'h-9 text-sm px-3 has-[>svg]:px-2.5',
			},
			variant: {
				accent: 'bg-accent text-accent-foreground hover:bg-accent/80',
				destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				ghost: 'bg-transparent text-foreground hover:bg-foreground/10 hover:text-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
				outline:
					'border border-foreground/20 bg-transparent hover:bg-foreground/10 text-foreground',
				primary: 'bg-primary text-primary-foreground hover:bg-primary/80',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
			},
		},
	},
)
