import { useEffect, type FormEvent } from "react";
import { Heart, Clock, Headphones, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";

/* ---------- data ---------- */

const benefits = [
  {
    icon: Heart,
    title: "Make an Impact",
    body: "Provide life-changing care to those who served our country and sacrificed for our freedom.",
  },
  {
    icon: Clock,
    title: "Flexible Commitment",
    body: "Treat veterans on your schedule, in your own practice — no minimum hours required.",
  },
  {
    icon: Headphones,
    title: "Full Support",
    body: "We handle coordination, paperwork, and patient matching so you can focus on care.",
  },
];

const steps = [
  {
    n: "01",
    title: "Apply Online",
    body: "Fill out a simple application to express your interest in joining the provider network.",
  },
  {
    n: "02",
    title: "Get Verified",
    body: "Our team completes credentialing in just 5–7 business days — fast and hassle-free.",
  },
  {
    n: "03",
    title: "Receive Referrals",
    body: "Get matched with veterans in your area who need the exact care you provide.",
  },
  {
    n: "04",
    title: "Deliver Care",
    body: "Treat veterans in your practice with the supplies and support we provide at no cost.",
  },
];

const specializations = [
  "General Dentistry",
  "Orthodontics",
  "Endodontics",
  "Periodontics",
  "Prosthodontics",
  "Oral Surgery",
  "Other",
];

const usStates = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

/* ---------- component ---------- */

const ProvidersPage = () => {
  useEffect(() => {
    document.title = "Volunteer Providers — Veterans Dental Foundation";
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <PageLayout>
      {/* ═══════ Hero ═══════ */}
      <section
        aria-labelledby="providers-hero-heading"
        className="relative overflow-hidden bg-primary py-28 text-primary-foreground md:py-36"
      >
        {/* decorative stripe pattern */}
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
            For Dental Professionals
          </span>
          <h1
            id="providers-hero-heading"
            className="mt-4 font-display text-5xl font-black uppercase leading-[0.95] md:text-7xl"
          >
            Volunteer Your <span className="text-accent-gold">Chair</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Join 850+ dental professionals making a difference — one veteran, one
            smile at a time.
          </p>
        </div>
      </section>

      {/* ═══════ Why Volunteer ═══════ */}
      <section
        aria-labelledby="why-volunteer-heading"
        className="bg-background py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-3xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Why Volunteer
            </span>
            <h2
              id="why-volunteer-heading"
              className="mt-4 font-display text-4xl font-black uppercase leading-[1] text-primary md:text-6xl"
            >
              Benefits of <span className="text-accent">joining</span> the
              network.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-sm border border-border bg-background p-10 transition-all hover:border-accent hover:shadow-cinematic"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-sm bg-accent text-accent-foreground transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-primary">
                  {title}
                </h3>
                <p className="mt-4 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ How It Works ═══════ */}
      <section
        aria-labelledby="provider-steps-heading"
        className="bg-secondary py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-16 max-w-3xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              How It Works
            </span>
            <h2
              id="provider-steps-heading"
              className="mt-4 font-display text-4xl font-black uppercase leading-[1] text-primary md:text-6xl"
            >
              Four simple <span className="text-accent">steps</span>.
            </h2>
          </div>

          <ol className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="group relative overflow-hidden rounded-sm border border-border bg-background p-10 transition-all hover:border-accent hover:shadow-cinematic"
              >
                <div
                  className="absolute -right-4 -top-6 font-display text-[8rem] font-black leading-none text-secondary transition-colors group-hover:text-accent/10"
                  aria-hidden="true"
                >
                  {s.n}
                </div>
                <div className="relative">
                  <div className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
                    Step {i + 1}
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold uppercase text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════ Provider Signup Form ═══════ */}
      <section
        aria-labelledby="provider-form-heading"
        className="bg-secondary py-24 md:py-32"
      >
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="rounded-sm border border-border bg-background p-8 shadow-cinematic md:p-12">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Join the Network
            </span>
            <h2
              id="provider-form-heading"
              className="mt-4 font-display text-3xl font-black uppercase leading-[1] text-primary md:text-4xl"
            >
              Provider <span className="text-accent">Sign-Up</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Fill out the form below and our team will be in touch within 5–7
              business days to complete your credentialing.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
              noValidate
            >
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="provider-name"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Full Name <span aria-hidden="true" className="text-accent">*</span>
                </label>
                <input
                  id="provider-name"
                  name="fullName"
                  type="text"
                  required
                  aria-required="true"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="Dr. Jane Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="provider-email"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Email <span aria-hidden="true" className="text-accent">*</span>
                </label>
                <input
                  id="provider-email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="jane@example.com"
                />
              </div>

              {/* Practice Name */}
              <div>
                <label
                  htmlFor="provider-practice"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Practice Name
                </label>
                <input
                  id="provider-practice"
                  name="practiceName"
                  type="text"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="Bright Smiles Dental"
                />
              </div>

              {/* State */}
              <div>
                <label
                  htmlFor="provider-state"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  State <span aria-hidden="true" className="text-accent">*</span>
                </label>
                <select
                  id="provider-state"
                  name="state"
                  required
                  aria-required="true"
                  defaultValue=""
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                >
                  <option value="" disabled>
                    Select your state
                  </option>
                  {usStates.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Specialization */}
              <div>
                <label
                  htmlFor="provider-specialization"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Specialization <span aria-hidden="true" className="text-accent">*</span>
                </label>
                <select
                  id="provider-specialization"
                  name="specialization"
                  required
                  aria-required="true"
                  defaultValue=""
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                >
                  <option value="" disabled>
                    Select specialization
                  </option>
                  {specializations.map((sp) => (
                    <option key={sp} value={sp}>
                      {sp}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="provider-message"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Message
                </label>
                <textarea
                  id="provider-message"
                  name="message"
                  rows={4}
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="Tell us a bit about your practice and why you'd like to volunteer…"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <Button type="submit" variant="accent" size="xl" className="w-full sm:w-auto">
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ═══════ Provider Testimonial ═══════ */}
      <section
        aria-labelledby="provider-testimonial-heading"
        className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32"
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, hsl(var(--accent)) 0 1px, transparent 1px 32px)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <h2 id="provider-testimonial-heading" className="sr-only">
            Provider Testimonial
          </h2>
          <Quote className="mx-auto h-12 w-12 text-accent-gold" aria-hidden="true" />
          <figure>
            <blockquote className="mt-8 font-display text-2xl font-bold leading-snug md:text-4xl">
              "Volunteering my chair has been the most meaningful work of my
              career. These are the patients I went into dentistry for."
            </blockquote>
            <figcaption className="mt-8">
              <div className="font-display text-sm font-bold uppercase tracking-wider">
                Dr. James L.
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-gold">
                Volunteer Provider
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section
        aria-labelledby="provider-cta-heading"
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
        <div className="relative mx-auto max-w-7xl px-6 text-center md:px-10">
          <h2
            id="provider-cta-heading"
            className="font-display text-4xl font-black uppercase leading-[1] md:text-6xl"
          >
            Ready to make a{" "}
            <span className="text-accent-gold">difference</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
            Your skills can change a veteran's life. Join our network and start
            giving back today.
          </p>
          <Button variant="accent" size="xl" className="mt-10">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProvidersPage;
