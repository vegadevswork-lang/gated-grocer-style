import { motion } from "framer-motion";

const categories = [
  { name: "Beans", emoji: "🫘" },
  { name: "Berries", emoji: "🍓" },
  { name: "Citrus", emoji: "🍊" },
  { name: "Fruits", emoji: "🍎" },
  { name: "Juices", emoji: "🧃" },
  { name: "Lettuce", emoji: "🥬" },
  { name: "Meats", emoji: "🥩" },
  { name: "Salads", emoji: "🥗" },
  { name: "Dairy", emoji: "🥛" },
  { name: "Apparel", emoji: "👕" },
];

export function CategoryStrip() {
  return (
    <section className="relative -mt-12 z-10 max-w-7xl mx-auto px-4">
      <div className="bg-card rounded-2xl shadow-elegant border border-border px-4 py-5">
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {categories.map((c, i) => (
            <motion.a
              key={c.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-2xl group-hover:bg-primary/15 transition-colors">
                {c.emoji}
              </div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                {c.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
