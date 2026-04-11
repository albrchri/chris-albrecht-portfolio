import { useSeo } from "@/hooks/use-seo";
import { PageTransition, FadeIn } from "@/components/PageTransition";
import { Link } from "wouter";
import {
  ArrowRight, Activity, Briefcase, Globe,
  Target, BookOpen, Layers, Database,
  GraduationCap, Award, BadgeCheck
} from "lucide-react";

export default function Home() {
  useSeo({
    title: "Christopher J. Albrecht | Software Initiative Manager",
    description: "Bridging Software Strategy & Execution. Initiative Manager & Leadership Coach specializing in high-impact software delivery."
  });

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center container mx-auto px-6 md:px-12 relative pt-24">
        <div className="absolute top-0 right-0 w-1/2 h-[80vh] bg-gradient-to-bl from-primary/10 to-transparent opacity-50 blur-[120px] pointer-events-none" />

        <FadeIn className="max-w-4xl relative z-10 -translate-y-8">
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

      {/* Executive Summary */}
      <section className="py-40 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-5">Executive Summary</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-16">Executive Summary & Impact</h3>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="flex gap-4">
                <Globe className="text-primary shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-serif text-xl mb-3 text-white">Global Enterprise Scale</h4>
                  <p className="text-muted-foreground leading-relaxed">13+ years at UBS, a global financial services leader. Proven ability to operate within highly regulated, high-stakes environments.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Activity className="text-primary shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-serif text-xl mb-3 text-white">Complex Initiatives</h4>
                  <p className="text-muted-foreground leading-relaxed">Specializes in navigating complex software initiatives, architectural consolidation, and organizational transformation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Briefcase className="text-primary shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-serif text-xl mb-3 text-white">Leadership Coaching</h4>
                  <p className="text-muted-foreground leading-relaxed">Professional coaching credentials. Focused on upskilling leaders, aligning cross-functional teams, and driving cultural shifts.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-52 container mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Experience</h2>
          <h3 className="text-5xl md:text-6xl font-serif mb-20 text-white">15+ Years at UBS</h3>
        </FadeIn>

        <div className="max-w-4xl border-l border-white/10 pl-6 md:pl-12 space-y-32">
          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
              <div className="mb-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm font-mono text-muted-foreground">
                <span className="text-primary">Era 3 &mdash; Senior Tenure</span>
                <span className="hidden md:inline text-white/20">·</span>
                <span>2020 – Present</span>
              </div>
              <h4 className="text-3xl font-serif text-white mb-8">Senior Initiative Manager / Leadership Coach</h4>
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="text-white/80">Situation:</strong> Org-wide Agile transformation across a global financial services institution.</p>
                <p><strong className="text-white/80">Task:</strong> Upskill 200+ PMs and engineers to operate within the new delivery paradigm.</p>
                <p><strong className="text-white/80">Action:</strong> Designed a comprehensive coaching curriculum and achieved certification in ICF methodologies.</p>
                <p><strong className="text-primary">Result:</strong> Measurable improvement in delivery velocity and significantly higher team health scores across all coached units.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/projects/major-trading-transformation"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors font-mono"
                  data-testid="link-case-study-trading"
                >
                  View Case Study: Major Trading Transformation Initiative
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full border-2 border-white/20 bg-background" />
              <div className="mb-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm font-mono text-muted-foreground">
                <span>Era 2 &mdash; Mid-Tenure</span>
                <span className="hidden md:inline text-white/20">·</span>
                <span>2015 – 2020</span>
              </div>
              <h4 className="text-3xl font-serif text-white mb-8">Initiative Manager</h4>
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="text-white/80">Situation:</strong> Post-merger technology consolidation across overlapping global platforms.</p>
                <p><strong className="text-white/80">Task:</strong> Rationalize redundant systems to reduce technical debt and operational cost.</p>
                <p><strong className="text-white/80">Action:</strong> Coordinated 50+ stakeholder roadmap sessions across global teams to align priorities.</p>
                <p><strong className="text-primary">Result:</strong> Successfully retired 3 legacy systems, realizing $2M in annual cost savings.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full border-2 border-white/20 bg-background" />
              <div className="mb-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm font-mono text-muted-foreground">
                <span>Era 1 &mdash; Early Tenure</span>
                <span className="hidden md:inline text-white/20">·</span>
                <span>2011 – 2015</span>
              </div>
              <h4 className="text-3xl font-serif text-white mb-8">Project Coordinator / Analyst</h4>
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="text-white/80">Situation:</strong> Fast-growing global bank experiencing delivery bottlenecks across software teams.</p>
                <p><strong className="text-white/80">Task:</strong> Manage cross-functional software delivery and intake processes.</p>
                <p><strong className="text-white/80">Action:</strong> Introduced agile intake frameworks to streamline request pipelines and reduce ambiguity.</p>
                <p><strong className="text-primary">Result:</strong> Improved delivery predictability and operational transparency across engineering teams.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Credentials & Expertise */}
      <section className="py-40 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Credentials</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-16">Credentials & Expertise</h3>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Left column — two prominent cards */}
            <div className="md:col-span-2 flex flex-col gap-6">
              <FadeIn delay={0.1} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
                <GraduationCap className="text-primary mb-5" size={20} />
                <h4 className="text-primary font-mono text-sm mb-6">Education Pillars</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-medium mb-1">Master of Business Administration (MBA)</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">Focus: Global Business Strategy & Leadership.</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-white font-medium mb-1">M.S., Computer Science</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">Focus: Software Engineering & Enterprise Architecture.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors">
                <Award className="text-primary mb-5" size={20} />
                <h4 className="text-primary font-mono text-sm mb-6">Methodology Mastery</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-medium mb-1">Project Management Professional (PMP)</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">Certified expert in large-scale program execution and structured delivery governance.</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-white font-medium mb-1">Certified Scrum Professional (CSP)</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">Expert in Agile transformation and iterative delivery at enterprise scale.</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right column — two stacked certification badges */}
            <div className="flex flex-col gap-6">
              <FadeIn delay={0.3} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors flex-1">
                <BadgeCheck className="text-primary mb-5" size={20} />
                <h4 className="text-primary font-mono text-sm mb-3">ICF Coaching</h4>
                <p className="text-white font-medium mb-2">ICF Certified Coach</p>
                <p className="text-muted-foreground text-sm leading-relaxed">International Coaching Federation credentialed. Applied within enterprise transformation programs at UBS.</p>
              </FadeIn>

              <FadeIn delay={0.4} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-colors flex-1">
                <BadgeCheck className="text-primary mb-5" size={20} />
                <h4 className="text-primary font-mono text-sm mb-3">SAFe Certification</h4>
                <p className="text-white font-medium mb-2">SAFe Program Consultant</p>
                <p className="text-muted-foreground text-sm leading-relaxed">Scaled Agile Framework certified. Experienced in coordinating Agile Release Trains across distributed teams.</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Stack & Skills — Strategic Grid */}
      <section className="py-40">
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
                <li>Leadership Coaching</li>
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
                <li>Python Ecosystem</li>
                <li>Jira, Rally, Confluence</li>
                <li>Microsoft Power Platform</li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Beyond the Boardroom */}
      <section className="py-52 bg-white/5 border-t border-white/5 container-full">
        <div className="container mx-auto px-6 md:px-12">
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
              <p className="text-white leading-relaxed">Marathon Training: Aiming for full 26.2. Target race: October 11, 2026. Focus, process, and discipline.</p>
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
        </div>
      </section>
    </PageTransition>
  );
}
