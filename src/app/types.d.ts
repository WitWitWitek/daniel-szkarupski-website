interface PostItem {
  title: string,
  slug: string,
  feature_image: string,
  excerpt: string,
  created_at: string,
}

interface Post extends PostItem {
  html: string,
  updated_at: string,
  published_at: string,
}
