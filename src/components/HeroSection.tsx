import { motion } from "framer-motion";
import heroImg from "@/assets/hero-ingredient.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Colourful whole foods — the foundation of precision nutrition"
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: "brightness(0.29) saturate(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 md:pb-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-primary-foreground/60 mb-6">
            Real Food · Real Results · Real Science
          </p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] tracking-tightest leading-display text-white mb-8 text-balance">
            Eat with purpose.{" "}
            <em className="not-italic text-sage-300">Live without limits.</em>
          </h1>
          <p className="font-sans text-lg md:text-xl leading-relaxed text-white/70 max-w-xl mb-10">
            Your plate is your most powerful prescription. Personalised nutrition
            coaching rooted in food science — turning every meal into momentum.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#plans"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="font-sans text-sm px-7 py-3.5 rounded-full bg-accent text-accent-foreground hover:bg-terra-dark transition-colors duration-300"
            >
              Start Now→
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="font-sans text-sm px-7 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors duration-300"
            >
              Meet the Nutritionist
            </motion.a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 flex flex-wrap gap-8 md:gap-16"
        >
          {[
            { value: "2+", label: "Years Coaching" },
            { value: "100+", label: "Lives Transformed" },
            { value: "4", label: "Certifications" },
            { value: "94%", label: "Goal Achievement" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl text-white tracking-tight">{stat.value}</p>
              <p className="font-sans text-xs text-white/50 tracking-wide uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
