import { cva } from 'class-variance-authority'

export const inputVariants = cva(
	'flex w-full text-foreground rounded border border-input bg-transparent focus:bg-foreground/5 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring aria-invalid:border-destructive aria-invalid:ring-destructive aria-invalid:ring-1',
	{
		defaultVariants: {
			size: 'base',
		},
		variants: {
			size: {
				base: 'h-10 px-3 py-2',
				lg: 'h-12 px-4 py-3 text-base',
				sm: 'h-9 px-2.5 py-1.5 text-xs',
			},
		},
	},
)
