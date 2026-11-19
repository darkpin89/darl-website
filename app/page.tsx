export const revalidate = 86400; // semak tarikh show setiap hari

import Image from "next/image";
import { site } from "@/data/site";
import shows from "@/data/shows.json";
import MailingList from "@/components/MailingList";
import { Apple, Arrow, Instagram, Play, Sparkle, Spotify, TikTok, YouTube } from "@/components/Icons";

const nav = ["Home", "Music", "About", "Shows", "Gallery", "Contact"];
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
      <a href={s.spotify} aria-label="Spotify"><Spotify /></a>
      <a href={s.youtube} aria-label="YouTube"><YouTube /></a>
      <a href={s.instagram} aria-label="Instagram"><Instagram /></a>
      <a href={s.tiktok} aria-label="TikTok"><TikTok /></a>
    </div>
  );
}

export default function Home() {
  const upcoming = shows
    .filter((s) => new Date(s.date) >= new Date(new Date().toDateString()))
    .sort((a, b) => a.date.localeCompare(b.date));

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
              <a href={site.release.watchUrl} className="btn btn-ghost"><Play className="i" /> Watch video</a>
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
            <div className="release-body">
              <Image src={site.release.cover} alt={`${site.release.title} cover`} width={320} height={320} className="cover" />
              <div>
                <h3 className="release-title">{site.release.title}</h3>
                <p className="muted">{site.release.type}<br />Out now</p>
              </div>
            </div>
            {site.release.spotifyEmbed ? (
              <iframe className="spotify" src={site.release.spotifyEmbed} height="152" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Spotify player" />
            ) : null}
            <div className="platforms">
              <a href={site.socials.spotify}><Spotify className="i" /> Spotify</a>
              <a href={site.socials.youtube}><YouTube className="i" /> YouTube</a>
              <a href={site.socials.appleMusic}><Apple className="i" /> Apple Music</a>
            </div>
          </section>

          <section id="shows" className="card shows">
            <h2 className="label">Upcoming shows</h2>
            {upcoming.length === 0 ? (
              <p className="muted">No shows announced yet. Follow us for updates.</p>
            ) : (
              <ul>
                {upcoming.slice(0, 3).map((s) => {
                  const d = new Date(s.date + "T00:00:00");
                  return (
                    <li key={s.date + s.venue}>
                      <div className="date">
                        <span className="day">{String(d.getDate()).padStart(2, "0")}</span>
                        <span className="mon">{d.toLocaleString("en", { month: "short" })}</span>
                      </div>
                      <div className="venue">
                        <strong>{s.venue}</strong>
                        <span className="muted">{s.city}</span>
                      </div>
                      <a href={s.tickets} className="btn btn-outline sm">Tickets</a>
                    </li>
                  );
                })}
              </ul>
            )}
            <a href="#shows" className="link">View all shows <Arrow className="i" /></a>
          </section>

          <section id="about" className="card about">
            <h2 className="label">About DARL</h2>
            <p>{site.about}</p>
            <a href="#gallery" className="btn btn-outline-pink sm">Read our story</a>
          </section>
        </div>

        <section id="gallery" className="card gallery-wrap">
          <div className="gallery-head">
            <h2 className="label">Gallery</h2>
            <a href={site.socials.instagram} className="link">View gallery <Arrow className="i" /></a>
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
        <p className="footer-copy">Join our mailing list<br />for updates and new music.</p>
        <MailingList />
        <div className="footer-meta">
          <a href={`mailto:${site.email}`}>Booking: {site.email}</a>
          <span>© {new Date().getFullYear()} DARL. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
