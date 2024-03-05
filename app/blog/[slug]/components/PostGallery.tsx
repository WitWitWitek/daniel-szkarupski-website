/* eslint-disable @next/next/no-img-element */
import styles from "./PostGallery.module.scss";

type Props = {
  urls: string[];
};

export default function PostGallery({ urls }: Props) {
  return (
    <div className={styles.post__gallery}>
      {urls.map((url) => (
        <figure className={styles["post__gallery-figure"]} key={url}>
          <img className={styles["post__gallery-image"]} src={url} alt={url} />
        </figure>
      ))}
    </div>
  );
}
