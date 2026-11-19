import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ProfileModal from "./components/ProfileModal";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const location = useLocation();

  const isProgrammaticScroll = useRef(false);
  const scrollTimeout = useRef<number | null>(null);

  // Scroll to section helper with instant active indicator update
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    isProgrammaticScroll.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 850);

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Open member profile modal
  const handleSelectMember = (memberId: string) => {
    setSelectedMemberId(memberId);
    window.history.pushState(null, "", `/team/${memberId}`);
  };

  // Close member profile modal
  const handleCloseMember = () => {
    setSelectedMemberId(null);
    window.history.pushState(null, "", "/#team");
  };

  // Check URL pathname for direct /team/:id access
  useEffect(() => {
    const match = location.pathname.match(/^\/team\/([^/]+)/);
    if (match && match[1]) {
      setSelectedMemberId(match[1]);
    } else {
      setSelectedMemberId(null);
    }

    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(targetId);
      }, 100);
    }
  }, [location.pathname, location.hash]);

  // Robust scroll spy to accurately track sections (Home, About, Team, Contact)
  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      // Bottom of page check (ensures Contact highlights at page end)
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // Check sections from bottom to top against reading line
      const scrollPos = window.scrollY + 180;
      const sections = ["contact", "team", "about", "home"];

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    const handleUserScroll = () => {
      if (isProgrammaticScroll.current) {
        isProgrammaticScroll.current = false;
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleUserScroll, { passive: true });
    window.addEventListener("touchmove", handleUserScroll, { passive: true });

    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const navbarVariant = activeSection === "home" ? "dark" : "light";

  return (
    <div className="portfolio-app">
      <Navbar
        activeSection={activeSection}
        variant={navbarVariant}
        onNavigate={scrollToSection}
        onSelectMember={handleSelectMember}
      />

      <main className="portfolio-main">
        <Home onExplore={() => scrollToSection("about")} />
        <About />
        <Team onSelectMember={handleSelectMember} />
        <Contact />
      </main>

      {selectedMemberId && (
        <ProfileModal
          memberId={selectedMemberId}
          onClose={handleCloseMember}
          onSelectMember={handleSelectMember}
        />
      )}
    </div>
  );
}
