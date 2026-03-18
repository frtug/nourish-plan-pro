import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Dr. Sharma's protocol completely recalibrated my relationship with food. After years of fad diets, I finally have a biological framework that makes sense — my thyroid panel improved by over 30% within four months.",
    name: "Dr. Aisha Menon",
    role: "Consultant Surgeon, Apollo Hospitals",
  },
  {
    quote:
      "As a competitive triathlete, I needed a nutritionist who could translate biochemistry into performance gains. The Performance Protocol gave me a 12% improvement in VO2 max over a single season.",
    name: "Rahul Krishnamurthy",
    role: "Professional Triathlete",
  },
  {
    quote:
      "Managing PCOS through diet felt impossible until I found this practice. The precision and patience in building my protocol was unlike anything I'd experienced. My insulin markers normalised within six months.",
    name: "Deepika Nair",
    role: "Senior Partner, McKinsey & Co.",
  },
  {
    quote:
      "The blood-work integration in the Elite plan revealed patterns my GP had missed. For the first time, I have a nutrition plan that treats me as a biological individual, not a demographic.",
    name: "Vikram Solanki",
    role: "Founder, HealthTech Startup",
  },
  {
    quote:
      "I appreciate the clinical, evidence-first approach. There is zero sensationalism — just precise, personalised guidance backed by research. My gut health has transformed completely.",
    name: "Sunita Bose",
    role: "Research Scientist, CSIR",
  },
  {
    quote:
      "The 24/7 WhatsApp support sounds like a gimmick but it's not. When my blood work came back during a stressful week, Dr. Sharma walked me through every marker and adjusted my protocol same day.",
    name: "Arjun Kapoor",
    role: "Executive Director, Private Equity",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-3">
            Client Outcomes
          </p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tighter leading-heading text-foreground max-w-2xl">
            The Lab Speaks
            <br />
            <em className="text-primary">Through Results</em>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="bg-card border border-border rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-500"
            >
              <div className="mb-6">
                <span className="font-serif text-5xl text-primary/30 leading-none">"</span>
              </div>
              <blockquote className="font-sans text-sm leading-relaxed text-foreground/80 mb-8">
                {t.quote}
              </blockquote>
              <div className="border-t border-border pt-5">
                <p className="font-sans text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-sans text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
