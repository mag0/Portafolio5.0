import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: "http://localhost:4321/",
  output: "server",
  adapter: vercel({
    runtime: "nodejs22.x",
  }),
});
