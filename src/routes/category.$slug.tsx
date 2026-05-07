import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/CategorySections";
import { findSection } from "@/data/products";

export const Route = createFileRoute("/category/$slug")({
  component: CategoryPage,
  loader: ({ params }) => {
    const section = findSection(params.slug);
    if (!section) throw notFound();
    return { section };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.section.title ?? "Category"} — Amar Supermarket` },
      {
        name: "description",
        content: `Shop ${loaderData?.section.title ?? "category"} at Amar Supermarket.`,
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <Link to="/" className="text-primary hover:underline mt-4 inline-block">
          Back to home
        </Link>
      </div>
    </div>
  ),
});

function CategoryPage() {
  const { section } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <div className="flex items-end justify-between mb-6">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground">
              {section.title}
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              {section.products.length} products available
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {section.products.map((p, i) => (
            <ProductCard key={p.name} product={p} i={i} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
