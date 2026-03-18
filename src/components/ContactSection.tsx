import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 10)
      return "Please write a message (min 10 characters).";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) { setError(validationError); return; }
    setError("");
    setLoading(true);
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
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
              Every inquiry receives a personal response from Dr. Sharma within 24 hours. Whether you're curious about a plan or ready to start, reach out. The lab is always open.
            </p>

            <div className="space-y-5">
              <div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:hello@drpriyasharma.in"
                  className="font-sans text-sm text-foreground hover:text-primary transition-colors"
                >
                  hello@drpriyasharma.in
                </a>
              </div>
              <div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Clinic</p>
                <p className="font-sans text-sm text-foreground">
                  403 Synapse Tower, Bandra Kurla Complex, Mumbai 400051
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
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <CheckCircle size={48} className="text-primary mb-6" />
                <h3 className="font-serif text-3xl tracking-tight text-foreground mb-3">
                  Message Received
                </h3>
                <p className="font-sans text-sm text-muted-foreground max-w-xs">
                  Dr. Sharma will review your inquiry and respond within 24 hours. The lab is reviewing your case.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className={inputBase}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    className={inputBase}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject (e.g. Foundation Plan inquiry)"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    maxLength={200}
                    className={inputBase}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Describe your goals, health context, or questions…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    maxLength={1000}
                    className={`${inputBase} resize-none`}
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
                  disabled={loading}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex items-center gap-2 font-sans text-sm px-7 py-3.5 rounded-full bg-accent text-accent-foreground hover:bg-terra-dark disabled:opacity-50 transition-colors duration-300"
                >
                  {loading ? (
                    <span className="animate-pulse">Sending…</span>
                  ) : (
                    <>
                      Send to the Lab <Send size={14} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
