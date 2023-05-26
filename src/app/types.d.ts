interface PostItem {
    title: string,
    slug: string,
    feature_image: string,
    excerpt: string,
}

interface Post extends PostItem {
    html: string,
    created_at: string,
    updated_at: string,
    published_at: string,
}