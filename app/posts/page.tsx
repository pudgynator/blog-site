import Link from 'next/link';
import { Suspense } from 'react'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import Loading from '../components/loading'
import { prisma } from '../../prisma/client'
import { Post } from '@/types/post';

async function createPost(formData: FormData) {
  'use server'

  const title = String(formData.get('title') ?? '').trim()
  const body = String(formData.get('body') ?? '').trim()

  if (!title || !body) {
    return
  }

  await prisma.post.create({
    data: { title, body },
  })

  revalidatePath('/posts')
  redirect('/posts')
}

const Posts = async () => {
  const posts = await prisma.post.findMany();

  return (
    <ul className="overflow-hidden rounded-xl border border-stone-200">
      {posts.slice(0, 5).map((post: Post) => (
        <li key={post.id} className="border-b border-stone-200 last:border-b-0">
          <Link
            href={`/posts/${post.id}`}
            prefetch={true}
            className="group flex items-center justify-between gap-4 px-4 py-4 transition-colors hover:bg-taupe-50 sm:px-5"
          >
            <span className="text-base font-semibold capitalize text-stone-900 group-hover:text-taupe-600 sm:text-xl">
              {post.title}
            </span>
            <span className="shrink-0 text-sm text-stone-400 transition-colors group-hover:text-taupe-700">
              Read
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const CreatePostForm = () => {
  return (
    <form action={createPost} className="flex flex-col gap-4 rounded-xl border border-taupe-200 bg-taupe-50 p-5 sm:p-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-stone-900 sm:text-2xl">Create a new post</h2>
        <p className="text-sm text-stone-500">Add a title and a body, then publish it.</p>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="title" className="text-sm font-medium text-stone-700">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Post title"
          required
          className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-900 outline-none transition focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="body" className="text-sm font-medium text-stone-700">Body</label>
        <textarea
          id="body"
          name="body"
          placeholder="Write the post..."
          required
          className="h-40 resize-y rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-900 outline-none transition focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
        />
      </div>
      <button
        type="submit"
        className="w-fit rounded-lg bg-taupe-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700"
      >
        Create post
      </button>
    </form>
  )
}

const PostsPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 py-4 sm:py-8">
      <section className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-4xl">Recent posts</h1>
          <p className="text-stone-500">The latest writing from this blog.</p>
        </header>
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col gap-10">
            <Posts />
            <CreatePostForm />
          </div>
        </Suspense>
      </section>
    </div>
  )
}

export default PostsPage;
