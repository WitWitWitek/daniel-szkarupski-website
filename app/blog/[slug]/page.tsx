import { getSinglePost, getPosts } from '@/app/lib/sanityActions';
import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Post from './components/Post';

type Params = {
  params: {
    slug: string;
  };
};

export const revalidate = 1;

export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
  const post = await getSinglePost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Daniel Szkarupski`,
    description: post.description,
  };
}

export default async function PostPage({ params: { slug } }: Params) {
  const post = await getSinglePost(slug);

  if (!post) {
    notFound();
  }
  return <Post post={post} />;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
