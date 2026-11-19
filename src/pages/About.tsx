import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    if (isExpanded) {
      setIsExpanded(false);
      // Smoothly return to the top of the About section when shrinking
      const el = document.getElementById("about");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section id="about" className="page about-section">
      <div className="about-container">
        {/* Section Header (Split Layout: Title + Subtitle + Badge on Left, Description on Right) */}
        <div className="about-header split">
          <div className="about-title-col">
            <h2 className="display about-display-title">
              ABOUT<br />US
            </h2>
            <p className="about-subtitle">The Collective & Origin Story</p>
            <div className="station-badge">
              <span className="station-dot" />
              <span className="station-text">LRT-1 UN AVENUE STATION</span>
            </div>
          </div>

          <div className="about-desc-col">
            <p className="about-lead-text">
              <strong>UNB</strong> (United Nation Boys) is a creative and engineering collective
              forged in the lecture halls, workshop laboratories, and campus grounds of <strong>TUP-Manila</strong> (Technological
              University of the Philippines). Unified by a deep curiosity for technology and design, we crossed paths as
              engineering students driven by a mutual instinct to build, experiment, and turn ambitious ideas into functional realities.
            </p>
            <p className="about-body-text">
              What began as daily train ride conversations waiting on the platform of the United Nations LRT-1 Station quickly
              matured into our creative incubator. Every afternoon commute became an open forum for exchanging code architectures,
              critiquing user interfaces, untangling thesis problems, and sharing personal goals—transforming routine transit through
              Manila's historic university belt into the foundation of our collective identity.
            </p>
            <p className="about-body-text">
              Through demanding academic deadlines, collaborative hackathons, competitive capstone projects, and real-world freelance
              dispatches, our bond evolved from university peers into a dedicated brotherhood. Today, UNB stands as both an engineering alliance
              and a lifelong creative cohort, combining our individual specializations across systems, design, web, and cloud infrastructure
              to craft polished, purposeful digital experiences.
            </p>
          </div>
        </div>

        {/* Expandable / Collapsible Subsections */}
        <div
          className={`about-subsections-expandable ${
            isExpanded ? "expanded" : "collapsed"
          }`}
          aria-hidden={!isExpanded}
        >
          <div className="about-subsections">
            {/* Subsection 1: TUP Manila ({title banner} {contents}) */}
            <div className="about-sub-row">
              <div className="sub-col sub-title-col">
                <div className="sub-banner-wrapper">
                  <div className="sub-banner-card banner-left">
                    <div
                      className="sub-banner-img"
                      style={{ backgroundImage: "url('/images/tup-bg.jpg')" }}
                      role="img"
                      aria-label="TUP Manila Campus Building"
                    />
                    <div className="sub-banner-overlay" />
                    <div className="sub-banner-content">
                      <h3 className="sub-banner-title">TUP MANILA</h3>
                      <p className="sub-banner-sub">Technological University of the Philippines</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sub-col sub-content-col">
                <p className="sub-desc">
                  UNB was forged in the lecture halls, computer laboratories, and engineering workshops
                  of TUP-Manila (Technological University of the Philippines). Our academic discipline
                  and technical foundation took root here, where rigorous coursework, hands-on lab experiments,
                  and collaborative problem-solving challenged us to become resourceful builders.
                </p>
              </div>
            </div>

            {/* Subsection 2: UN Station ({contents} {title banner}) */}
            <div className="about-sub-row reversed">
              <div className="sub-col sub-content-col">
                <p className="sub-desc">
                  Every afternoon, our homeward commute converged at the United Nations LRT-1 Station platform.
                  What began as train ride stories and daily reunions waiting on the platform quickly evolved
                  into a dedicated circle of builders, designers, and creative thinkers—giving birth to our
                  group's name and turning routine commutes into shared brainstorming sessions.
                </p>
              </div>

              <div className="sub-col sub-title-col">
                <div className="sub-banner-wrapper">
                  <div className="sub-banner-card banner-right">
                    <div
                      className="sub-banner-img"
                      style={{ backgroundImage: "url('/images/unb-bg.jpg')" }}
                      role="img"
                      aria-label="LRT-1 UN Avenue Station Landmark"
                    />
                    <div className="sub-banner-overlay" />
                    <div className="sub-banner-content">
                      <h3 className="sub-banner-title">UN STATION</h3>
                      <p className="sub-banner-sub">LRT-1 Station Origin & Daily Reunions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subsection 3: Brotherhood ({title banner} {contents}) */}
            <div className="about-sub-row">
              <div className="sub-col sub-title-col">
                <div className="sub-banner-wrapper">
                  <div className="sub-banner-card banner-left">
                    <div
                      className="sub-banner-img"
                      style={{ backgroundImage: "url('/images/group-thumb.jpg')" }}
                      role="img"
                      aria-label="UNB Brotherhood Collective"
                    />
                    <div className="sub-banner-overlay" />
                    <div className="sub-banner-content">
                      <h3 className="sub-banner-title">BROTHERHOOD</h3>
                      <p className="sub-banner-sub">Built on genuine camaraderie, shared grit, and shared dreams</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sub-col sub-content-col">
                <p className="sub-desc">
                  More than just project teammates, we formed a lasting brotherhood anchored in mutual trust,
                  shared grit, and creative ambition. Through university deadlines, late-night code jams,
                  and shared milestones, we built lasting friendships and continue to support each other's
                  growth across both engineering and life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Bottom Minimal Toggle Button (Matches Mockup) */}
        <div className="about-toggle-wrap">
          <button
            type="button"
            className="about-minimal-toggle"
            onClick={handleToggle}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Collapse subsections" : "Expand subsections"}
          >
            <span className="toggle-label">
              {isExpanded ? "Less About Us" : "More About Us"}
            </span>
            <svg
              className={`toggle-chevron-circle ${isExpanded ? "open" : ""}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.2" />
              <path
                d="M8.5 10.5L12 14L15.5 10.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
