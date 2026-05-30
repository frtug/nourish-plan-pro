import { motion } from "framer-motion";

const foods = [
  { emoji: "🥑", name: "Avocado", benefit: "Healthy Fats" },
  { emoji: "🫐", name: "Blueberries", benefit: "Antioxidants" },
  { emoji: "🥦", name: "Broccoli", benefit: "Fibre & Folate" },
  { emoji: "🟡", name: "Turmeric (Haldi)", benefit: "Inflammation Support" },
  { emoji: "🟢", name: "Amla", benefit: "Vitamin C Boost" },
  { emoji: "🌿", name: "Moringa", benefit: "Iron & Calcium" },
  { emoji: "🥣", name: "Ragi", benefit: "Calcium Rich" },
  { emoji: "🌾", name: "Bajra", benefit: "High Fibre" },
  { emoji: "🫛", name: "Green Peas", benefit: "Plant Protein" },
  { emoji: "🧄", name: "Garlic", benefit: "Heart Health" },
  { emoji: "🫚", name: "Ginger", benefit: "Digestion Support" },
  { emoji: "🍈", name: "Guava", benefit: "Fibre + Vitamin C" },
  { emoji: "🥬", name: "Fenugreek Leaves (Methi)", benefit: "Glucose Balance" },
  // { emoji: "🍚", name: "Red Rice", benefit: "Fibre & B Vitamins" },
];

export default function FoodStripSection() {
  return (
    <section className="py-14 bg-secondary overflow-hidden border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 mb-8 text-center">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary mb-2">
          Your Plate, Your Power
        </p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-tighter text-foreground">
          Nature's Most Potent Ingredients
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap justify-center gap-4 px-6"
      >
        {foods.map((food, i) => (
          <motion.div
            key={food.name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex flex-col items-center gap-2 bg-card border border-border rounded-2xl px-6 py-5 shadow-card cursor-default"
          >
            <span className="text-4xl">{food.emoji}</span>
            <p className="font-sans text-sm font-semibold text-foreground">{food.name}</p>
            <p className="font-sans text-xs text-primary tracking-wide">{food.benefit}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
