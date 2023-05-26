export const getPosts = async (): Promise<{posts: PostItem[]}> => {
    const res = await fetch(
		`${process.env.GHOST_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&fields=title,slug,excerpt,feature_image`
	)

    return res.json()
}

export const getSinglePost = async (slug: string): Promise<Post> => {
    const res = await fetch(
		`${process.env.GHOST_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${process.env.CONTENT_API_KEY}`
	)
    const { posts } = await res.json()
    return posts[0]
}