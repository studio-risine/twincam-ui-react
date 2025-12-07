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
	description: string
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
								<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
									{group.items.map((item) => (
										<li key={item.href}>
											<NavigationMenuLink href={item.href}>
												<div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-foreground/5 hover:text-foreground focus:bg-foreground/5 focus:text-foreground">
													<div className="font-medium text-sm leading-none">{item.title}</div>
													<p className="mt-2 line-clamp-2 text-muted-foreground text-sm leading-snug">
														{item.description}
													</p>
												</div>
											</NavigationMenuLink>
										</li>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		)
	},
)

NavigationLinks.displayName = 'NavigationLinks'
