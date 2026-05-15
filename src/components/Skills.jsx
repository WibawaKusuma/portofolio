import { motion } from "framer-motion";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaLaravel,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCodeigniter, SiMysql, SiTailwindcss } from "react-icons/si";

const iconMap = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: IoLogoJavascript,
  react: FaReact,
  tailwind: SiTailwindcss,
  laravel: FaLaravel,
  php: FaPhp,
  mysql: SiMysql,
  git: FaGitAlt,
  figma: FaFigma,
  codeigniter: SiCodeigniter,
  bootstrap: FaBootstrap,
};

function Skills({ skills }) {
  return (
    <section id="skills" className="section-shell section-space">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <span className="section-label">Skills</span>
          <h2 className="section-title mt-5">Tools dan teknologi yang sering digunakan</h2>
          <p className="section-description">
            Semua data skill dibuat dalam array terpisah supaya nanti kamu bisa menambah, menghapus,
            atau mengganti isi tanpa mengubah struktur komponen.
          </p>
        </div>
      </motion.div>

      <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="premium-card flex h-full flex-col rounded-[28px] bg-white p-6 dark:bg-slate-900/80"
          >
            <div className="mb-5 inline-flex h-13 w-13 items-center justify-center rounded-[20px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
              {(() => {
                const Icon = iconMap[skill.iconKey];
                return Icon ? <Icon size={30} /> : null;
              })()}
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {skill.level}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{skill.name}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
