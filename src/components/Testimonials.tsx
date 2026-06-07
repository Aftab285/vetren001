import { Quote } from "lucide-react";

const quotes = [
  {
    body: "I hadn't smiled in a photo for fifteen years. After my care, my granddaughter said I looked like a hero again. I felt like one.",
    name: "Marcus T.",
    role: "U.S. Army, Retired",
  },
  {
    body: "The VA told me I didn't qualify. The Foundation told me I mattered. That changed everything.",
    name: "Diane R.",
    role: "U.S. Navy Veteran",
  },
  {
    body: "Volunteering my chair has been the most meaningful work of my career. These are the patients I went into dentistry for.",
    name: "Dr. James L.",
    role: "Volunteer Provider",
  },
];

const Testimonials = () => {
  return (
    <section aria-labelledby="testimonials-heading" className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true" style={{
        backgroundImage: "repeating-linear-gradient(0deg, hsl(var(--accent)) 0 1px, transparent 1px 32px)",
      }} />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent-gold">Voices</span>
          <h2 id="testimonials-heading" className="mt-4 font-display text-4xl font-black uppercase leading-[1] md:text-6xl">
            Stories from the <span className="text-accent-gold">chair</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="flex flex-col rounded-sm border border-primary-foreground/15 bg-primary-foreground/[0.04] p-8 backdrop-blur transition-colors hover:bg-primary-foreground/[0.08]">
              <Quote className="h-8 w-8 text-accent-gold" aria-hidden="true" />
              <blockquote className="mt-6 flex-1 font-display text-lg font-medium leading-snug text-primary-foreground md:text-xl">
                "{q.body}"
              </blockquote>
              <figcaption className="mt-8 border-t border-primary-foreground/15 pt-5">
                <div className="font-display text-sm font-bold uppercase tracking-wider">{q.name}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-gold">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
