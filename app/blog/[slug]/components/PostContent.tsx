/* eslint-disable @next/next/no-img-element */
import { IAboutMe } from "@/app/types";
import React from "react";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { urlFor } from "@/app/lib/sanity";
import styles from "../Post.module.scss";
import PostYouTube from "./PostYouTube";
import Image from "next/image";

const richTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => (
      <div>
        <div className={styles["post__figure-container"]}>
          <Image
            className={styles["post__figure-image"]}
            src={urlFor(value).url()}
            alt={value.alt}
            fill
          />
        </div>
        <p className={styles["post__figure-figcaption"]}>{value.alt}</p>
      </div>
    ),
    youtube: ({ value }) => <PostYouTube src={value.url} />,
  },
};

export default function PostContent({ content }: IAboutMe) {
  return (
    <article className={styles.post__content}>
      <PortableText value={content} components={richTextComponents} />
    </article>
  );
}
