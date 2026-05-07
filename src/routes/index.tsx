import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryStrip } from "@/components/CategoryStrip";
import { BigCategoryCards } from "@/components/BigCategoryCards";
import { PromoBanners } from "@/components/PromoBanners";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Amar Supermarket — Fresh Groceries & Apparel for Gated Communities" },
      {
        name: "description",
        content:
          "Farm-fresh organic produce and ready-to-wear clothing delivered to your gated community within the hour.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CategoryStrip />
        <BigCategoryCards />
        <PromoBanners />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
