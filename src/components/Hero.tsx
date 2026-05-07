import { motion } from "framer-motion";
import heroImg from "@/assets/hero-tomatoes.jpg";

export function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Farmer holding fresh tomatoes"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/10" />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-3xl tracking-[0.3em] uppercase"
        >
          Fresh Food
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl mt-2 leading-none tracking-tight"
        >
          SIMPLY DELICIOUS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-5 text-base md:text-lg text-white/90 max-w-xl"
        >
          We deliver high-quality organic produce and ready-to-wear clothing to your gated community.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-10 py-3 rounded-full bg-white text-foreground font-bold uppercase tracking-wider text-sm shadow-elegant"
        >
          Shop Now →
        </motion.button>
      </div>
    </section>
  );
}
