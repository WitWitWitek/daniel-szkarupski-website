import React from 'react';
import styles from './PostYouTube.module.scss';

type Props = {
  src: string;
};

export default function PostYouTube({ src }: Props) {
  return (
    <div className={styles['post__youtube-container']}>
      <iframe
        src={src}
        title="Embedded youtube"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
        className={styles['post__youtube-iframe']}
      />
    </div>
  );
}
