import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Protocols", href: "#plans" },
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
          <a href="#" className={`font-serif text-xl tracking-tighter transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}>
            Dr. Priya Sharma<span className={scrolled ? "text-primary" : "text-white/70"}> RDN</span>
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
              className={`font-sans text-sm tracking-tight px-4 py-2 rounded-full transition-colors duration-200 ${
                scrolled
                  ? "bg-accent text-accent-foreground hover:bg-terra-dark"
                  : "bg-white/15 text-white border border-white/30 hover:bg-white/25"
              }`}
            >
              Start Protocol
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
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-sm pt-20 px-6 flex flex-col gap-2 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-4xl tracking-tight text-foreground/80 hover:text-foreground py-3 border-b border-border"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#plans"
              onClick={() => setMenuOpen(false)}
              className="mt-6 font-sans text-base text-center px-6 py-3 rounded-full bg-accent text-accent-foreground"
            >
              Start Protocol →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
