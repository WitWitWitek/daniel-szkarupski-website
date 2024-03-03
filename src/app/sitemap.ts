import { MetadataRoute } from 'next';
import { getPostsSlugs } from './lib/sanityActions';

const BASE_URL = 'https://daniel-szkarupski.pl';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesXML: MetadataRoute.Sitemap = ['/', '/blog'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }));

  const slugs = await getPostsSlugs();
  const slugsXML: MetadataRoute.Sitemap = slugs.map(({ slug }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...routesXML, ...slugsXML];
}
