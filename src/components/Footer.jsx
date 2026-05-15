import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const iconMap = {
  WhatsApp: FaWhatsapp,
  Instagram: FaInstagram,
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Email: MdEmail,
};

function Footer({ socials }) {
  return (
    <footer className="section-shell pb-8 pt-2">
      <div className="flex flex-col gap-4 rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-5 shadow-[var(--shadow-soft)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:px-6">
        <p className="text-sm text-[var(--color-text-muted)]">
          © 2026 Wibawa. All rights reserved.
        </p>
        {/* <div className="flex items-center gap-2">
          {socials.map((social) => {
            const Icon = iconMap[social.name];

            return (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] transition hover:-translate-y-0.5"
              >
                {Icon ? <Icon size={16} style={{ color: social.color }} /> : null}
              </a>
            );
          })}
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
