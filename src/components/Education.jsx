import { motion } from "framer-motion";
import { GraduationCap, MapPin, BookOpenText } from "lucide-react";

function Education({ educations }) {
  return (
    <section id="education" className="section-shell section-space">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Education</span>
        <h2 className="section-title mt-5">Riwayat pendidikan dan pembelajaran</h2>
        <p className="section-description">
          Bagian ini menampilkan perjalanan pendidikan dalam bentuk timeline yang tetap nyaman dibaca
          di layar kecil maupun besar.
        </p>
      </motion.div>

      <div className="relative mt-10 space-y-6 before:absolute before:bottom-0 before:left-[19px] before:top-0 before:w-px before:bg-[var(--color-border)] md:before:left-1/2 md:before:-translate-x-1/2">
        {educations.map((education, index) => (
          <motion.article
            key={`${education.school}-${education.major}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={`relative grid gap-4 md:grid-cols-2 md:gap-10 ${
              index % 2 === 0 ? "md:[&>div:last-child]:order-2" : ""
            }`}
          >
            <div className="absolute left-0 top-6 z-10 md:left-1/2 md:-translate-x-1/2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] text-[var(--color-accent)] shadow-[var(--shadow-soft)] backdrop-blur-xl">
                <GraduationCap size={18} />
              </div>
            </div>
            <div className="hidden md:block" />
            <motion.div
              whileHover={{ y: -6 }}
              className="premium-card ml-14 rounded-[28px] p-6 md:ml-0"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    {education.period}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{education.school}</h3>
                  <p className="mt-1 text-base font-medium text-[var(--color-text-muted)]">
                    {education.major}
                  </p>
                </div>
                {education.location ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-xs font-medium text-[var(--color-text-muted)]">
                    <MapPin size={14} />
                    {education.location}
                  </span>
                ) : null}
              </div>

              <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)] md:text-base">
                {education.description}
              </p>

              <div className="mt-5 space-y-3">
                {education.achievements.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-1 text-[var(--color-accent)]">
                      <BookOpenText size={16} />
                    </span>
                    <p className="text-sm leading-7 text-[var(--color-text-muted)] md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Education;
