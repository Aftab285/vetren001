import { Button } from "@/components/ui/button";
import { Heart, Stethoscope, Users } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  { icon: Heart, title: "Donate", body: "Fund care for a veteran in need today.", cta: "Give Now", to: "/donate" },
  { icon: Stethoscope, title: "Volunteer Care", body: "Dentists—join our nationwide provider network.", cta: "Join Network", to: "/providers" },
  { icon: Users, title: "Spread the Word", body: "Help us reach every veteran without coverage.", cta: "Share Mission", to: "/contact" },
];

const CTASection = () => {
  return (
    <section id="get-involved" aria-labelledby="get-involved-heading" className="relative bg-primary py-24 text-primary-foreground md:py-32">
      <div className="absolute inset-0 opacity-10" aria-hidden="true" style={{
        backgroundImage: "repeating-linear-gradient(45deg, hsl(var(--accent)) 0 1px, transparent 1px 24px)",
      }} />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent-gold">Get Involved</span>
          <h2 id="get-involved-heading" className="mt-4 font-display text-4xl font-black uppercase leading-[1] md:text-6xl">
            Three ways to <span className="text-accent-gold">stand</span> with our veterans.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-primary-foreground/15 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body, cta, to }) => (
            <div key={title} className="group flex flex-col bg-primary p-10 transition-colors hover:bg-primary-foreground/5">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-sm bg-accent-gold text-primary transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{title}</h3>
              <p className="mt-3 flex-1 text-primary-foreground/75">{body}</p>
              <Button variant="accent" size="lg" className="mt-8 self-start" asChild>
                <Link to={to}>{cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
