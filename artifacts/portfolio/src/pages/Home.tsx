import { useSeo } from "@/hooks/use-seo";
import { PageTransition, FadeIn } from "@/components/PageTransition";
import { ArrowRight, CheckCircle2, ChevronRight, Activity, Cpu, Briefcase, MapPin, Globe } from "lucide-react";

export default function Home() {
  useSeo({
    title: "Christopher J. Albrecht | Software Initiative Manager",
    description: "Bridging Software Strategy & Execution. Initiative Manager & Leadership Coach specializing in high-impact software delivery."
  });

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center container mx-auto px-6 md:px-12 relative">
        <div className="absolute top-0 right-0 w-1/2 h-[80vh] bg-gradient-to-bl from-primary/10 to-transparent opacity-50 blur-[120px] pointer-events-none" />
        
        <FadeIn className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
            Bridging Software <br className="hidden md:block" />
            <span className="text-primary italic">Strategy</span> & Execution.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed mb-10">
            Initiative Manager & Leadership Coach specializing in high-impact software delivery.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#experience" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-background font-medium rounded-sm hover:bg-gray-200 transition-colors"
              data-testid="link-hero-experience"
            >
              View Experience
              <ArrowRight size={18} />
            </a>
            <a 
              href="mailto:contact@cjalbrecht.com" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors"
              data-testid="link-hero-contact"
            >
              Get in Touch
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Executive Summary */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Executive Summary</h2>
                <div className="h-px w-12 bg-primary/50" />
              </div>
              <div className="md:col-span-2 grid gap-8 md:grid-cols-2">
                <div className="flex gap-4">
                  <Globe className="text-primary shrink-0" size={24} />
                  <div>
                    <h3 className="font-serif text-xl mb-2 text-white">Global Enterprise Scale</h3>
                    <p className="text-muted-foreground leading-relaxed">13+ years at UBS, a global financial services leader. Proven ability to operate within highly regulated, high-stakes environments.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Activity className="text-primary shrink-0" size={24} />
                  <div>
                    <h3 className="font-serif text-xl mb-2 text-white">Complex Initiatives</h3>
                    <p className="text-muted-foreground leading-relaxed">Specializes in navigating complex software initiatives, architectural consolidation, and organizational transformation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Briefcase className="text-primary shrink-0" size={24} />
                  <div>
                    <h3 className="font-serif text-xl mb-2 text-white">Leadership Coaching</h3>
                    <p className="text-muted-foreground leading-relaxed">Professional coaching credentials. Focused on upskilling leaders, aligning cross-functional teams, and driving cultural shifts.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 container mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Experience</h2>
          <h3 className="text-4xl font-serif mb-16 text-white">Tenure at UBS</h3>
        </FadeIn>

        <div className="max-w-4xl border-l border-white/10 pl-6 md:pl-12 space-y-24">
          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
              <div className="mb-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm font-mono text-muted-foreground">
                <span className="text-primary">Era 3 &mdash; Senior Tenure</span>
              </div>
              <h4 className="text-2xl font-serif text-white mb-6">Senior Initiative Manager / Leadership Coach</h4>
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="text-white/80">Situation:</strong> Org-wide Agile transformation.</p>
                <p><strong className="text-white/80">Task:</strong> Upskill 200+ PMs and engineers to operate within the new paradigm.</p>
                <p><strong className="text-white/80">Action:</strong> Designed a comprehensive coaching curriculum and achieved certification in ICF methodologies.</p>
                <p><strong className="text-primary">Result:</strong> Measurable improvement in delivery velocity and significantly higher team health scores across all coached units.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full border-2 border-white/20 bg-background" />
              <div className="mb-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm font-mono text-muted-foreground">
                <span>Era 2 &mdash; Mid-Tenure</span>
              </div>
              <h4 className="text-2xl font-serif text-white mb-6">Initiative Manager</h4>
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="text-white/80">Situation:</strong> Post-merger technology consolidation landscape.</p>
                <p><strong className="text-white/80">Task:</strong> Rationalize overlapping platforms to reduce technical debt.</p>
                <p><strong className="text-white/80">Action:</strong> Coordinated 50+ stakeholder roadmap sessions across global teams.</p>
                <p><strong className="text-primary">Result:</strong> Successfully retired 3 legacy systems, realizing $2M in annual cost savings.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full border-2 border-white/20 bg-background" />
              <div className="mb-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm font-mono text-muted-foreground">
                <span>Era 1 &mdash; Early Tenure</span>
              </div>
              <h4 className="text-2xl font-serif text-white mb-6">Project Coordinator / Analyst</h4>
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="text-white/80">Situation:</strong> Fast-growing global bank experiencing delivery bottlenecks.</p>
                <p><strong className="text-white/80">Task:</strong> Manage cross-functional software delivery.</p>
                <p><strong className="text-white/80">Action:</strong> Introduced agile intake processes to streamline request pipelines.</p>
                <p><strong className="text-primary">Result:</strong> Improved delivery predictability and operational transparency across engineering teams.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stack & Toolsets */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Toolset</h2>
                <h3 className="text-3xl font-serif text-white mb-6">Stack & Skills</h3>
                <p className="text-muted-foreground">A deliberate combination of technical capabilities, framework expertise, and human-centric coaching skills.</p>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-12">
                <div>
                  <h4 className="text-white font-medium border-b border-white/10 pb-4 mb-4">Methodology & Frameworks</h4>
                  <ul className="space-y-3">
                    {["Agile / SAFe / Scrum", "Jira & Confluence", "SDLC Management"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium border-b border-white/10 pb-4 mb-4">Human & Strategy</h4>
                  <ul className="space-y-3">
                    {["Leadership Coaching (ICF)", "Stakeholder Management", "Change Management"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium border-b border-white/10 pb-4 mb-4">Technical Execution</h4>
                  <ul className="space-y-3">
                    {["Python", "Replit", "Data-driven Program Management"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Beyond the Boardroom */}
      <section className="py-32 container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Personal Pursuits</h2>
            <h3 className="text-4xl font-serif text-white mb-6">Beyond the Boardroom</h3>
            <p className="text-muted-foreground">How I apply strategy, endurance, and process outside of the office.</p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn delay={0.1} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
            <h4 className="text-primary font-mono text-sm mb-4">Endurance</h4>
            <p className="text-white leading-relaxed">Currently training for a full marathon on October 11, 2026.</p>
          </FadeIn>
          <FadeIn delay={0.2} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
            <h4 className="text-primary font-mono text-sm mb-4">Strategy</h4>
            <p className="text-white leading-relaxed">Competitive chess player and instructor for elementary and middle school students.</p>
          </FadeIn>
          <FadeIn delay={0.3} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
            <h4 className="text-primary font-mono text-sm mb-4">Process</h4>
            <p className="text-white leading-relaxed">Artisan BBQ enthusiast focusing on low-and-slow brisket and pork shoulder.</p>
          </FadeIn>
          <FadeIn delay={0.4} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
            <h4 className="text-primary font-mono text-sm mb-4">Growth</h4>
            <p className="text-white leading-relaxed">Current project: Residential lawn restoration and landscape engineering.</p>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
