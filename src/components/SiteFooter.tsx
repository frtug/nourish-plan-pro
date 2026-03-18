import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/drpriyasharma.rdn" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/drpriyasharmardn" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@drpriyasharmardn" },
  { icon: Twitter, label: "Twitter/X", href: "https://x.com/drpriyasharma" },
];

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Protocols", href: "#plans" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-background/70 pb-16 pt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl tracking-tight text-background mb-3">
              Dr. Priya Sharma<span className="text-sage-300"> RDN</span>
            </h3>
            <p className="font-sans text-sm leading-relaxed text-background/50 max-w-xs">
              Clinical nutrition practice grounded in metabolic science and behavioural precision.
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full border border-background/20 text-background/50 hover:text-background hover:border-background/50 transition-colors duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-background/30 mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-sans text-sm text-background/60 hover:text-background transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-background/30 mb-5">
              Clinic
            </p>
            <div className="space-y-3 text-sm text-background/60">
              <p>hello@drpriyasharma.in</p>
              <p>+91 98200 12345</p>
              <p className="leading-relaxed">
                403 Synapse Tower<br />
                Bandra Kurla Complex<br />
                Mumbai 400051
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-sans text-xs text-background/30">
            © {new Date().getFullYear()} Dr. Priya Sharma RDN. All rights reserved.
          </p>
          <p className="font-sans text-xs text-background/30">
            The content on this site is for informational purposes and does not constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
