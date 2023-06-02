import React from 'react';
import styles from '../Post.module.scss';

type Image = {
  src: string,
  alt: string
};

export default function ImageGallery({ images }: { images: Image[] }) {
  if (!images) {
    return <div>No images yet.</div>;
  }
  return (
    <div className={styles.post__gallery}>
      {images.map((image) => (
        <img key={image.src} className={styles['post__gallery-image']} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}
