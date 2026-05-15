import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

function Projects({ projects }) {
  return (
    <section id="projects" className="section-shell section-space">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
         className="mx-auto max-w-3xl text-center"
      >
        <span className="section-label">Projects</span>
        {/* <h2 className="section-title mt-5">Beberapa project yang bisa kamu tampilkan</h2>
        <p className="section-description">
          Data project dipisahkan ke file array JavaScript agar kamu cukup edit kontennya nanti tanpa
          menyentuh komponen tampilan.
        </p> */}
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -8 }}
            className="premium-card overflow-hidden rounded-[28px]"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.demoUrl}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-500/25 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white"
                >
                  Demo
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={project.githubUrl}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-blue-400/30 dark:hover:text-blue-300"
                  aria-label={`Source code ${project.title}`}
                >
                  <Github size={18} />
                </a>
              </div> */}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
