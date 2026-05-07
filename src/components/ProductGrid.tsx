import { motion } from "framer-motion";
import { Star } from "lucide-react";
import grapes from "@/assets/p-grapes.jpg";
import corn from "@/assets/p-corn.jpg";
import tomatoes from "@/assets/p-tomatoes.jpg";
import cabbage from "@/assets/p-cabbage.jpg";
import tshirt from "@/assets/p-tshirt.jpg";

type Product = {
  name: string;
  price: string;
  oldPrice?: string;
  rating: number;
  img: string;
  badges?: { label: string; tone: "hot" | "off" | "new" }[];
};

const products: Product[] = [
  {
    name: "Fresh Red Seedless",
    price: "₹60.00 – ₹120.00",
    rating: 5,
    img: grapes,
    badges: [{ label: "Hot", tone: "hot" }, { label: "-20%", tone: "off" }],
  },
  {
    name: "Organic Sweet Corn",
    price: "₹16.00",
    oldPrice: "₹19.00",
    rating: 4,
    img: corn,
    badges: [{ label: "-15%", tone: "off" }],
  },
  {
    name: "Organic Grape Tomatoes",
    price: "₹79.00",
    rating: 5,
    img: tomatoes,
    badges: [{ label: "Hot", tone: "hot" }],
  },
  {
    name: "Organic Green Cabbage",
    price: "₹45.00 – ₹65.00",
    rating: 4,
    img: cabbage,
    badges: [{ label: "-10%", tone: "off" }],
  },
  {
    name: "Cotton Round Tee",
    price: "₹499.00",
    oldPrice: "₹699.00",
    rating: 5,
    img: tshirt,
    badges: [{ label: "New", tone: "new" }],
  },
];

const toneClass: Record<string, string> = {
  hot: "bg-destructive text-destructive-foreground",
  off: "bg-primary text-primary-foreground",
  new: "bg-accent-foreground text-accent",
};

function Card({ product, i }: { product: Product; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      whileHover={{ y: -6 }}
      className="bg-card rounded-2xl border border-border overflow-hidden group"
    >
      <div className="relative aspect-square bg-white flex items-center justify-center overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          <div className="flex flex-col gap-1">
            {product.badges?.map((b) => (
              <span
                key={b.label}
                className={`${toneClass[b.tone]} text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded`}
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 text-center border-t border-border">
        <h3 className="font-semibold text-foreground line-clamp-1">{product.name}</h3>
        <div className="mt-1 flex items-center justify-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < product.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
            />
          ))}
        </div>
        <div className="mt-2 flex items-center justify-center gap-2">
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">{product.oldPrice}</span>
          )}
          <span className="text-base font-bold text-primary">{product.price}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="font-display text-4xl font-extrabold text-foreground inline-block relative">
          Best Seller
          <span className="block w-24 h-1 bg-primary mx-auto mt-3 rounded-full" />
        </h2>
        <p className="text-muted-foreground mt-3 text-sm uppercase tracking-widest">
          So you get to know us better
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products.map((p, i) => (
          <Card key={p.name} product={p} i={i} />
        ))}
      </div>
    </section>
  );
}
