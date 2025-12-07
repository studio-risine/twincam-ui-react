import type { Config } from "tailwindcss";
import tc96Preset from "@tc96/ui-react/tailwind-preset";

/**
 * Example Tailwind configuration for a consuming application
 * using the TC96 UI Kit preset
 */
export default {
	presets: [tc96Preset],
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@tc96/ui-react/dist/**/*.{js,mjs}",
	],
	// Optional: extend the preset with your own customizations
	theme: {
		extend: {
			// Add your custom styles here
		},
	},
} satisfies Config;
