import { cn } from '@/libs/utils'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import type { VariantProps } from 'class-variance-authority'
import { ChevronDown } from 'lucide-react'
import type { ComponentProps, ComponentRef } from 'react'
import { forwardRef, memo } from 'react'
import {
	navigationMenuContentVariants,
	navigationMenuListVariants,
	navigationMenuRootVariants,
	navigationMenuTriggerVariants,
} from './navigation-menu.variants'

export interface NavigationMenuItemData {
	title: string
	href: string
	description: string
}

export type NavigationMenuProps = ComponentProps<typeof NavigationMenuPrimitive.Root> &
	VariantProps<typeof navigationMenuRootVariants>

export const NavigationMenu = forwardRef<
	ComponentRef<typeof NavigationMenuPrimitive.Root>,
	NavigationMenuProps
>(({ className, children, orientation = 'horizontal', ...props }, ref) => (
	<NavigationMenuPrimitive.Root
		className={cn(navigationMenuRootVariants({ orientation }), className)}
		data-orientation={orientation}
		orientation={orientation}
		ref={ref}
		{...props}
	>
		{children}
		<NavigationMenuViewport />
	</NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

export type NavigationMenuListProps = ComponentProps<typeof NavigationMenuPrimitive.List> &
	VariantProps<typeof navigationMenuListVariants>

export const NavigationMenuList = forwardRef<
	ComponentRef<typeof NavigationMenuPrimitive.List>,
	NavigationMenuListProps
>(({ className, orientation = 'horizontal', ...props }, ref) => (
	<NavigationMenuPrimitive.List
		className={cn(navigationMenuListVariants({ orientation }), className)}
		ref={ref}
		{...props}
	/>
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

export const NavigationMenuItem = NavigationMenuPrimitive.Item

export type NavigationMenuTriggerProps = ComponentProps<typeof NavigationMenuPrimitive.Trigger> &
	VariantProps<typeof navigationMenuTriggerVariants>

export const NavigationMenuTrigger = forwardRef<
	ComponentRef<typeof NavigationMenuPrimitive.Trigger>,
	NavigationMenuTriggerProps
>(({ className, children, orientation = 'horizontal', ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		className={cn(navigationMenuTriggerVariants({ orientation }), className)}
		ref={ref}
		{...props}
	>
		{children}
		<ChevronDown
			aria-hidden="true"
			className="relative top-px ml-1 size-3 transition duration-200 group-data-[state=open]:rotate-180"
		/>
	</NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

export type NavigationMenuContentProps = ComponentProps<typeof NavigationMenuPrimitive.Content> &
	VariantProps<typeof navigationMenuContentVariants>

export const NavigationMenuContent = forwardRef<
	ComponentRef<typeof NavigationMenuPrimitive.Content>,
	NavigationMenuContentProps
>(({ className, orientation = 'horizontal', ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		className={cn(navigationMenuContentVariants({ orientation }), className)}
		ref={ref}
		{...props}
	/>
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

export type NavigationMenuLinkProps = ComponentProps<typeof NavigationMenuPrimitive.Link>

export const NavigationMenuLink = memo(
	forwardRef<ComponentRef<typeof NavigationMenuPrimitive.Link>, NavigationMenuLinkProps>(
		({ className, ...props }, ref) => (
			<NavigationMenuPrimitive.Link
				className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-foreground/10 hover:text-foreground focus:bg-foreground/5 focus:text-foreground"
				ref={ref}
				{...props}
			/>
		),
	),
)
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName

export type NavigationMenuIndicatorProps = ComponentProps<typeof NavigationMenuPrimitive.Indicator>

export const NavigationMenuIndicator = forwardRef<
	ComponentRef<typeof NavigationMenuPrimitive.Indicator>,
	NavigationMenuIndicatorProps
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		className="data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=visible]:animate-in"
		ref={ref}
		{...props}
	>
		<div className="relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
	</NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export type NavigationMenuViewportProps = ComponentProps<typeof NavigationMenuPrimitive.Viewport>

export const NavigationMenuViewport = forwardRef<
	ComponentRef<typeof NavigationMenuPrimitive.Viewport>,
	NavigationMenuViewportProps
>(({ className, ...props }, ref) => (
	<div className={cn('absolute top-full left-0 flex justify-center')}>
		<NavigationMenuPrimitive.Viewport
			className="data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full origin-top-center overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in md:w-(--radix-navigation-menu-viewport-width)"
			ref={ref}
			{...props}
		/>
	</div>
))

NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName
