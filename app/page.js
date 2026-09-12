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
          Super 30 වටයේ ආරම්භක දවසේම ගීතයක් ගයන්න මට අවස්ථාව
          ලැබුණා. ❤️
        </p>

        <ul className="facts">
          <li>📅 සැප්තැම්බර් 13 – ඉරිදා</li>
          <li>⏰ රාත්‍රී 7.30 සිට</li>
          <li>📺 Hiru TV – LIVE</li>
        </ul>

        <p className="body-text">
          මම ගායනා කරන වෙලාවේ ඔබේ කොළ මනාපය දෙන්න පුළුවන් වෙන්නේ Hiru Star App
          එකෙන් විතරයි. 💚
        </p>
      </section>

      <section className="card" id="download">
        <h2 className="section-title">📲 පියවර 1 – App එක Download කරගන්න</h2>

        <p className="body-text">
          ඔබේ දුරකථනයට ගැලපෙන බොත්තම එබුවාම කෙලින්ම App එක ලැබෙනවා.
          Download කරලා ලියාපදිංචියත් වෙලා තියන්න.
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
          තරගය පටන් ගන්න වෙලාවේ හැමෝම එකවර App එකට එන නිසා අන්තර්ජාල වේගය අඩු
          වෙන්න පුළුවන්. ඒ නිසා අන්තිම මොහොත දක්වා නොසිට, පුළුවන් වෙලාවක දැන්ම
          Download කරගත්තොත් හොඳයි.
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
            🎬 Download කරගන්නේ කොහොමද කියලා මේ පොඩි වීඩියෝ එකෙන් බලන්න
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
          ඔබ මට දුන්න ආදරය, ආශිර්වාදය නිසා, හදවතින්ම ඔබට ස්තූතියි.
        </p>
        <p className="body-text">
          මේ වටයේදීත් ඔබේ උදව්ව මට ලැබෙයි කියලා ඉතාම නිහතමානීව බලාපොරොත්තු
          වෙනවා. ❤️
        </p>
        <p className="sign-off">- පවනි ඉරුෂිනි</p>
      </section>

      <section className="qr">
        <h2 className="section-title">📷 මේ පිටුව යාළුවන්ටත් Share කරන්න</h2>
        <ShareActions />
      </section>

      <p className="tags">#PawaniIrushini #HiruStarSeason05 #HiruStar</p>
    </main>
  );
}
