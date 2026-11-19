import { FacebookIcon, InstagramIcon, GithubIcon } from "../components/Icons";

interface HomeProps {
  onExplore?: () => void;
}

export default function Home({ onExplore: _onExplore }: HomeProps) {
  return (
    <section id="home" className="home">
      {/* Background layer: National Museum of Natural History */}
      <div className="home-bg-layer" aria-hidden="true" />

      {/* Main Content: Left text & Right group photo */}
      <div className="home-content-wrap">
        <div className="home-text-block">
          <h1 className="home-title">UNB</h1>
          <p className="home-desc">
            A circle of friends brought together at TUP-Manila, named after the
            United Nations LRT Station we often pass through on our way
            home. Built on shared experiences, lasting friendships, and
            unforgettable memories.
          </p>
        </div>

        {/* Group photo cutout positioned in the bottom-right quadrant */}
        <div className="home-group-wrap" aria-hidden="true">
          <img
            src="/images/group.png"
            alt="The five members of UNB in their uniforms"
            className="home-group-img"
          />
        </div>
      </div>

      {/* Solid white horizontal bar spanning across the bottom */}
      <div className="home-bar" aria-hidden="true" />

      {/* Hero Footer */}
      <footer className="home-footer">
        <div className="home-contact-info">
          <a href="tel:+639994737196" className="home-link">+63 999 473 7196</a>
          <a href="mailto:unitednationboys@gmail.com" className="home-link">unitednationboys@gmail.com</a>
        </div>

        <div className="socials home-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
        </div>
      </footer>
    </section>
  );
}
