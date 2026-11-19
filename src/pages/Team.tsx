import { useRef } from "react";
import { team } from "../data/team";
import Socials from "../components/Socials";

interface TeamProps {
  onSelectMember: (id: string) => void;
}

export default function Team({ onSelectMember }: TeamProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="team" className="page team-section">
      {/* Edge-to-edge Railway Track Graphic Spanning the Entire Section */}
      <div className="team-full-track" aria-hidden="true">
        <svg className="track-svg" width="100%" height="220" preserveAspectRatio="none">
          <defs>
            <pattern id="train-track-pattern" width="120" height="220" patternUnits="userSpaceOnUse">
              <rect x="0" y="5" width="34" height="210" rx="3" fill="#d9d9d9" />
              <rect x="0" y="22" width="120" height="20" fill="#d0d0d0" />
              <rect x="0" y="178" width="120" height="20" fill="#d0d0d0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#train-track-pattern)" />
        </svg>
      </div>

      <div className="team-container split">
        {/* Left Title Column - Aligned to About Us and Contact Us */}
        <div className="team-title-col">
          <h2 className="display team-display-title">
            OUR<br />TEAM
          </h2>

          <div className="station-badge">
            <span className="station-dot" />
            <span className="station-text">LRT-1 COMMUTER SQUAD</span>
          </div>

          <p className="team-subtext">
            Meet the five members of UNB. A collective of tech builders, designers,
            and creative thinkers forged through daily train rides from TUP-Manila.
          </p>
        </div>

        {/* Right Track Area with Fully Scrollable Horizontal Cards */}
        <div className="team-track-area">
          {/* Mobile track graphic when columns are stacked */}
          <div className="team-mobile-track" aria-hidden="true">
            <svg className="track-svg" width="100%" height="220" preserveAspectRatio="none">
              <rect width="100%" height="100%" fill="url(#train-track-pattern)" />
            </svg>
          </div>

          <div
            ref={scrollerRef}
            className="team-scroller"
            tabIndex={0}
            aria-label="Team member cards across tracks"
          >
            <div className="team-cards-convoy">
              {team.map((m) => (
                <article
                  className="member-card"
                  key={m.id}
                  onClick={() => onSelectMember(m.id)}
                >
                  <div className="photo-frame" style={{ borderColor: m.accent }}>
                    <img
                      className="member-photo"
                      src={m.photo}
                      alt={`${m.name} (${m.handle})`}
                      loading="lazy"
                    />
                  </div>

                  <h3 className="member-handle">{m.handle}</h3>

                  <p className="member-bio">{m.bio}</p>

                  <div className="card-actions">
                    <button
                      className="pill view-profile-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectMember(m.id);
                      }}
                      aria-label={`View full profile of ${m.name}`}
                    >
                      View Profile
                    </button>
                    <div onClick={(e) => e.stopPropagation()}>
                      <Socials links={m.socials} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
