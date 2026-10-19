'use server'

import { prisma } from "@/prisma/client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createPost(formData: FormData) {
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

export async function deletePost(id: number) {
  await prisma.post.delete({
    where: { id },
  })

  revalidatePath('/posts')
  revalidatePath(`/posts/${id}`)
  redirect('/posts')
}

export async function updatePost(id: number, formData: FormData) {
  const title = String(formData.get('title')).trim();
  const body = String(formData.get('body')).trim();

  if (!title || !body || !id) {
    return
  }

  await prisma.post.update({
    where: { id },
    data: { title, body },
  })

  revalidatePath('/posts')
  revalidatePath(`/posts/${id}`)
  redirect(`/posts/${id}`)
}
  