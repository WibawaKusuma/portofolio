import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingCart } from "lucide-react";

const ProductPlaceholder = () => (
  <div className="flex h-52 w-full items-center justify-center bg-[var(--color-surface)]">
    <svg
      className="h-16 w-16 text-[var(--color-border)]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5a1.5 1.5 0 001.5 1.5z"
      />
    </svg>
  </div>
);

function Products({ products }) {
  return (
    <section id="products" className="section-shell section-space">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="section-label">Products</span>
        {/* <h2 className="section-title mt-5">Produk</h2> */}
        <p className="section-description mx-auto">
          Produk digital siap pakai dan bisa langsung anda gunakan.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <motion.article
            key={product.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
            whileHover={{ y: -4 }}
            className="premium-card overflow-hidden rounded-[28px] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-52 w-full object-cover transition duration-700 hover:scale-[1.03]"
                />
              ) : (
                <ProductPlaceholder />
              )}
              {/* Price Badge */}
              <span className="absolute right-4 top-4 rounded-full bg-[var(--color-accent)] px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                {product.price}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                {product.description}
              </p>

              {/* Tech Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {product.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  Demo
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={product.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-700/25 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Berlangganan
                  <ShoppingCart size={16} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Products;
