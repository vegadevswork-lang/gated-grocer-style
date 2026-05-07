import { useMemo, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, Copy, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

const WHATSAPP_LINK = "https://wa.link/98958w";
const WHATSAPP_DISPLAY = "+91 93987 87108";

export function CartDrawer() {
  const { items, isOpen, setOpen, setQty, remove, subtotal, clear } = useCart();
  const [copied, setCopied] = useState(false);

  const orderText = useMemo(() => {
    const lines = items.map(
      (i, n) => `${n + 1}. ${i.name} x${i.qty} — ₹${i.price * i.qty}`,
    );
    return [
      "Hi! I'd like to place an order:",
      "",
      ...lines,
      "",
      `Subtotal: ₹${subtotal}`,
    ].join("\n");
  }, [items, subtotal]);

  // Use the user's wa.link short link (it has its own preset message, but we still copy the order to clipboard)
  const waMeUrl = WHATSAPP_LINK;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(orderText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
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

          {/* Real anchor to the wa.link short link — popup-blocker safe. Copy order first as fallback. */}
          <Button
            asChild
            disabled={items.length === 0}
            className="w-full"
            size="lg"
          >
            <a
              href={waMeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={items.length === 0}
              onClick={(e) => {
                if (items.length === 0) {
                  e.preventDefault();
                  return;
                }
                handleCopy();
              }}
            >
              Buy on WhatsApp
            </a>
          </Button>

          {items.length > 0 && (
            <>
              <button
                onClick={handleCopy}
                className="w-full text-xs text-muted-foreground hover:text-foreground flex items-center justify-center gap-1.5"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copied ? "Copied!" : `If WhatsApp doesn't open, copy order & message ${WHATSAPP_DISPLAY}`}
              </button>
              <button
                onClick={clear}
                className="w-full text-xs text-muted-foreground hover:text-foreground"
              >
                Clear cart
              </button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
