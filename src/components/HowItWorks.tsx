const steps = [
  { n: "01", title: "Veterans Apply", body: "Eligible veterans submit a simple intake form to be matched with a vetted local dentist." },
  { n: "02", title: "We Match Locally", body: "Our team connects each veteran with a volunteer provider in their community." },
  { n: "03", title: "Care Is Delivered", body: "From cleanings to full restorations—at zero cost to the veteran. Ever." },
];

const HowItWorks = () => {
  return (
    <section id="veterans" aria-labelledby="how-it-works-heading" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">How It Works</span>
            <h2 id="how-it-works-heading" className="mt-4 font-display text-4xl font-black uppercase leading-[1] text-primary md:text-6xl">
              From service to <br />
              <span className="text-accent">smile</span> in three steps.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground lg:col-span-5">
            We've removed every barrier between a veteran and the care they earned. No paperwork mountains. No bills. Just gratitude in action.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3 list-none p-0 m-0">
          {steps.map((s, i) => (
            <li key={s.n} className="group relative overflow-hidden rounded-sm border border-border bg-background p-10 transition-all hover:border-accent hover:shadow-cinematic">
              <div className="absolute -right-4 -top-6 font-display text-[8rem] font-black leading-none text-secondary transition-colors group-hover:text-accent/10" aria-hidden="true">
                {s.n}
              </div>
              <div className="relative">
                <div className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">Step {i + 1}</div>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase text-primary">{s.title}</h3>
                <p className="mt-4 text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
