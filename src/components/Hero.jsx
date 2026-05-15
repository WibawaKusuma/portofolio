import { motion } from "framer-motion";
import { ArrowRight, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

const roles = ["Web Developer", "Frontend Developer", "Laravel Developer"];

const socialIcons = {
  WhatsApp: MessageCircle,
  Instagram: Instagram,
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

function Hero({ socials }) {
  return (
    <section id="home" className="section-shell section-space relative pt-12 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <span className="section-label">Personal Portfolio</span>
          <h1 className="headline-font mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Hi, Saya <span className="text-[var(--color-accent)]">Wibawa</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] md:text-xl">
            Saya seorang developer yang suka membangun aplikasi web modern, dashboard
            interaktif, dan sistem digital yang bermanfaat.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] shadow-[var(--shadow-soft)] backdrop-blur-xl"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-500/25 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white"
            >
              Lihat Project
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] shadow-[var(--shadow-soft)] backdrop-blur-xl"
            >
              Hubungi Saya
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card relative overflow-hidden rounded-[32px] p-6"
          >
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-sky-400/25 via-cyan-300/15 to-fuchsia-400/25 blur-2xl" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Available For</p>
                  <p className="mt-1 text-lg font-semibold">Freelance & Collaboration</p>
                </div>
                <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.85)]" />
              </div>

              <div className="premium-card rounded-[28px] p-5">
                <p className="text-sm text-[var(--color-text-muted)]">Current Focus</p>
                <h3 className="mt-2 text-2xl font-semibold">Dashboard, SaaS UI, dan Web Apps</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                  Template ini disiapkan untuk personal branding yang clean, cepat dibuka,
                  dan mudah diisi dengan project asli kamu nanti.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {socials.slice(0, 4).map((social) => {
                  const Icon = socialIcons[social.label];

                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      className="premium-card rounded-3xl p-4 transition duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                          <Icon size={18} />
                        </span>
                        <div>
                          <p className="text-sm text-[var(--color-text-muted)]">{social.label}</p>
                          <p className="font-semibold">{social.handle}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
