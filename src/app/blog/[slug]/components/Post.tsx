/* eslint-disable react/no-danger */
import Link from 'next/link';
import styles from '../Post.module.scss';

type PostProps = {
  post: Post
};

export default function Post({ post }: PostProps) {
  const { title, html, feature_image } = post;
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${feature_image})` }}
        className={styles.post__image}
      >
        <Link href="/blog" className={styles['post__btn-back']}>Powrót do bloga</Link>
        <h2 className={styles.post__title}>{title}</h2>
      </div>
      <article
        className={styles.post__article}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
