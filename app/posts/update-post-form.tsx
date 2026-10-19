'use client'

import { useState } from 'react'
import { updatePost } from '@/actions/actions'

export const UpdatePostForm = ({ id, title, body }: { id: number, title: string, body: string }) => {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)

  return (
    <div className="contents">
      {show && (
        <form action={updatePost.bind(null, id)} className="flex w-full basis-full flex-col gap-4 rounded-xl border border-stone-200 bg-stone-50 p-5 sm:p-6">
          <input
            id="title"
            className="rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-900 outline-none transition focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
            type="text"
            name="title"
            defaultValue={title}
            required
            placeholder="Post title"
          />
          <textarea
            className="h-40 resize-y rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-900 outline-none transition focus:border-stone-500 focus:ring-2 focus:ring-stone-200"
            name="body"
            defaultValue={body}
            required
            placeholder="Write the post..."
          />
          <div className="flex justify-between">
            <button type="button" onClick={toggle} className="w-fit rounded-lg bg-red-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700">Cancel</button>
            <button type="submit" className="w-fit rounded-lg bg-stone-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700">Save changes</button>
          </div>
        </form>
      )}
      {!show && (
        <button type="button" onClick={toggle} className="w-fit shrink-0 rounded-lg bg-stone-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700">Update post</button>
      )}
    </div>
  )
}
