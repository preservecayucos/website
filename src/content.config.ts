import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every file in src/content/updates/ becomes one post on the Updates page.
// Pages CMS writes these files; the fields below must match .pages.yml.
const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { updates };
