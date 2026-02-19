import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Atendimento', 'Vendas', 'Automação', 'WhatsApp', 'Presença Digital']),
    icon: z.string(),
    accentColor: z.string(),
    readTime: z.string(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
