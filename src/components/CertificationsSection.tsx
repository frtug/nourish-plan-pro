import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  {
    acronym: "RDN",
    full: "Registered Dietitian Nutritionist",
    body: "Academy of Nutrition & Dietetics",
    year: "2014",
  },
  {
    acronym: "ISSN",
    full: "Certified Sports Nutritionist",
    body: "Int'l Society of Sports Nutrition",
    year: "2016",
  },
  {
    acronym: "CSSD",
    full: "Board Certified Specialist in Sports Dietetics",
    body: "Commission on Dietetic Registration",
    year: "2017",
  },
  {
    acronym: "IFM",
    full: "Certified Functional Medicine Practitioner",
    body: "Institute for Functional Medicine",
    year: "2019",
  },
  {
    acronym: "CNS",
    full: "Certified Nutrition Specialist",
    body: "Board for Certification of Nutrition Specialists",
    year: "2020",
  },
  {
    acronym: "GAPS",
    full: "GAPS Certified Practitioner",
    body: "GAPS Trained Practitioners Org.",
    year: "2021",
  },
  {
    acronym: "FNLP",
    full: "Functional Nutrition Lab Practitioner",
    body: "Functional Nutrition Alliance",
    year: "2022",
  },
  {
    acronym: "CGP",
    full: "Certified Gut & Psychology Protocol",
    body: "GAPS Diet Foundation",
    year: "2023",
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
            <em className="text-primary">Every Protocol</em>
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
              <p className="font-sans text-xs text-muted-foreground leading-snug">{c.body}</p>
              <p className="font-sans text-xs text-muted-foreground/60 mt-3">{c.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
