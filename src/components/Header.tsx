import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, Search, ChevronDown, ShoppingCart, User } from "lucide-react";

const groceryNames = [
  "Fresh Spinach",
  "Organic Carrots",
  "Ripe Tomatoes",
  "Basmati Rice",
  "Full Cream Milk",
  "Toothpaste",
  "Herbal Soap",
  "Shampoo",
  "Tissues",
  "Floor Cleaner",
  "Cotton T-Shirts",
  "Denim Jeans",
  "Silk Sarees",
  "Kurtis",
  "Sports Socks",
];

export function Header() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % groceryNames.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="shrink-0 select-none flex items-center gap-3 pr-4 mr-2 border-r border-border">
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, #d4af37, #ff6b6b, #4ecdc4, #845ec2, #ffb84d, #d4af37)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              animation: "amarShift 6s linear infinite",
              textShadow: "0 1px 2px rgba(0,0,0,0.05)",
              letterSpacing: "0.02em",
            }}
            className="font-display text-2xl md:text-3xl font-black tracking-tight drop-shadow-sm"
          >
            AMAR<span className="mx-1">·</span>SUPERMARKET
          </div>
        </Link>

        <button
          className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-secondary/50 hover:bg-secondary transition shrink-0 max-w-[220px]"
          aria-label="Choose delivery location"
        >
          <MapPin className="w-4 h-4 text-primary shrink-0" />
          <div className="text-left leading-tight overflow-hidden">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Deliver to
            </div>
            <div className="text-sm font-semibold truncate">
              Prestige Lakeside, Bangalore
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        </button>

        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            aria-label="Search products"
            className="w-full h-11 pl-10 pr-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
            placeholder=""
          />
          {/* rotating placeholder overlay */}
          <div className="pointer-events-none absolute left-10 top-0 h-11 flex items-center overflow-hidden">
            <div
              key={index}
              className="text-sm text-muted-foreground animate-[slideUp_0.5s_ease]"
            >
              Search for{" "}
              <span className="font-semibold text-foreground/80">
                {groceryNames[index]}
              </span>
              ...
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-secondary/50 hover:bg-secondary transition"
            aria-label="Login"
          >
            <User className="w-5 h-5" />
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Hello
              </div>
              <div className="text-sm font-semibold">Sign in</div>
            </div>
          </button>

          <button
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
            aria-label="Cart"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </div>
            <div className="hidden md:block text-left leading-tight">
              <div className="text-[10px] uppercase tracking-wider opacity-80">
                My Cart
              </div>
              <div className="text-sm font-semibold">₹ 480</div>
            </div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes amarShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </header>
  );
}
