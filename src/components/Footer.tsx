import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const footerLinks = [
  { label: "Mission", href: "/#mission" },
  { label: "Veterans", href: "/#veterans" },
  { label: "Donate", to: "/donate" },
  { label: "Providers", to: "/providers" },
  { label: "Press", to: "/press" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-ink text-primary-foreground" style={{ backgroundColor: "hsl(var(--ink))" }}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="flex items-center">
              <img src={logo} alt="Veterans Dental Foundation" className="h-10 w-auto" />
            </div>
            <p className="mt-6 max-w-md text-sm text-primary-foreground/70">
              A 501(c)(3) non-profit dedicated to bridging the dental care gap for U.S. military veterans.
            </p>
          </div>
          <nav aria-label="Footer Navigation" className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
            {footerLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-primary-foreground/75 transition-colors hover:text-accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded-sm"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-primary-foreground/75 transition-colors hover:text-accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded-sm"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/75 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Veterans Dental Foundation. All rights reserved.</span>
          <span>Built with gratitude for those who served.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
