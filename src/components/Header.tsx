import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const navItems = [
  { label: "Mission", href: "/#mission" },
  { label: "Veterans", href: "/#veterans" },
  { label: "Get Involved", href: "/#get-involved" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      {/* Skip nav for inner pages */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          to="/"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded-sm"
          aria-label="Veterans Dental Foundation — Home"
        >
          <img src={logo} alt="" className="h-10 w-auto md:h-12" aria-hidden="true" />
          <span className="sr-only">Veterans Dental Foundation</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main Navigation">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:text-accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded-sm"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:text-accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded-sm"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="accent" size="sm" className="hidden md:inline-flex" asChild>
            <Link to="/donate">Donate Now</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-sm md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="border-t border-primary-foreground/20 bg-primary px-6 pb-6 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.to ? (
                  <Link
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:text-accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-sm"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:text-accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded-sm"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <Button variant="accent" size="sm" className="w-full" asChild>
                <Link to="/donate" onClick={() => setMobileOpen(false)}>
                  Donate Now
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
