import { FacebookIcon, InstagramIcon, GithubIcon } from "./Icons";
import type { Member } from "../data/team";

export default function Socials({ links }: { links: Member["socials"] }) {
  return (
    <div className="socials">
      {links.facebook && <a href={links.facebook} aria-label="Facebook"><FacebookIcon /></a>}
      {links.instagram && <a href={links.instagram} aria-label="Instagram"><InstagramIcon /></a>}
      {links.github && <a href={links.github} aria-label="GitHub"><GithubIcon /></a>}
    </div>
  );
}
