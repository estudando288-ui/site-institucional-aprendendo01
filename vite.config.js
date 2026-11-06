import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(--dirname, 'index.html'),
                sobre: resolve(--dirname, 'sobre.html'),
                servicos: resolve(--dirname, 'servicos.html'),
                contactos: resolve(--dirname, 'contactos.html'),
            },
        },
    },
});