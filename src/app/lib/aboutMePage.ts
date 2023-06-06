const getAboutMePage = async (): Promise<PostType> => {
  const res = await fetch(
    `${process.env.GHOST_URL}/ghost/api/v3/content/pages/647f73cfa09c461034db45b0?key=${process.env.CONTENT_API_KEY}&fields=title,slug,html`,
    { next: { revalidate: 120 } },
  );
  if (!res.ok) {
    throw new Error('Error occured when fetching aboutme page.');
  }
  const { pages } = await res.json() as { pages: PostType[] };
  if (!Array.isArray(pages)) {
    throw new Error('Error occured when fetching aboutme page.');
  }
  return pages[0];
};

export default getAboutMePage;
