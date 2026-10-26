import { defineConfig } from 'astro/config';

// Change `site` once the real domain is live (used for canonical URLs and social previews).
export default defineConfig({
  site: 'https://preservecayucos.org',
  trailingSlash: 'always',
});
