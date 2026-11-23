<p align="center">
  <img src="src/lib/assets/favicon.svg" alt="Mattia Degiampietro — monogram" width="64" />
</p>

<h1 align="center">Mattia Degiampietro — Personal Portfolio</h1>

<p align="center">
  A minimal, editorial personal portfolio for my work across the web, embedded
  systems, and Linux infrastructure.
</p>

<p align="center">
  <a href="https://github.com/mattia-degiampietro/personal-portfolio"><img src="https://img.shields.io/badge/Svelte-5-ff3e00?logo=svelte&logoColor=white" alt="Svelte 5" /></a>
  <a href="https://github.com/mattia-degiampietro/personal-portfolio"><img src="https://img.shields.io/badge/SvelteKit-2-ff3e00?logo=svelte&logoColor=white" alt="SvelteKit" /></a>
  <a href="https://github.com/mattia-degiampietro/personal-portfolio"><img src="https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" /></a>
  <a href="https://github.com/mattia-degiampietro/personal-portfolio"><img src="https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://github.com/mattia-degiampietro/personal-portfolio"><img src="https://img.shields.io/badge/Cloudflare%20Pages-deployed-f6821f?logo=cloudflare&logoColor=white" alt="Cloudflare Pages" /></a>
</p>

---

## About

This repository contains the source of my personal portfolio — the site I use to
present who I am, what I've built, and how I work. It doubles as a living case
study: the *"Personal Portfolio Website"* project on the site is this very repo.

The goal was to move away from the typical developer-portfolio aesthetic
(terminal/cyberpunk, monospace, acid palettes, dark-mode only) and build
something quieter — a warm, paper-like, typographic design with an editorial
feel, standard layout patterns, and a fully realized light **and** dark mode.

## Features

- **Minimal editorial design** — serif display type, generous whitespace, restrained borders.
- **Light & dark themes** — persisted via cookie, with no flash of the wrong theme.
- **Markdown-driven case studies** — each project is a `.md` file with YAML frontmatter, rendered through **mdsvex**.
- **Fully static** — pre-rendered HTML, no server required, fast to load and cheap to host.
- **Responsive & accessible** — fluid type, mobile navigation, semantic markup.
- **Built-in project filtering** — case studies can be filtered by tag.

## Tech stack

| Layer        | Choice                                        |
| ------------ | --------------------------------------------- |
| Framework    | [SvelteKit](https://svelte.dev/docs/kit) (Svelte 5, runes mode) |
| Language     | TypeScript                                    |
| Styling      | [Tailwind CSS](https://tailwindcss.com) v4     |
| Markdown     | [mdsvex](https://mdsvex.pngwn.io)              |
| Deployment   | [Cloudflare Pages](https://pages.cloudflare.com) via [Wrangler](https://developers.cloudflare.com/workers/wrangler/) |
| Formatting   | Prettier (+ Svelte & Tailwind plugins)          |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) 18+ (tested with the project's `package.json` engines)
- `npm` (or `pnpm`/`yarn`)

### Install

```sh
npm install
```

### Develop

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). To expose the dev server on
your local network:

```sh
npm run expose
```

### Build

```sh
npm run build
```

The output is written to `build/` (the `@sveltejs/adapter-static` target).

### Preview the production build locally

```sh
npm run preview
```

### Type-check & lint

```sh
npm run check   # svelte-check
npm run lint    # prettier --check
npm run format  # prettier --write
```

## Deployment

The site is deployed to **Cloudflare Pages** using Wrangler:

```sh
npm run deploy
```

This runs `npm run build` and then deploys the `build/` directory to the
Cloudflare Pages project named `personal-portfolio`.

Configuration lives in [`wrangler.toml`](./wrangler.toml) (note: its local name
is `my-portfolio`, while the deploy script targets `personal-portfolio`). Update
the `--project-name` flag in `package.json` if your Pages project has a
different name.

## Project structure

```
.
├── src/
│   ├── lib/
│   │   ├── assets/            # images, favicon, mockups
│   │   ├── components/        # Svelte components (home, about, contact, …)
│   │   │   └── design-system/ # reusable pieces for case-study pages
│   │   └── projects/          # ★ markdown case studies (one .md per project)
│   ├── routes/                # SvelteKit file-based routes
│   │   ├── +page.svelte       # home
│   │   ├── about/             # /about
│   │   ├── contact/           # /contact
│   │   └── work/              # /work  +  /work/[slug]
│   └── styles/global.css      # Tailwind import + design tokens
├── static/                    # robots.txt, etc.
├── vite.config.ts             # adapter-static + mdsvex + tailwind
├── wrangler.toml              # Cloudflare Pages config
└── package.json
```

### Adding a new project

A project is just a Markdown file dropped into `src/lib/projects/`. The
frontmatter drives the list page, the detail page, and the metadata:

```md
---
title: My Project
description: A short summary shown in lists and search results.
date: 2026-01-15
tags: [web, design]
stack: [Svelte, Tailwind, Figma]
link_github: https://github.com/username/my-project
link_project: https://my-project.dev
cover_img_light: /src/lib/assets/my-project-light.png
cover_img_dark: /src/lib/assets/my-project-dark.png
home: true
---
```

- The filename becomes the slug (`my-project.md` → `/work/my-project`).
- `tags` feed the filter buttons on the work page.
- `stack` fills the "TL;DR" table on the detail page.
- `home: true` surfaces the project on the homepage; omit it to keep it only on `/work`.

Because the content is compiled by mdsvex, Markdown bodies can use the Svelte
components in `src/lib/components/design-system/` (e.g. `HeroImage`,
`TextParagraph`, `ArticlePalette`, `ArticleTypography`).

## Design notes

The identity is built on two typefaces and a restrained palette:

- **Cormorant Garamond** — display, headlines, project titles
- **DM Sans** — body, navigation, metadata

The single accent color — **Flame Pea `#D85A30`**, a terracotta/salmon — ties
the warm paper palette (light) and the quiet charcoal palette (dark) together.
All tokens are defined as CSS variables in
[`src/styles/global.css`](./src/styles/global.css).

## License

This project is currently **not licensed** — the site content and source are
© Mattia Degiampietro, all rights reserved. If you'd like to reuse parts of it,
feel free to open an issue or [get in touch](#contact).

## Contact

- **Email** — mattia.degiampietro@gmail.com
- **GitHub** — [@mattia-degiampietro](https://github.com/mattia-degiampietro)
- **LinkedIn** — [Mattia Degiampietro](https://www.linkedin.com/in/mattia-degiampietro)

---

*Built with [SvelteKit](https://svelte.dev/docs/kit), styled with
[Tailwind CSS](https://tailwindcss.com), and deployed on
[Cloudflare Pages](https://pages.cloudflare.com).*
