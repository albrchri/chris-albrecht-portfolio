import { useSeo } from "@/hooks/use-seo";
import { PageTransition, FadeIn } from "@/components/PageTransition";
import { Link } from "wouter";
import {
  ArrowRight, Target, BookOpen, Layers, Database,
  GraduationCap, Award, BadgeCheck, Cloud, ShieldCheck, Zap
} from "lucide-react";

const CREDENTIALS = "MSCS, MBA, PMP, CSP";

export default function Home() {
  useSeo({
    title: `Chris Albrecht, ${CREDENTIALS} | Initiative Manager`,
    description: "Strategic product and technology leader with 15+ years delivering enterprise transformation in global financial services."
  });

  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center container mx-auto px-6 md:px-12 relative pt-24">
        <div className="absolute top-0 right-0 w-1/2 h-[80vh] bg-gradient-to-bl from-primary/10 to-transparent opacity-50 blur-[120px] pointer-events-none" />

        <FadeIn className="max-w-4xl relative z-10 -translate-y-8">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-8">
            <span className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">Chris Albrecht</span>
            <span className="text-2xl md:text-3xl font-serif font-normal text-white/30 tracking-tight">{CREDENTIALS}</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
            Bridging Software <br className="hidden md:block" />
            <span className="text-primary italic">Strategy</span> & Execution.
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-2xl leading-relaxed mb-12">
            Initiative Manager & Leadership Coach specializing in high-impact software delivery.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-7 py-[14px] text-base bg-white text-background font-semibold rounded-sm hover:bg-gray-100 transition-colors"
              data-testid="link-hero-experience"
            >
              View Experience
              <ArrowRight size={18} />
            </a>
            <a
              href="mailto:albrchri@gmail.com"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm border border-white/10 text-white/70 font-normal rounded-sm hover:bg-white/5 transition-colors"
              data-testid="link-hero-contact"
            >
              Get in Touch
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── Executive Summary & Impact ───────────────────────────── */}
      <section className="py-40 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-5">Executive Summary</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-10">Executive Summary & Impact</h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Strategic product and technology leader with 15+ years delivering enterprise transformation in global financial services. Expert in maximizing ROI on multimillion-dollar portfolios through innovation and scalable Agile delivery.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Signature Initiatives ────────────────────────────────── */}
      <section className="py-40 container mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Highlights</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-16">Signature Initiatives & Impact</h3>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-6">
          <FadeIn delay={0.1} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
            <Cloud className="text-primary mb-5" size={20} />
            <h4 className="text-primary font-mono text-sm mb-3">Legacy-to-Cloud Transformation</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Led transformation of locally hosted monolith into resilient, scalable Azure microservices across global infrastructure.
            </p>
            <p className="text-muted-foreground text-sm"><span className="text-primary">Result:</span> Improved speed-to-market while reducing infrastructure costs.</p>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
            <ShieldCheck className="text-primary mb-5" size={20} />
            <h4 className="text-primary font-mono text-sm mb-3">Enterprise Fraud Prevention Solution</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Executed end-to-end RFP, from requirements gathering through vendor evaluation and full production rollout.
            </p>
            <p className="text-muted-foreground text-sm"><span className="text-primary">Result:</span> Delivered high-impact solution strengthening security and client protection.</p>
          </FadeIn>

          <FadeIn delay={0.3} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
            <Zap className="text-primary mb-5" size={20} />
            <h4 className="text-primary font-mono text-sm mb-3">Foundational Technology Adoption</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Initiated and led R&D team effort resulting in adoption of a new enterprise service bus across the platform.
            </p>
            <p className="text-muted-foreground text-sm"><span className="text-primary">Result:</span> Established a foundational technology standard across the enterprise.</p>
          </FadeIn>
        </div>
      </section>

      {/* ── Professional Tenure ──────────────────────────────────── */}
      <section id="experience" className="py-52 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Experience</h2>
            <h3 className="text-5xl md:text-6xl font-serif mb-20 text-white">Professional Tenure</h3>
          </FadeIn>

          <div className="max-w-4xl border-l border-white/10 pl-6 md:pl-12 space-y-32">

            {/* UBS — Era 3 */}
            <FadeIn delay={0.1}>
              <div className="relative">
                <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                <div className="mb-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm font-mono text-muted-foreground">
                  <span className="text-primary">UBS &mdash; Senior Initiative Manager / Leadership Coach</span>
                  <span className="hidden md:inline text-white/20">·</span>
                  <span>2020 – Present</span>
                </div>
                <h4 className="text-3xl font-serif text-white mb-8">Senior Initiative Manager / Leadership Coach</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-white/80">·</strong> Led technical integration and go-live for SimCorp Dimension (SCD), managing workstreams from environment configuration through production cutover.</p>
                  <p><strong className="text-white/80">·</strong> Scaled marquee client experience rollout from 5K pilot to 3M accounts, directing cross-functional teams across engineering, risk, and operations.</p>
                  <p><strong className="text-primary">·</strong> Managed $5M portfolios and championed Agile planning, guiding 40+ global members to increase delivery velocity 10x.</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                  <Link
                    href="/projects/legacy-cloud-transformation"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors font-mono"
                    data-testid="link-case-study-cloud"
                  >
                    View Case Study: Major Trading Transformation
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/projects/simcorp-dimension-integration"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors font-mono"
                    data-testid="link-case-study-simcorp"
                  >
                    View Case Study: SimCorp Dimension Integration
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* UBS — Era 2 */}
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full border-2 border-white/20 bg-background" />
                <div className="mb-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm font-mono text-muted-foreground">
                  <span>UBS &mdash; Initiative Manager</span>
                  <span className="hidden md:inline text-white/20">·</span>
                  <span>2014 – 2020</span>
                </div>
                <h4 className="text-3xl font-serif text-white mb-8">Initiative Manager</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-white/80">·</strong> Post-merger technology consolidation: rationalized overlapping platforms across global teams to reduce technical debt.</p>
                  <p><strong className="text-white/80">·</strong> Coordinated 50+ stakeholder roadmap sessions across global engineering, risk, and operations teams to align delivery priorities.</p>
                  <p><strong className="text-primary">·</strong> Successfully retired 3 legacy systems, realizing $2M in annual cost savings.</p>
                </div>
              </div>
            </FadeIn>

            {/* Grosvenor Capital Management */}
            <FadeIn delay={0.3}>
              <div className="relative">
                <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full border-2 border-white/20 bg-background" />
                <div className="mb-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm font-mono text-muted-foreground">
                  <span>Grosvenor Capital Management</span>
                  <span className="hidden md:inline text-white/20">·</span>
                  <span>Dec 2012 – Mar 2014</span>
                </div>
                <h4 className="text-3xl font-serif text-white mb-8">Technology Project Manager</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-white/80">·</strong> Delivered core research platform for $40B AUM fund-of-funds, aligning technology roadmaps with investment strategy.</p>
                  <p><strong className="text-white/80">·</strong> Led major client reporting refresh, standardizing data pipelines and outputs across key stakeholders.</p>
                  <p><strong className="text-primary">·</strong> Implemented metrics dashboards improving executive transparency and data-driven decision-making.</p>
                </div>
              </div>
            </FadeIn>

            {/* RTS Realtime Systems */}
            <FadeIn delay={0.4}>
              <div className="relative">
                <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full border-2 border-white/20 bg-background" />
                <div className="mb-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm font-mono text-muted-foreground">
                  <span>RTS Realtime Systems</span>
                  <span className="hidden md:inline text-white/20">·</span>
                  <span>Feb 2011 – Dec 2012</span>
                </div>
                <h4 className="text-3xl font-serif text-white mb-8">Project Manager / Technical Lead</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-white/80">·</strong> Managed modernization of algorithmic trading platform and led global C++ connectivity for HFT trading gateways.</p>
                  <p><strong className="text-white/80">·</strong> Designed and delivered FIX & proprietary API integrations across multiple institutional client environments.</p>
                  <p><strong className="text-primary">·</strong> Optimized portfolio planning by prioritizing initiatives with the highest ROI, improving resource allocation efficiency.</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Credentials & Expertise ──────────────────────────────── */}
      <section className="py-40 container mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Credentials</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-16">Credentials & Expertise</h3>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education Pillars */}
          <FadeIn delay={0.1} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
            <GraduationCap className="text-primary mb-5" size={20} />
            <h4 className="text-primary font-mono text-sm mb-6">Education Pillars</h4>
            <div className="space-y-6">
              <div>
                <p className="text-white font-medium mb-1">M.S., Computer Science</p>
                <p className="text-muted-foreground text-sm">Illinois Institute of Technology &mdash; Focus: Software Engineering & Enterprise Architecture.</p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-white font-medium mb-1">Master of Business Administration (MBA)</p>
                <p className="text-muted-foreground text-sm">Dominican University &mdash; Focus: Global Business Strategy & Leadership.</p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-white font-medium mb-1">Bachelor of Science, Computer Science</p>
                <p className="text-muted-foreground text-sm">Dominican University.</p>
              </div>
            </div>
          </FadeIn>

          {/* Methodologies & Certifications */}
          <FadeIn delay={0.2} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
            <Award className="text-primary mb-5" size={20} />
            <h4 className="text-primary font-mono text-sm mb-6">Methodologies & Certifications</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <BadgeCheck className="text-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-white font-medium mb-1">Project Management Professional (PMP)</p>
                  <p className="text-muted-foreground text-sm">PMI Certified &mdash; Expert in large-scale program execution and structured delivery governance.</p>
                </div>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex gap-4 items-start">
                <BadgeCheck className="text-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-white font-medium mb-1">Certified Scrum Professional (CSP)</p>
                  <p className="text-muted-foreground text-sm">Scrum Alliance Certified &mdash; Expert in Agile transformation and iterative delivery at enterprise scale.</p>
                </div>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex gap-4 items-start">
                <BadgeCheck className="text-primary shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-white font-medium mb-1">ICF Certified Coach</p>
                  <p className="text-muted-foreground text-sm">International Coaching Federation &mdash; Applied within enterprise transformation programs.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Stack & Skills ───────────────────────────────────────── */}
      <section className="py-40 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Toolset</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Stack & Skills</h3>
              <p className="text-muted-foreground max-w-xl">A deliberate combination of leadership frameworks, modern methodologies, and technical capabilities — built for enterprise scale.</p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.1} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
              <Target className="text-primary mb-5" size={20} />
              <h4 className="text-primary font-mono text-sm mb-4">Initiative Leadership & Delivery</h4>
              <ul className="space-y-2 text-white/80 text-sm leading-relaxed">
                <li>Initiative Strategy</li>
                <li>Operational Excellence</li>
                <li>Executive Presence</li>
                <li>Change Management</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
              <BookOpen className="text-primary mb-5" size={20} />
              <h4 className="text-primary font-mono text-sm mb-4">Coaching & Organizational Playbook</h4>
              <ul className="space-y-2 text-white/80 text-sm leading-relaxed">
                <li>Leadership Coaching (ICF)</li>
                <li>Team Transformation</li>
                <li>Agile Transformation</li>
                <li>Organizational Design</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
              <Layers className="text-primary mb-5" size={20} />
              <h4 className="text-primary font-mono text-sm mb-4">Modern Methodologies</h4>
              <ul className="space-y-2 text-white/80 text-sm leading-relaxed">
                <li>Agile (Scrum / Kanban)</li>
                <li>Lean Software Development</li>
                <li>Scaled Agile (SAFe)</li>
                <li>PMBOK Frameworks</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
              <Database className="text-primary mb-5" size={20} />
              <h4 className="text-primary font-mono text-sm mb-4">Technical & Tooling Strategy</h4>
              <ul className="space-y-2 text-white/80 text-sm leading-relaxed">
                <li>SimCorp Dimension (SCD)</li>
                <li>Microsoft Azure</li>
                <li>C++ Trading Gateways</li>
                <li>FIX & Proprietary APIs</li>
                <li>Jira, Rally, Confluence</li>
                <li>Python Ecosystem</li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Beyond the Boardroom ─────────────────────────────────── */}
      <section className="py-52 container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Personal Pursuits</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-white mb-6">Beyond the Boardroom</h3>
            <p className="text-muted-foreground">How I apply strategy, endurance, and process outside of the office.</p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn delay={0.1} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
            <h4 className="text-primary font-mono text-sm mb-4">Endurance</h4>
            <p className="text-white leading-relaxed">Marathon Training: Target race October 11, 2026. Focus, process, and discipline.</p>
          </FadeIn>
          <FadeIn delay={0.2} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
            <h4 className="text-primary font-mono text-sm mb-4">Strategy</h4>
            <p className="text-white leading-relaxed">Chess Teacher & Player: Critical thinking, tactical focus, and patience. Instructor for elementary/middle school students.</p>
          </FadeIn>
          <FadeIn delay={0.3} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
            <h4 className="text-primary font-mono text-sm mb-4">Process</h4>
            <p className="text-white leading-relaxed">Artisan BBQ Enthusiast: Process and procedure. The ultimate application of low-and-slow execution.</p>
          </FadeIn>
          <FadeIn delay={0.4} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
            <h4 className="text-primary font-mono text-sm mb-4">Growth</h4>
            <p className="text-white leading-relaxed">Landscape & Lawn Restoration: A technical approach to landscape engineering. A detailed, multi-year project.</p>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
