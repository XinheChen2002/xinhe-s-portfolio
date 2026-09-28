import { siteConfig } from "@/data/portfolio";

export function ContactFooter() {
  return (
    <footer className="contact" id="contact">
      <div className="shell contact__inner">
        <p className="eyebrow">Have a complex problem in view?</p>
        <h2>Let&apos;s make the next system clear.</h2>
        <p className="contact__copy">
          I&apos;m open to product, research, and interdisciplinary opportunities where evidence and
          thoughtful execution matter.
        </p>
        <a className="contact__email" href={`mailto:${siteConfig.email}`}>
          Let&apos;s Talk <span aria-hidden="true">↗</span>
        </a>
        <div className="contact__meta">
          <span>{siteConfig.location}</span>
          <span>© {new Date().getFullYear()} Xinhe Chen</span>
        </div>
      </div>
    </footer>
  );
}
