import { useState } from "react";
import { Play, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import VideoModal from "./VideoModal";
import heroBg from "@/assets/hero-bg.png";
import logo from "@/assets/logo.svg";

const YT_ID = "i70br9yHXDg";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-[680px] w-full overflow-hidden bg-primary md:min-h-[88vh] lg:min-h-[92vh]">
      {/* Skip navigation link for keyboard users (WCAG 2.4.1) */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Smiling U.S. veteran in a dental clinic"
          className="h-full w-full object-cover object-right animate-ken-burns"
        />
        {/* Patriotic gradient overlay — strong on left for text legibility */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, hsl(217 81% 8% / 0.92) 0%, hsl(217 81% 12% / 0.78) 35%, hsl(217 81% 12% / 0.35) 65%, hsl(217 81% 12% / 0.15) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
      </div>

      {/* Top nav */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <a href="#" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded-sm">
            <img src={logo} alt="Veterans Dental Foundation" className="h-10 w-auto md:h-12" />
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main Navigation">
            {["Mission", "Veterans", "Get Involved"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                className="text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:text-accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded-sm"
              >
                {l}
              </a>
            ))}
            <Link
              to="/contact"
              className="text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:text-accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded-sm"
            >
              Contact
            </Link>
          </nav>
          <Button variant="accent" size="sm" className="hidden md:inline-flex" asChild><Link to="/donate">Donate Now</Link></Button>
        </div>
      </header>

      {/* Hero content */}
      <div id="main-content" tabIndex={-1} className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl flex-col justify-center px-6 pb-16 pt-28 md:min-h-[88vh] md:px-10 md:pb-20 md:pt-28 lg:min-h-[92vh] lg:pb-24 lg:pt-32 outline-none">
        <div className="max-w-4xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-3 border-l-4 border-accent pl-4">
            <span className="h-2 w-2 animate-count-pulse rounded-full bg-accent" aria-hidden="true" />
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground">
              A Non-Profit Mission
            </span>
          </div>
          <h1 className="font-display text-5xl font-black uppercase leading-[0.95] text-primary-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Restoring the <br />
            <span className="text-accent">Smiles</span> of <br />
            America's Heroes.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-primary-foreground md:text-xl">
            Over 92% of U.S. veterans are denied dental care by the VA. We bridge the gap—one smile, one veteran, one act of gratitude at a time.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button
              onClick={() => setOpen(true)}
              variant="accent"
              size="xl"
              className="group"
              aria-haspopup="dialog"
              aria-expanded={open}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15 transition-transform group-hover:scale-110">
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              </span>
              Watch Our Mission
            </Button>
            <Button variant="ghostHero" size="xl" asChild>
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-primary-foreground/70" aria-hidden="true">
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} videoId={YT_ID} />
    </section>
  );
};

export default Hero;
