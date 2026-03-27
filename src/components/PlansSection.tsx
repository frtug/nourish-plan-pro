import { useState } from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    id: "weekly-starter",
    name: "Weekly Starter",
    tagline: "Try Before You Commit",
    price: "₹499",
    period: "/week",
    description:
      "Perfect if you want a low-risk start. Get a practical weekly plan, clear meal structure, and expert direction you can begin today.",
    features: [
      "1-week personalised meal blueprint",
      "Daily meal timing guidance",
      "Shopping list for the week",
      "One plan adjustment in the same week",
      "Email support (48h response)",
    ],
    cta: "Start This Week",
    highlight: false,
  },
  {
    id: "monthly-momentum",
    name: "Monthly Momentum",
    tagline: "Build Consistency",
    price: "₹1,499",
    period: "/month",
    description:
      "Best for building real habits. Follow a full monthly plan with regular check-ins so you stay consistent, motivated, and on track.",
    features: [
      "Everything in Weekly Starter",
      "4-week personalised plan",
      "Bi-weekly progress review",
      "Macro guidance as needed",
      "Priority email support (24h response)",
    ],
    cta: "Choose Monthly",
    highlight: true,
  },
  {
    id: "six-month-reset",
    name: "6-Month Reset",
    tagline: "Deep Transformation",
    price: "₹6,000",
    period: "/6 months",
    description:
      "Designed for lasting results. Over six months, I refine your plan step by step so fat loss, hormonal balance, and energy improvements become sustainable.",
    features: [
      "Everything in Monthly Momentum",
      "Fortnightly plan recalibration",
      "Lifestyle and routine correction",
      "Guided plate and portion strategy",
      "Faster query resolution",
    ],
    cta: "Commit for 6 Months",
    highlight: false,
  },
  {
    id: "annual-signature",
    name: "Annual Signature",
    tagline: "Best Value Plan",
    price: "₹9,999",
    period: "/year + 2 months",
    description:
      "Your highest-value option. Get long-term accountability, seasonal plan updates, and 2 extra months free to lock in a healthier lifestyle for good.",
    features: [
      "Everything in 6-Month Reset",
      "12-month guided transformation",
      "2 additional months at no extra cost",
      "Priority support and faster turnarounds",
      "Long-term maintenance strategy",
    ],
    cta: "Get Annual Offer",
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
  const [whatsappHighlight, setWhatsappHighlight] = useState(false);
  const whatsappNumber = "9149931862";

  const handlePlanCtaClick = (plan: (typeof plans)[number], e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setSelected(plan.id);

    window.dispatchEvent(
      new CustomEvent("plan:selected", {
        detail: {
          id: plan.id,
          name: plan.name,
          price: plan.price,
          period: plan.period,
        },
      }),
    );

    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getPlanWhatsappLink = (planName: string, planPrice: string, planPeriod: string) => {
    const message = `Hi Palak, I want to enroll in the ${planName} plan (${planPrice}${planPeriod}). Please share the next steps.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const triggerWhatsappHighlight = () => {
    setWhatsappHighlight(false);
    window.setTimeout(() => setWhatsappHighlight(true), 10);
    window.setTimeout(() => setWhatsappHighlight(false), 1300);
  };

  const generalWhatsappLink = `https://wa.me/${whatsappNumber}`;

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
            Nutrition Plans
          </p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tighter leading-heading text-foreground mb-5">
            Choose Your Plan
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                onClick={(e) => handlePlanCtaClick(plan, e)}
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
          All plans include a complimentary 15-minute discovery call. Not sure which one’s right for you?{" "}
          <motion.button
          type="button"
          // onHoverEnd={triggerWhatsappHighlight}
          onClick={triggerWhatsappHighlight}
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 2.98 }}
          className="mx-auto mt-4"
        >
          🕵️ 
        </motion.button>
        </motion.p>

        

        <motion.a
          href={generalWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          animate={
            whatsappHighlight
              ? {
                  scale: [1, 1.1, 1],
                  y: [0, -6, 0],
                  boxShadow: [
                    "0 10px 24px rgba(22, 163, 74, 0.35)",
                    "0 0 0 10px rgba(22, 163, 74, 0.2)",
                    "0 10px 24px rgba(22, 163, 74, 0.35)",
                  ],
                }
              : {
                  scale: 1,
                  y: 0,
                  boxShadow: "0 10px 24px rgba(22, 163, 74, 0.35)",
                }
          }
          transition={
            whatsappHighlight
              ? { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
              : { duration: 0.2 }
          }
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-white shadow-lg hover:bg-green-700 transition-colors duration-300"
        >
          <MessageCircle size={35} />
          {/* <span className="font-sans text-sm font-medium"></span> */}
        </motion.a>
      </div>
    </section>
  );
}
