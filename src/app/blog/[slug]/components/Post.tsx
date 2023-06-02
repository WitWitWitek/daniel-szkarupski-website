/* eslint-disable @typescript-eslint/naming-convention */
import Link from 'next/link';
import parse, {
  HTMLReactParserOptions, Element, domToReact, DOMNode,
} from 'html-react-parser';
import styles from '../Post.module.scss';

type PostProps = {
  post: Post
};

type Image = {
  src: string,
  alt: string
};

interface ImgElement extends Element {
  attribs: Image,
}

const isImgElement = (domNode: DOMNode): boolean => domNode instanceof Element && domNode.name === 'figure' && domNode.attribs.class.includes('image-card');

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    // if (
    //   domNode instanceof Element && domNode.attribs?.class?.includes('kg-gallery-card')) {
    //   const galleryCardChild = domNode.childNodes[0];
    //   const galleryContainerChildren = (galleryCardChild as Element).childNodes[0];
    //   const galleryRows = (galleryContainerChildren as Element).childNodes;
    //   const imgs = (galleryRows as Element[]).map(
    //     (image) => (image.childNodes[0] as ImgElement).attribs,
    //   );
    //   console.log(domNode);
    //   return <ImageGallery images={imgs} />;
    // }
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
    return domNode;
  },
};

export default function Post({ post }: PostProps) {
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
