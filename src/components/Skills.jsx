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
        className="mx-auto max-w-3xl text-center"
      >
        <span className="section-label">Skills</span>
        <h2 className="section-title mt-5">Teknologi</h2>
        {/* <p className="section-description">
          Saya kelompokkan berdasarkan area kerja supaya lebih mudah dibaca dan lebih terasa seperti
          stack yang benar-benar dipakai dalam project.
        </p> */}
      </motion.div>

      <div className="mt-10 space-y-10">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.05 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <h3 className="text-base font-semibold tracking-tight md:text-lg">{category.title}</h3>
              <span className="h-px flex-1 bg-[var(--color-border)]" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
              {category.items.map((skill, itemIndex) => {
                const Icon = iconMap[skill.iconKey];

                return (
                  <motion.article
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="premium-card flex min-h-[122px] items-center gap-4 rounded-[24px] bg-white px-5 py-5 transition-all duration-300 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)] dark:bg-slate-900/80"
                  >
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.25 }}
                      className="inline-flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full shadow-sm transition-all duration-300"
                      style={{
                        backgroundColor: skill.iconBg,
                        boxShadow: `0 10px 24px ${skill.iconBg}`,
                      }}
                    >
                      {Icon ? <Icon size={30} style={{ color: skill.color }} /> : null}
                    </motion.div>

                    <div className="min-w-0">
                      <h4 className="text-base font-semibold leading-6">{skill.name}</h4>
                    </div>
                  </motion.article>
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
