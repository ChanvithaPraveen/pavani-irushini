import Image from "next/image";
import poster from "../public/pawani-super30.jpeg";
import voteGuide from "../public/how-to-vote.jpeg";
import ShareActions from "./ShareActions";

const ANDROID_URL = "https://hiru.lk/0gPGaM";
const IOS_URL = "https://hiru.lk/3vaMCF";

function DownloadIcon() {
  return (
    <svg
      className="btn-icon"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  );
}

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
          ආදරණීය ඔබට, Super 30 වටයේ ආරම්භක දවසේම ගීතයක් ගයන්න මට අවස්ථාව ලැබිලා
          තියෙනවා. ❤️
        </p>

        <ul className="facts">
          <li>📅 සැප්තැම්බර් 13 – ඉරිදා</li>
          <li>⏰ රාත්‍රී 7.30 සිට</li>
          <li>📺 Hiru TV – LIVE</li>
        </ul>

        <p className="body-text">
          මම ගයන වෙලාවේ ඔබේ කොළ මනාපය මට දෙන්න පුළුවන් වෙන්නේ Hiru Star App එකෙන්
          විතරයි. ඒ නිසා පහළ තියෙන පියවර දෙක කලින්ම බලලා තියාගන්න. 💚
        </p>
      </section>

      <section className="card" id="download">
        <h2 className="section-title">📲 පියවර 1 – App එක Download කරගන්න</h2>

        <p className="body-text">
          ඔබේ දුරකථනයට ගැලපෙන බොත්තම එබුවම කෙලින්ම App එක ලැබෙනවා. Download කරලා
          ලියාපදිංචි වෙන්නත් අමතක කරන්න එපා.
        </p>

        <div className="links">
          <a
            className="btn btn-blink"
            href={ANDROID_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon />
            <span>Android – Download කරගන්න</span>
          </a>
          <a
            className="btn btn-blink"
            href={IOS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon />
            <span>iOS – Download කරගන්න</span>
          </a>
        </div>

        <p className="note">
          තරගය පටන් ගන්න වෙලාවේ හැමෝම එකවර App එකට එන නිසා අන්තර්ජාලය හෙමින් වෙන්න
          පුළුවන්. අන්තිම මොහොත දක්වා නොසිට දැන්ම Download කරගන්න.
        </p>

        <figure className="media">
          <video
            className="video"
            src="/how-to-download.mp4"
            controls
            playsInline
            preload="metadata"
            poster="/pawani-super30.jpeg"
          />
          <figcaption className="media-caption">
            🎬 Download කරගන්නේ කොහොමද කියලා මේ වීඩියෝ එකෙන් බලාගන්න
          </figcaption>
        </figure>
      </section>

      <section className="card" id="vote">
        <h2 className="section-title">💚 පියවර 2 – මනාපය දෙන්නේ කොහොමද?</h2>

        <figure className="media media-flush">
          <Image
            className="guide-img"
            src={voteGuide}
            alt="Hiru Star තරගයේදී පවනි සඳහා Vote කරන ආකාරය පිළිබඳ උපදෙස්"
            placeholder="blur"
            sizes="(max-width: 720px) 100vw, 720px"
          />
        </figure>
      </section>

      <section className="card">
        <p className="body-text">
          🙏 මේ දක්වා මා එක්ක හිටපු ඔබේ ආදරණීය සහයෝගය මේ වටයේදීත් මට දෙන්න. ඔබ
          නැතුව මේ ගමන නෑ. ❤️
        </p>
        <p className="sign-off">– පවනි ඉරුෂිනි</p>
      </section>

      <section className="qr">
        <h2 className="section-title">📷 මේ පිටුව යාළුවන්ටත් බෙදාගන්න</h2>
        <ShareActions />
      </section>

      <p className="tags">#PawaniIrushini #HiruStarSeason05 #HiruStar</p>
    </main>
  );
}
