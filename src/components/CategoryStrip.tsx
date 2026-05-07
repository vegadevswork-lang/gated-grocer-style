import { motion } from "framer-motion";
import vegetables from "@/assets/cat-vegetables.jpg";
import fruits from "@/assets/cat-fruits.jpg";
import dairy from "@/assets/cat-dairy.jpg";
import staples from "@/assets/cat-staples.jpg";
import snacks from "@/assets/cat-snacks.jpg";
import beverages from "@/assets/cat-beverages.jpg";
import personal from "@/assets/cat-personal.jpg";
import bath from "@/assets/cat-bath.jpg";
import household from "@/assets/cat-household.jpg";
import apparel from "@/assets/cat-apparel.jpg";

const categories = [
  { name: "Vegetables", image: vegetables },
  { name: "Fruits", image: fruits },
  { name: "Dairy", image: dairy },
  { name: "Staples", image: staples },
  { name: "Snacks", image: snacks },
  { name: "Beverages", image: beverages },
  { name: "Personal Care", image: personal },
  { name: "Bath & Soap", image: bath },
  { name: "Household", image: household },
  { name: "Apparel", image: apparel },
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
              <div className="w-16 h-16 rounded-full overflow-hidden bg-secondary ring-1 ring-border group-hover:ring-primary transition">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground group-hover:text-primary transition-colors text-center">
                {c.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
