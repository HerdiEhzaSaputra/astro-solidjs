import { defineConfig } from 'astro/config';

// https://astro.build/config
import deno from "@astrojs/deno";
import solidJs from "@astrojs/solid-js";
import unocss from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), unocss()],
  output: "server",
  adapter: deno()
});