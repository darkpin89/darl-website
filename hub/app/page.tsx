import Image from "next/image";
import { label } from "@/data/label";
import { artists, type Artist } from "@/data/artists";
import { Arrow, Instagram, Sparkle, Spotify, TikTok, YouTube } from "@/components/Icons";

function ArtistSocials({ a }: { a: Artist }) {
  const links = [
    { href: a.spotify, label: "Spotify", Icon: Spotify },
    { href: a.youtube, label: "YouTube", Icon: YouTube },
    { href: a.instagram, label: "Instagram", Icon: Instagram },
    { href: a.tiktok, label: "TikTok", Icon: TikTok },
  ].filter((l) => l.href);
  if (!links.length) return null;
  return (
    <div className="socials">
      {links.map(({ href, label, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener" aria-label={`${a.name} on ${label}`}><Icon /></a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">{label.name} <Sparkle className="logo-star" /></a>
        <nav className="nav-links">
          <a href="#artists">Artists</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow"><Sparkle className="eyebrow-star" />{label.eyebrow}</p>
          <h1 className="hero-title">{label.name}</h1>
          <p className="hero-tagline">{label.tagline.map((l) => <span key={l}>{l}</span>)}</p>
          <a href="#artists" className="btn btn-pink">Meet the artists <Arrow className="i" /></a>
        </section>

        <section id="artists" className="artists">
          <div className="section-head">
            <p className="label">Artists</p>
            <span className="count">{String(artists.length).padStart(2, "0")}</span>
          </div>
          <div className="grid">
            {artists.map((a) => (
              <article key={a.name} className="artist">
                <a href={a.url} className="artist-img" aria-label={`Visit ${a.name}`}>
                  <Image src={a.image} alt={a.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                </a>
                <div className="artist-body">
                  <p className="genres">{a.genres.join(" • ")}</p>
                  <h2 className="artist-name"><a href={a.url}>{a.name}</a></h2>
                  <p className="bio">{a.bio}</p>
                  <div className="artist-foot">
                    <a href={a.url} className="link">Visit site <Arrow className="i" /></a>
                    <ArtistSocials a={a} />
                  </div>
                </div>
              </article>
            ))}
            <article className="artist soon">
              <Sparkle className="soon-star" />
              <p className="genres">Coming soon</p>
              <p className="soon-text">More artists joining {label.name}.</p>
            </article>
          </div>
        </section>

        <section id="about" className="about">
          <p className="label">About</p>
          <p className="about-text">{label.about}</p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-logo">{label.name}</div>
        <div className="footer-meta">
          {label.instagram ? <a href={label.instagram} target="_blank" rel="noopener">Instagram</a> : null}
          {label.email ? <a href={`mailto:${label.email}`}>{label.email}</a> : null}
          <span>© {new Date().getFullYear()} {label.name}. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
