import { useEffect, useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";

/* ---------- data ---------- */

const contactCards = [
  {
    icon: Mail,
    title: "General Inquiries",
    email: "info@veteransdentalfoundation.org",
    phone: "(512) 555-0180",
    phoneHref: "+15125550180",
  },
  {
    icon: Phone,
    title: "Veteran Support",
    email: "veterans@veteransdentalfoundation.org",
    phone: "(512) 555-0181",
    phoneHref: "+15125550181",
  },
  {
    icon: MapPin,
    title: "Provider Relations",
    email: "providers@veteransdentalfoundation.org",
    phone: "(512) 555-0182",
    phoneHref: "+15125550182",
  },
];

const subjectOptions = [
  "General Inquiry",
  "Veteran Seeking Care",
  "Provider Sign-Up",
  "Donation Question",
  "Press/Media",
  "Other",
];

const faqs = [
  {
    question: "How do I apply for dental care as a veteran?",
    answer:
      "Simply fill out our online intake form on the Veterans page. Once submitted, our team will review your eligibility and match you with a volunteer dentist in your area within 2–4 weeks.",
  },
  {
    question: "Is the care really free?",
    answer:
      "Yes — 100% pro-bono. Veterans never pay a dime for care received through our network. All services are donated by our volunteer providers, and our foundation covers lab and material costs.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Typically 2–4 weeks from the time you submit your intake form to your first appointment. Emergency cases may be expedited based on clinical need and provider availability.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We currently operate in 47 states with a network of over 850 volunteer dental professionals. We're actively expanding to reach full national coverage.",
  },
];

/* ---------- component ---------- */

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us — Veterans Dental Foundation";
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <PageLayout>
      {/* ═══════ Hero ═══════ */}
      <section
        aria-labelledby="contact-hero-heading"
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
            Contact
          </span>
          <h1
            id="contact-hero-heading"
            className="mt-4 font-display text-5xl font-black uppercase leading-[0.95] md:text-7xl"
          >
            Get in <span className="text-accent-gold">Touch</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            We're here to help veterans, providers, and supporters. Reach out —
            we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ═══════ Contact Info Cards ═══════ */}
      <section
        aria-labelledby="contact-info-heading"
        className="bg-background py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 id="contact-info-heading" className="sr-only">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactCards.map(({ icon: Icon, title, email, phone, phoneHref }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-sm border border-border bg-background p-8 transition-all hover:border-accent hover:shadow-cinematic"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-accent text-accent-foreground transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase text-primary">
                  {title}
                </h3>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                    <a
                      href={`mailto:${email}`}
                      className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
                    >
                      {email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                    <a
                      href={`tel:${phoneHref}`}
                      className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Contact Form ═══════ */}
      <section
        aria-labelledby="contact-form-heading"
        className="bg-secondary py-24 md:py-32"
      >
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="rounded-sm border border-border bg-background p-8 shadow-cinematic md:p-12">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Send a Message
            </span>
            <h2
              id="contact-form-heading"
              className="mt-4 font-display text-3xl font-black uppercase leading-[1] text-primary md:text-4xl"
            >
              Contact <span className="text-accent">Form</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Fill out the form below and a member of our team will respond
              within 1–2 business days.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
              noValidate
            >
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Full Name{" "}
                  <span aria-hidden="true" className="text-accent">
                    *
                  </span>
                </label>
                <input
                  id="contact-name"
                  name="fullName"
                  type="text"
                  required
                  aria-required="true"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Email{" "}
                  <span aria-hidden="true" className="text-accent">
                    *
                  </span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Subject{" "}
                  <span aria-hidden="true" className="text-accent">
                    *
                  </span>
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  aria-required="true"
                  defaultValue=""
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-primary"
                >
                  Message{" "}
                  <span aria-hidden="true" className="text-accent">
                    *
                  </span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  variant="accent"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ═══════ Office Location ═══════ */}
      <section
        aria-labelledby="office-heading"
        className="bg-background py-24 md:py-32"
      >
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Our Office
          </span>
          <h2
            id="office-heading"
            className="mt-4 font-display text-4xl font-black uppercase leading-[1] text-primary md:text-5xl"
          >
            Visit <span className="text-accent">us</span>
          </h2>

          <div className="mx-auto mt-10 inline-flex max-w-lg flex-col items-center gap-6 rounded-sm border border-border bg-secondary p-8 md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-accent text-accent-foreground">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </div>
            <address className="not-italic text-center">
              <p className="font-display text-lg font-bold text-primary">
                1200 Veterans Memorial Blvd, Suite 400
              </p>
              <p className="mt-1 text-muted-foreground">Austin, TX 78701</p>
            </address>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
              <span className="text-sm font-medium">
                Mon – Fri, 9:00 AM – 5:00 PM CST
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section
        aria-labelledby="faq-heading"
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
        <div className="relative mx-auto max-w-3xl px-6 md:px-10">
          <div className="mb-16 text-center">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent-gold">
              FAQ
            </span>
            <h2
              id="faq-heading"
              className="mt-4 font-display text-4xl font-black uppercase leading-[1] md:text-5xl"
            >
              Common <span className="text-accent-gold">questions</span>
            </h2>
          </div>

          <dl className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const questionId = `faq-question-${index}`;
              const answerId = `faq-answer-${index}`;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-sm border border-primary-foreground/15 bg-primary-foreground/[0.04] backdrop-blur transition-colors hover:bg-primary-foreground/[0.08]"
                >
                  <dt>
                    <button
                      id={questionId}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left font-display text-lg font-bold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-accent-gold transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </dt>
                  <dd
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    hidden={!isOpen}
                    className="border-t border-primary-foreground/10 px-6 pb-6 pt-4"
                  >
                    <p className="text-primary-foreground/80">{faq.answer}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
