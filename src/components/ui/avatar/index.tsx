import { cn } from '@/libs/utils'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import { avatarFallbackVariants, avatarImageVariants, avatarVariants } from './avatar.variants'

type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
	VariantProps<typeof avatarVariants>

const Avatar = forwardRef<ComponentRef<typeof AvatarPrimitive.Root>, AvatarProps>(
	({ className, size, ...props }, ref) => (
		<AvatarPrimitive.Root
			className={cn(avatarVariants({ className, size }))}
			data-slot="avatar"
			data-testid="avatar"
			ref={ref}
			{...props}
		/>
	),
)
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = forwardRef<
	ComponentRef<typeof AvatarPrimitive.Image>,
	ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image
		className={cn(avatarImageVariants({ className }))}
		data-slot="avatar-image"
		ref={ref}
		{...props}
	/>
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = forwardRef<
	ComponentRef<typeof AvatarPrimitive.Fallback>,
	ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		className={cn(avatarFallbackVariants({ className }))}
		data-slot="avatar-fallback"
		ref={ref}
		{...props}
	/>
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage, type AvatarProps }
