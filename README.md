# 🐑 大师的学习空间

一条普通咸鱼的学习日记与日常感悟

## 🚀 快速启动

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)

## 📁 项目结构

```
sheep-blog/
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── page.tsx       # 首页
│   │   ├── layout.tsx     # 布局
│   │   ├── globals.css    # 全局样式
│   │   └── blog/          # 博客相关页面
│   │       ├── page.tsx   # 文章列表
│   │       └── [slug]/    # 文章详情
│   ├── lib/
│   │   └── posts.ts       # 文章读取逻辑
│   └── content/
│       └── posts/         # Markdown 文章
│           ├── hello-world.md
│           ├── ai-agent-thoughts.md
│           └── how-to-learn.md
├── package.json
└── tailwind.config.js
```

## ✏️ 如何写文章

在 `src/content/posts/` 目录下创建 `.md` 文件：

```markdown
---
title: "文章标题"
date: "2026-04-07"
description: "文章简介"
coverImage: "图片URL（可选）"
---

正文内容...

## 二级标题

- 列表
- 内容
```

## 🌐 部署

### Vercel（推荐）

1. 推送到 GitHub
2. 在 Vercel 导入仓库
3. 自动部署

### 阿里云服务器

需要配置 Nginx 和 PM2，具体教程待补充。

## 📝 域名

当前域名：`www.sygrwz.com`

## 🤝 欢迎交流

有任何问题欢迎交流！