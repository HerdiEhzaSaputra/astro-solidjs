import { defineConfig } from 'astro/config';

// https://astro.build/config
import deno from "@astrojs/deno";
import solidJs from "@astrojs/solid-js";
import unocss from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  // site: 'https://xezar.deno.dev/',

  integrations: [solidJs(), unocss(),],
  adapter: deno(),
  output: "server",
  build: {
    serverEntry: 'main.mjs'
  },
  server: { port: 3000, host: false},
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      external: ['broken-npm-package'],
    }
  }
});