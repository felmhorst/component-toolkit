import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import type { Plugin } from 'vite';

const scssMock: Plugin = {
    name: 'scss-mock',
    enforce: 'pre',
    resolveId(id) {
        if (id.endsWith('.module.scss')) return '\0scss-mock.js';
    },
    load(id) {
        if (id === '\0scss-mock.js') {
            return 'export default new Proxy({}, { get(_, key) { return key } })';
        }
    },
};

export default defineConfig({
    plugins: [react(), scssMock],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('.', import.meta.url)),
        },
    },
    test: {
        environment: 'jsdom',
        setupFiles: ['./setupTests.ts'],
        globals: true,
        css: false,
    },
});
