import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const WHATSAPP_NUMBER = "919398787108";

export function CartDrawer() {
  const { items, isOpen, setOpen, setQty, remove, subtotal, clear } = useCart();

  const handleBuy = () => {
    if (items.length === 0) return;
    const lines = items.map(
      (i, n) => `${n + 1}. ${i.name} x${i.qty} — ₹${i.price * i.qty}`,
    );
    const msg = [
      "Hi! I'd like to place an order:",
      "",
      ...lines,
      "",
      `Subtotal: ₹${subtotal}`,
    ].join("\n");
    const text = encodeURIComponent(msg);
    // Use wa.me (works on web + mobile). Fallback to whatsapp:// app scheme if blocked.
    const waMe = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    const appScheme = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${text}`;
    const win = window.open(waMe, "_blank");
    if (!win) {
      // popup blocked → try app scheme directly
      window.location.href = appScheme;
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="px-5 py-4 border-b border-border">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> My Cart ({items.length})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {items.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">
              Your cart is empty.
            </div>
          ) : (
            items.map((i) => (
              <div key={i.id} className="flex gap-3 items-center bg-card border border-border rounded-lg p-2">
                <img src={i.img} alt={i.name} className="w-16 h-16 object-cover rounded-md bg-white" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold line-clamp-2">{i.name}</p>
                  <p className="text-xs text-muted-foreground">₹{i.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => setQty(i.id, i.qty - 1)}
                      className="w-6 h-6 rounded border border-border flex items-center justify-center hover:bg-secondary"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-semibold w-6 text-center">{i.qty}</span>
                    <button
                      onClick={() => setQty(i.id, i.qty + 1)}
                      className="w-6 h-6 rounded border border-border flex items-center justify-center hover:bg-secondary"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">₹{i.price * i.qty}</p>
                  <button
                    onClick={() => remove(i.id)}
                    className="text-muted-foreground hover:text-destructive mt-1"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-border px-5 py-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-bold text-lg">₹{subtotal}</span>
          </div>
          <Button onClick={handleBuy} disabled={items.length === 0} className="w-full" size="lg">
            Buy on WhatsApp
          </Button>
          {items.length > 0 && (
            <button
              onClick={clear}
              className="w-full text-xs text-muted-foreground hover:text-foreground"
            >
              Clear cart
            </button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
