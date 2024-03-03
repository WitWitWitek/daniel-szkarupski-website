import Link from 'next/link';
import { FaRegClock } from 'react-icons/fa';
import { dateHandler } from '@/app/lib/dataHandler';
import { Post } from '@/app/types';
import { getGalleryImages, urlFor } from '@/app/lib/sanity';
import styles from '../Post.module.scss';
import PostContent from './PostContent';
import PostGallery from './PostGallery';

type PostProps = {
  post: Post;
};

export default function PostPage({ post }: PostProps) {
  const { title, content, coverImage, releaseDate, gallery } = post;
  return (
    <div className={styles.post}>
      <div
        style={{ backgroundImage: urlFor(coverImage).url() ? `url(${urlFor(coverImage).url()})` : '' }}
        className={styles.post__image}
      >
        <Link href="/blog" className={styles['post__btn-back--absolute']}>
          Powrót do bloga
        </Link>
        <h2 className={styles.post__title}>
          {title}
          <span className={styles['post__title-backdrop']} />
        </h2>
      </div>
      <div className={styles['post__content-container']}>
        <div className={styles['post__publication-time']}>
          <FaRegClock />
          <time>{dateHandler(releaseDate)}</time>
        </div>
        <PostContent content={content} />
        {gallery && <PostGallery urls={getGalleryImages(gallery)} />}
        <Link href="/blog" className={styles['post__btn-back']}>
          Powrót do bloga
        </Link>
      </div>
    </div>
  );
}
