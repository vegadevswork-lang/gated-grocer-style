import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ShoppingCart, Search, User } from "lucide-react";

const leftItems = [
  "🥬 Spinach",
  "🥕 Carrots",
  "🍅 Tomatoes",
  "🌾 Rice",
  "🥛 Milk",
  "🪥 Toothpaste",
  "🧼 Soap",
  "🧴 Shampoo",
  "🧻 Tissues",
  "🧽 Cleaners",
];

const rightItems = [
  "👕 T-Shirts",
  "👗 Dresses",
  "👖 Jeans",
  "🧥 Jackets",
  "👚 Kurtis",
  "🥻 Sarees",
  "👔 Shirts",
  "🩳 Shorts",
  "🧦 Socks",
  "👘 Ethnic",
];

function Marquee({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  const loop = [...items, ...items];
  return (
    <div className="relative flex-1 overflow-hidden h-10 mask-fade">
      <motion.div
        className="flex gap-6 absolute whitespace-nowrap items-center h-full"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="text-sm font-medium text-muted-foreground bg-secondary/60 px-3 py-1 rounded-full border border-border/60"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <Marquee items={leftItems} direction="left" />

        <Link
          to="/"
          className="shrink-0 px-4 text-center select-none"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent"
          >
            AMAR SUPERMARKET
          </motion.div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-0.5">
            Fresh • Fast • At your gate
          </div>
        </Link>

        <Marquee items={rightItems} direction="right" />

        <div className="hidden md:flex items-center gap-2 ml-2">
          <button className="p-2 rounded-full hover:bg-secondary transition" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-secondary transition" aria-label="Account">
            <User className="w-5 h-5" />
          </button>
          <button className="relative p-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>

    </header>
  );
}
