import { Users, Stethoscope, MapPin, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "12,400+", label: "Veterans Served" },
  { icon: Stethoscope, value: "850+", label: "Volunteer Dentists" },
  { icon: MapPin, value: "47", label: "States Covered" },
  { icon: Award, value: "$28M", label: "Care Donated" },
];

const ImpactSection = () => {
  return (
    <section aria-labelledby="impact-heading" className="relative bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">Our Impact</span>
          <h2 id="impact-heading" className="mt-4 font-display text-4xl font-black uppercase leading-[1] text-primary md:text-6xl">
            Numbers that <span className="text-accent">honor</span> service.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Every figure represents a veteran who can eat, smile, and stand tall again.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-primary/15 lg:grid-cols-4" role="list">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="group relative bg-background p-8 transition-colors hover:bg-primary md:p-10" role="listitem">
              <Icon className="h-8 w-8 text-accent transition-transform group-hover:scale-110 group-hover:text-accent-gold" aria-hidden="true" />
              <div className="mt-6 font-display text-5xl font-black text-primary transition-colors group-hover:text-primary-foreground md:text-6xl">
                {value}
              </div>
              <div className="mt-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-accent-gold">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
