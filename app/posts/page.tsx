
import Link from 'next/link';
import React, { Suspense } from 'react'

interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();

  return (
    <ul className="space-y-4">
      {posts.slice(0,5).map((post: Post) => (
        <li key={post.id} className="border-b border-gray-200 pb-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link 
              href={`/posts/${post.id}`}
              className="text-base font-bold capitalize hover:text-gray-500 sm:text-2xl"
              prefetch={true}
            >
              <p className="font-bold capitalize">{post.title}</p>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}

const PostsPage = () => {
  return (
    <div >
      <section className="flex flex-col gap-4">
          <h1 className="text-center text-xl font-bold sm:text-3xl ">Recent Posts</h1>
          <p className="text-gray-600">This is the recent posts page</p>
          <Suspense fallback={<div>Loading...</div>}>
            <Posts />
          </Suspense>
      </section>
    </div>
  )
}

export default PostsPage;
