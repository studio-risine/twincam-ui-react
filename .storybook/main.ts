import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: [
		'../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
        '@storybook/addon-themes',
        '@storybook/addon-docs',
        '@storybook/addon-vitest'
    ],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		defaultName: 'Documentation',
	},
}
export default config
