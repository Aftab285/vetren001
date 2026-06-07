import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  ArrowRight,
  Calendar,
  Star,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const milestones = [
  {
    year: "2018",
    title: "Founded in Austin, TX",
    description:
      "Dr. Sarah Mitchell, a military veteran and practicing dentist, founded the Veterans Dental Foundation after witnessing firsthand the dental care crisis affecting America's veterans.",
  },
  {
    year: "2019",
    title: "First 100 Veterans Served",
    description:
      "Within our first full year of operation, we provided free dental care to 100 veterans across Texas—proving the model works.",
  },
  {
    year: "2020",
    title: "Expanded to 15 States",
    description:
      "When COVID-19 disrupted healthcare nationwide, we pivoted fast—launching tele-dentistry consultations and expanding our provider network to 15 states.",
  },
  {
    year: "2022",
    title: "5,000 Veterans Milestone",
    description:
      "We reached a landmark moment: 5,000 veterans served. The milestone was recognized by the U.S. Senate Veterans' Affairs Committee.",
  },
  {
    year: "2024",
    title: "47 States, 850+ Dentists",
    description:
      "Today we operate in 47 states with over 850 volunteer dentists in our network, providing comprehensive dental care to veterans coast to coast.",
  },
];

const leaders = [
  {
    initials: "SM",
    name: "Dr. Sarah Mitchell",
    role: "Founder & CEO",
    color: "bg-accent",
    description:
      "A U.S. Army veteran and practicing dentist who served two tours before founding VDF to ensure every veteran has access to the dental care they deserve.",
  },
  {
    initials: "JR",
    name: "James Rodriguez",
    role: "Chief Operating Officer",
    color: "bg-primary",
    description:
      "A nonprofit operations expert with 15 years of experience scaling healthcare initiatives. James oversees VDF's nationwide provider network and partnerships.",
  },
  {
    initials: "PH",
    name: "Col. Patricia Hayes",
    role: "Board Chair",
    color: "bg-accent-gold text-primary",
    description:
      "Retired U.S. Air Force Colonel and former VA healthcare administrator. Patricia brings decades of military leadership and veteran advocacy to VDF's board.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

const OurStoryPage = () => {
  useEffect(() => {
    document.title = "Our Story — Veterans Dental Foundation";
  }, []);

  return (
    <PageLayout>
      {/* ====== HERO ====== */}
      <section
        aria-labelledby="story-hero-heading"
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
                About Us
              </span>
            </div>

            <h1
              id="story-hero-heading"
              className="font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Our <span className="text-accent-gold">Story</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
              From one dentist's dream to a nationwide mission—this is how we
              built a movement to restore the smiles of America's heroes.
            </p>
          </div>
        </div>
      </section>

      {/* ====== ORIGIN STORY ====== */}
      <section
        aria-labelledby="origin-heading"
        className="relative bg-background py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Text column */}
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-3 border-l-4 border-accent pl-4">
                <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  Where It Began
                </span>
              </div>

              <h2
                id="origin-heading"
                className="font-display text-4xl font-black uppercase leading-[1] text-primary md:text-5xl lg:text-6xl"
              >
                One dentist.{" "}
                <span className="text-accent">One mission.</span>
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Dr. Sarah Mitchell served two tours with the U.S. Army before
                  returning home to practice dentistry in Austin, Texas. During
                  her service, she watched fellow soldiers endure chronic dental
                  pain—cracked teeth, infections, and decayed fillings left
                  untreated for months.
                </p>
                <p>
                  But what shocked her most was what happened{" "}
                  <em>after</em> they left service. Over 92% of veterans lose
                  access to VA dental benefits within six months of discharge.
                  The men and women who had defended our country were now unable
                  to afford a basic dental cleaning.
                </p>
                <p>
                  In 2018, Dr. Mitchell opened her Austin clinic on the first
                  Saturday of every month to treat veterans for free. Word
                  spread fast. Dentists in neighboring cities offered their
                  chairs. Within a year, what began as a one-woman Saturday
                  clinic became the Veterans Dental Foundation—a nationwide
                  network of volunteer providers committed to bridging the
                  dental care gap.
                </p>
              </div>
            </div>

            {/* Stat / quote card */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">
                <div className="overflow-hidden rounded-sm bg-primary p-8 text-primary-foreground shadow-cinematic md:p-10">
                  <div className="font-display text-6xl font-black leading-none text-accent-gold md:text-7xl">
                    92%
                  </div>
                  <p className="mt-3 font-display text-sm font-bold uppercase tracking-wider">
                    of veterans lose dental benefits after service
                  </p>
                  <div
                    className="mt-6 h-px w-12 bg-accent-gold"
                    aria-hidden="true"
                  />
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
                    The VA only covers dental care for veterans with
                    service-connected dental conditions or 100% disability
                    ratings—leaving the vast majority without coverage.
                  </p>
                </div>

                <div className="overflow-hidden rounded-sm border border-border bg-background p-8 shadow-lg md:p-10">
                  <blockquote className="text-lg italic leading-relaxed text-primary">
                    "I served my country for 12 years, but I couldn't afford to
                    fix a broken tooth. Dr. Mitchell gave me my smile back—and
                    my confidence."
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white"
                      aria-hidden="true"
                    >
                      MJ
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-primary">
                        Marcus Johnson
                      </div>
                      <div className="text-xs text-muted-foreground">
                        U.S. Marine Corps, Veteran
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TIMELINE ====== */}
      <section
        aria-labelledby="timeline-heading"
        className="relative bg-secondary py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-3xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Our Journey
            </span>
            <h2
              id="timeline-heading"
              className="mt-4 font-display text-4xl font-black uppercase leading-[1] text-primary md:text-6xl"
            >
              Milestones that{" "}
              <span className="text-accent">matter.</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative" role="list" aria-label="Foundation milestones timeline">
            {/* Vertical line */}
            <div
              className="absolute left-4 top-0 h-full w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-px"
              aria-hidden="true"
            />

            {milestones.map(({ year, title, description }, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={year}
                  className="relative mb-12 last:mb-0"
                  role="listitem"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-4 top-8 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-secondary bg-accent md:left-1/2"
                    aria-hidden="true"
                  >
                    <Calendar className="h-3.5 w-3.5 text-white" />
                  </div>

                  {/* Card — alternates left/right on desktop */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isEven
                        ? "md:mr-auto md:text-right"
                        : "md:ml-auto md:text-left"
                    }`}
                  >
                    <div className="group rounded-sm bg-background p-8 shadow-lg transition-all duration-300 hover:shadow-cinematic">
                      <span className="inline-block font-display text-3xl font-black text-accent md:text-4xl">
                        {year}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-primary">
                        {title}
                      </h3>
                      <p className="mt-3 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== MISSION & VISION ====== */}
      <section
        aria-labelledby="mission-vision-heading"
        className="relative bg-background py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-3xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              What Drives Us
            </span>
            <h2
              id="mission-vision-heading"
              className="mt-4 font-display text-4xl font-black uppercase leading-[1] text-primary md:text-6xl"
            >
              Mission &amp;{" "}
              <span className="text-accent">Vision.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Mission card */}
            <div className="group flex flex-col rounded-sm bg-primary p-10 text-primary-foreground shadow-cinematic transition-all duration-300 hover:scale-[1.02] md:p-12">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-accent-gold text-primary transition-transform group-hover:scale-110">
                <Target className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                Our Mission
              </h3>
              <p className="mt-4 flex-1 text-lg leading-relaxed text-primary-foreground/85">
                To bridge the dental care gap for America's veterans by
                connecting them with a nationwide network of volunteer dental
                providers—delivering free, high-quality oral healthcare to those
                who served our nation.
              </p>
              <div
                className="mt-8 h-px w-16 bg-accent-gold"
                aria-hidden="true"
              />
            </div>

            {/* Vision card */}
            <div className="group flex flex-col rounded-sm border border-border bg-background p-10 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-cinematic md:p-12">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                <Eye className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-primary">
                Our Vision
              </h3>
              <p className="mt-4 flex-1 text-lg leading-relaxed text-muted-foreground">
                A nation where every veteran—regardless of discharge status,
                disability rating, or income—can access the dental care they
                need to live with health, dignity, and confidence.
              </p>
              <div
                className="mt-8 h-px w-16 bg-accent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== LEADERSHIP ====== */}
      <section
        aria-labelledby="leadership-heading"
        className="relative bg-secondary py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-3xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Leadership
            </span>
            <h2
              id="leadership-heading"
              className="mt-4 font-display text-4xl font-black uppercase leading-[1] text-primary md:text-6xl"
            >
              The people{" "}
              <span className="text-accent">behind</span> the mission.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map(({ initials, name, role, color, description }) => (
              <article
                key={name}
                className="group flex flex-col items-center rounded-sm bg-background p-8 text-center shadow-lg transition-all duration-300 hover:shadow-cinematic md:p-10"
              >
                {/* Avatar with initials */}
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-full font-display text-2xl font-black text-white shadow-lg transition-transform group-hover:scale-110 ${color}`}
                  aria-hidden="true"
                >
                  {initials}
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-primary">
                  {name}
                </h3>
                <div className="mt-1 flex items-center gap-2">
                  <Star
                    className="h-3.5 w-3.5 text-accent-gold"
                    aria-hidden="true"
                  />
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-accent">
                    {role}
                  </span>
                  <Star
                    className="h-3.5 w-3.5 text-accent-gold"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section
        aria-labelledby="story-cta-heading"
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
            id="story-cta-heading"
            className="mx-auto max-w-4xl font-display text-3xl font-black uppercase leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Join us in restoring{" "}
            <span className="text-accent-gold">smiles.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Whether you donate, volunteer, or spread the word—you're part of a
            mission that's changing veterans' lives every single day.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="accent" size="xl" className="group" asChild>
              <Link to="/donate">
                Donate Now
                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button variant="ghostHero" size="xl" asChild>
              <Link to="/contact">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default OurStoryPage;
