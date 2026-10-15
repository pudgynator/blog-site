import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import Loading from '../../components/loading'
import { prisma } from '../../../prisma/client'

interface Post {
  id: number
  title: string
  body: string
}

async function PostDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post: Post | null = await prisma.post.findUnique({
    where: {
      id: parseInt(id)
    }
  })

  if (!post) {
    notFound()
  }

  return (
    <article className="flex flex-col gap-4">
      <h1 className="text-xl font-bold capitalize sm:text-3xl">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
      <Link href="/posts" className="hover:text-brown-400">
        Back to posts
      </Link>
    </article>
  )
}

const PostPage = ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <Suspense fallback={<Loading />}>
      <PostDetails params={params} />
    </Suspense>
  )
}

export default PostPage
