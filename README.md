# G. Vannur — Premium Portfolio

Dark tech portfolio for a Senior Frontend / Full Stack Engineer. Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, GSAP, and a procedural React Three Fiber hero.

## Features

- Cinematic R3F workspace hero (lazy-loaded; CSS fallback on mobile / reduced motion)
- Sticky glass navbar with active section tracking
- About, Skills (tabbed), Experience timeline, Project case cards, Contact form
- Resend-backed contact API
- SEO: metadata, sitemap, robots, Person JSON-LD

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the next free port if 3000 is taken).

## Environment Variables

Create a `.env.local` file:

```env
# Required for the contact form to send email
RESEND_API_KEY=re_xxxxxxxx

# Optional overrides
CONTACT_TO_EMAIL=gvs1.dev@gmail.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

Without `RESEND_API_KEY`, `POST /api/contact` returns **503** with a clear configuration message (no fake success).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — serve production build

## Notes

- Resume download: `/images/gvs_fs.pdf`
- Contact: `+91 7019723240`, `gvs1.dev@gmail.com`, WhatsApp
- No LinkedIn URL is published

## License

MIT
