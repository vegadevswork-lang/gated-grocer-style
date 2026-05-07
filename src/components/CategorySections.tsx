import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Product = {
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  pack: string;
  tag?: string;
  query: string; // keywords for image search
};

type Section = {
  title: string;
  products: Product[];
};

// Build an image URL from keywords using loremflickr (keyword-based Flickr images)
const imgFor = (q: string) =>
  `https://loremflickr.com/400/400/${encodeURIComponent(q)}?lock=${Math.abs(
    [...q].reduce((a, c) => a + c.charCodeAt(0), 0)
  )}`;

const sections: Section[] = [
  {
    title: "Vegetables",
    products: [
      { name: "Fresh Carrots", price: 35, oldPrice: 45, rating: 4.6, pack: "500 g", tag: "Root", query: "carrots" },
      { name: "Organic Spinach Bunch", price: 25, oldPrice: 30, rating: 4.5, pack: "250 g", tag: "Leafy", query: "spinach" },
      { name: "Hybrid Tomatoes", price: 28, oldPrice: 35, rating: 4.7, pack: "1 kg", tag: "Fresh", query: "tomatoes" },
      { name: "Sweet Corn", price: 16, oldPrice: 19, rating: 4.6, pack: "1 pc", tag: "Organic", query: "sweet corn" },
      { name: "Green Cabbage", price: 45, oldPrice: 55, rating: 4.6, pack: "1 pc", tag: "Fresh", query: "cabbage" },
      { name: "Grape Tomatoes", price: 38, oldPrice: 40, rating: 4.7, pack: "250 g", tag: "Premium", query: "grape tomatoes" },
    ],
  },
  {
    title: "Fruits",
    products: [
      { name: "Red Seedless Grapes", price: 60, oldPrice: 75, rating: 4.7, pack: "500 g", tag: "Fresh", query: "red grapes" },
      { name: "Alphonso Mango", price: 220, oldPrice: 280, rating: 4.8, pack: "1 kg", tag: "Premium", query: "alphonso mango" },
      { name: "Royal Apples", price: 180, oldPrice: 220, rating: 4.6, pack: "1 kg", tag: "Imported", query: "red apples" },
      { name: "Sweet Banana", price: 45, oldPrice: 55, rating: 4.5, pack: "1 doz", tag: "Daily", query: "banana" },
      { name: "Pomegranate", price: 120, oldPrice: 150, rating: 4.7, pack: "500 g", tag: "Juicy", query: "pomegranate" },
      { name: "Watermelon", price: 80, oldPrice: 100, rating: 4.5, pack: "1 pc", tag: "Summer", query: "watermelon" },
    ],
  },
  {
    title: "Snacks",
    products: [
      { name: "Lays Classic Chips", price: 20, oldPrice: 25, rating: 4.6, pack: "52 g", tag: "Crispy", query: "potato chips" },
      { name: "Kurkure Masala", price: 15, oldPrice: 20, rating: 4.5, pack: "70 g", tag: "Spicy", query: "kurkure snack" },
      { name: "Haldiram Bhujia", price: 55, oldPrice: 65, rating: 4.7, pack: "200 g", tag: "Namkeen", query: "bhujia namkeen" },
      { name: "Oreo Biscuits", price: 30, oldPrice: 35, rating: 4.8, pack: "120 g", tag: "Cream", query: "oreo cookies" },
      { name: "Parle-G Glucose", price: 10, oldPrice: 12, rating: 4.6, pack: "100 g", tag: "Classic", query: "glucose biscuits" },
      { name: "Bingo Mad Angles", price: 20, oldPrice: 25, rating: 4.5, pack: "60 g", tag: "Tangy", query: "tortilla chips" },
    ],
  },
  {
    title: "Drinks",
    products: [
      { name: "Coca-Cola Bottle", price: 38, oldPrice: 40, rating: 4.7, pack: "750 ml", tag: "Soda", query: "coca cola bottle" },
      { name: "Bisleri Mineral Water", price: 16, oldPrice: 20, rating: 4.7, pack: "1 L", tag: "Pure", query: "mineral water bottle" },
      { name: "Tropicana Orange", price: 110, oldPrice: 130, rating: 4.6, pack: "1 L", tag: "Juice", query: "orange juice" },
      { name: "Red Bull Energy", price: 125, oldPrice: 135, rating: 4.5, pack: "250 ml", tag: "Energy", query: "red bull can" },
      { name: "Sting Energy Drink", price: 19, oldPrice: 20, rating: 4.6, pack: "300 ml", tag: "Energy", query: "energy drink" },
      { name: "Mountain Dew", price: 38, oldPrice: 40, rating: 4.6, pack: "750 ml", tag: "Citrus", query: "mountain dew" },
    ],
  },
  {
    title: "Spices & Seasonings",
    products: [
      { name: "Turmeric Powder", price: 65, oldPrice: 80, rating: 4.7, pack: "200 g", tag: "Pure", query: "turmeric powder" },
      { name: "Red Chilli Powder", price: 85, oldPrice: 100, rating: 4.6, pack: "200 g", tag: "Hot", query: "red chilli powder" },
      { name: "Garam Masala", price: 95, oldPrice: 110, rating: 4.8, pack: "100 g", tag: "Blend", query: "garam masala" },
      { name: "Cumin Seeds", price: 75, oldPrice: 90, rating: 4.7, pack: "100 g", tag: "Whole", query: "cumin seeds" },
      { name: "Coriander Powder", price: 55, oldPrice: 65, rating: 4.6, pack: "200 g", tag: "Fresh", query: "coriander powder" },
      { name: "Black Pepper", price: 120, oldPrice: 140, rating: 4.7, pack: "100 g", tag: "Whole", query: "black pepper" },
    ],
  },
  {
    title: "Dairy Products",
    products: [
      { name: "Amul Toned Milk", price: 32, oldPrice: 35, rating: 4.7, pack: "1 L", tag: "Daily", query: "milk carton" },
      { name: "Paneer Block", price: 95, oldPrice: 110, rating: 4.6, pack: "200 g", tag: "Fresh", query: "paneer cheese" },
      { name: "Greek Yogurt", price: 60, oldPrice: 75, rating: 4.7, pack: "400 g", tag: "Protein", query: "greek yogurt" },
      { name: "Amul Butter", price: 55, oldPrice: 60, rating: 4.8, pack: "100 g", tag: "Salted", query: "butter block" },
      { name: "Cheese Slices", price: 130, oldPrice: 150, rating: 4.6, pack: "200 g", tag: "Premium", query: "cheese slices" },
      { name: "Fresh Cream", price: 75, oldPrice: 85, rating: 4.5, pack: "250 ml", tag: "Whip", query: "fresh cream" },
    ],
  },
  {
    title: "Chocolates & Candies",
    products: [
      { name: "Dairy Milk Silk", price: 95, oldPrice: 110, rating: 4.8, pack: "150 g", tag: "Smooth", query: "chocolate bar" },
      { name: "KitKat 4-Finger", price: 50, oldPrice: 55, rating: 4.7, pack: "37.3 g", tag: "Crispy", query: "kitkat chocolate" },
      { name: "Ferrero Rocher", price: 320, oldPrice: 380, rating: 4.9, pack: "Pack of 16", tag: "Premium", query: "ferrero rocher" },
      { name: "5 Star Chocolate", price: 20, oldPrice: 25, rating: 4.6, pack: "45 g", tag: "Caramel", query: "caramel chocolate" },
      { name: "Mentos Mint", price: 10, oldPrice: 12, rating: 4.5, pack: "29 g", tag: "Fresh", query: "mentos candy" },
      { name: "Eclairs Toffee", price: 35, oldPrice: 40, rating: 4.6, pack: "100 g", tag: "Classic", query: "toffee candy" },
    ],
  },
  {
    title: "Instant Foods",
    products: [
      { name: "Maggi 2-Min Noodles", price: 14, oldPrice: 15, rating: 4.8, pack: "70 g", tag: "Masala", query: "maggi noodles" },
      { name: "Yippee Noodles", price: 14, oldPrice: 15, rating: 4.6, pack: "70 g", tag: "Magic", query: "instant noodles" },
      { name: "MTR Ready Mix", price: 75, oldPrice: 90, rating: 4.6, pack: "200 g", tag: "Breakfast", query: "ready meal mix" },
      { name: "Knorr Soup Cup", price: 35, oldPrice: 40, rating: 4.5, pack: "70 g", tag: "Veg", query: "soup cup" },
      { name: "Top Ramen Curry", price: 18, oldPrice: 20, rating: 4.5, pack: "75 g", tag: "Curry", query: "ramen noodles" },
      { name: "Wai Wai Noodles", price: 20, oldPrice: 25, rating: 4.6, pack: "75 g", tag: "Crunchy", query: "wai wai noodles" },
    ],
  },
  {
    title: "Clothing",
    products: [
      { name: "Cotton Round Tee", price: 499, oldPrice: 699, rating: 4.7, pack: "1 pc", tag: "Cotton", query: "white tshirt" },
      { name: "Slim Fit Shirt", price: 799, oldPrice: 1099, rating: 4.6, pack: "1 pc", tag: "Formal", query: "formal shirt" },
      { name: "Graphic T-Shirt", price: 449, oldPrice: 599, rating: 4.5, pack: "1 pc", tag: "Casual", query: "graphic tshirt" },
      { name: "Slim Denim Jeans", price: 999, oldPrice: 1499, rating: 4.7, pack: "1 pc", tag: "Stretch", query: "blue jeans" },
      { name: "Cotton Shorts", price: 399, oldPrice: 549, rating: 4.5, pack: "1 pc", tag: "Comfort", query: "shorts clothing" },
      { name: "Winter Jacket", price: 1499, oldPrice: 1999, rating: 4.7, pack: "1 pc", tag: "Warm", query: "winter jacket" },
    ],
  },
  {
    title: "Fashion",
    products: [
      { name: "Floral Summer Dress", price: 899, oldPrice: 1299, rating: 4.7, pack: "1 pc", tag: "Trendy", query: "floral dress" },
      { name: "Designer Kurti", price: 699, oldPrice: 999, rating: 4.6, pack: "1 pc", tag: "Ethnic", query: "indian kurti" },
      { name: "Banarasi Saree", price: 1899, oldPrice: 2499, rating: 4.8, pack: "1 pc", tag: "Premium", query: "banarasi saree" },
      { name: "Ethnic Set", price: 1299, oldPrice: 1799, rating: 4.7, pack: "1 pc", tag: "Festive", query: "indian ethnic wear" },
      { name: "Cotton Socks Pack", price: 199, oldPrice: 299, rating: 4.5, pack: "Pack of 3", tag: "Combo", query: "socks pack" },
      { name: "Casual Shirt", price: 649, oldPrice: 899, rating: 4.6, pack: "1 pc", tag: "Stylish", query: "casual shirt men" },
    ],
  },
];

function ProductCard({ product, i }: { product: Product; i: number }) {
  const off = product.oldPrice ? Math.max(1, product.oldPrice - product.price) : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.35, delay: i * 0.03 }}
      className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-square bg-white">
        <img
          src={imgFor(product.query)}
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

export function CategorySections() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-12 space-y-10">
      {sections.map((section) => (
        <section key={section.title}>
          <div className="flex items-end justify-between mb-4">
            <h2 className="font-display text-xl md:text-2xl font-extrabold text-foreground">
              {section.title}
            </h2>
            <button className="text-primary text-sm font-semibold hover:underline">
              See All →
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {section.products.map((p, i) => (
              <ProductCard key={p.name} product={p} i={i} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
