# පවනි ඉරුෂිනි — Hiru Star Season 5 (SUPER 30)

Single-page Next.js site promoting Pawani Irushini's SUPER 30 performance on
Hiru TV, with the poster, the Sinhala caption, app download links, and a share
section.

## Share features

- **QR code** — scannable on screen, and downloadable as PNG (`⬇️ QR Download`)
  so it can be dropped into posters, stories, or printed handouts.
- **Copy URL** — the live page URL in a read-only field with a one-tap copy
  button (falls back to `execCommand` selection copy on non-secure contexts).
- **Share** — native share sheet via the Web Share API on mobile, plus direct
  WhatsApp and Facebook share links everywhere.

The URL is read from `window.location` at runtime, so copy/share always point
at whatever domain the site is actually served from — no rebuild needed after a
domain change. Only the QR image is baked at authoring time.

## Stack

- Next.js 15 (App Router)
- React 19
- `qrcode` (build-time QR generation — no runtime dependency)
- Google Font: Noto Sans Sinhala (self-hosted by `next/font`)

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## QR code

The QR image lives at `public/qr.png` (plus `public/qr.svg` for print) and is
committed to the repo. Regenerate it whenever the deployed URL changes:

```bash
npm run qr -- https://your-real-domain.com
# or
SITE_URL=https://your-real-domain.com npm run qr
```

Default URL if none is given: `https://pawani-irushini.vercel.app`

## Deploy to Vercel

```bash
npm i -g vercel      # once
vercel               # preview deploy
vercel --prod        # production deploy
```

Or push this repo to GitHub and import it at https://vercel.com/new — Vercel
detects Next.js automatically, no configuration needed.

After the production domain is known, regenerate the QR with that URL and
redeploy so the printed/scanned code points at the live site.

## Files

| Path | Purpose |
| --- | --- |
| `app/page.js` | The page: poster, Sinhala caption, links, QR |
| `app/ShareActions.js` | Client component: copy URL, QR download, share |
| `app/layout.js` | Metadata, Open Graph tags, Sinhala font |
| `app/globals.css` | Gold/black theme styling |
| `public/pawani-super30.jpeg` | Poster image |
| `public/qr.png`, `public/qr.svg` | Generated QR code |
| `scripts/generate-qr.mjs` | QR generator |
