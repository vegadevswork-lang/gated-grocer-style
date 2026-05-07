export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-display font-extrabold text-xl text-foreground">AMAR SUPERMARKET</div>
          <p className="mt-2 text-muted-foreground">
            Convenience for gated communities. Fresh groceries and apparel,
            delivered within the hour.
          </p>
        </div>
        {[
          { title: "Shop", items: ["Vegetables", "Fruits", "Dairy", "Clothing"] },
          { title: "Help", items: ["Contact", "Delivery", "Returns", "FAQ"] },
          { title: "Company", items: ["About", "Communities", "Careers", "Press"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-foreground mb-3">{col.title}</h4>
            <ul className="space-y-2 text-muted-foreground">
              {col.items.map((i) => <li key={i}><a href="#" className="hover:text-foreground">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Amar Supermarket. All rights reserved.
      </div>
    </footer>
  );
}
