import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/cn'

const inputVariants = cva(
	'flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
	{
		variants: {
			size: {
				sm: 'h-8 px-2 text-xs',
				base: 'h-10 px-3 py-2',
				lg: 'h-12 px-4 text-base',
			},
		},
		defaultVariants: {
			size: 'base',
		},
	},
)

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
		VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, size, type = 'text', ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(inputVariants({ size, className }))}
				ref={ref}
				data-slot="input"
				{...props}
			/>
		)
	},
)

Input.displayName = 'Input'
