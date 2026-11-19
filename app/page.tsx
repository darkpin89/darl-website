import Image from "next/image";
import { site } from "@/data/site";
import MailingList from "@/components/MailingList";
import { Apple, Arrow, Heart, Instagram, Play, Sparkle, Spotify, TikTok, YouTube } from "@/components/Icons";

const nav = ["Home", "Music", "Video", "About", "Support", "Gallery"];
const gallery = [
  { src: "/images/vocal.jpg", alt: "DARL vocalist" },
  { src: "/images/guitar.jpg", alt: "DARL guitarist" },
  { src: "/images/bass.jpg", alt: "DARL bassist" },
  { src: "/images/keys.jpg", alt: "DARL keyboardist" },
  { src: "/images/drums.jpg", alt: "DARL drummer" },
  { src: "/images/band-wide.jpg", alt: "DARL live" },
];

function Socials({ className = "" }: { className?: string }) {
  const s = site.socials;
  return (
    <div className={`socials ${className}`}>
      <a href={s.spotify} target="_blank" rel="noopener" aria-label="Spotify"><Spotify /></a>
      <a href={s.youtube} target="_blank" rel="noopener" aria-label="YouTube"><YouTube /></a>
      <a href={s.instagram} target="_blank" rel="noopener" aria-label="Instagram"><Instagram /></a>
      <a href={s.tiktok} target="_blank" rel="noopener" aria-label="TikTok"><TikTok /></a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#home" className="logo">DARL <Sparkle className="logo-star" /></a>
        <nav className="nav-links">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className={n === "Home" ? "active" : ""}>{n}</a>
          ))}
        </nav>
        <Socials className="nav-socials" />
      </header>

      <main>
        <section id="home" className="hero">
          <Image src="/images/hero.jpg" alt="DARL band" fill priority sizes="100vw" className="hero-img" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow"><Sparkle className="eyebrow-star" />{site.genres.join(" • ")}</p>
            <h1 className="hero-title">DARL</h1>
            <p className="hero-tagline">{site.tagline.map((l) => <span key={l}>{l}</span>)}</p>
            <div className="hero-ctas">
              <a href="#music" className="btn btn-pink"><Play className="i" /> Listen to music</a>
              <a href={site.video.url} target="_blank" rel="noopener" className="btn btn-ghost"><Play className="i" /> Watch video</a>
            </div>
          </div>
          <blockquote className="hero-quote">
            <span className="q">“</span>{site.quote}<span className="q">”</span>
          </blockquote>
          <a href="#music" className="scroll">Scroll<span>↓</span></a>
        </section>

        <div className="cards">
          <section id="music" className="card release">
            <h2 className="label">New release</h2>
            <iframe className="spotify" src={site.release.spotifyEmbed} height="352" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="DARL on Spotify" />
            <div className="platforms">
              <a href={site.release.spotifyUrl} target="_blank" rel="noopener"><Spotify className="i" /> Spotify</a>
              <a href={site.video.url} target="_blank" rel="noopener"><YouTube className="i" /> YouTube</a>
              {site.socials.appleMusic ? <a href={site.socials.appleMusic} target="_blank" rel="noopener"><Apple className="i" /> Apple Music</a> : null}
            </div>
          </section>

          <section id="video" className="card video">
            <h2 className="label">Music video</h2>
            <div className="yt">
              <iframe src={`https://www.youtube-nocookie.com/embed/${site.video.youtubeId}`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="DARL music video" />
            </div>
            <a href={site.video.url} target="_blank" rel="noopener" className="link">Watch on YouTube <Arrow className="i" /></a>
          </section>

          <section id="about" className="card about">
            <h2 className="label">About DARL</h2>
            <p>{site.about}</p>
            <a href="#support" className="btn btn-outline-pink sm">Support us</a>
          </section>
        </div>

        <section id="support" className="support">
          <div className="support-inner">
            <Heart className="support-icon" />
            <div>
              <h2 className="support-title">{site.donate.title}</h2>
              <p>{site.donate.text}</p>
            </div>
            <a href={site.donate.url} target="_blank" rel="noopener" className="btn btn-pink"><Heart className="i" /> Donate on Sociabuzz</a>
          </div>
        </section>

        <section id="gallery" className="card gallery-wrap">
          <div className="gallery-head">
            <h2 className="label">Gallery</h2>
            <a href={site.socials.instagram} target="_blank" rel="noopener" className="link">View gallery <Arrow className="i" /></a>
          </div>
          <div className="gallery">
            {gallery.map((g) => (
              <div key={g.src} className="g-item">
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 700px) 50vw, 16vw" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footer-logo">DARL</div>
        {site.mailingListAction || site.email ? (
          <>
            <p className="footer-copy">Join our mailing list<br />for updates and new music.</p>
            <MailingList />
          </>
        ) : (
          <div className="footer-follow">
            <p className="footer-copy">Follow DARL for<br />updates and new music.</p>
            <Socials />
          </div>
        )}
        <div className="footer-meta">
          {site.email ? <a href={`mailto:${site.email}`}>Booking: {site.email}</a> : null}
          <a href="https://langkahsuka.art">Part of Langkahsuka</a>
          <span>© {new Date().getFullYear()} DARL. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
