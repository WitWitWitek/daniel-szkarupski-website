/* eslint-disable react/no-danger */
import Link from 'next/link';
import styles from '../Post.module.scss';

type PostProps = {
  post: Post
};

export default function Post({ post }: PostProps) {
  const { title, html } = post;
  return (
    <div>
      <Link href="/blog">Powrót</Link>
      <h2 className={styles.post__title}>{title}</h2>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
