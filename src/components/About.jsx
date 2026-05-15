import { motion } from "framer-motion";
import { Code2, LayoutDashboard, Sparkles } from "lucide-react";

const highlights = [
  {
    title: "Fokus pada pengembangan web",
    description: "Membangun website yang cepat, rapi, dan nyaman digunakan di berbagai perangkat.",
    icon: Code2,
  },
  {
    title: "Suka membuat dashboard dan sistem informasi",
    description: "Terbiasa menyusun antarmuka data yang informatif untuk kebutuhan bisnis maupun internal.",
    icon: LayoutDashboard,
  },
  {
    title: "Terbiasa menggunakan teknologi modern",
    description: "Nyaman bekerja dengan stack modern agar pengembangan lebih efisien dan mudah dipelihara.",
    icon: Sparkles,
  },
];

function About() {
  return (
    <section id="about" className="section-shell section-space">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">About Me</span>
        <h2 className="section-title mt-5">Tentang saya secara singkat</h2>
        <p className="section-description">
          Bagian ini disiapkan sebagai placeholder yang mudah kamu ganti. Isi dengan cerita singkat
          tentang latar belakang, pengalaman, pendekatan kerja, dan nilai yang ingin kamu tampilkan
          kepada recruiter, client, atau calon kolaborator.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="premium-card rounded-[30px] p-6 md:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Placeholder Bio
          </p>
          <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)] md:text-lg">
            Saya adalah seorang developer yang senang mengubah ide menjadi produk digital yang
            berguna. Saya tertarik pada pengalaman pengguna yang bersih, performa yang baik, dan
            struktur kode yang mudah dikembangkan dalam jangka panjang.
          </p>
          <p className="mt-4 text-base leading-8 text-[var(--color-text-muted)] md:text-lg">
            Kamu bisa mengganti seluruh teks ini dengan profil pribadi, pengalaman kerja, fokus
            spesialisasi, atau pencapaian yang ingin ditonjolkan.
          </p>
        </motion.div>

        <div className="grid gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.12 + index * 0.08 }}
                className="premium-card rounded-[26px] p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[var(--color-text-muted)]">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
