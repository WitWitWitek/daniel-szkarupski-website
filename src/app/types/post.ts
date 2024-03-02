import { TypedObject } from '@portabletext/types';

export interface Post {
  title: string;
  slug: string;
  coverImage: string;
  releaseDate: string;
  description: string;
  content: TypedObject | TypedObject[];
  gallery: any[];
}
