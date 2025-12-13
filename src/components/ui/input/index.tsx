import { cn } from '@/libs/utils'
import type { VariantProps } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react'
import { inputVariants } from './input.variants'

interface InputProps
	extends Omit<ComponentPropsWithoutRef<'input'>, 'size'>,
		VariantProps<typeof inputVariants> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type = 'text', size, ...props }, ref) => {
		return (
			<input
				className={cn(inputVariants({ className, size }))}
				data-slot="input"
				ref={ref}
				type={type}
				{...props}
			/>
		)
	},
)
Input.displayName = 'Input'

export const InputField = ({ children }: { children: ReactNode }) => {
	return <div className="*:not-first:mt-2">{children}</div>
}
