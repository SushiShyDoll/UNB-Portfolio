import { useEffect } from "react";
import { findMember, team } from "../data/team";
import Socials from "./Socials";

interface ProfileModalProps {
  memberId: string | null;
  onClose: () => void;
  onSelectMember: (id: string) => void;
}

export default function ProfileModal({ memberId, onClose, onSelectMember }: ProfileModalProps) {
  const member = findMember(memberId ?? undefined);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (member) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [member, onClose]);

  if (!member) return null;

  const currentIndex = team.findIndex((m) => m.id === member.id);
  const prevMember = team[(currentIndex - 1 + team.length) % team.length];
  const nextMember = team[(currentIndex + 1) % team.length];

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${member.name}'s Profile`}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close profile">
          ✕
        </button>

        <div className="profile-head">
          <img
            className="member-photo profile-photo"
            src={member.photo}
            alt={member.name}
            style={{ borderColor: member.accent }}
          />
          <div className="profile-info">
            <h1 className="display modal-title">{member.name.toUpperCase()}</h1>
            <h2 className="handle">{member.handle}</h2>
            <p className="tagline">{member.tagline}</p>
            <Socials links={member.socials} />
          </div>
        </div>

        <div className="profile-body">
          <div>
            <h3>About</h3>
            <p>{member.bio}</p>
            <h3>Skills & Technologies</h3>
            <ul className="chips">
              {member.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Projects</h3>
            <ul className="projects">
              {member.projects.map((p) => (
                <li key={p.title}>
                  <h4>{p.link ? <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title}</a> : p.title}</h4>
                  <p>{p.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="profile-modal-footer">
          <button className="pill pill--outline" onClick={() => onSelectMember(prevMember.id)}>
            ← {prevMember.name}
          </button>
          <button className="pill pill--primary" onClick={onClose}>
            Back to Team Track
          </button>
          <button className="pill pill--outline" onClick={() => onSelectMember(nextMember.id)}>
            {nextMember.name} →
          </button>
        </div>
      </div>
    </div>
  );
}
