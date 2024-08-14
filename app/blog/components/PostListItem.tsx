import Link from "next/link";
import { dateHandler } from "@/app/lib/dataHandler";
import { FaRegClock as TimeIcon } from "react-icons/fa";
import { Post } from "@/app/types";
import { urlFor } from "@/app/lib/sanity";
import styles from "../BlogPage.module.scss";
import Image from "next/image";

interface PostListItemProps {
  postItem: Post;
}

export default function PostListItem({ postItem }: PostListItemProps) {
  const { title, slug, description, releaseDate, coverImage } = postItem;
  return (
    <li className={styles["blog-page__post"]}>
      <div className={styles["blog-page__post-image"]}>
        <Image src={urlFor(coverImage).url()} alt={title} fill />
        <Link
          href={`/blog/${slug}`}
          className={styles["blog-page__post-title"]}
        >
          {title}
        </Link>
      </div>
      <div className={styles["blog-page__post-time"]}>
        <TimeIcon /> <time>{dateHandler(releaseDate)}</time>
      </div>
      <div className={styles["blog-page__post-excerpt"]}>
        <p className={styles["blog-page__post-excerpt-paragraph-extended"]}>
          {description}
        </p>
        <p className={styles["blog-page__post-excerpt-paragraph"]}>{`${
          description !== null ? description.substring(0, 200) : description
        }`}</p>
        <Link href={`/blog/${slug}`} className={styles["blog-page__post-btn"]}>
          Czytaj całość
        </Link>
      </div>
    </li>
  );
}
