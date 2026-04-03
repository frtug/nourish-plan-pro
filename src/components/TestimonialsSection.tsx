import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I've shifted to a much healthier lifestyle, and it feels far better than relying on junk food. I'm eating more fruits and vegetables, my energy levels are much better, I manage hunger pangs more easily, stay hydrated, and even sleep better now.",
    name: "Deepak N",
    role: "Lifestyle Transformation Client",
  },
  {
    quote:
      "The diet plan is clearly helping my strength. Since increasing my protein intake, I've noticed a real physical difference, and it's encouraging to see how much nutrition alone can improve performance.",
    name: "Falguni",
    role: "Strength and Wellness Client",
  },
  {
    quote:
      "I really appreciate how clear and practical the plan is. Even with a busy work schedule and frequent travel, the guidance is easy to follow, flexible with available ingredients, and realistic enough to sustain.",
    name: "Abhishek",
    role: "Busy Professional",
  },
  {
    quote:
      "The plan is structured, easy to start, and simple to track. Having a clear calorie target and a defined timeline keeps me focused and makes the entire process feel achievable.",
    name: "Wasif",
    role: "Goal-Focused Client",
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
          className="grid md:grid-cols-2 gap-6"
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
              <blockquote className="font-sans text-lg leading-relaxed text-foreground/80 mb-8">
                {t.quote}
              </blockquote>
              <div className="border-t border-border pt-5">
                <p className="font-sans text-base font-semibold text-foreground">{t.name}</p>
                <p className="font-sans text-sm text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
