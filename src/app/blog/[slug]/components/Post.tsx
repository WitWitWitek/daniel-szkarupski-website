'use client';

import Link from 'next/link';
import parse, {
  HTMLReactParserOptions, Element, domToReact, DOMNode,
} from 'html-react-parser';
import galleryHandler from '@/app/lib/galleryHandler';
import styles from '../Post.module.scss';
import PostYouTube from './PostYouTube';
import PostGallery from './PostGallery';

type PostProps = {
  post: PostType
};

export interface ImgElement extends Element {
  attribs: ImageType,
}

interface IframeElement extends Element {
  attribs: IframeType,
}

const isImgElement = (domNode: DOMNode): boolean => domNode instanceof Element && domNode.name === 'figure' && domNode.attribs.class.includes('image-card');
const isIframeElement = (domNode: DOMNode): boolean => domNode instanceof Element && domNode.name === 'iframe';
const isGalleryContainerElement = (domNode: DOMNode): boolean => domNode instanceof Element && domNode.attribs?.class?.includes('kg-gallery-card');
const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (isGalleryContainerElement(domNode)) {
      const { children } = domNode as Element;
      if (Array.isArray(children)) {
        const result: ImgElement[] = [];
        galleryHandler(children[0] as unknown as ImgElement, result);
        return <PostGallery images={result} />;
      }
    }
    if (isImgElement(domNode)) {
      const { children } = domNode as Element;
      return (
        <div>
          {domToReact(children, {
            replace: (imgNode) => {
              const imgElement = imgNode as ImgElement;
              return (
                <figure className={styles.post__figure}>
                  <img
                    className={styles['post__figure-image']}
                    src={imgElement.attribs.src}
                    alt={imgElement.attribs.alt}
                  />
                  <figcaption className={styles['post__figure-figcaption']}>{imgElement.attribs.alt}</figcaption>
                </figure>
              );
            },
          })}
        </div>
      );
    }
    if (isIframeElement(domNode)) {
      const { attribs } = domNode as IframeElement;
      return <PostYouTube src={attribs.src} allow={attribs.allow} title={attribs.title} />;
    }
    return domNode;
  },
};

export default function Post({ post }: PostProps) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { title, html, feature_image } = post;
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${feature_image})` }}
        className={styles.post__image}
      >
        <Link href="/blog" className={styles['post__btn-back']}>Powrót do bloga</Link>
        <h2 className={styles.post__title}>{title}</h2>
      </div>
      <article className={styles.post__article}>
        {parse(html, options)}
      </article>
    </div>
  );
}
