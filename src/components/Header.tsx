import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ShoppingCart, Search, User } from "lucide-react";

import mSpinach from "@/assets/m-spinach.jpg";
import mCarrots from "@/assets/m-carrots.jpg";
import mTomatoes from "@/assets/m-tomatoes.jpg";
import mRice from "@/assets/m-rice.jpg";
import mMilk from "@/assets/m-milk.jpg";
import mToothpaste from "@/assets/m-toothpaste.jpg";
import mSoap from "@/assets/m-soap.jpg";
import mShampoo from "@/assets/m-shampoo.jpg";
import mTissues from "@/assets/m-tissues.jpg";
import mCleaners from "@/assets/m-cleaners.jpg";

import mTshirt from "@/assets/m-tshirt.jpg";
import mDress from "@/assets/m-dress.jpg";
import mJeans from "@/assets/m-jeans.jpg";
import mJacket from "@/assets/m-jacket.jpg";
import mKurti from "@/assets/m-kurti.jpg";
import mSaree from "@/assets/m-saree.jpg";
import mShirt from "@/assets/m-shirt.jpg";
import mShorts from "@/assets/m-shorts.jpg";
import mSocks from "@/assets/m-socks.jpg";
import mEthnic from "@/assets/m-ethnic.jpg";

type Item = { name: string; image: string };

const leftItems: Item[] = [
  { name: "Spinach", image: mSpinach },
  { name: "Carrots", image: mCarrots },
  { name: "Tomatoes", image: mTomatoes },
  { name: "Rice", image: mRice },
  { name: "Milk", image: mMilk },
  { name: "Toothpaste", image: mToothpaste },
  { name: "Soap", image: mSoap },
  { name: "Shampoo", image: mShampoo },
  { name: "Tissues", image: mTissues },
  { name: "Cleaners", image: mCleaners },
];

const rightItems: Item[] = [
  { name: "T-Shirts", image: mTshirt },
  { name: "Dresses", image: mDress },
  { name: "Jeans", image: mJeans },
  { name: "Jackets", image: mJacket },
  { name: "Kurtis", image: mKurti },
  { name: "Sarees", image: mSaree },
  { name: "Shirts", image: mShirt },
  { name: "Shorts", image: mShorts },
  { name: "Socks", image: mSocks },
  { name: "Ethnic", image: mEthnic },
];

function Marquee({
  items,
  direction,
}: {
  items: Item[];
  direction: "left" | "right";
}) {
  const loop = [...items, ...items];
  return (
    <div className="relative flex-1 overflow-hidden h-14 mask-fade">
      <motion.div
        className="flex gap-4 absolute whitespace-nowrap items-center h-full px-2"
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
            className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground/80 bg-secondary/60 pl-1.5 pr-4 py-1.5 rounded-full border border-border/60 shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width={64}
              height={64}
              className="w-8 h-8 rounded-full object-cover ring-1 ring-border shrink-0"
            />
            <span className="leading-none">{item.name}</span>
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

        <Link to="/" className="shrink-0 px-4 text-center select-none">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              opacity: { duration: 0.4 },
              y: { duration: 0.4 },
              backgroundPosition: {
                duration: 6,
                ease: "linear",
                repeat: Infinity,
              },
            }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, var(--primary), var(--accent-foreground), var(--destructive), var(--primary))",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="font-display text-2xl md:text-3xl font-extrabold tracking-tight"
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
