import { MagicRings } from "@/components/magic-rings";
import { siteConfig } from "@/data/portfolio";

const navItems = [
  ["Work", "#work"],
  ["Profile", "#profile"],
  ["Experience", "#experience"],
] as const;

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__backdrop" aria-hidden="true" />
      <MagicRings />
      <div className="hero__overlay" aria-hidden="true" />
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Xinhe Chen, back to top">
          XINHE CHEN
        </a>
        <div className="nav__links">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
        <a className="button button--light nav__contact" href={`mailto:${siteConfig.email}`}>
          Let&apos;s Talk <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <div className="hero__content shell">
        <p className="eyebrow">Product Designer × Full-stack Developer</p>
        <h1>Designing systems across space, data, and technology.</h1>
        <p className="hero__lede">
          I turn complex human problems into clear, data-informed digital products.
        </p>
        <div className="hero__actions">
          <a className="button button--accent" href="#work">
            View selected work <span aria-hidden="true">↓</span>
          </a>
          {siteConfig.resumeUrl ? (
            <a className="text-link" href={siteConfig.resumeUrl} download>
              Download resume
            </a>
          ) : (
            <span className="text-link text-link--pending" aria-label="Resume asset pending">
              Resume asset pending
            </span>
          )}
        </div>
      </div>

      <div className="hero__rail shell" aria-hidden="true">
        <span>Selected work</span>
        <span className="hero__line" />
        <span>Scroll</span>
      </div>
    </header>
  );
}
