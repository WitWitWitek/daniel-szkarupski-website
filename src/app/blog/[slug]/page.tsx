import { getSinglePost } from '@/app/lib/posts'
import Link from 'next/link'
import React from 'react'
import Post from './components/Post'

type Params = {
    params: {
        slug: string
    }
}

export default async function PostPage({ params: { slug } }: Params) {
    const post = await getSinglePost(slug);
    return <Post post={post} />
}