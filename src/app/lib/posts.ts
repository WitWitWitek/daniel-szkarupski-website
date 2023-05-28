export const getPosts = async (): Promise<PostItem[]> => {
  const res = await fetch(
    `${process.env.GHOST_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&fields=title,slug,excerpt,feature_image, created_at`,
    { next: { revalidate: 120 } },
  );
  if (!res.ok) {
    throw new Error('Error occured when fetching list of posts.');
  }
  const { posts } = await res.json() as { posts: PostItem[] };
  return posts;
};

export const getSinglePost = async (slug: string): Promise<Post | undefined> => {
  const res = await fetch(
    `${process.env.GHOST_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${process.env.CONTENT_API_KEY}`,
  );
  const { posts } = await res.json() as { posts: Post[] };
  if (Array.isArray(posts)) {
    const [post] = posts;
    return post;
  }
  return undefined;
};
