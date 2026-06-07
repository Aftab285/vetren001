import care1 from "@/assets/care-1.jpg";
import care2 from "@/assets/care-2.jpg";
import care3 from "@/assets/care-3.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MissionSection = () => {
  return (
    <section id="mission" aria-labelledby="mission-heading" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="mb-6 inline-flex items-center gap-3 border-l-4 border-accent pl-4">
                <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  Our Mission
                </span>
              </div>
              <h2 id="mission-heading" className="font-display text-4xl font-black uppercase leading-[1] text-primary md:text-5xl lg:text-6xl">
                They served <br />
                <span className="text-accent">us.</span> Now we <br />
                serve them.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Greater than 90% of our veterans are without VA dental care access after six months of leaving active service. The Veterans Dental Foundation partners with dentists nationwide to deliver pro-bono care to those who gave us everything.
              </p>
              <Button variant="primary" size="xl" className="mt-8 group" asChild>
                <Link to="/our-story">
                  Read Our Story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden rounded-sm shadow-cinematic">
                <img src={care1} alt="Dentist providing free care to a smiling veteran" loading="lazy" width={1280} height={800} className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="overflow-hidden rounded-sm shadow-cinematic">
                <img src={care2} alt="Smiling veteran couple" loading="lazy" width={1280} height={800} className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="overflow-hidden rounded-sm bg-primary p-8 text-primary-foreground shadow-cinematic">
                <div className="font-display text-6xl font-black leading-none text-accent-gold">92%</div>
                <p className="mt-3 font-display text-sm font-bold uppercase tracking-wider">
                  of veterans denied VA dental benefits
                </p>
                <div className="mt-6 h-px w-12 bg-accent-gold" aria-hidden="true" />
                <p className="mt-4 text-xs leading-relaxed text-primary-foreground">
                  We're closing that gap—one community, one chair, one smile at a time.
                </p>
              </div>
              <div className="col-span-2 overflow-hidden rounded-sm shadow-cinematic">
                <img src={care3} alt="Group of grateful American veterans" loading="lazy" width={1280} height={800} className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
