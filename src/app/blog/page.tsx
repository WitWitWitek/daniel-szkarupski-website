import type { Metadata } from 'next';
import { getPosts } from '../lib/posts';
import styles from './BlogPage.module.scss';
import PostListItem from './components/PostListItem';

export const metadata: Metadata = {
  title: 'Blog | Daniel Szkarupski',
  description: 'Kandydat nr 2 Konfederacji do Sejmu RP w wojewódzctwie opolskim',
};

export default async function BlogPage() {
  const postsData: Promise<PostItem[]> = getPosts();
  const posts = await postsData;

  return (
    <>
      <h1 className={styles['blog-page__title']}>Blog:</h1>
      <ul>
        {posts.map((post) => <PostListItem key={post.slug} postItem={post} />)}
      </ul>
    </>
  );
}
