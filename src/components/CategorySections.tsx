import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useProductDetail } from "@/context/ProductDetailContext";
import { sections, imgFor, slugify, type Product } from "@/data/products";

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

export function CategorySections() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-12 space-y-10">
      {sections.map((section) => (
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

export { ProductCard };
