import { defineConfig } from 'tsup'

export default defineConfig({
	entry: {
		index: 'src/index.ts',
		styles: 'src/styles/index.css',
	},
	format: ['cjs', 'esm'],
	outDir: 'dist',
	clean: true,
	dts: true,
	minify: true,
	sourcemap: true,
	splitting: true, // Enable code splitting for better tree-shaking
	treeshake: true, // Explicit tree-shaking
	tsconfig: 'tsconfig.build.json',
	external: ['react', 'react-dom'], // Don't bundle peer dependencies
})
