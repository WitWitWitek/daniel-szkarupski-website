import Image from "next/image";
import styles from "./PostGallery.module.scss";

type Props = {
  urls: string[];
};

export default function PostGallery({ urls }: Props) {
  return (
    <div className={styles.post__gallery}>
      {urls.map((url) => (
        <figure className={styles["post__gallery-figure"]} key={url}>
          <div className={styles["post__gallery-container"]}>
            <Image
              className={styles["post__gallery-image"]}
              src={url}
              alt={url}
              fill
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
