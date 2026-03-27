import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  {
    acronym: "HWN",
    full: "Holistic Wellbeing Nutrition (Men and Women)",
    desc: "Integrative nutrition planning that improves energy, digestion, sleep, and long-term lifestyle balance.",
  },
  {
    acronym: "ACN",
    full: "Adolescent and Child Nutrition",
    desc: "Age-specific nutrition guidance for healthy growth, stronger immunity, and better learning performance.",
  },
  {
    acronym: "WH",
    full: "Women Health",
    desc: "Targeted nutritional care for hormonal balance, menstrual wellness, PCOS support, and metabolic health.",
  },
  {
    acronym: "IFM",
    full: "CFN (Certified Functional Nutrition)",
    desc: "Science-backed nutrition plans designed to address root causes and build sustainable health outcomes.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-3">
            Credentials & Certifications
          </p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tighter leading-heading text-foreground">
            The Evidence Behind
            <br />
            <em className="text-primary">Every Plan</em>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {certs.map((c) => (
            <motion.div
              key={c.acronym}
              variants={item}
              className="group p-6 rounded-2xl border border-border bg-background hover:bg-card shadow-card hover:shadow-hover transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-serif text-2xl font-semibold tracking-tight text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                  {c.acronym}
                </span>
                <Award size={14} className="text-muted-foreground mt-1" />
              </div>
              <p className="font-sans text-sm font-medium text-foreground leading-snug mb-1">
                {c.full}
              </p>
              <p className="font-sans text-xs text-muted-foreground leading-snug">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
