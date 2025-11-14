import { cva, type VariantProps } from 'class-variance-authority'

export type InlineProps = VariantProps<typeof inlineVariants>

export const inlineVariants = cva('flex flex-row', {
	defaultVariants: {
		align: 'center',
		justify: 'start',
		space: 'base',
		wrap: true,
	},
	variants: {
		align: {
			baseline: 'items-baseline',
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
			base: 'gap-8',
			lg: 'gap-12',
			sm: 'gap-4',
			xl: 'gap-16',
		},
		wrap: {
			false: 'flex-nowrap',
			true: 'flex-wrap',
		},
	},
})
