#!/usr/bin/env node
/**
 * Generates the QR code that points at the deployed site.
 *
 * Usage:
 *   npm run qr                                  # uses SITE_URL env or the default below
 *   npm run qr -- https://your-domain.com       # explicit URL
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const DEFAULT_URL = "https://pavani-irushini.vercel.app";

const url = process.argv[2] || process.env.SITE_URL || DEFAULT_URL;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

const options = {
  errorCorrectionLevel: "H",
  margin: 2,
  color: { dark: "#0b0703", light: "#ffffff" },
};

await mkdir(publicDir, { recursive: true });

const png = await QRCode.toBuffer(url, { ...options, type: "png", width: 1024 });
await writeFile(path.join(publicDir, "qr.png"), png);

const svg = await QRCode.toString(url, { ...options, type: "svg" });
await writeFile(path.join(publicDir, "qr.svg"), svg);

console.log(`QR generated for ${url}`);
console.log("  public/qr.png");
console.log("  public/qr.svg");
