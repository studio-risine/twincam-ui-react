import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/cn'

const textareaVariants = cva(
	'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
	{
		variants: {
			size: {
				sm: 'min-h-[50px] px-2 py-1.5 text-xs',
				base: 'min-h-[60px] px-3 py-2',
				lg: 'min-h-[80px] px-4 py-3 text-base',
			},
		},
		defaultVariants: {
			size: 'base',
		},
	},
)

export interface TextareaProps
	extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
		VariantProps<typeof textareaVariants> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, size, ...props }, ref) => {
		return (
			<textarea
				className={cn(textareaVariants({ size, className }))}
				ref={ref}
				data-slot="textarea"
				{...props}
			/>
		)
	},
)

Textarea.displayName = 'Textarea'
