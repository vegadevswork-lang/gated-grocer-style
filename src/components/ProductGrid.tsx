import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";

type Product = {
  name: string;
  price: number;
  unit: string;
  rating: number;
  emoji: string;
  tag?: string;
};

const groceries: Product[] = [
  { name: "Organic Spinach", price: 35, unit: "250g", rating: 4.6, emoji: "🥬", tag: "Fresh" },
  { name: "Farm Tomatoes", price: 28, unit: "500g", rating: 4.4, emoji: "🍅" },
  { name: "Alphonso Mangoes", price: 299, unit: "1kg", rating: 4.9, emoji: "🥭", tag: "Seasonal" },
  { name: "Whole Wheat Atta", price: 240, unit: "5kg", rating: 4.7, emoji: "🌾" },
  { name: "Farm Fresh Eggs", price: 90, unit: "12pcs", rating: 4.8, emoji: "🥚" },
  { name: "Toned Milk", price: 56, unit: "1L", rating: 4.5, emoji: "🥛" },
];

const clothes: Product[] = [
  { name: "Cotton Round Tee", price: 499, unit: "Unisex", rating: 4.5, emoji: "👕", tag: "New" },
  { name: "Floral Summer Dress", price: 1299, unit: "Women", rating: 4.7, emoji: "👗" },
  { name: "Slim Fit Jeans", price: 1599, unit: "Men", rating: 4.6, emoji: "👖" },
  { name: "Silk Saree", price: 2499, unit: "Women", rating: 4.9, emoji: "🥻", tag: "Premium" },
];

function Card({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-elegant transition-all"
    >
      <div className="relative aspect-square bg-gradient-to-br from-secondary to-accent/40 flex items-center justify-center text-7xl">
        {product.emoji}
        {product.tag && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
          <Star className="w-3 h-3 fill-primary text-primary" /> {product.rating}
          <span className="ml-auto">{product.unit}</span>
        </div>
        <h3 className="font-semibold text-foreground line-clamp-1">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">₹{product.price}</span>
          <button className="p-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition" aria-label="Add to cart">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <div>
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Today's Groceries</h2>
            <p className="text-muted-foreground mt-1">Hand-picked from local farms this morning.</p>
          </div>
          <a href="#" className="story-link text-primary font-semibold text-sm">View all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {groceries.map((p) => <Card key={p.name} product={p} />)}
        </div>
      </div>

      <div>
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Ready-to-Wear</h2>
            <p className="text-muted-foreground mt-1">Trendy styles, delivered with your veggies.</p>
          </div>
          <a href="#" className="story-link text-primary font-semibold text-sm">View all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clothes.map((p) => <Card key={p.name} product={p} />)}
        </div>
      </div>
    </section>
  );
}
