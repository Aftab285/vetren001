import { useEffect } from "react";
import { Newspaper, Download, ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";

/* ---------- data ---------- */

const featuredCoverage = [
  {
    publication: "The New York Times",
    headline: "How One Foundation Is Fixing the VA Dental Gap",
    date: "March 2024",
    excerpt:
      "A grassroots movement of volunteer dentists is quietly transforming access to dental care for veterans who were told they didn't qualify for VA benefits.",
  },
  {
    publication: "CNN Health",
    headline: "850 Dentists, Zero Bills: The Veteran Smile Project",
    date: "January 2024",
    excerpt:
      "Across 47 states, a network of dental professionals is providing pro-bono care to the men and women who served — and the results are staggering.",
  },
  {
    publication: "Military Times",
    headline: "A Mission to Restore Dignity Through Dental Care",
    date: "November 2023",
    excerpt:
      "For many veterans, dental issues aren't just about health — they're about confidence, employability, and feeling whole again.",
  },
];

const pressReleases = [
  {
    title: "Veterans Dental Foundation Expands to 47 States",
    date: "June 2024",
  },
  {
    title: "$28 Million in Pro-Bono Care Milestone",
    date: "March 2024",
  },
  {
    title: "Annual Impact Report 2023 Released",
    date: "January 2024",
  },
  {
    title: "Partnership with American Dental Association Announced",
    date: "October 2023",
  },
];

/* ---------- component ---------- */

const PressPage = () => {
  useEffect(() => {
    document.title = "Press & Media — Veterans Dental Foundation";
  }, []);

  return (
    <PageLayout>
      {/* ═══════ Hero ═══════ */}
      <section
        aria-labelledby="press-hero-heading"
        className="relative overflow-hidden bg-primary py-28 text-primary-foreground md:py-36"
      >
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, hsl(var(--accent)) 0 1px, transparent 1px 28px)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 text-center md:px-10">
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent-gold">
            Newsroom
          </span>
          <h1
            id="press-hero-heading"
            className="mt-4 font-display text-5xl font-black uppercase leading-[0.95] md:text-7xl"
          >
            Press & <span className="text-accent-gold">Media</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Covering the stories that matter — how America is giving back to its
            heroes.
          </p>
        </div>
      </section>

      {/* ═══════ Featured Coverage ═══════ */}
      <section
        aria-labelledby="featured-coverage-heading"
        className="bg-background py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-3xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              In the News
            </span>
            <h2
              id="featured-coverage-heading"
              className="mt-4 font-display text-4xl font-black uppercase leading-[1] text-primary md:text-6xl"
            >
              Featured <span className="text-accent">coverage</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredCoverage.map((article) => (
              <article
                key={article.headline}
                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-background transition-all hover:border-accent hover:shadow-cinematic"
              >
                <div className="flex flex-1 flex-col p-8">
                  <span className="inline-flex w-fit rounded-sm bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                    {article.publication}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold uppercase leading-tight text-primary transition-colors group-hover:text-accent">
                    {article.headline}
                  </h3>
                  <time className="mt-2 text-sm font-semibold text-muted-foreground">
                    {article.date}
                  </time>
                  <p className="mt-4 flex-1 text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center font-display text-sm font-bold uppercase tracking-wider text-accent transition-colors hover:text-accent/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Press Releases ═══════ */}
      <section
        aria-labelledby="press-releases-heading"
        className="bg-secondary py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-3xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Official Statements
            </span>
            <h2
              id="press-releases-heading"
              className="mt-4 font-display text-4xl font-black uppercase leading-[1] text-primary md:text-6xl"
            >
              Press <span className="text-accent">releases</span>.
            </h2>
          </div>

          <ul className="m-0 list-none space-y-4 p-0">
            {pressReleases.map((pr) => (
              <li
                key={pr.title}
                className="group flex flex-col items-start justify-between gap-4 rounded-sm border border-border bg-background p-6 transition-all hover:border-accent hover:shadow-cinematic sm:flex-row sm:items-center"
              >
                <div className="flex-1">
                  <time className="text-sm font-semibold text-muted-foreground">
                    {pr.date}
                  </time>
                  <h3 className="mt-1 font-display text-lg font-bold text-primary transition-colors group-hover:text-accent">
                    {pr.title}
                  </h3>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-accent transition-colors hover:text-accent/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download PDF
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════ Media Kit ═══════ */}
      <section
        aria-labelledby="media-kit-heading"
        className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32"
      >
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(var(--accent)) 0 1px, transparent 1px 24px)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-sm bg-accent-gold text-primary">
            <Newspaper className="h-8 w-8" aria-hidden="true" />
          </div>
          <h2
            id="media-kit-heading"
            className="mt-8 font-display text-4xl font-black uppercase leading-[1] md:text-5xl"
          >
            Download Our <span className="text-accent-gold">Media Kit</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
            Our media kit includes high-resolution logos, fact sheets, leadership
            bios, and brand guidelines — everything you need for accurate
            coverage.
          </p>
          <Button variant="accent" size="xl" className="mt-10">
            Download Media Kit
            <Download className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </section>

      {/* ═══════ Press Contact ═══════ */}
      <section
        aria-labelledby="press-contact-heading"
        className="bg-background py-24 md:py-32"
      >
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Get in Touch
          </span>
          <h2
            id="press-contact-heading"
            className="mt-4 font-display text-4xl font-black uppercase leading-[1] text-primary md:text-5xl"
          >
            Press <span className="text-accent">inquiries</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            For press inquiries, interviews, or media partnership requests,
            please reach out to our communications team.
          </p>

          <div className="mt-10 inline-flex flex-col items-center gap-4 rounded-sm border border-border bg-secondary p-8 sm:flex-row sm:gap-10 md:p-10">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
              <a
                href="mailto:press@veteransdentalfoundation.org"
                className="font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
              >
                press@veteransdentalfoundation.org
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
              <a
                href="tel:+15125550183"
                className="font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
              >
                (512) 555-0183
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PressPage;
