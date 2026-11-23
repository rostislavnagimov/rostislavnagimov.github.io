import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import {z} from "astro/zod"

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()).default([]),
    repo: z.url(),
    crates: z.url().optional(),
    order: z.number().default(100),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    date: z.string().optional(),
    lang: z.string().default('en'),
  }),
});

export const collections = {projects, blog}
