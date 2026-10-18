import { cacheLife } from "next/cache";
import { prisma } from "../../prisma/client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Post } from "@/types/post";

export async function PostDetails({ params }: { params: Promise<{ id: string }> }) {
    'use cache';
    cacheLife('days');
  
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
      <article className="mx-auto flex w-full max-w-2xl flex-col gap-8 py-4 sm:py-8">
        <Link
          href="/posts"
          className="w-fit text-sm font-medium text-stone-500 underline-offset-4 transition-colors hover:text-stone-900 hover:underline"
        >
          ← Back to posts
        </Link>
        <header className="flex flex-col gap-3 border-b border-stone-200 pb-6">
          <p className="text-xs font-medium uppercase tracking-widest text-stone-400">Post</p>
          <h1 className="text-3xl font-semibold capitalize tracking-tight text-stone-900 sm:text-4xl">
            {post.title}
          </h1>
        </header>
        <p className="whitespace-pre-wrap text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
          {post.body}
        </p>
      </article>
    )
  }