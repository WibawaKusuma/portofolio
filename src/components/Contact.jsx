import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const iconMap = {
  WhatsApp: FaWhatsapp,
  Instagram: FaInstagram,
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Email: MdEmail,
};

function Contact({ socials }) {
  return (
    <section id="contact" className="section-shell pb-14 pt-16 md:pb-18 md:pt-22">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="section-label">Contact</span>
        {/* <h2 className="section-title mt-5">Kalau mau terhubung, langsung pilih salah satu.</h2>
        <p className="section-description mx-auto">
          Saya buat lebih sederhana supaya tetap rapi di mobile maupun desktop, dan gampang
          dipakai sebagai link utama ke akun yang paling sering dibuka.
        </p> */}
      </motion.div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 pb-2">
        {socials.map((social, index) => {
          const Icon = iconMap[social.name];

          return (
            <motion.a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              target={social.external ? "_blank" : undefined}
              rel={social.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-[54px] w-[54px] items-center justify-center rounded-2xl border border-[var(--color-border)] bg-white shadow-sm transition-all duration-300 hover:shadow-[0_14px_28px_rgba(15,23,42,0.10)] dark:bg-slate-900/80"
            >
              {Icon ? <Icon size={24} style={{ color: social.color }} /> : null}
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
