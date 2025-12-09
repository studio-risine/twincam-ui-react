import { cn } from '@/libs/utils'
import type { PropsWithAs } from '@/shared/types/polymorphic'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { forwardRef } from 'react'
import { textVariants } from './text.variants'

type Variants = VariantProps<typeof textVariants>

type AllowedTextElements = 'p' | 'span' | 'div' | 'a' | 'button' | 'label'

export type TextProps<T extends AllowedTextElements = 'p'> = PropsWithAs<Variants, T> &
	Omit<ComponentPropsWithoutRef<T>, keyof Variants>

const TextPolymorphic = forwardRef<HTMLElement, TextProps<AllowedTextElements>>(
	({ as, children, size, variant, className, ...props }, ref) => {
		const Component = (as || 'p') as ElementType

		return (
			<Component
				className={cn(textVariants({ size, variant }), className)}
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

type TextComponent = <T extends AllowedTextElements = 'p'>(
	props: TextProps<T> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement | null

export const Text = TextPolymorphic as TextComponent
