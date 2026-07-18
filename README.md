# BAMAROUF STUDIO

The official architectural entrance to three independent specialist worlds:

- [Tarik Bamarouf](https://tarikbamarouf.com/) — Digital Experiences
- [Nour Bamarouf](https://noorbamarouf.com/) — Graphic Design
- [Khaled Bamarouf](https://www.khaledbamarouf.com/) — Systems Engineering

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Plain CSS with local variable fonts

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
npm run start
```

## Public routes

- `/` — bilingual studio experience
- `/robots.txt`
- `/sitemap.xml`

The selected language is stored for the current browser session. English uses LTR composition and Arabic uses a dedicated RTL composition.

The approved source logo variations and mood board are preserved under `brand-sources/`; optimized runtime assets live under `public/brand/`.
