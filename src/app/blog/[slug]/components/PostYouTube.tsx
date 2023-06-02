import React from 'react';
import styles from '../Post.module.scss';

type Props = {
  src: string,
  title: string
  allow: string,
};

export default function PostYouTube({ src, title, allow }: Props) {
  return (
    <div className={styles['post__youtube-container']}>
      <iframe
        src={src}
        title={title}
        allow={allow}
        allowFullScreen
        frameBorder="0"
        className={styles['post__youtube-iframe']}
      />
    </div>
  );
}
