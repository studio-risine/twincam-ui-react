import type {
	ComponentProps,
	ComponentPropsWithoutRef,
	ComponentPropsWithRef,
	ElementType,
} from 'react'

export type PropsWithAs<P, T extends ElementType> = P & {
	as?: T
}

export type PolymorphicProps<P, T extends ElementType> = PropsWithAs<P, T> &
	Omit<ComponentPropsWithoutRef<T>, keyof PropsWithAs<P, T>>

export type PolymorphicComponentProps<T extends ElementType> = {
	asChild?: boolean
} & ComponentProps<T>

export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref']
