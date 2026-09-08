import Image from "next/image";
import poster from "../public/pawani-super30.jpeg";
import ShareActions from "./ShareActions";

const ANDROID_URL = "https://hiru.lk/0gPGaM";
const IOS_URL = "https://hiru.lk/3vaMCF";

export default function Home() {
  return (
    <main className="page">
      <div className="poster">
        <Image
          src={poster}
          alt="පවනි ඉරුෂිනි – Hiru Star Season 5 SUPER 30, සැප්තැම්බර් 13 ඉරිදා"
          priority
          placeholder="blur"
          sizes="(max-width: 720px) 100vw, 720px"
        />
      </div>

      <section className="card">
        <h1 className="headline">✨ සැප්තැම්බර් 13, මේ ඉරිදා! ✨</h1>
        <p className="subhead">🌟 Hiru Star Season 5 – SUPER 30 🌟</p>

        <p className="body-text">
          Super 30 වටයේ ආරම්භක දිනයේදීම පවනිට ගීතවත් වීමට අවස්ථාව ලැබී තිබෙනවා. ❤️
        </p>

        <ul className="facts">
          <li>📅 සැප්තැම්බර් 13 – ඉරිදා</li>
          <li>⏰ රාත්‍රී 7.30 සිට</li>
          <li>📺 Hiru TV – LIVE</li>
        </ul>

        <div className="links">
          <a className="btn" href={ANDROID_URL} target="_blank" rel="noopener noreferrer">
            📲 Android – Hiru Star App
          </a>
          <a className="btn" href={IOS_URL} target="_blank" rel="noopener noreferrer">
            📲 iOS – Hiru Star App
          </a>
        </div>

        <p className="vote">
          📱 Hiru Star App එක Download කරගෙන පවනි ගායනා කරන අවස්ථාවේදී ඔබේ{" "}
          <strong>කොළ මනාපය (Green Vote)</strong> ලබා දෙන්න! 💚
        </p>

        <p className="body-text" style={{ marginTop: 16 }}>
          🙏 මේ දක්වා පවනි සමඟ සිටි ඔබේ ආදරණීය සහයෝගය මේ වටයේදීත් ලබා දෙමු. ❤️
        </p>
      </section>

      <section className="qr">
        <h2 className="section-title">📷 මෙම පිටුව බෙදාගන්න</h2>

        <div className="qr-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/qr.png" alt="මෙම පිටුවට යන QR කේතය" width={200} height={200} />
        </div>
        <p className="qr-caption">
          QR කේතය Scan කර මෙම පිටුවට පිවිසෙන්න
        </p>

        <ShareActions />
      </section>

      <p className="tags">#PawaniIrushini #HiruStarSeason05 #HiruStar</p>
    </main>
  );
}
