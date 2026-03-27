import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MessageCircle } from "lucide-react";

type SelectedPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);
  const [planFocusMode, setPlanFocusMode] = useState(false);
  const contactEmail = "palakmattoo11@gmail.com";
  const whatsappNumber = "9149931862";
  const nameInputRef = useRef<HTMLInputElement>(null);

  const getSelectedPlanWhatsappLink = () => {
    if (!selectedPlan) return "#";

    const message = `Hi Palak, I want to discuss the ${selectedPlan.name} plan (${selectedPlan.price}${selectedPlan.period}).`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  useEffect(() => {
    const handlePlanSelected = (event: Event) => {
      const customEvent = event as CustomEvent<SelectedPlan>;
      const plan = customEvent.detail;

      if (!plan) return;

      setSelectedPlan(plan);
      setSent(false);
      setError("");
      setForm((current) => ({
        ...current,
        subject: `Inquiry for ${plan.name} (${plan.price}${plan.period})`,
      }));
      setPlanFocusMode(true);

      window.setTimeout(() => {
        nameInputRef.current?.focus();
      }, 450);

      window.setTimeout(() => {
        setPlanFocusMode(false);
      }, 2600);
    };

    window.addEventListener("plan:selected", handlePlanSelected);
    return () => window.removeEventListener("plan:selected", handlePlanSelected);
  }, []);

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.subject.trim()) return "Please enter a subject.";
    if (!form.message.trim() || form.message.trim().length < 10)
      return "Please write a message (min 10 characters).";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    const emailSubject = form.subject.trim();
    const emailBody = [
      `Hi My Name is: ${form.name.trim()}`,
      selectedPlan
        ? `Selected Plan: ${selectedPlan.name} (${selectedPlan.price}${selectedPlan.period})`
        : null,
      form.message.trim(),
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    setSent(true);
  };

  const inputBase =
    "w-full bg-transparent font-sans text-sm text-foreground placeholder-muted-foreground border-b border-input py-3 focus:outline-none focus:border-primary transition-colors duration-300";

  return (
    <section id="contact" className="py-24 md:py-36 bg-card border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-4">
              Open the Consultation
            </p>
            <h2 className="font-serif text-4xl md:text-6xl tracking-tighter leading-heading text-foreground mb-8">
              Begin Your
              <br />
              <em className="text-primary">Biological Journey</em>
            </h2>
            <p className="font-sans text-base leading-relaxed text-foreground/70 mb-10">
              Every inquiry receives a personal response from Ms. Palak Mattoo within 24 hours. Whether you're curious about a plan or ready to start, reach out. The lab is always open.
            </p>

            <div className="space-y-5">
              <div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Email</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-sans text-sm text-foreground hover:text-primary transition-colors"
                >
                  {contactEmail}
                </a>
              </div>
              <div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Clinic</p>
                <p className="font-sans text-sm text-foreground">
                  Bengaluru, 560075
                </p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">Connect</p>
                <div className="flex gap-4">
                  {[
                    { label: "Instagram", href: "https://instagram.com/drpriyasharma.rdn" },
                    { label: "LinkedIn", href: "https://linkedin.com/in/drpriyasharmardn" },
                    { label: "YouTube", href: "https://youtube.com/@drpriyasharmardn" },
                    { label: "Twitter/X", href: "https://x.com/drpriyasharma" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-0.5"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            animate={
              planFocusMode
                ? {
                    scale: [1, 1.01, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(168, 126, 55, 0)",
                      "0 0 0 10px rgba(168, 126, 55, 0.12)",
                      "0 0 0 0 rgba(168, 126, 55, 0)",
                    ],
                  }
                : { scale: 1, boxShadow: "0 0 0 0 rgba(168, 126, 55, 0)" }
            }
            className="rounded-3xl"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <CheckCircle size={48} className="text-primary mb-6" />
                <h3 className="font-serif text-3xl tracking-tight text-foreground mb-3">
                  Draft Ready
                </h3>
                <p className="font-sans text-sm text-muted-foreground max-w-xs">
                  Your email app opened a draft addressed to Ms. Palak Mattoo with your subject and message prefilled.
                  You have to hit "Send" in your email client to complete the process. Looking forward to connecting with you!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                {selectedPlan && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl border border-primary/25 bg-secondary px-4 py-3"
                  >
                    <p className="font-sans text-xs uppercase tracking-[0.15em] text-primary">
                      Plan Selected
                    </p>
                    <p className="mt-1 font-sans text-sm font-medium text-foreground">
                      {selectedPlan.name} • {selectedPlan.price}
                      {selectedPlan.period}
                    </p>
                    <p className="mt-1 font-sans text-xs text-muted-foreground">
                      Your subject is prefilled. Add your name and message to continue.
                    </p>

                    <motion.a
                      href={getSelectedPlanWhatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 font-sans text-xs font-medium text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      <MessageCircle size={14} />
                      Discuss Selected Plan on WhatsApp
                    </motion.a>
                  </motion.div>
                )}

                <div>
                  <input
                    ref={nameInputRef}
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className={`${inputBase} ${planFocusMode ? "border-primary" : ""}`}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject (e.g. Foundation Plan inquiry)"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    maxLength={200}
                    className={`${inputBase} ${selectedPlan ? "border-primary text-primary" : ""}`}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Describe your goals, health context, or questions…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    maxLength={1000}
                    className={`${inputBase} resize-none ${planFocusMode ? "border-primary" : ""}`}
                  />
                  <p className="font-sans text-xs text-muted-foreground/50 mt-1 text-right">
                    {form.message.length}/1000
                  </p>
                </div>

                {error && (
                  <p className="font-sans text-xs text-destructive">{error}</p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex items-center gap-2 font-sans text-sm px-7 py-3.5 rounded-full bg-accent text-accent-foreground hover:bg-terra-dark transition-colors duration-300"
                >
                  <>
                    Send <Send size={14} />
                  </>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
