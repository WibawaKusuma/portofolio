import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

const iconMap = {
  WhatsApp: MessageCircle,
  Instagram: Instagram,
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

function Footer({ socials }) {
  return (
    <footer className="section-shell pb-8 pt-2">
      <div className="flex flex-col gap-4 rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-5 shadow-[var(--shadow-soft)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:px-6">
        <p className="text-sm text-[var(--color-text-muted)]">
          © 2026 [Nama Kamu]. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socials.map((social) => {
            const Icon = iconMap[social.label];

            return (
              <a
                key={social.label}
                href={social.url}
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
