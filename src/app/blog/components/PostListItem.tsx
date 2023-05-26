import Link from 'next/link';
import styles from '../BlogPage.module.scss'

interface PostListItemProps {
    postItem: PostItem
}

export default function PostListItem({ postItem }: PostListItemProps) {
  const { title, slug, excerpt, feature_image} = postItem;
  return (
    <li>
        <div 
          style={{backgroundImage: `url(${feature_image})`}}
          className={styles["blog-page__post-image"]} 
        ></div>
        <h2 className={styles["blog-page__post-title"]}>{title}</h2>
        <p className={styles["blog-page__post-excerpt"]}>{excerpt}</p>
        <Link href={`/blog/${slug}`}>Go to page</Link>
    </li>
  )
}