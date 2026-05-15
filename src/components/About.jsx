import { motion } from "framer-motion";
import { Code2, LayoutDashboard, Sparkles } from "lucide-react";

const highlights = [
  {
    title: "Fokus pada pengembangan web",
    description: "Saya paling nyaman mengerjakan aplikasi berbasis web yang dipakai untuk kebutuhan admin, operasional, dan pengelolaan data.",
    icon: Code2,
  },
  {
    title: "Suka membangun sistem yang rapi dipakai",
    description: "Saya tertarik pada dashboard admin, sistem informasi, sistem apotek, dan aplikasi internal yang benar-benar membantu pekerjaan jadi lebih ringan.",
    icon: LayoutDashboard,
  },
  {
    title: "Terbuka dengan stack modern",
    description: "Saya cukup sering bekerja dengan Laravel, CodeIgniter, PHP, MySQL, JavaScript, React, Tailwind CSS, Bootstrap, Git, dan Figma.",
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
        className="mx-auto max-w-3xl text-center"
      >
        <span className="section-label">About Me</span>
        <h2 className="section-title mt-5">Tentang saya</h2>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="premium-card rounded-[30px] p-6 md:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Bio
          </p>

          <div className="about-copy mt-5 max-w-3xl space-y-5 text-[15px] leading-8 text-[var(--color-text-muted)] md:text-[1.02rem] md:leading-8">
            <p>
              Saya bernama Wibawa Kusuma. Saat ini saya fokus sebagai seorang Full Stack Developer
              yang memiliki ketertarikan besar di bidang pengembangan website dan sistem berbasis
              web. Saya senang mempelajari hal-hal baru di dunia teknologi, terutama yang berkaitan
              dengan web development, user interface, dan pengembangan sistem yang dapat membantu
              pekerjaan menjadi lebih efisien dan terstruktur.
            </p>

            <p>
              Saya terbiasa membangun berbagai jenis aplikasi seperti dashboard admin, sistem
              informasi, website company profile, hingga aplikasi manajemen data menggunakan
              teknologi seperti Laravel, CodeIgniter, PHP, MySQL, JavaScript, React, Tailwind CSS,
              dan Bootstrap. Bagi saya, sebuah aplikasi tidak hanya harus terlihat menarik, tetapi
              juga harus mudah digunakan, responsif, dan nyaman untuk dikembangkan dalam jangka
              panjang.
            </p>

            <p>
              Selain fokus pada coding, saya juga senang mengeksplorasi perkembangan teknologi
              modern dan terus meningkatkan kemampuan agar dapat mengikuti kebutuhan industri digital
              saat ini. Saya memiliki kepribadian yang disiplin, mudah bekerja sama dalam tim, serta
              selalu berusaha menjaga komunikasi dan tanggung jawab dalam setiap proses pengerjaan
              project.
            </p>

            <p>
              Di luar aktivitas development, saya juga menikmati waktu dengan bermain game,
              mengeksplorasi desain antarmuka, dan mempelajari berbagai hal baru yang dapat
              menambah pengalaman serta kreativitas dalam membangun produk digital.
            </p>
          </div>
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
