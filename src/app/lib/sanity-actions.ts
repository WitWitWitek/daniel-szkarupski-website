import { client } from './sanity';
import { Post } from '../types';

export async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "posts"] {
      title,
      "slug": slug.current,
      coverImage,
      description
    }`;

  const postsData = await client.fetch(query);
  return postsData;
}

export function getSinglePost() {}
