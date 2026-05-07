import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { MapPin, Search, ChevronDown, ShoppingCart, User, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useSearch } from "@/context/SearchContext";
import { allProducts } from "@/data/products";
import { useProductDetail } from "@/context/ProductDetailContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

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

const addresses = [
  { label: "Prestige Lakeside", sub: "Bangalore · 560048" },
  { label: "Sobha Dream Acres", sub: "Bangalore · 560067" },
  { label: "Brigade Gateway", sub: "Bangalore · 560055" },
  { label: "My Home Bhooja", sub: "Hyderabad · 500032" },
  { label: "DLF Camellias", sub: "Gurugram · 122002" },
];

export function Header() {
  const [index, setIndex] = useState(0);
  const { count, subtotal, setOpen } = useCart();
  const { query, setQuery } = useSearch();
  const [address, setAddress] = useState(addresses[0]);
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();
  const { open: openProduct } = useProductDetail();
  const wrapRef = useRef<HTMLDivElement>(null);

  const q = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!q) return [];
    return allProducts
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tag?.toLowerCase().includes(q) ||
          p.sectionTitle.toLowerCase().includes(q),
      )
      .slice(0, 8);
  }, [q]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % groceryNames.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setFocused(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const showDropdown = focused && q.length > 0;

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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-secondary/50 hover:bg-secondary transition shrink-0 max-w-[240px]"
              aria-label="Choose delivery location"
            >
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <div className="text-left leading-tight overflow-hidden">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Deliver to
                </div>
                <div className="text-sm font-semibold truncate">{address.label}</div>
              </div>
              <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-72">
            <DropdownMenuLabel>Choose delivery address</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {addresses.map((a) => (
              <DropdownMenuItem
                key={a.label}
                onClick={() => setAddress(a)}
                className="flex flex-col items-start gap-0.5 cursor-pointer"
              >
                <span className="text-sm font-semibold">{a.label}</span>
                <span className="text-xs text-muted-foreground">{a.sub}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
          <input
            type="text"
            aria-label="Search products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-11 pl-10 pr-9 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
            placeholder=""
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {/* rotating placeholder overlay — only when input is empty */}
          {!query && (
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
          )}
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
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
            aria-label="Cart"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </div>
            <div className="hidden md:block text-left leading-tight">
              <div className="text-[10px] uppercase tracking-wider opacity-80">
                My Cart
              </div>
              <div className="text-sm font-semibold">₹ {subtotal}</div>
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
