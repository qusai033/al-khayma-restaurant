import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import aboutImage from "@/assets/about-food.jpg";

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            A Legacy of <span className="text-gradient">Flavor</span>
          </h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Founded in 1995, Al-Khayma began as a small family kitchen with a dream — to share the
              rich, vibrant flavors of Middle Eastern cuisine with the world.
            </p>
            <p>
              Our name, meaning "The Tent," reflects the Bedouin tradition of generous hospitality.
              Every guest who enters our doors is treated as family, welcomed with warmth, and served
              dishes prepared with the same love and care as a home-cooked meal.
            </p>
            <p>
              Today, our chefs continue to honor time-tested recipes while embracing modern culinary
              techniques, creating an unforgettable dining experience that bridges tradition and innovation.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <img
            src={aboutImage}
            alt="Middle Eastern mezze spread"
            className="rounded-sm w-full aspect-square object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-sm">
            <p className="font-display text-3xl font-bold">30+</p>
            <p className="text-sm font-medium">Years of Excellence</p>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
