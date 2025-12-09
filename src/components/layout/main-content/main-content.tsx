import { cn } from '@/libs/utils'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps, ComponentRef } from 'react'
import { forwardRef } from 'react'
import { mainContentVariants } from './main-content.variants'

export type MainContentProps = ComponentProps<'main'> & VariantProps<typeof mainContentVariants>

export const MainContent = forwardRef<ComponentRef<'main'>, MainContentProps>(
	({ className, size, ...props }, ref) => {
		return (
			<main
				className={cn(mainContentVariants({ className, size }))}
				data-slot="main-content"
				ref={ref}
				{...props}
			/>
		)
	},
)

MainContent.displayName = 'MainContent'
