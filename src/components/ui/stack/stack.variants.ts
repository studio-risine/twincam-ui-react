import { cva } from 'class-variance-authority'

export const stackVariants = cva('flex flex-col', {
	defaultVariants: {
		align: 'stretch',
		justify: 'start',
		space: 'base',
	},
	variants: {
		align: {
			center: 'items-center',
			end: 'items-end',
			start: 'items-start',
			stretch: 'items-stretch',
		},
		justify: {
			around: 'justify-around',
			between: 'justify-between',
			center: 'justify-center',
			end: 'justify-end',
			evenly: 'justify-evenly',
			start: 'justify-start',
		},
		space: {
			base: 'space-y-8',
			lg: 'space-y-12',
			sm: 'space-y-4',
			xl: 'space-y-16',
		},
	},
})
