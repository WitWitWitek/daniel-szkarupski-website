import styles from './PostGallery.module.scss';

type Props = {
  images: { attribs: ImageType }[],
};

export default function PostGallery({ images }: Props) {
  return (
    <div className={styles.post__gallery}>
      {images.map((image) => (
        <figure
          className={styles['post__gallery-figure']}
          key={image.attribs.src}
        >
          <img
            className={styles['post__gallery-image']}
            src={image.attribs.src}
            alt={image.attribs.alt}
          />
        </figure>
      ))}
    </div>
  );
}
