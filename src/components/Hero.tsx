import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroTomatoes from "@/assets/hero-tomatoes.jpg";
import heroVeggies from "@/assets/hero-veggies.jpg";
import heroGroceries from "@/assets/hero-groceries.jpg";
import heroClothes from "@/assets/hero-clothes.jpg";
import heroApparel from "@/assets/hero-apparel.jpg";

const slides = [
  {
    image: heroTomatoes,
    eyebrow: "Fresh Food",
    title: "SIMPLY DELICIOUS",
    subtitle:
      "Farm-fresh produce hand-picked and delivered to your gated community.",
  },
  {
    image: heroVeggies,
    eyebrow: "Daily Greens",
    title: "GARDEN FRESH",
    subtitle: "Crisp leafy greens straight from local farms to your kitchen.",
  },
  {
    image: heroGroceries,
    eyebrow: "Pantry Essentials",
    title: "STOCK IT UP",
    subtitle: "Rice, dals, spices and everything your kitchen needs.",
  },
  {
    image: heroClothes,
    eyebrow: "Ready-to-Wear",
    title: "DRESS THE DAY",
    subtitle: "Trendy ready-made clothing for every member of the family.",
  },
  {
    image: heroApparel,
    eyebrow: "Fresh Wardrobe",
    title: "STYLE DELIVERED",
    subtitle: "New collections of cottons, kurtas and casuals at your gate.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.img
          key={`img-${index}`}
          src={slide.image}
          alt={slide.title}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="font-display text-2xl md:text-3xl tracking-[0.3em] uppercase">
              {slide.eyebrow}
            </p>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl mt-2 leading-none tracking-tight">
              {slide.title}
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/90 max-w-xl">
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-10 py-3 rounded-full bg-white text-foreground font-bold uppercase tracking-wider text-sm shadow-elegant"
        >
          Shop Now →
        </motion.button>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl"
        >
          {[
            { icon: "🚚", title: "30 Min Delivery", sub: "To your gate" },
            { icon: "🌿", title: "Farm Fresh", sub: "Hand picked daily" },
            { icon: "💰", title: "Best Prices", sub: "Lowest in area" },
            { icon: "↩️", title: "Easy Returns", sub: "No questions asked" },
          ].map((f) => (
            <div
              key={f.title}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-left"
            >
              <span className="text-2xl">{f.icon}</span>
              <div>
                <div className="text-sm font-bold leading-tight">{f.title}</div>
                <div className="text-[11px] text-white/80">{f.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-3 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
