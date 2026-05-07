import { motion } from "framer-motion";
import lettuce from "@/assets/promo-lettuce.jpg";
import strawberry from "@/assets/promo-strawberry.jpg";
import shirt from "@/assets/m-shirt.jpg";

const promos = [
  {
    eyebrow: "Vegetable",
    title: "Green World",
    subtitle: "Get 40% OFF on selected items.",
    img: lettuce,
    bg: "bg-[oklch(0.94_0.06_140)]",
  },
  {
    eyebrow: "Fresh Fruits",
    title: "Healthy Food",
    subtitle: "Get 60% OFF on selected items.",
    img: strawberry,
    bg: "bg-[oklch(0.95_0.08_95)]",
  },
  {
    eyebrow: "Apparel Combo",
    title: "2 Shirts + 2 Pants",
    subtitle: "All under ₹1000. Limited time offer.",
    img: shirt,
    bg: "bg-[oklch(0.92_0.06_260)]",
  },
];

export function PromoBanners() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {promos.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${p.bg} relative rounded-2xl overflow-hidden p-8 md:p-10 flex items-center min-h-[220px]`}
        >
          <div className="relative z-10 max-w-[55%]">
            <p className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">{p.eyebrow}</p>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mt-1">{p.title}</h3>
            <p className="text-foreground/80 mt-2 text-sm">{p.subtitle}</p>
            <button className="mt-5 px-5 py-2 rounded-full bg-white text-foreground text-sm font-bold uppercase tracking-wider shadow hover-scale">
              Learn More →
            </button>
          </div>
          <motion.img
            src={p.img}
            alt={p.title}
            loading="lazy"
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.4 }}
            className="absolute right-0 bottom-0 h-full w-1/2 object-cover object-center mix-blend-multiply"
          />
        </motion.div>
      ))}
    </section>
  );
}
