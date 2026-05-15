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

function Skills({ skillCategories }) {
  return (
    <section id="skills" className="section-shell section-space">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <span className="section-label">Skills</span>
        <h2 className="section-title mt-5">Teknologi yang saya pakai</h2>
      </motion.div>

      <div className="mt-10 space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
          >
            <h3 className="mb-4 text-sm font-semibold tracking-tight text-[var(--color-text-muted)] md:text-base">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, itemIndex) => {
                const Icon = iconMap[skill.iconKey];

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.04 }}
                    whileHover={{ y: -2, scale: 1.01 }}
                    className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-border)] bg-white px-4 py-2.5 shadow-[0_4px_14px_rgba(15,23,42,0.05)] transition-all duration-300 hover:shadow-[0_10px_22px_rgba(15,23,42,0.08)] dark:bg-slate-900/80"
                  >
                    <div
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: skill.iconBg,
                      }}
                    >
                      {Icon ? <Icon size={20} style={{ color: skill.color }} /> : null}
                    </div>

                    <span className="whitespace-nowrap text-sm font-medium text-[var(--color-text)]">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
