import type { ComponentProps } from 'react'
import { memo } from 'react'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '../navigation-menu'

export interface NavigationItem {
	title: string
	href: string
	description?: string
}

export interface NavigationGroup {
	title: string
	items: NavigationItem[]
}

export interface NavigationData {
	items?: NavigationItem[]
	groups?: NavigationGroup[]
}

export interface NavigationLinksProps
	extends Omit<ComponentProps<typeof NavigationMenu>, 'children'> {
	data: NavigationData
}

export const NavigationLinks = memo<NavigationLinksProps>(
	({ data, orientation = 'horizontal', ...props }) => {
		const { items = [], groups = [] } = data

		return (
			<NavigationMenu orientation={orientation} {...props}>
				<NavigationMenuList orientation={orientation}>
					{items.map((item) => (
						<NavigationMenuItem key={item.href}>
							<NavigationMenuLink href={item.href}>{item.title}</NavigationMenuLink>
						</NavigationMenuItem>
					))}

					{groups.map((group) => (
						<NavigationMenuItem key={group.title}>
							<NavigationMenuTrigger orientation={orientation}>{group.title}</NavigationMenuTrigger>
							<NavigationMenuContent orientation={orientation}>
								<nav className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
									{group.items.map((item) => (
										<NavigationMenuLink href={item.href} key={item.href}>
											<div className="block select-none space-y-1 rounded-md">
												{item.title}
												<small className="line-clamp-2 text-foreground/70 text-sm leading-snug">
													{item.description}
												</small>
											</div>
										</NavigationMenuLink>
									))}
								</nav>
							</NavigationMenuContent>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		)
	},
)

NavigationLinks.displayName = 'NavigationLinks'
