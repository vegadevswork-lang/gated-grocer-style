import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useSearch } from "@/context/SearchContext";
import { useProductDetail } from "@/context/ProductDetailContext";
import casualShirt from "@/assets/clothing/casual-shirt.jpg";
import cottonSocks from "@/assets/clothing/cotton-socks.jpg";
import ethnicSet from "@/assets/clothing/ethnic-set.jpg";
import banarasiSaree from "@/assets/clothing/banarasi-saree.jpg";
import designerKurti from "@/assets/clothing/designer-kurti.jpg";
import floralDress from "@/assets/clothing/floral-dress.jpg";
import winterJacket from "@/assets/clothing/winter-jacket.jpg";
import cottonShorts from "@/assets/clothing/cotton-shorts.jpg";
import slimJeans from "@/assets/clothing/slim-jeans.jpg";
import graphicTshirt from "@/assets/clothing/graphic-tshirt.jpg";
import slimFitShirt from "@/assets/clothing/slim-fit-shirt.jpg";
import cottonRoundTee from "@/assets/clothing/cotton-round-tee.jpg";
import maggiImg from "@/assets/instant/maggi.jpg";
import waiWaiImg from "@/assets/instant/wai-wai.jpg";
import topRamenImg from "@/assets/instant/top-ramen.jpg";
import knorrSoupImg from "@/assets/instant/knorr-soup.jpg";
import mtrDosaImg from "@/assets/instant/mtr-dosa.jpg";
import bournvilleImg from "@/assets/chocolates/bournville.jpg";
import silkGanacheImg from "@/assets/chocolates/silk-ganache.jpg";
import munchMaxImg from "@/assets/chocolates/munch-max.jpg";
import amulDarkImg from "@/assets/chocolates/amul-dark.jpg";
import kitkatImg from "@/assets/chocolates/kitkat.jpg";
import silkHazelnutImg from "@/assets/chocolates/silk-hazelnut.jpg";
import amulGoldImg from "@/assets/dairy/amul-gold.jpg";
import heritageCupCurdImg from "@/assets/dairy/heritage-cup-curd.jpg";
import amulTaazaImg from "@/assets/dairy/amul-taaza.jpg";
import amulCurdImg from "@/assets/dairy/amul-curd.jpg";
import heritagePouchCurdImg from "@/assets/dairy/heritage-pouch-curd.jpg";
import heritageTonedMilkImg from "@/assets/dairy/heritage-toned-milk.jpg";
import corianderPowderImg from "@/assets/spices/coriander-powder.jpg";
import kashmiriChilliImg from "@/assets/spices/kashmiri-chilli.jpg";
import lalMirchImg from "@/assets/spices/lal-mirch.jpg";
import hingImg from "@/assets/spices/hing.jpg";
import turmericImg from "@/assets/spices/turmeric.jpg";
import chilliPowderImg from "@/assets/spices/chilli-powder.jpg";
import limcaImg from "@/assets/drinks/limca.jpg";
import spritePackImg from "@/assets/drinks/sprite-pack.png";
import thumsUp750Img from "@/assets/drinks/thums-up-750.jpg";
import thumsUpImg from "@/assets/drinks/thums-up.jpg";
import dietCokeImg from "@/assets/drinks/diet-coke.jpg";
import spriteImg from "@/assets/drinks/sprite.jpg";
import kurkureImg from "@/assets/snacks/kurkure.jpg";
import laysMasalaImg from "@/assets/snacks/lays-masala.jpg";
import laysCreamOnionImg from "@/assets/snacks/lays-cream-onion.jpg";
import bingoImg from "@/assets/snacks/bingo.jpg";
import laysHotSweetImg from "@/assets/snacks/lays-hotsweet.jpg";
import craxImg from "@/assets/snacks/crax.jpg";
import pinkGuavaImg from "@/assets/fruits/pink-guava.jpg";
import rawMangoImg from "@/assets/fruits/raw-mango.jpg";
import watermelonImg from "@/assets/fruits/watermelon.jpg";
import miniOrangeImg from "@/assets/fruits/mini-orange.jpg";
import yellakiBananaImg from "@/assets/fruits/yellaki-banana.jpg";
import greenGrapesImg from "@/assets/fruits/green-grapes.jpg";
import orangeCarrotImg from "@/assets/vegetables/orange-carrot.jpg";
import curryLeavesImg from "@/assets/vegetables/curry-leaves.jpg";

type Product = {
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  pack: string;
  tag?: string;
  query: string; // keywords for image search
  img?: string; // optional local image override
};

type Section = {
  title: string;
  products: Product[];
};

// Build an image URL from keywords using loremflickr (keyword-based Flickr images)
const imgFor = (q: string) =>
  `https://image.pollinations.ai/prompt/${encodeURIComponent(
    `${q}, product photo, white background, high detail`
  )}?width=400&height=400&nologo=true&seed=${Math.abs(
    [...q].reduce((a, c) => a + c.charCodeAt(0), 0)
  )}`;

const sections: Section[] = [
  {
    title: "Vegetables",
    products: [
      { name: "Coriander Bunch (Kottimeera)", price: 24, oldPrice: 29, rating: 4.6, pack: "100 g", tag: "Leafy", query: "coriander bunch" },
      { name: "Green Chilli (Mirapakaya)", price: 10, oldPrice: 12, rating: 4.5, pack: "100 g", tag: "Spicy", query: "green chilli" },
      { name: "Lemon (Nimakaya)", price: 57, oldPrice: 67, rating: 4.7, pack: "200 g", tag: "Citrus", query: "fresh lemon" },
      { name: "Onion (Ulligadda)", price: 25, oldPrice: 32, rating: 4.6, pack: "1 kg", tag: "Daily", query: "red onion" },
      { name: "Curry Leaves (Karivepaku)", price: 12, oldPrice: 13, rating: 4.6, pack: "50 g", tag: "Aromatic", query: "curry leaves", img: curryLeavesImg },
      { name: "Orange Carrot", price: 29, oldPrice: 36, rating: 4.7, pack: "500 g", tag: "Root", query: "orange carrots", img: orangeCarrotImg },
    ],
  },
  {
    title: "Fruits",
    products: [
      { name: "Green Grapes - Seedless", price: 91, oldPrice: 108, rating: 4.7, pack: "480 g", tag: "Fresh", query: "green grapes", img: greenGrapesImg },
      { name: "Yellaki Banana", price: 56, oldPrice: 72, rating: 4.6, pack: "500 g", tag: "Sweet", query: "yellow banana bunch", img: yellakiBananaImg },
      { name: "Mini Orange (Imported)", price: 87, oldPrice: 100, rating: 4.7, pack: "200 g", tag: "Imported", query: "mandarin orange", img: miniOrangeImg },
      { name: "Kiran Watermelon", price: 98, oldPrice: 116, rating: 4.7, pack: "2 kg", tag: "Summer", query: "watermelon slice", img: watermelonImg },
      { name: "Raw Mango (Mamidikaya)", price: 23, oldPrice: 28, rating: 4.5, pack: "500 g", tag: "Tangy", query: "raw green mango", img: rawMangoImg },
      { name: "Thai Pink Guava", price: 82, oldPrice: 104, rating: 4.6, pack: "400 g", tag: "Premium", query: "pink guava", img: pinkGuavaImg },
    ],
  },
  {
    title: "Snacks",
    products: [
      { name: "Crax Biggies Cheese Puffs", price: 33, oldPrice: 60, rating: 4.6, pack: "70 g", tag: "Cheesy", query: "cheese puffs snack", img: craxImg },
      { name: "Lay's West Indies Hot n Sweet", price: 25, oldPrice: 30, rating: 4.5, pack: "58 g", tag: "Tangy", query: "lays potato chips bag", img: laysHotSweetImg },
      { name: "Bingo Original Chilli Chips", price: 19, oldPrice: 20, rating: 4.7, pack: "43 g", tag: "Spicy", query: "potato chips bag", img: bingoImg },
      { name: "Lay's American Cream & Onion", price: 25, oldPrice: 30, rating: 4.8, pack: "58 g", tag: "Creamy", query: "cream onion chips", img: laysCreamOnionImg },
      { name: "Lay's India's Magic Masala", price: 25, oldPrice: 30, rating: 4.7, pack: "58 g", tag: "Masala", query: "masala chips packet", img: laysMasalaImg },
      { name: "Kurkure Puffcorn Cheese", price: 20, oldPrice: 25, rating: 4.6, pack: "58 g", tag: "Puff", query: "puffcorn snack", img: kurkureImg },
    ],
  },
  {
    title: "Drinks",
    products: [
      { name: "Sprite Zero Lime Soft Drink", price: 38, oldPrice: 40, rating: 4.7, pack: "750 ml", tag: "Lime", query: "sprite bottle", img: spriteImg },
      { name: "Coca-Cola Diet Coke", price: 40, oldPrice: 45, rating: 4.7, pack: "300 ml", tag: "Diet", query: "diet coke can", img: dietCokeImg },
      { name: "Thums Up Cola Soft Drink", price: 20, oldPrice: 25, rating: 4.6, pack: "250 ml", tag: "Cola", query: "cola bottle", img: thumsUpImg },
      { name: "Thums Up Cola 750ml", price: 39, oldPrice: 40, rating: 4.7, pack: "750 ml", tag: "Cola", query: "thums up cola", img: thumsUp750Img },
      { name: "Sprite Zero Pack of 4", price: 154, oldPrice: 160, rating: 4.6, pack: "4 x 300 ml", tag: "Combo", query: "sprite cans pack", img: spritePackImg },
      { name: "Limca Lemon 'N' Lime", price: 39, oldPrice: 45, rating: 4.6, pack: "750 ml", tag: "Citrus", query: "lemon lime soda bottle", img: limcaImg },
    ],
  },
  {
    title: "Spices & Seasonings",
    products: [
      { name: "Aashirvaad Chilli Powder", price: 59, oldPrice: 65, rating: 4.7, pack: "100 g", tag: "Hot", query: "red chilli powder pack", img: chilliPowderImg },
      { name: "Aashirvaad Turmeric Powder", price: 30, oldPrice: 40, rating: 4.6, pack: "100 g", tag: "Pure", query: "turmeric powder pack", img: turmericImg },
      { name: "L.G Compounded Hing Powder", price: 101, oldPrice: 102, rating: 4.7, pack: "50 g", tag: "Aromatic", query: "asafoetida hing", img: hingImg },
      { name: "Aashirvaad Lal Mirch Powder", price: 209, oldPrice: 325, rating: 4.7, pack: "500 g", tag: "Hot", query: "lal mirch powder", img: lalMirchImg },
      { name: "Aashirvaad Kashmiri Chilli", price: 99, oldPrice: 140, rating: 4.6, pack: "100 g", tag: "Mild", query: "kashmiri chilli powder", img: kashmiriChilliImg },
      { name: "Aashirvaad Coriander Powder", price: 32, oldPrice: 46, rating: 4.6, pack: "100 g", tag: "Fresh", query: "coriander powder pack", img: corianderPowderImg },
    ],
  },
  {
    title: "Dairy Products",
    products: [
      { name: "Heritage Daily Health Toned Milk", price: 32, oldPrice: 35, rating: 4.7, pack: "500 ml", tag: "Daily", query: "milk packet pouch", img: heritageTonedMilkImg },
      { name: "Heritage Total Pouch Curd", price: 48, oldPrice: 50, rating: 4.6, pack: "500 g", tag: "Curd", query: "curd pouch packet", img: heritagePouchCurdImg },
      { name: "Amul Pouch Curd", price: 50, oldPrice: 55, rating: 4.7, pack: "800 g", tag: "Fresh", query: "amul curd pouch", img: amulCurdImg },
      { name: "Amul Taaza Toned Milk", price: 29, oldPrice: 32, rating: 4.7, pack: "500 ml", tag: "Toned", query: "amul milk pouch", img: amulTaazaImg },
      { name: "Heritage Soothing Cup Curd", price: 110, oldPrice: 115, rating: 4.6, pack: "1 kg", tag: "Family", query: "yogurt tub", img: heritageCupCurdImg },
      { name: "Amul Gold Full Cream Milk", price: 36, oldPrice: 40, rating: 4.8, pack: "500 ml", tag: "Full Cream", query: "amul gold milk", img: amulGoldImg },
    ],
  },
  {
    title: "Chocolates & Candies",
    products: [
      { name: "Cadbury Dairy Milk Silk Hazelnut", price: 204, oldPrice: 214, rating: 4.8, pack: "134 g", tag: "Hazelnut", query: "dairy milk silk hazelnut", img: silkHazelnutImg },
      { name: "Nestle KitKat 4 Fingers", price: 30, oldPrice: 35, rating: 4.7, pack: "38.5 g", tag: "Wafer", query: "kitkat chocolate bar", img: kitkatImg },
      { name: "Amul Dark Chocolate Bar", price: 45, oldPrice: 55, rating: 4.7, pack: "35 g", tag: "Dark", query: "dark chocolate bar", img: amulDarkImg },
      { name: "Nestle Munch Max Crunchy Wafer", price: 20, oldPrice: 25, rating: 4.6, pack: "38.5 g", tag: "Crunchy", query: "munch chocolate wafer", img: munchMaxImg },
      { name: "Cadbury Dairy Milk Silk Ganache", price: 204, oldPrice: 214, rating: 4.8, pack: "137 g", tag: "Ganache", query: "dairy milk silk chocolate", img: silkGanacheImg },
      { name: "Cadbury Bournville 70% Dark", price: 125, oldPrice: 145, rating: 4.8, pack: "80 g", tag: "Premium", query: "bournville dark chocolate", img: bournvilleImg },
    ],
  },
  {
    title: "Instant Foods",
    products: [
      { name: "Maggi 2-Min Noodles", price: 14, oldPrice: 15, rating: 4.8, pack: "70 g", tag: "Masala", query: "maggi noodles", img: maggiImg },
      { name: "Yippee Noodles", price: 14, oldPrice: 15, rating: 4.6, pack: "70 g", tag: "Magic", query: "instant noodles" },
      { name: "MTR Ready Mix", price: 75, oldPrice: 90, rating: 4.6, pack: "200 g", tag: "Breakfast", query: "ready meal mix", img: mtrDosaImg },
      { name: "Knorr Soup Cup", price: 35, oldPrice: 40, rating: 4.5, pack: "70 g", tag: "Veg", query: "soup cup", img: knorrSoupImg },
      { name: "Top Ramen Curry", price: 18, oldPrice: 20, rating: 4.5, pack: "75 g", tag: "Curry", query: "ramen noodles", img: topRamenImg },
      { name: "Wai Wai Noodles", price: 20, oldPrice: 25, rating: 4.6, pack: "75 g", tag: "Crunchy", query: "wai wai noodles", img: waiWaiImg },
    ],
  },
  {
    title: "Clothing",
    products: [
      { name: "Cotton Round Tee", price: 499, oldPrice: 699, rating: 4.7, pack: "1 pc", tag: "Cotton", query: "cotton tshirt", img: cottonRoundTee },
      { name: "Slim Fit Shirt", price: 799, oldPrice: 1099, rating: 4.6, pack: "1 pc", tag: "Formal", query: "formal shirt", img: slimFitShirt },
      { name: "Graphic T-Shirt", price: 449, oldPrice: 599, rating: 4.5, pack: "1 pc", tag: "Casual", query: "graphic tshirt", img: graphicTshirt },
      { name: "Casual Shirt", price: 649, oldPrice: 899, rating: 4.6, pack: "1 pc", tag: "Stylish", query: "casual shirt men", img: casualShirt },
      { name: "Slim Denim Jeans", price: 999, oldPrice: 1499, rating: 4.7, pack: "1 pc", tag: "Stretch", query: "blue jeans", img: slimJeans },
      { name: "Cotton Shorts", price: 399, oldPrice: 549, rating: 4.5, pack: "1 pc", tag: "Comfort", query: "shorts clothing", img: cottonShorts },
      { name: "Winter Jacket", price: 1499, oldPrice: 1999, rating: 4.7, pack: "1 pc", tag: "Warm", query: "winter jacket", img: winterJacket },
      { name: "Cotton Socks Pack", price: 199, oldPrice: 299, rating: 4.5, pack: "Pack of 3", tag: "Combo", query: "socks pack", img: cottonSocks },
    ],
  },
  {
    title: "Fashion",
    products: [
      { name: "Floral Summer Dress", price: 899, oldPrice: 1299, rating: 4.7, pack: "1 pc", tag: "Trendy", query: "floral dress", img: floralDress },
      { name: "Designer Kurti", price: 699, oldPrice: 999, rating: 4.6, pack: "1 pc", tag: "Ethnic", query: "indian kurti", img: designerKurti },
      { name: "Banarasi Saree", price: 1899, oldPrice: 2499, rating: 4.8, pack: "1 pc", tag: "Premium", query: "banarasi saree", img: banarasiSaree },
      { name: "Ethnic Set", price: 1299, oldPrice: 1799, rating: 4.7, pack: "1 pc", tag: "Festive", query: "indian ethnic wear", img: ethnicSet },
    ],
  },
];

function ProductCard({ product, i }: { product: Product; i: number }) {
  const off = product.oldPrice ? Math.max(1, product.oldPrice - product.price) : 0;
  const { add } = useCart();
  const { open } = useProductDetail();
  const imgSrc = product.img ?? imgFor(product.query);
  const openDetails = () =>
    open({
      id: product.name,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      pack: product.pack,
      tag: product.tag,
      rating: product.rating,
      img: imgSrc,
      inStock: 24,
    });
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.35, delay: i * 0.03 }}
      onClick={openDetails}
      className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="relative aspect-square bg-white">
        <img
          src={imgSrc}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            add({ id: product.name, name: product.name, price: product.price, img: imgSrc });
          }}
          className="absolute bottom-2 right-2 px-3 py-1 rounded-md bg-white border-2 border-primary text-primary text-xs font-bold tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
        >
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

const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function CategorySections() {
  const { query } = useSearch();
  const q = query.trim().toLowerCase();

  const filtered = q
    ? sections
        .map((s) => ({
          ...s,
          products: s.products.filter(
            (p) =>
              p.name.toLowerCase().includes(q) ||
              p.tag?.toLowerCase().includes(q) ||
              s.title.toLowerCase().includes(q),
          ),
        }))
        .filter((s) => s.products.length > 0)
    : sections;

  return (
    <div className="max-w-7xl mx-auto px-4 pb-12 space-y-10">
      {q && filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          No products found for "<span className="font-semibold text-foreground">{query}</span>"
        </div>
      )}
      {filtered.map((section) => (
        <section key={section.title} id={`cat-${slugify(section.title)}`} className="scroll-mt-24">
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
