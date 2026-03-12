import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";
import Layout from "@/components/Layout";

const contactInfo = [
  { icon: Mail, label: "Email", value: "qusai4business@gmail.com", href: "mailto:qusai4business@gmail.com" },
  { icon: Instagram, label: "Instagram", value: "@al_khayma.az", href: "https://instagram.com/al_khayma.az" },
];

const Contact = () => (
  <Layout>
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Contact</span> Us
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              We'd love to hear from you. Whether it's a reservation, a special event, or just a question
              about our menu — don't hesitate to reach out.
            </p>
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-sm">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground">{label}</p>
                    <p className="text-foreground mt-1 group-hover:text-primary transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <textarea
              rows={5}
              placeholder="Your message..."
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-sm text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
