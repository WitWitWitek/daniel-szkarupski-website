import { IAboutMe } from '@/app/types';
import React from 'react';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { urlFor } from '@/app/lib/sanity';
import styles from '../Post.module.scss';
import PostYouTube from './PostYouTube';

const richTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => <img src={urlFor(value).url()} alt={value.alt} />,
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
