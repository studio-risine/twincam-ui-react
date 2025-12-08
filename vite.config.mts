/// <reference types="vitest/config" />
import path, { resolve } from 'node:path';
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		lib: {
			entry: resolve(dirname, 'src/index.ts'),
			fileName: 'index',
			formats: ['es']
		},
		rollupOptions: {
			external: [
				'react',
				'react-dom',
				'react/jsx-runtime',
				'class-variance-authority',
				'clsx',
				'tailwind-merge',
				'lucide-react',
				/^@radix-ui\/.*/
			],
		},
		emptyOutDir: false
	},
  plugins: [react(), tailwindcss(), dts({
    entryRoot: resolve(dirname, 'src'),
    outDir: resolve(dirname, 'dist'),
    insertTypesEntry: true,
    tsconfigPath: resolve(dirname, 'tsconfig.build.json'),
    exclude: [
      '**/*.stories.{ts,tsx}',
      '**/*.test.{ts,tsx}',
      '**/*.mock.{ts,tsx}',
      '**/storybook-static/**',
      '**/libs/**',
      '**/shared/**'
    ]
  })],
  resolve: {
    alias: {
      '@': resolve(dirname, './src')
    }
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // Run tests for Storybook stories
          storybookTest({ configDir: path.join(dirname, '.storybook') })
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }
    ]
  }
});
