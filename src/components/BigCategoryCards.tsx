import { Link } from "@tanstack/react-router";
import vegetables from "@/assets/cat-vegetables.jpg";
import fruits from "@/assets/cat-fruits.jpg";
import household from "@/assets/cat-household.jpg";
import apparel from "@/assets/cat-apparel.jpg";
import snacks from "@/assets/cat-snacks.jpg";

const cards = [
  { name: "Vegetables", tag: "Farm Fresh", image: vegetables, color: "from-green-500/30 to-emerald-700/40", slug: "vegetables" },
  { name: "Fruits", tag: "Hand Picked", image: fruits, color: "from-orange-500/30 to-red-600/40", slug: "fruits" },
  { name: "Home Essentials", tag: "Daily Needs", image: household, color: "from-blue-500/30 to-indigo-700/40", slug: "spices-and-seasonings" },
  { name: "Clothes", tag: "New Arrivals", image: apparel, color: "from-pink-500/30 to-purple-700/40", slug: "clothing" },
  { name: "Snacks", tag: "Crunchy Bites", image: snacks, color: "from-amber-500/30 to-yellow-700/40", slug: "snacks" },
  { name: "Drinks", tag: "Refreshing", image: snacks, color: "from-cyan-500/30 to-blue-700/40", slug: "drinks" },
  { name: "Dairy Products", tag: "Daily Fresh", image: household, color: "from-yellow-400/30 to-orange-600/40", slug: "dairy-products" },
  { name: "Chocolates & Candies", tag: "Sweet Treats", image: snacks, color: "from-rose-500/30 to-fuchsia-700/40", slug: "chocolates-and-candies" },
];

export function BigCategoryCards() {
  // duplicate for seamless loop
  const loop = [...cards, ...cards];

  return (
    <section className="relative max-w-7xl mx-auto px-4 mt-8">
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">
          Shop by Category
        </h2>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Auto sliding · hover to explore
        </span>
      </div>

      <div className="relative overflow-hidden mask-fade">
        <div className="flex gap-5 animate-[wipeMarquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {loop.map((c, i) => (
            <Link
              key={i}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group relative shrink-0 w-[280px] md:w-[320px] h-[200px] rounded-2xl overflow-hidden border border-border shadow-elegant cursor-pointer"
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${c.color} mix-blend-multiply`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Wiping shine sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">
                  {c.tag}
                </div>
                <div className="text-2xl font-bold font-display">{c.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes wipeMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
    </section>
  );
}
