import { motion } from "framer-motion";
import portraitImg from "@/assets/nutritionist-portrait.jpg";

const pillars = [
  {
    label: "🥑 Food-First Philosophy",
    desc: "Every protocol begins with whole, vibrant foods — ingredients chosen for their therapeutic power, not just their calorie count.",
  },
  {
    label: "🌿 Gut Health & Microbiome",
    desc: "Targeted dietary interventions with prebiotic-rich foods to rebuild a thriving gut ecosystem and lasting energy.",
  },
  {
    label: "🔬 Metabolic Profiling",
    desc: "Precision analysis of your blood markers, hormonal panel, and metabolic rate to build truly personalised meal plans.",
  },
  {
    label: "🧠 Mindful Eating Habits",
    desc: "Behavioural coaching to rebuild your relationship with food — no guilt, no restriction, just sustainable abundance.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-hover aspect-[4/5]">
              <img
                src={portraitImg}
                alt="Dr. Priya Sharma RDN – Clinical Nutritionist"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating credential badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-card border border-border shadow-hover rounded-2xl px-5 py-4">
              <p className="font-serif text-3xl font-semibold text-primary">10+</p>
              <p className="font-sans text-xs text-muted-foreground tracking-wide uppercase mt-0.5">
                Years in Clinical Practice
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              About the Practitioner
            </p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tighter leading-heading text-foreground mb-6">
              Dr. Priya Sharma
              <br />
              <em className="text-primary text-3xl">RDN · ISSN · IFM</em>
            </h2>
            <p className="font-sans text-base leading-relaxed text-foreground/70 mb-5">
              After completing her Master's in Clinical Nutrition from AIIMS and a Functional Medicine Fellowship in Boston, Dr. Priya built her practice on a single belief: <strong className="text-foreground font-medium">food is the most powerful medicine on your plate.</strong>
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground/70 mb-5">
              She has coached elite athletes to peak performance, helped executives reclaim their energy, and guided individuals through PCOS, thyroid dysfunction, and metabolic syndrome — all through the transformative power of real, whole food.
            </p>
            <p className="font-sans text-base leading-relaxed text-foreground/70 mb-10">
              Dr. Priya believes that eating well should feel like abundance, not deprivation. Her colourful, science-backed meal plans are designed to make every bite count — delicious food that heals from the inside out.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="p-5 rounded-2xl bg-secondary border border-border"
                >
                  <p className="font-sans text-sm font-semibold text-foreground mb-1.5">{p.label}</p>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
