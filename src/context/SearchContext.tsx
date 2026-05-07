import { createContext, useContext, useState, ReactNode } from "react";

type Ctx = { query: string; setQuery: (v: string) => void };
const SearchCtx = createContext<Ctx | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  return <SearchCtx.Provider value={{ query, setQuery }}>{children}</SearchCtx.Provider>;
}

export function useSearch() {
  const v = useContext(SearchCtx);
  if (!v) throw new Error("useSearch must be used inside SearchProvider");
  return v;
}
