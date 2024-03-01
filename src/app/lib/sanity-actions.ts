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

export async function getSinglePost(slug: string): Promise<Post> {
  const query = `
        *[_type == "posts" && slug.current == '${slug}'] {
            "slug": slug.current,
              title,
              description,
              content,
              coverImage,
          }[0]`;

  const postData = await client.fetch(query);
  return postData;
}

export async function getAboutMeSection() {
  const query = `*[_type == "about"] {
    content
  }[0]`;

  const aboutData = await client.fetch(query);
  return aboutData;
}
