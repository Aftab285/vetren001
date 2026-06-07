import { AlertTriangle } from "lucide-react";

const StatBar = () => {
  return (
    <section aria-label="Veteran dental care statistics" className="relative z-10 -mt-px bg-gradient-stat text-accent-foreground">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          {/* Massive number */}
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-3 font-display font-black leading-none">
              <span className="text-7xl md:text-8xl lg:text-9xl">1</span>
              <span className="text-4xl md:text-5xl">in</span>
              <span className="text-7xl md:text-8xl lg:text-9xl">12</span>
            </div>
            <div className="mt-2 font-display text-xs font-bold uppercase tracking-[0.3em]">
              The Veteran Dental Gap
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:col-span-1 md:flex md:justify-center" aria-hidden="true">
            <div className="h-24 w-px bg-primary-foreground/30" />
          </div>

          {/* Message */}
          <div className="md:col-span-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
              <AlertTriangle className="h-3 w-3" aria-hidden="true" />
              Urgent Reality
            </div>
            <p className="font-display text-2xl font-bold leading-tight md:text-3xl">
              Only <span className="underline decoration-primary-foreground/40 decoration-4 underline-offset-4">8% of U.S. veterans</span> qualify for full dental benefits through the VA.
            </p>
            <p className="mt-3 max-w-xl text-sm text-primary-foreground md:text-base">
              That leaves more than 16 million who served with no path to the care they need to eat, smile, and live with dignity.
            </p>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-10 overflow-hidden border-y border-primary-foreground/20 py-3" role="marquee" aria-label="Foundation values">
          <div className="flex w-max animate-marquee gap-12 font-display text-xs font-bold uppercase tracking-[0.4em]" aria-hidden="true">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 gap-12">
                <span>★ Restoring Smiles</span>
                <span>★ Honoring Service</span>
                <span>★ Bridging The Gap</span>
                <span>★ Dignity Through Care</span>
                <span>★ Every Veteran Deserves</span>
                <span>★ Community Funded</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatBar;
