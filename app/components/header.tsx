import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="flex p-4 border-b border-gray-200">
    <Link href="/" className="flex items-center justify-center">
      <Image src="/next.svg" alt="Next js" width={75} height={18} />
    </Link>
    <nav className="flex justify-end items-center gap-4 w-full">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  </header>
  )
}

export default Header