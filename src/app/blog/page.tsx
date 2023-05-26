import { getPosts } from "../lib/posts"
import styles from './BlogPage.module.scss'
import PostListItem from './components/PostListItem'

export const revalidate = 60

export default async function BlogPage() {
    const { posts } = await getPosts()
    return (
       <>
            <h1 className={styles["blog-page__title"]}>Blog:</h1>
            <ul>
                {posts.map(post => <PostListItem key={post.slug} postItem={post} />)}
            </ul>
       </>
    )
}