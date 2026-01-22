export const CATEGORIES = [
  { slug: 'strategy', name: 'Стратегия' },
  { slug: 'product', name: 'Продукт' },
  { slug: 'growth', name: 'Рост' },
  { slug: 'monetization', name: 'Монетизация' },
  { slug: 'ai', name: 'AI' },
] as const;

export function getCategoryName(slug: string): string {
  return CATEGORIES.find(c => c.slug === slug)?.name ?? slug;
}

export function getCategorySlug(name: string): string {
  return CATEGORIES.find(c => c.name === name)?.slug ?? name.toLowerCase();
}
