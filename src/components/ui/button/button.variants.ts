import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 transition-colors ease-linear duration-150 whitespace-nowrap rounded-sm font-semibold disabled:pointer-events-none disabled:bg-foreground/30 disabled:border-foreground/30 disabled:text-foreground/80 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0',
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
				ghost:
					'border border-transparent bg-transparent text-secondary-foreground hover:bg-accent/5 focus:bg-accent/10',
				link: 'text-foreground underline-offset-2 underline hover:underline-offset-4',
				outline: 'border bg-transparent hover:bg-accent/5 text-secondary-foreground',
				primary: 'bg-primary text-primary-foreground hover:bg-primary/80',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
			},
		},
	},
)
