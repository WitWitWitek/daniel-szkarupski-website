interface PostItem {
  title: string,
  slug: string,
  feature_image: string,
  excerpt: string,
  created_at: string,
}

interface PostType extends PostItem {
  html: string,
  updated_at: string,
  published_at: string,
}

type ImageType = {
  src: string,
  alt: string
};

type IframeType = {
  allow: string,
  src: string,
  title: string
};

interface Person {
  name: string,
  position: string,
  thumbnail: string,
}
