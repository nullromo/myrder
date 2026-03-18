import { defineConfig } from 'vite';
import eslint from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    build: { outDir: process.env.VITE_BUILD_PATH ?? 'build' },
    plugins: [react(), eslint()],
});
