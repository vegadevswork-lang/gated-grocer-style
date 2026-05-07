import { motion } from "framer-motion";
import { Truck, Clock, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wide uppercase">
            Exclusively for Gated Communities
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-tight text-foreground">
            Fresh groceries & ready-to-wear,
            <span className="block bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              delivered to your gate.
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Skip the supermarket run. Amar Supermarket brings farm-fresh produce
            and trendy apparel straight to your doorstep — within your community,
            within the hour.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 hover-scale shadow-elegant">
              Shop Groceries
            </button>
            <button className="px-6 py-3 rounded-full border border-border bg-card font-semibold hover-scale">
              Browse Clothing
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { icon: Truck, label: "Free delivery" },
              { icon: Clock, label: "60-min slots" },
              { icon: ShieldCheck, label: "Quality assured" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-1">
                <Icon className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative aspect-square max-w-md mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/40 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-4 p-4">
            {["🥬", "🍅", "👕", "👗"].map((emoji, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                className="aspect-square bg-card rounded-3xl shadow-elegant flex items-center justify-center text-7xl border border-border"
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
