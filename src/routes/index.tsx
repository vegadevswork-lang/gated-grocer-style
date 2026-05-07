import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BigCategoryCards } from "@/components/BigCategoryCards";
import { PromoBanners } from "@/components/PromoBanners";
import { ProductGrid } from "@/components/ProductGrid";
import { CategorySections } from "@/components/CategorySections";
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
        <PromoBanners />
        <BigCategoryCards />
        <ProductGrid />
        <CategorySections />
      </main>
      <Footer />
    </div>
  );
}
