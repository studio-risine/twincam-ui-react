import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react-vite";

import "@/styles/index.css";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		layout: "centered",

		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: "todo",
		},
	},
	decorators: [
		withThemeByClassName<ReactRenderer>({
			themes: {
				light: "",
				dark: "dark",
			},
			defaultTheme: "dark",
		}),
	],
	initialGlobals: {
		a11y: {
			manual: false,
		},
	},
};

export default preview;
