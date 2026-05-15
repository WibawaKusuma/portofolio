import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import FeaturedProject from "./components/FeaturedProject";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import projects from "./data/projects";
import skillCategories from "./data/skills";
import socials from "./data/socials";
import experiences from "./data/experiences";
import educations from "./data/educations";

const THEME_KEY = "portfolio-theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "system";
  return localStorage.getItem(THEME_KEY) || "system";
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (nextTheme) => {
      const resolvedTheme =
        nextTheme === "system"
          ? mediaQuery.matches
            ? "dark"
            : "light"
          : nextTheme;

      root.dataset.theme = resolvedTheme;
      root.style.colorScheme = resolvedTheme;
      root.classList.toggle("dark", resolvedTheme === "dark");
    };

    applyTheme(theme);
    localStorage.setItem(THEME_KEY, theme);

    const handleSystemThemeChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 480);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredProject = useMemo(() => projects[0], []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-4rem] h-72 w-72 rounded-full bg-[var(--color-accent-soft)] blur-3xl" />
        <div className="absolute right-[-6rem] top-[18rem] h-80 w-80 rounded-full bg-[var(--color-accent-strong)] opacity-45 blur-3xl" />
        <div className="grid-pattern absolute inset-0 opacity-40" />
      </div>

      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Hero socials={socials} />
        <About />
        <Skills skillCategories={skillCategories} />
        <Experience experiences={experiences} />
        <Education educations={educations} />
        <FeaturedProject project={featuredProject} />
        <Projects projects={projects.slice(0, 6)} />
        <Contact socials={socials} />
      </main>

      <Footer socials={socials} />

      <AnimatePresence>
        {isScrolled ? (
          <motion.button
            key="back-to-top"
            type="button"
            aria-label="Kembali ke atas"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[var(--color-surface-strong)] text-[var(--color-text)] shadow-[var(--shadow-soft)] backdrop-blur-xl transition-colors duration-300 md:bottom-8 md:right-8"
          >
            <ChevronUp size={20} />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
