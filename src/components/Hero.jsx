import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, CodeXml } from "lucide-react";

const roles = [
  "Web Developer",
  "Full Stack Developer",
  "CodeIgniter Developer",
];

function Hero() {
  return (
    <section id="home" className="section-shell section-space relative pt-12 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* <span className="section-label">Personal Portfolio</span> */}
          <h1 className="headline-font mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Hi, Saya <span className="text-[var(--color-accent)]">Wibawa</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] md:text-xl">
            Saya seorang web developer yang fokus membangun website, dashboard admin,
            dan sistem digital yang bermanfaat dengan pendekatan yang rapi, responsive,
            dan mudah dikembangkan.
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-700/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 active:scale-[0.98] dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600 dark:focus-visible:ring-blue-300"
            >
              Lihat Project
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 dark:focus-visible:ring-blue-300"
            >
              Hubungi Saya
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
