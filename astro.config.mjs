import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: 'https://macsimir.github.io',
    base: '/portoflio',

    vite: {
        plugins: [tailwindcss()],
    },
});