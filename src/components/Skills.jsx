import { motion } from "framer-motion";

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

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="premium-card rounded-[24px] p-5"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {skill.level}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{skill.name}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
