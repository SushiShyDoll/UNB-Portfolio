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
              <strong>UNB (United Nation Boys)</strong> is a group of friends brought together at the{" "}
              <strong>Technological University of the Philippines - Manila (TUP-Manila)</strong>, under the{" "}
              <strong>College of Science</strong>, where we pursue a degree in{" "}
              <strong>Bachelor of Science in Information Technology (BSIT)</strong>. United by our shared interest in technology,
              creativity, and innovation, we developed a friendship that grew beyond the classroom.
            </p>
            <p className="about-body-text">
              Our name was inspired by the <strong>United Nations LRT-1 Station</strong>, a familiar stop we frequently pass through
              on our way home. What started as casual conversations during our daily commutes gradually became a space for exchanging
              ideas, discussing projects, sharing experiences, and exploring our interests in technology and design.
            </p>
            <p className="about-body-text">
              Over time, our shared experiences and academic journey shaped UNB into more than just a circle of friends. Today,
              we bring together our individual skills, ideas, and perspectives to collaborate on projects, explore creative
              possibilities, and turn concepts into meaningful digital experiences.
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
                    UNB was formed within the lecture halls, computer laboratories, and campus grounds of TUP-Manila 
                    (Technological University of the Philippines). 
                    As students of the College of Science pursuing Bachelor of Science in Information Technology, 
                    we built our foundation through academic challenges, hands-on technical work, and collaborative 
                    problem-solving, shaping the skills and experiences that continue to bring us together.
                </p>
              </div>
            </div>

            {/* Subsection 2: UN Station ({contents} {title banner}) */}
            <div className="about-sub-row reversed">
              <div className="sub-col sub-content-col">
                <p className="sub-desc">
                  Our daily journeys home often brought us together at the United Nations LRT-1 Station. 
                  What started as casual conversations and shared train rides gradually grew into a space for exchanging ideas,
                  discussing projects, and sharing experiences. The station eventually became the inspiration behind our name,
                    UNB, and a reminder of the friendships that brought us together.
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
