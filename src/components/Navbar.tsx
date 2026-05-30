import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Plans", href: "#plans" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src={logoMark}
              alt="RM Lifestyle Coach"
              className={`h-10 w-10 object-contain transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
            <span className={`font-serif text-lg leading-tight tracking-tight transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}>
              Ms. Palak Mattoo
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`font-sans text-sm tracking-tight transition-colors duration-300 ${
                  scrolled
                    ? "text-foreground/60 hover:text-foreground"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#plans"
              className="font-sans text-sm px-7 py-3.5 rounded-full bg-accent text-accent-foreground hover:bg-terra-dark transition-colors duration-300"
            >
              Start Plan
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[75vw] max-w-xs bg-[#1c2e1e] flex flex-col pt-20 px-8 pb-10 md:hidden shadow-2xl"
            >
              <div className="absolute top-5 left-6 flex items-center gap-2">
                <img src={logoMark} alt="" className="h-9 w-9 object-contain brightness-0 invert" />
              </div>
              {/* Close button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>

              <nav className="flex flex-col gap-1 flex-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-2xl text-white/80 hover:text-white py-4 border-b border-white/10 tracking-tight transition-colors duration-200"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              <motion.a
                href="#plans"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="font-sans text-sm text-center px-7 py-3.5 rounded-full bg-accent text-accent-foreground hover:bg-terra-dark transition-colors duration-300"
              >
                Start Plan →
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
