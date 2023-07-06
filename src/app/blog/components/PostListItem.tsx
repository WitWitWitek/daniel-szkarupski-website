/* eslint-disable @typescript-eslint/naming-convention */
import Link from 'next/link';
import { dateHandler } from '@/app/lib/dataHandler';
import { FaRegClock as TimeIcon } from 'react-icons/fa';
import styles from '../BlogPage.module.scss';

interface PostListItemProps {
  postItem: PostItem;
}

export default function PostListItem({ postItem }: PostListItemProps) {
  const { title, slug, excerpt, feature_image, published_at } = postItem;
  return (
    <li className={styles['blog-page__post']}>
      <div style={{ backgroundImage: `url(${feature_image || ''})` }} className={styles['blog-page__post-image']}>
        <Link href={`/blog/${slug}`} className={styles['blog-page__post-title']}>
          {title}
        </Link>
      </div>
      <div className={styles['blog-page__post-time']}>
        <TimeIcon /> <time>{dateHandler(published_at)}</time>
      </div>
      <div className={styles['blog-page__post-excerpt']}>
        <p className={styles['blog-page__post-excerpt-paragraph-extended']}>{excerpt}</p>
        <p className={styles['blog-page__post-excerpt-paragraph']}>{`${
          excerpt !== null ? excerpt.substring(0, 200) : excerpt
        }...`}</p>
        <Link href={`/blog/${slug}`} className={styles['blog-page__post-btn']}>
          Czytaj całość
        </Link>
      </div>
    </li>
  );
}
