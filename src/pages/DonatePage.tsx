import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Shield,
  Award,
  DollarSign,
  Building2,
  FileText,
  Coins,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const tiers = [
  {
    name: "Friend",
    price: 25,
    icon: Heart,
    description: "Covers a dental screening for one veteran",
    features: [
      "Comprehensive oral health screening",
      "Personalized treatment recommendations",
      "Follow-up care coordination",
      "Impact report emailed to you",
    ],
    highlighted: false,
  },
  {
    name: "Champion",
    price: 100,
    icon: Shield,
    description: "Funds a complete dental cleaning and X-rays",
    features: [
      "Full dental cleaning & hygiene",
      "Digital X-ray diagnostics",
      "Oral cancer screening",
      "Personalized care plan",
      "Priority scheduling for veteran",
    ],
    highlighted: true,
  },
  {
    name: "Hero",
    price: 500,
    icon: Award,
    description: "Sponsors a full restorative treatment plan",
    features: [
      "Complete restorative treatment",
      "Fillings, crowns, or extractions",
      "Ongoing follow-up care",
      "Named recognition on our wall",
      "Quarterly impact updates",
      "Tax-deductible giving receipt",
    ],
    highlighted: false,
  },
];

const impactStats = [
  { value: "$28M+", label: "Donated in Care" },
  { value: "12,400+", label: "Veterans Served" },
  { value: "850+", label: "Volunteer Dentists" },
];

const otherWays = [
  {
    icon: FileText,
    title: "Tax-Deductible Gifts",
    body: "Every donation is fully tax-deductible. You'll receive an IRS-compliant receipt for your records. EIN: 83-4921057.",
  },
  {
    icon: Building2,
    title: "Employer Matching",
    body: "Double your impact. Many employers match charitable gifts—check with your HR department to multiply your contribution.",
  },
  {
    icon: DollarSign,
    title: "Planned Giving",
    body: "Include the Veterans Dental Foundation in your will or estate plan to create a lasting legacy for our nation's heroes.",
  },
  {
    icon: Coins,
    title: "Stocks & Crypto",
    body: "Donate appreciated securities or cryptocurrency for additional tax advantages while supporting veteran dental care.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

const DonatePage = () => {
  useEffect(() => {
    document.title = "Donate — Veterans Dental Foundation";
  }, []);

  return (
    <PageLayout>
      {/* ====== HERO ====== */}
      <section
        aria-labelledby="donate-hero-heading"
        className="relative overflow-hidden bg-primary py-28 text-primary-foreground md:py-36"
      >
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(var(--accent-gold)) 0 1px, transparent 1px 28px)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-3 border-l-4 border-accent pl-4">
              <span
                className="h-2 w-2 animate-count-pulse rounded-full bg-accent"
                aria-hidden="true"
              />
              <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent-gold">
                Support Our Mission
              </span>
            </div>

            <h1
              id="donate-hero-heading"
              className="font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Support Our{" "}
              <span className="text-accent-gold">Veterans' Smiles</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
              Every dollar you give goes directly to providing dental care for
              veterans who served our country but lost access to critical oral
              health services. Your generosity restores more than smiles—it
              restores dignity.
            </p>

            <p className="mt-4 text-sm font-semibold tracking-wide text-accent-gold">
              Veterans Dental Foundation is a registered 501(c)(3) nonprofit.
              All donations are tax-deductible.
            </p>
          </div>
        </div>
      </section>

      {/* ====== DONATION TIERS ====== */}
      <section
        aria-labelledby="tiers-heading"
        className="relative bg-secondary py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-3xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Choose Your Impact
            </span>
            <h2
              id="tiers-heading"
              className="mt-4 font-display text-4xl font-black uppercase leading-[1] text-primary md:text-6xl"
            >
              Give at a level that{" "}
              <span className="text-accent">matters.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Whether it's a screening, a cleaning, or a full treatment—every
              tier changes a veteran's life.
            </p>
          </div>

          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            role="list"
            aria-label="Donation tiers"
          >
            {tiers.map(
              ({
                name,
                price,
                icon: Icon,
                description,
                features,
                highlighted,
              }) => (
                <div
                  key={name}
                  role="listitem"
                  className={`group relative flex flex-col rounded-sm bg-background p-8 transition-all duration-300 md:p-10 ${
                    highlighted
                      ? "z-10 scale-[1.03] border-2 border-accent shadow-cinematic ring-1 ring-accent/20 md:scale-105"
                      : "border border-border shadow-lg hover:shadow-cinematic"
                  }`}
                >
                  {highlighted && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-sm bg-accent px-4 py-1 font-display text-xs font-bold uppercase tracking-widest text-white"
                      aria-hidden="true"
                    >
                      Most Popular
                    </div>
                  )}

                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-sm transition-transform group-hover:scale-110 ${
                      highlighted
                        ? "bg-accent text-white"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-primary">
                    {name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-5xl font-black text-primary md:text-6xl">
                      ${price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      one-time
                    </span>
                  </div>

                  <p className="mt-4 text-muted-foreground">{description}</p>

                  <ul className="mt-8 flex-1 space-y-3" aria-label={`${name} tier benefits`}>
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="accent"
                    size="lg"
                    className="mt-10 w-full"
                    aria-label={`Donate $${price} as a ${name}`}
                  >
                    Donate ${price}
                  </Button>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ====== IMPACT STATS ====== */}
      <section
        aria-labelledby="impact-heading"
        className="relative bg-background py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-3xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Our Impact
            </span>
            <h2
              id="impact-heading"
              className="mt-4 font-display text-4xl font-black uppercase leading-[1] text-primary md:text-6xl"
            >
              Your dollars{" "}
              <span className="text-accent">at work.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Every contribution fuels our mission. Here's the impact we've made
              together.
            </p>
          </div>

          <div
            className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-primary/15 sm:grid-cols-3"
            role="list"
          >
            {impactStats.map(({ value, label }) => (
              <div
                key={label}
                className="group relative bg-background p-10 text-center transition-colors hover:bg-primary md:p-14"
                role="listitem"
              >
                <div className="font-display text-5xl font-black text-primary transition-colors group-hover:text-primary-foreground md:text-7xl">
                  {value}
                </div>
                <div className="mt-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-accent-gold">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== OTHER WAYS TO GIVE ====== */}
      <section
        aria-labelledby="other-ways-heading"
        className="relative bg-secondary py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-3xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              More Options
            </span>
            <h2
              id="other-ways-heading"
              className="mt-4 font-display text-4xl font-black uppercase leading-[1] text-primary md:text-6xl"
            >
              Other ways to{" "}
              <span className="text-accent">give.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {otherWays.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group flex gap-6 rounded-sm bg-background p-8 shadow-lg transition-all duration-300 hover:shadow-cinematic md:p-10"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section
        aria-labelledby="donate-cta-heading"
        className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32"
      >
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(var(--accent)) 0 1px, transparent 1px 24px)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 text-center md:px-10">
          <h2
            id="donate-cta-heading"
            className="mx-auto max-w-4xl font-display text-3xl font-black uppercase leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Every veteran deserves to smile with{" "}
            <span className="text-accent-gold">confidence.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Your generosity has the power to transform a veteran's life. Join
            the thousands of supporters making a difference today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="accent" size="xl" className="group">
              Donate Now
              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
            <Button variant="ghostHero" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DonatePage;
