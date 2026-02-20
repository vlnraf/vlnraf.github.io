import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://vlnraf.github.io',
  integrations: [mdx(), sitemap(), tailwind()],
  // NOTE: Make sure this matches your supported languages in the file: src/consts.ts
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"]
  },
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkMath],
    rehypePlugins: [rehypeKatex],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
      themes: {
        light: 'catppuccin-mocha',
        dark: 'catppuccin-latte',
      },
    }
  },
});


