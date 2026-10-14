
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
      {posts.map((post: Post) => (
        <li key={post.id} className="border-b border-gray-200 pb-4">
          <h2 className="text-lg font-bold capitalize">{post.title}</h2>
          <p className="text-gray-600 capitalize">{post.body}</p>
        </li>
      ))}
    </ul>
  )
}

const PostsPage = () => {
  return (
    <div>
        <section className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Recent Posts</h1>
            <p className="text-gray-600">This is the recent posts page</p>
            <Suspense fallback={<div>Loading...</div>}>
              <Posts />
            </Suspense>
        </section>
    </div>
  )
}

export default PostsPage;
