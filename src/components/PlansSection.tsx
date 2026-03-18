import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

const plans = [
  {
    id: "foundation",
    name: "The Foundation",
    tagline: "Begin the Protocol",
    price: "₹499",
    period: "/month",
    description:
      "An evidence-based starting point. Ideal for those new to precision nutrition who want a structured, science-backed dietary framework.",
    features: [
      "Personalised PDF Nutrition Guide (28-day)",
      "Macro & micronutrient targets",
      "Meal timing framework",
      "Email Q&A support (48h response)",
      "Weekly progress tracker template",
      "Access to The Lab resource library",
    ],
    cta: "Start Your Protocol",
    highlight: false,
  },
  {
    id: "performance",
    name: "The Performance",
    tagline: "Optimise Your Biology",
    price: "₹1,499",
    period: "/month",
    description:
      "Bi-weekly recalibration and custom macro tracking. Designed for professionals and active individuals who need adaptive, data-driven guidance.",
    features: [
      "Everything in Foundation",
      "Bi-weekly 1:1 video check-ins (30 min)",
      "Custom macro and micronutrient tracking",
      "Adaptive protocol updates monthly",
      "Supplement audit & recommendations",
      "Priority email support (24h response)",
      "Gut health assessment questionnaire",
    ],
    cta: "Start Your Protocol",
    highlight: true,
  },
  {
    id: "elite",
    name: "The Elite",
    tagline: "Total Metabolic Command",
    price: "₹2,999",
    period: "/month",
    description:
      "Full clinical immersion. Unlimited access, blood-work integration, and real-time WhatsApp support for clients who demand the highest level of precision.",
    features: [
      "Everything in Performance",
      "Weekly 1:1 strategy calls (45 min)",
      "Blood-work analysis & integration",
      "Hormone & metabolic panel review",
      "24/7 WhatsApp direct access",
      "Grocery & meal prep consultation",
      "Custom recipe development",
      "DEXA / body composition guidance",
    ],
    cta: "Consult the Lab",
    highlight: false,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function PlansSection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="plans" className="py-24 md:py-36 bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-3">
            Nutritional Protocols
          </p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tighter leading-heading text-foreground mb-5">
            Choose Your Protocol
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-xl mx-auto">
            Every plan is grounded in evidence. The difference is the depth of personalisation.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardAnim}
              whileHover={{ y: -4, boxShadow: "0 24px 48px -12px rgba(27,38,24,0.14)" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`relative bg-card p-8 rounded-[32px] border transition-all duration-300 cursor-pointer ${
                plan.highlight
                  ? "border-primary shadow-hover ring-1 ring-primary/20"
                  : selected === plan.id
                  ? "border-primary/40 shadow-hover"
                  : "border-border shadow-card inner-shadow"
              }`}
              onClick={() => setSelected(plan.id)}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="font-sans text-xs tracking-wide uppercase px-4 py-1 rounded-full bg-primary text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-primary mb-2">
                  {plan.tagline}
                </p>
                <h3 className="font-serif text-2xl tracking-tight text-foreground mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="font-serif text-5xl tracking-tighter text-foreground">
                    {plan.price}
                  </span>
                  <span className="font-sans text-sm text-muted-foreground mb-2">{plan.period}</span>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="border-t border-border pt-6 mb-8 space-y-3">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-0.5 shrink-0" />
                    <span className="font-sans text-sm text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`block w-full text-center font-sans text-sm py-3.5 rounded-full transition-colors duration-300 ${
                  plan.highlight
                    ? "bg-accent text-accent-foreground hover:bg-terra-dark"
                    : "bg-primary text-primary-foreground hover:bg-sage-600"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {plan.cta} →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-sans text-xs text-muted-foreground mt-8"
        >
          All plans include a complimentary 15-minute discovery call. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
