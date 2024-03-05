import { client } from './sanity';
import { Post } from '../types';

export async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "posts"] | order(releaseDate desc) {
      title,
      "slug": slug.current,
      coverImage,
      releaseDate,
      description
    }`;

  const postsData = await client.fetch(query);
  return postsData;
}

export async function getPostsSlugs(): Promise<{ slug: string }[]> {
  const query = `*[_type == "posts"] {
      "slug": slug.current,
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
              releaseDate,
              content,
              coverImage,
              gallery
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
