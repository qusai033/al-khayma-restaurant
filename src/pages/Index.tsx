import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-restaurant.jpg";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Al-Khayma restaurant interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4">
          Authentic Middle Eastern Cuisine
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
          Welcome to <span className="text-gradient">Al-Khayma</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          A culinary journey through the heart of the Middle East, where every dish tells a story of tradition and flavor.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/menu"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-sm text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            View Menu
          </Link>
          <Link
            to="/contact"
            className="border border-primary text-primary px-8 py-3 rounded-sm text-sm font-medium tracking-widest uppercase hover:bg-primary/10 transition-colors"
          >
            Reserve a Table
          </Link>
        </div>
      </motion.div>
    </section>

    {/* Highlights */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        {[
          { title: "Fresh Ingredients", desc: "Sourced daily from local markets and premium suppliers." },
          { title: "Family Recipes", desc: "Passed down through generations of culinary mastery." },
          { title: "Warm Hospitality", desc: "Experience the legendary warmth of Middle Eastern culture." },
        ].map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-xl font-semibold text-primary mb-3">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Index;
