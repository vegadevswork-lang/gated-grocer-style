import { createContext, useContext, useState, ReactNode } from "react";

export type DetailProduct = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  pack?: string;
  tag?: string;
  rating?: number;
  img: string;
  inStock?: number;
};

type Ctx = {
  product: DetailProduct | null;
  open: (p: DetailProduct) => void;
  close: () => void;
};

const DetailCtx = createContext<Ctx | null>(null);

export function ProductDetailProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<DetailProduct | null>(null);
  return (
    <DetailCtx.Provider
      value={{ product, open: (p) => setProduct(p), close: () => setProduct(null) }}
    >
      {children}
    </DetailCtx.Provider>
  );
}

export function useProductDetail() {
  const v = useContext(DetailCtx);
  if (!v) throw new Error("useProductDetail must be used inside ProductDetailProvider");
  return v;
}
