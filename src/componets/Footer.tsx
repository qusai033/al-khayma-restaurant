import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-xl font-bold text-primary mb-4">Al-Khayma</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Authentic Middle Eastern cuisine crafted with passion and tradition since 1995.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground mb-4">Navigate</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Menu", path: "/menu" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <Link key={item.path} to={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        
      </div>
      <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Al-Khayma. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
