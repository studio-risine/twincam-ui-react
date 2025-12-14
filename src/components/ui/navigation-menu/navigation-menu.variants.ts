import { cva } from 'class-variance-authority'

export const navigationMenuRootVariants = cva(
	'relative z-10 flex max-w-max flex-1 items-center justify-center',
	{
		defaultVariants: {
			orientation: 'horizontal',
		},
		variants: {
			orientation: {
				horizontal: 'flex-row',
				vertical: 'flex-col items-start',
			},
		},
	},
)

export const navigationMenuListVariants = cva(
	'group flex flex-1 list-none items-center justify-center gap-1',
	{
		defaultVariants: {
			orientation: 'horizontal',
		},
		variants: {
			orientation: {
				horizontal: 'flex-row',
				vertical: 'flex-col items-stretch',
			},
		},
	},
)

export const navigationMenuTriggerVariants = cva(
	'group inline-flex h-10 w-max items-center justify-center gap-1 rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground/10 hover:text-foreground focus:bg-foreground/10 focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-active:bg-foreground/5 data-[state=open]:bg-foreground/5',
	{
		defaultVariants: {
			orientation: 'horizontal',
		},
		variants: {
			orientation: {
				horizontal: '',
				vertical: 'w-full justify-start',
			},
		},
	},
)

export const navigationMenuContentVariants = cva(
	'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
	{
		defaultVariants: {
			orientation: 'horizontal',
		},
		variants: {
			orientation: {
				horizontal: '',
				vertical: 'md:left-full md:top-0 md:ml-2',
			},
		},
	},
)

export const navigationMenuLinkVariants = cva(
	'block select-none space-y-1 rounded-sm bg-transparent p-3 px-4 font-semibold text-sm leading-none outline-none transition-colors hover:bg-accent/5 focus:bg-accent/10 focus:text-foreground',
)
