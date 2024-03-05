import type { Metadata } from 'next';
import styles from './BlogPage.module.scss';
import PostListItem from './components/PostListItem';
import { getPosts } from '../lib/sanityActions';

export const metadata: Metadata = {
  title: 'Blog | Daniel Szkarupski - Ruch Narodowy & Konfederacja',
  description: 'Kandydat nr 2 Konfederacji do Sejmu RP w wojewódzctwie opolskim',
};

export const revalidate = 120;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className={styles['blog-page']}>
      <h1 className={styles['blog-page__title']}>Blog</h1>
      <ul className={styles['blog-page__list']}>
        {posts.map((post) => (
          <PostListItem key={post.slug} postItem={post} />
        ))}
      </ul>
    </section>
  );
}
