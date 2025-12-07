import type { Config } from 'tailwindcss'

export const twincamPreset: Config = {
	plugins: [],
	theme: {
		extend: {
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			borderRadius: {
				lg: 'var(--radius-lg)',
				md: 'var(--radius-md)',
				sm: 'var(--radius-sm)',
				xl: 'var(--radius-xl)',
			},
			colors: {
				accent: {
					DEFAULT: 'var(--color-accent)',
					foreground: 'var(--color-accent-foreground)',
				},
				background: 'var(--color-background)',
				border: 'var(--color-border)',
				card: {
					DEFAULT: 'var(--color-card)',
					foreground: 'var(--color-card-foreground)',
				},
				chart: {
					'1': 'var(--color-chart-1)',
					'2': 'var(--color-chart-2)',
					'3': 'var(--color-chart-3)',
					'4': 'var(--color-chart-4)',
					'5': 'var(--color-chart-5)',
				},
				destructive: {
					DEFAULT: 'var(--color-destructive)',
					foreground: 'var(--color-destructive-foreground)',
				},
				foreground: 'var(--color-foreground)',
				input: 'var(--color-input)',
				muted: {
					DEFAULT: 'var(--color-muted)',
					foreground: 'var(--color-muted-foreground)',
				},
				popover: {
					DEFAULT: 'var(--color-popover)',
					foreground: 'var(--color-popover-foreground)',
				},
				primary: {
					DEFAULT: 'var(--color-primary)',
					foreground: 'var(--color-primary-foreground)',
				},
				ring: 'var(--color-ring)',
				secondary: {
					DEFAULT: 'var(--color-secondary)',
					foreground: 'var(--color-secondary-foreground)',
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
		},
	},
}

export default twincamPreset
