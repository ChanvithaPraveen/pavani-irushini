"use client";

import { useEffect, useState } from "react";

const FALLBACK_URL = "https://pawani-irushini.vercel.app";

const SHARE_TEXT =
  "✨ සැප්තැම්බර් 13, මේ ඉරිදා! Hiru Star Season 5 – SUPER 30 හි පවනි ඉරුෂිනි. රාත්‍රී 7.30 සිට Hiru TV – LIVE. කොළ මනාපය ලබා දෙන්න! 💚";

export default function ShareActions() {
  const [url, setUrl] = useState(FALLBACK_URL);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    setUrl(window.location.origin + window.location.pathname);
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

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
      <div className="url-row">
        <input
          id="site-url-input"
          className="url-input"
          type="text"
          value={url}
          readOnly
          onFocus={(e) => e.target.select()}
          aria-label="මෙම පිටුවේ ලිපිනය"
        />
        <button type="button" className="btn btn-copy" onClick={copyUrl}>
          {copied ? "✅ Copy කළා" : "📋 Copy"}
        </button>
      </div>

      <div className="share-grid">
        <a className="btn btn-ghost" href="/qr.png" download="pawani-irushini-qr.png">
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
