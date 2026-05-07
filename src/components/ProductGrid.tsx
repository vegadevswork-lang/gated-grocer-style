import { motion } from "framer-motion";
import { Star } from "lucide-react";
import grapes from "@/assets/p-grapes.jpg";
import corn from "@/assets/p-corn.jpg";
import tomatoes from "@/assets/p-tomatoes.jpg";
import cabbage from "@/assets/p-cabbage.jpg";
import tshirt from "@/assets/p-tshirt.jpg";

type Product = {
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: string;
  pack: string;
  tag?: string;
  img: string;
};

const products: Product[] = [
  {
    name: "Fresh Red Seedless Grapes",
    price: 60,
    oldPrice: 75,
    rating: 4.7,
    reviews: "73.3k",
    pack: "500 g",
    tag: "Fruit",
    img: grapes,
  },
  {
    name: "Organic Sweet Corn",
    price: 16,
    oldPrice: 19,
    rating: 4.6,
    reviews: "6.3k",
    pack: "1 pc",
    tag: "Veggie",
    img: corn,
  },
  {
    name: "Organic Grape Tomatoes",
    price: 38,
    oldPrice: 40,
    rating: 4.7,
    reviews: "199.5k",
    pack: "250 g",
    tag: "Veggie",
    img: tomatoes,
  },
  {
    name: "Organic Green Cabbage",
    price: 45,
    oldPrice: 55,
    rating: 4.6,
    reviews: "80.2k",
    pack: "1 pc",
    tag: "Veggie",
    img: cabbage,
  },
  {
    name: "Cotton Round Neck Tee",
    price: 499,
    oldPrice: 699,
    rating: 4.7,
    reviews: "28.8k",
    pack: "1 pc",
    tag: "Apparel",
    img: tshirt,
  },
];

function ProductCard({ product, i }: { product: Product; i: number }) {
  const off = product.oldPrice ? Math.max(1, product.oldPrice - product.price) : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-square bg-white">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute bottom-2 right-2 px-3 py-1 rounded-md bg-white border-2 border-primary text-primary text-xs font-bold tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
          ADD
        </button>
      </div>
      <div className="p-2.5">
        {off > 0 && (
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="bg-[oklch(0.55_0.18_145)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
              ₹{off} OFF
            </span>
          </div>
        )}
        <h3 className="text-xs font-semibold text-foreground line-clamp-2 leading-tight min-h-[2rem]">
          {product.name}
        </h3>
        <p className="text-[11px] text-muted-foreground mt-1">{product.pack}</p>
        {product.tag && (
          <span className="inline-block mt-1 text-[10px] bg-[oklch(0.95_0.04_180)] text-foreground/70 px-1.5 py-0.5 rounded">
            {product.tag}
          </span>
        )}
        <div className="mt-1.5 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold text-foreground">₹{product.price}</span>
            {product.oldPrice && (
              <span className="text-[11px] text-muted-foreground line-through">₹{product.oldPrice}</span>
            )}
          </div>
          <div className="flex items-center gap-0.5 text-[11px] text-foreground/70">
            <Star className="w-3 h-3 fill-[oklch(0.65_0.18_145)] text-[oklch(0.55_0.18_145)]" />
            <span className="font-medium">{product.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">
            Best Sellers
          </h2>
          <p className="text-muted-foreground mt-1 text-sm">Top picks our customers love</p>
        </div>
        <button className="text-primary text-sm font-semibold hover:underline">
          See All →
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {products.map((p, i) => (
          <ProductCard key={p.name} product={p} i={i} />
        ))}
      </div>
    </section>
  );
}
