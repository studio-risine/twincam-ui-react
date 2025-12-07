import { cn } from '@/libs/utils'
import type { PropsWithAs } from '@/shared/types/polymorphic'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { forwardRef } from 'react'
import { textVariants } from './text.variants'

type TextProps = VariantProps<typeof textVariants> & {
	children: ReactNode
}

type AllowedTextElements = 'p' | 'span' | 'div' | 'a' | 'button' | 'label'

type TextComponentProps<T extends AllowedTextElements = 'p'> = PropsWithAs<TextProps, T> &
	Omit<ComponentPropsWithoutRef<T>, keyof TextProps>

type TextComponent = <T extends AllowedTextElements = 'p'>(
	props: TextComponentProps<T> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement | null

const TextPolymorphic = forwardRef<HTMLElement, TextComponentProps<AllowedTextElements>>(
	({ as, children, size, color, className, ...props }, ref) => {
		const Component = (as || 'p') as ElementType

		return (
			<Component
				className={cn(textVariants({ color, size }), className)}
				data-slot="text"
				ref={ref}
				{...props}
			>
				{children}
			</Component>
		)
	},
)

TextPolymorphic.displayName = 'Text'

export const Text = TextPolymorphic as TextComponent
