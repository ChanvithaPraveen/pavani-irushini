# පවනි ඉරුෂිනි — Hiru Star Season 5 (SUPER 30)

Single-page Next.js site promoting Pawani Irushini's SUPER 30 performance on
Hiru TV, with the poster, the Sinhala caption, app download links, and a QR
code visitors can scan to reach the page.

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
| `app/layout.js` | Metadata, Open Graph tags, Sinhala font |
| `app/globals.css` | Gold/black theme styling |
| `public/pawani-super30.jpeg` | Poster image |
| `public/qr.png`, `public/qr.svg` | Generated QR code |
| `scripts/generate-qr.mjs` | QR generator |
