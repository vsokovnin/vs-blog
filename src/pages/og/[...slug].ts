import { OGImageRoute } from 'astro-og-canvas';
import { fetchPosts } from '~/utils/blog';

export const prerender = true;

const posts = await fetchPosts();

const pages: Record<string, { title: string; description: string }> = Object.fromEntries(
  posts.map((post) => [
    `${post.slug}.png`,
    {
      title: post.title,
      description: post.excerpt || '',
    },
  ])
);

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'slug',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[24, 24, 27]],
    border: {
      color: [124, 58, 237],
      width: 20,
      side: 'inline-start',
    },
    font: {
      title: {
        size: 64,
        lineHeight: 1.2,
        families: ['Inter'],
        weight: 'Bold',
        color: [255, 255, 255],
      },
      description: {
        size: 32,
        lineHeight: 1.4,
        families: ['Inter'],
        weight: 'Normal',
        color: [156, 163, 175],
      },
    },
    fonts: [
      './src/assets/fonts/inter-bold.ttf',
      './src/assets/fonts/inter-regular.ttf',
    ],
  }),
});
