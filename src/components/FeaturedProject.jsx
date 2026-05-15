import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

function FeaturedProject({ project }) {
  if (!project) return null;

  return (
    <section className="section-shell section-space">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -4 }}
        className="premium-card overflow-hidden rounded-[34px] p-6 md:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[28px] border border-[var(--color-border)]">
            <img
              src={project.image}
              alt={project.title}
              className="h-full min-h-[280px] w-full object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>

          <div>
            <span className="section-label">
              <Sparkles size={14} />
              Featured Project
            </span>
            <h2 className="headline-font mt-5 text-3xl font-bold md:text-4xl">{project.title}</h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)] md:text-lg">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={project.demoUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-500/25 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
              <a
                href={project.githubUrl}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-blue-400/30 dark:hover:text-blue-300"
              >
                Source Code
              </a>
            </div> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default FeaturedProject;
