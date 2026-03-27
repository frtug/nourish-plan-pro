import { motion } from "framer-motion";

export default function CredentialBar() {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-foreground/95 backdrop-blur-sm border-t border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10 overflow-x-auto no-scrollbar">
          {[
            "HWN: Holistic Wellbeing Nutrition",
            "ACN: Adolescent and Child Nutrition",
            "WH: Women Health",
            "CFN: Certified Functional Nutrition",
          ].map((item, i) => (
            <span
              key={i}
              className="font-sans text-xs tracking-[0.15em] uppercase text-white/60 whitespace-nowrap shrink-0"
            >
              {i > 0 && (
                <span className="mr-6 text-white/20">•</span>
              )}
              {item}
            </span>
          ))}
        </div>
        <a
          href="#plans"
          className="hidden md:block font-sans text-xs tracking-wide uppercase text-primary border border-primary/40 px-4 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 shrink-0 ml-8"
        >
          View Plans
        </a>
      </div>
    </motion.div>
  );
}
