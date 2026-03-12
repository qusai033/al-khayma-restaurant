import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";

const categories = ["Dishes", "Appetizers", "Sandwiches", "Catering"] as const;
type Category = (typeof categories)[number];

interface MenuItem {
  name: string;
  price: string;
  category: Category;
  hasServingOptions?: boolean;
}

const menuItems: MenuItem[] = [
  { name: "Maqluba", price: "50.00", category: "Dishes", hasServingOptions: true },
  { name: "Jordanian Mansaf", price: "75.00", category: "Dishes", hasServingOptions: true },
  { name: "Syrian Mansaf", price: "50.00", category: "Dishes", hasServingOptions: true },
  { name: "Rice & Chicken", price: "45.00", category: "Dishes", hasServingOptions: true },
  { name: "30 Warak Enab", price: "25.00", category: "Appetizers" },
  { name: "Falafel", price: "70.00", category: "Sandwiches" },
  { name: "Chicken Shawarma", price: "100.00", category: "Sandwiches" },
  { name: "Chicken Shawarma", price: "100.00", category: "Catering" },
  { name: "Tray of Rice", price: "50.00", category: "Catering" },
  { name: "Half Tray of Rice", price: "35.00", category: "Catering" },
];

const servingOptions = [2, 4, 6, 8, 10, 12];

const MenuItemCard = ({ item }: { item: MenuItem }) => {
  const [qty, setQty] = useState(1);
  const [people, setPeople] = useState(2);
  const [separatePlates, setSeparatePlates] = useState(false);

  return (
    <div className="bg-card border border-border rounded-sm p-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-display text-lg font-semibold">{item.name}</h3>
          <span className="text-primary font-display text-xl font-bold">${item.price}</span>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="w-8 h-8 rounded-sm bg-secondary text-secondary-foreground flex items-center justify-center text-lg hover:bg-muted transition-colors"
          >
            −
          </button>
          <span className="text-foreground font-medium w-6 text-center">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="w-8 h-8 rounded-sm bg-secondary text-secondary-foreground flex items-center justify-center text-lg hover:bg-muted transition-colors"
          >
            +
          </button>
        </div>

        {/* Serving options for Dishes */}
        {item.hasServingOptions && (
          <>
            <div className="mb-3">
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
                Number of People
              </p>
              <div className="flex flex-wrap gap-2">
                {servingOptions.map((n) => (
                  <button
                    key={n}
                    onClick={() => setPeople(n)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors ${
                      people === n
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-muted"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer mb-4">
              <input
                type="checkbox"
                checked={separatePlates}
                onChange={(e) => setSeparatePlates(e.target.checked)}
                className="accent-[hsl(36,70%,55%)] w-4 h-4"
              />
              <span className="text-sm text-muted-foreground">Serve in Separate Plates</span>
            </label>
          </>
        )}
      </div>

      <button className="w-full bg-primary text-primary-foreground py-2.5 rounded-sm text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity">
        Add to Cart
      </button>
    </div>
  );
};

const MenuPage = () => {
  const [active, setActive] = useState<Category>("Dishes");

  return (
    <Layout>
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4">Our Offerings</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              The <span className="text-gradient">Menu</span>
            </h1>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-xs font-medium tracking-widest uppercase rounded-sm transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Items grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {menuItems
                .filter((item) => item.category === active)
                .map((item, i) => (
                  <MenuItemCard key={`${item.name}-${i}`} item={item} />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;
