import { useEffect, useRef, useState } from "react";
import { team } from "../data/team";

interface NavbarProps {
  activeSection: string;
  variant: "dark" | "light";
  onNavigate: (sectionId: string) => void;
  onSelectMember: (memberId: string) => void;
}

export default function Navbar({ activeSection, variant, onNavigate, onSelectMember }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (wrapRef.current && !wrapRef.current.contains(target)) {
        setOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        const toggleBtn = document.querySelector(".mobile-menu-toggle");
        if (toggleBtn && !toggleBtn.contains(target)) {
          setMobileMenuOpen(false);
        }
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileMenuOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const navClass = (id: string) =>
    "nav-link" + (activeSection === id ? " active" : "");

  const handleMobileNav = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className={`navbar navbar--${variant}`}>
      <button
        onClick={() => {
          setMobileMenuOpen(false);
          onNavigate("home");
        }}
        className="brand brand-btn"
        aria-label="UNB Home"
      >
        <img
          src="/images/logo.png"
          alt="UNB Train Logo"
          width={28}
          height={28}
          className="brand-logo"
        />
        <span className="brand-text">UNB</span>
      </button>

      {/* Desktop Navigation (>= 769px) */}
      <nav className="desktop-nav" aria-label="Main Navigation">
        <button
          className={navClass("home")}
          onClick={() => onNavigate("home")}
        >
          HOME
        </button>

        <button
          className={navClass("about")}
          onClick={() => onNavigate("about")}
        >
          ABOUT US
        </button>

        <div className="dropdown" ref={wrapRef}>
          <button
            className={navClass("team")}
            onClick={() => {
              onNavigate("team");
              setOpen(false);
            }}
          >
            OUR TEAM
          </button>
          <button
            className="dropdown-toggle"
            aria-haspopup="menu"
            aria-expanded={open}
            aria-label="Toggle team member list"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((prev) => !prev);
            }}
          >
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              aria-hidden="true"
              className={open ? "flip" : ""}
            >
              <path
                d="M1 1l4 4 4-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {open && (
            <ul className="dropdown-menu" role="menu">
              {team.map((m) => (
                <li key={m.id} role="none">
                  <button
                    role="menuitem"
                    className="dropdown-item"
                    onClick={() => {
                      setOpen(false);
                      onNavigate("team");
                      onSelectMember(m.id);
                    }}
                  >
                    <span>{m.name}</span>
                    <small>{m.handle}</small>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          className={navClass("contact")}
          onClick={() => onNavigate("contact")}
        >
          CONTACT US
        </button>
      </nav>

      {/* Mobile Hamburger Toggle Button (<= 768px) */}
      <button
        className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>

      {/* Mobile Drawer Dropdown (<= 768px) */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="mobile-nav-drawer">
          <button
            className={`mobile-nav-link ${activeSection === "home" ? "active" : ""}`}
            onClick={() => handleMobileNav("home")}
          >
            HOME
          </button>
          <button
            className={`mobile-nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={() => handleMobileNav("about")}
          >
            ABOUT US
          </button>

          <div className="mobile-team-block">
            <div className="mobile-team-header">
              <button
                className={`mobile-nav-link ${activeSection === "team" ? "active" : ""}`}
                onClick={() => handleMobileNav("team")}
              >
                OUR TEAM
              </button>
              <button
                className="mobile-team-toggle"
                aria-label="Toggle team members"
                aria-expanded={mobileTeamOpen}
                onClick={() => setMobileTeamOpen((prev) => !prev)}
              >
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 10 6"
                  className={mobileTeamOpen ? "flip" : ""}
                >
                  <path
                    d="M1 1l4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {mobileTeamOpen && (
              <div className="mobile-team-sublist">
                {team.map((m) => (
                  <button
                    key={m.id}
                    className="mobile-team-item"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate("team");
                      onSelectMember(m.id);
                    }}
                  >
                    <span className="m-name">{m.name}</span>
                    <span className="m-handle">{m.handle}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className={`mobile-nav-link ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => handleMobileNav("contact")}
          >
            CONTACT US
          </button>
        </div>
      )}
    </header>
  );
}
