import { cn } from '@/libs/utils'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import {
	headerCenterVariants,
	headerContainerVariants,
	headerLeftVariants,
	headerRightVariants,
	headerVariants,
} from './header.variants'

export type HeaderProps = ComponentPropsWithoutRef<'header'> & VariantProps<typeof headerVariants>

const Header = forwardRef<HTMLElement, HeaderProps>(
	({ className, variant, position, children, ...props }, ref) => {
		return (
			<header
				className={cn(headerVariants({ position, variant }), className)}
				data-slot="header"
				ref={ref}
				{...props}
			>
				<div className={cn(headerContainerVariants())}>{children}</div>
			</header>
		)
	},
)

Header.displayName = 'Header'

export type HeaderLeftProps = ComponentPropsWithoutRef<'div'>

const HeaderLeft = forwardRef<HTMLDivElement, HeaderLeftProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				className={cn(headerLeftVariants(), className)}
				data-slot="header-left"
				ref={ref}
				{...props}
			>
				{children}
			</div>
		)
	},
)

HeaderLeft.displayName = 'HeaderLeft'

export type HeaderCenterProps = ComponentPropsWithoutRef<'div'>

const HeaderCenter = forwardRef<HTMLDivElement, HeaderCenterProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				className={cn(headerCenterVariants(), className)}
				data-slot="header-center"
				ref={ref}
				{...props}
			>
				{children}
			</div>
		)
	},
)

HeaderCenter.displayName = 'HeaderCenter'

export type HeaderRightProps = ComponentPropsWithoutRef<'div'>

const HeaderRight = forwardRef<HTMLDivElement, HeaderRightProps>(
	({ className, children, ...props }, ref) => {
		return (
			<div
				className={cn(headerRightVariants(), className)}
				data-slot="header-right"
				ref={ref}
				{...props}
			>
				{children}
			</div>
		)
	},
)

HeaderRight.displayName = 'HeaderRight'

export { Header, HeaderCenter, HeaderLeft, HeaderRight }
