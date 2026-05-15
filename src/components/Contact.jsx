import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

const iconMap = {
  WhatsApp: MessageCircle,
  Instagram: Instagram,
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

function Contact({ socials }) {
  return (
    <section id="contact" className="section-shell section-space">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="premium-card rounded-[34px] p-6 md:p-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="section-label">Contact</span>
            <h2 className="section-title mt-5">Mari terhubung dan bangun sesuatu yang menarik</h2>
            <p className="section-description">
              Ganti semua link placeholder di bawah dengan akun asli kamu. Bagian ini cocok untuk
              diarahkan dari link bio agar orang langsung tahu cara menghubungi kamu.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {socials.map((social, index) => {
              const Icon = iconMap[social.label];

              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="premium-card rounded-[26px] p-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-sm text-[var(--color-text-muted)]">{social.label}</p>
                      <p className="font-semibold">{social.handle}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
