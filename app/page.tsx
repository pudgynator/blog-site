import Link from "next/link";


export default function Home() {
  return (
    <div className="mx-auto max-w-7xl bg-white rounded-lg min-h-screen">
      <div className="flex flex-col items-center p-4">
      <nav className="flex justify-end items-center gap-4 w-full mb-4 border-b border-gray-200 pb-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>
        <h1 className="text-center mb-2 text-2xl font-bold">Welcome to the Blog Site</h1>
        <p className="text-gray-600">This is a blog site built with Next.js</p>
        <p className="text-gray-600">It is a simple blog site that allows you to create, read, update and delete blog posts</p>
        <p className="text-gray-600">It is a simple blog site that allows you to create, read, update and delete blog posts</p>
      </main>
      </div>
    </div>
  );
}
