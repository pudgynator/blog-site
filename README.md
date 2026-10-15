This is a training project for learning Next.js. It is a small blog site with a home page, an about page, a list of recent posts, and a page for each post.

Posts are stored in a local SQLite database and read with Prisma. The list links to `/posts/[id]`, and a spinner shows while a page is still loading its data. The layout includes a header, a footer, and styles that change with the screen size.

## Database

The database is the local SQLite file `dev.db`. Create the `Post` table, then open Prisma Studio to add or edit posts:

```bash
npx prisma generate
npx prisma migrate dev
npx prisma studio --url "file://$(pwd)/dev.db"
```

Studio prints a local address, usually `http://localhost:5555`. Leave that terminal running while you use it, and stop it with `Ctrl+C`. The app reads the same file through `DATABASE_URL` in `.env`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


