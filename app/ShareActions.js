"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

const FALLBACK_URL = "https://pavani-irushini.vercel.app";

const SHARE_TEXT =
  "✨ සැප්තැම්බර් 13, මේ ඉරිදා රාත්‍රී 7.30 සිට Hiru TV එකේ Hiru Star Season 5 – SUPER 30 වටයේ මම ගායනා කරනවා. පුළුවන් නම් Hiru Star App එකෙන් ඔබේ කොළ මනාපය මට දෙන්න. 💚 – පවනි ඉරුෂිනි";

export default function ShareActions() {
  const [url, setUrl] = useState(FALLBACK_URL);
  const [qrSrc, setQrSrc] = useState("/qr.png");
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    setUrl(window.location.origin + window.location.pathname);
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  // Draw the QR from the URL the page is actually served on, so it never
  // points at a stale build-time domain.
  useEffect(() => {
    let cancelled = false;
    QRCode.toDataURL(url, {
      errorCorrectionLevel: "H",
      margin: 2,
      width: 1024,
      color: { dark: "#0b0703", light: "#ffffff" },
    })
      .then((dataUrl) => {
        if (!cancelled) setQrSrc(dataUrl);
      })
      .catch(() => {
        // Keep the pre-generated public/qr.png already in state.
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function copyUrl() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      // Clipboard API needs a secure context; fall back to legacy selection copy.
      const input = document.getElementById("site-url-input");
      if (input) {
        input.select();
        document.execCommand("copy");
        setCopied(true);
      }
    }
  }

  async function nativeShare() {
    try {
      await navigator.share({
        title: "පවනි ඉරුෂිනි | Hiru Star Season 5 – SUPER 30",
        text: SHARE_TEXT,
        url,
      });
    } catch {
      // User dismissed the share sheet, or sharing is unavailable — ignore.
    }
  }

  const facebookHref = "https://www.facebook.com/profile.php?id=61580171928007";

  return (
    <>
      <div className="qr-frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={qrSrc} alt="මෙම පිටුවට යන QR කේතය" width={200} height={200} />
      </div>
      <p className="qr-caption">QR කේතය Scan කර මෙම පිටුවට පිවිසෙන්න</p>

      <div className="url-row">
        <input
          id="site-url-input"
          className="url-input"
          type="text"
          value={url}
          readOnly
          onFocus={(e) => e.target.select()}
          aria-label="මේ පිටුවේ ලිපිනය"
        />
        <button type="button" className="btn btn-copy" onClick={copyUrl}>
          {copied ? "✅ Copy කළා" : "📋 Copy"}
        </button>
      </div>

      <div className="share-grid">
        <a className="btn btn-ghost" href={qrSrc} download="pawani-irushini-qr.png">
          ⬇️ QR Download
        </a>

        {canNativeShare && (
          <button type="button" className="btn btn-ghost" onClick={nativeShare}>
            📤 Share
          </button>
        )}

        <a
          className="btn btn-ghost"
          href={facebookHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          👍 Facebook පිටුව
        </a>
      </div>
    </>
  );
}
