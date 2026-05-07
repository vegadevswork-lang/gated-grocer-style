import { useEffect, useState } from "react";
import { Minus, Plus, Star, Check } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useProductDetail } from "@/context/ProductDetailContext";
import { useCart } from "@/context/CartContext";

export function ProductDetailDialog() {
  const { product, close } = useProductDetail();
  const { add, setQty, items } = useCart();
  const [qty, setQtyLocal] = useState(1);

  useEffect(() => {
    if (product) setQtyLocal(1);
  }, [product]);

  if (!product) return null;
  const stock = product.inStock ?? 24;
  const total = product.price * qty;

  const handleAdd = () => {
    add({ id: product.id, name: product.name, price: product.price, img: product.img });
    // adjust qty to chosen value
    const existing = items.find((i) => i.id === product.id);
    const baseQty = (existing?.qty ?? 0) + 1;
    if (qty !== 1) setQty(product.id, baseQty - 1 + qty);
    close();
  };

  return (
    <Dialog open={!!product} onOpenChange={(o) => !o && close()}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="bg-secondary/30 aspect-square flex items-center justify-center p-6">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-6 flex flex-col">
            <DialogTitle className="text-xl font-bold leading-tight">
              {product.name}
            </DialogTitle>
            <DialogDescription className="sr-only">Product details</DialogDescription>

            <div className="mt-2 flex items-center gap-3 text-sm">
              {product.rating && (
                <div className="flex items-center gap-1 text-foreground/80">
                  <Star className="w-4 h-4 fill-[oklch(0.65_0.18_145)] text-[oklch(0.55_0.18_145)]" />
                  <span className="font-semibold">{product.rating}</span>
                </div>
              )}
              {product.pack && (
                <span className="text-muted-foreground">{product.pack}</span>
              )}
              {product.tag && (
                <span className="text-[10px] bg-[oklch(0.95_0.04_180)] text-foreground/70 px-1.5 py-0.5 rounded">
                  {product.tag}
                </span>
              )}
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-foreground">₹{product.price}</span>
              {product.oldPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.oldPrice}
                </span>
              )}
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm">
              {stock > 0 ? (
                <>
                  <span className="inline-flex items-center gap-1 text-[oklch(0.55_0.18_145)] font-semibold">
                    <Check className="w-4 h-4" /> In Stock
                  </span>
                  <span className="text-muted-foreground">({stock} available)</span>
                </>
              ) : (
                <span className="text-destructive font-semibold">Out of stock</span>
              )}
            </div>

            <div className="mt-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Quantity
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQtyLocal((q) => Math.max(1, q - 1))}
                    className="p-2 hover:bg-secondary transition"
                    aria-label="Decrease"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-bold min-w-[2.5rem] text-center">{qty}</span>
                  <button
                    onClick={() => setQtyLocal((q) => Math.min(stock, q + 1))}
                    className="p-2 hover:bg-secondary transition"
                    aria-label="Increase"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-sm text-muted-foreground">
                  Total: <span className="font-bold text-foreground">₹{total}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleAdd}
              disabled={stock === 0}
              className="mt-6 w-full py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition disabled:opacity-50"
            >
              Add to Cart · ₹{total}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
