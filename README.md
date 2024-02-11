This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 使用的東西

```md
1. Nextjs - App Router
2. Typescript
3. next-mdx-remote
4. rehype 相關套件 - Markdown 轉 html 套件
5. remark 相關套件 - Markdown 轉 html 套件
6. gray-matter
7. MUI - UI 框架
8. next-themes - 深淺色模式切換
9. tailwindcss - CSS 框架
```

文章放在`posts`目錄底下，部署在 Vercel 上，新增文章後透過 Vercel 連動會自動重新部署，可以直接透過 vs code 新增 markdown 文章。

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.
