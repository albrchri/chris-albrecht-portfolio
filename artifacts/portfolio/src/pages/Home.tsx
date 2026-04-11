import { useSeo } from "@/hooks/use-seo";
import { PageTransition, FadeIn } from "@/components/PageTransition";
import { Link } from "wouter";
import {
  ArrowRight, Target, BookOpen, Layers, Database,
  GraduationCap, Award, BadgeCheck, Cloud, ShieldCheck, Zap, Sparkles, Scale
} from "lucide-react";

const CREDENTIALS = "MSCS, MBA, PMP, CSP";

export default function Home() {
  useSeo({
    title: "Chris Albrecht | AI-Native Strategic Product & Technology Leader",
    description: "Strategic product and technology leader with 15+ years delivering enterprise transformation in global financial services."
  });

  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center container mx-auto px-6 md:px-12 relative pt-24">
        <div className="absolute top-0 right-0 w-1/2 h-[80vh] bg-gradient-to-bl from-primary/10 to-transparent opacity-50 blur-[120px] pointer-events-none" />

        <FadeIn className="max-w-4xl relative z-10 -translate-y-16">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-14">
            <span className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">Chris Albrecht</span>
            <span className="text-2xl md:text-3xl font-serif font-normal text-white/30 tracking-tight">{CREDENTIALS}</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
            Bridging Software <br className="hidden md:block" />
            <span className="text-primary italic">Strategy</span> & Execution.
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-2xl leading-relaxed mb-12">
            AI-native strategic product and technology leader specializing in high-impact enterprise transformation.
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
              Strategic leader with 15+ years in global financial services, driving enterprise-scale transformation through autonomous agent orchestration and Agile delivery to maximize ROI on multimillion-dollar portfolios.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Leadership Philosophy ────────────────────────────────── */}
      <section className="py-40 container mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-16">Leadership Philosophy</h3>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-6">
          <FadeIn delay={0.1} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
            <div className="text-primary font-mono text-2xl mb-5 leading-none">I.</div>
            <h4 className="text-white font-serif text-xl mb-4">Scalable Execution</h4>
            <p className="text-white/70 text-base leading-relaxed">Transforming complex technical debt into streamlined operational excellence within global financial systems.</p>
          </FadeIn>
          <FadeIn delay={0.2} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
            <div className="text-primary font-mono text-2xl mb-5 leading-none">II.</div>
            <h4 className="text-white font-serif text-xl mb-4">Radical Transparency</h4>
            <p className="text-white/70 text-base leading-relaxed">Prioritizing data-driven reporting and clear communication to build trust across multi-year, multi-stakeholder initiatives.</p>
          </FadeIn>
          <FadeIn delay={0.3} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
            <div className="text-primary font-mono text-2xl mb-5 leading-none">III.</div>
            <h4 className="text-white font-serif text-xl mb-4">Empathy-Led Mentorship</h4>
            <p className="text-white/70 text-base leading-relaxed">Leveraging professional coaching training to develop high-performing, resilient technical teams built for sustainable growth.</p>
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
          <FadeIn delay={0.1} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
            <Sparkles className="text-primary mb-5" size={20} />
            <h4 className="text-primary font-mono text-sm mb-3">AI-Enabled Transaction Review (OnePass PKR)</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Delivered a scalable control using autonomous agents to synthesize transaction behavior and customer risk into standardized, reviewer-ready outputs.
            </p>
            <p className="text-muted-foreground text-sm"><span className="text-primary">Result:</span> Positioned AI as a force multiplier, driving a step-change in analyst capacity and global consistency.</p>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
            <Cloud className="text-primary mb-5" size={20} />
            <h4 className="text-primary font-mono text-sm mb-3">Legacy-to-Cloud Transformation (Microsoft Azure)</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Led the migration of a locally hosted monolith into cloud-based microservices on Azure, improving scalability, resilience, and speed-to-market.
            </p>
            <p className="text-muted-foreground text-sm"><span className="text-primary">Result:</span> Significantly reduced infrastructure costs while improving platform resilience.</p>
          </FadeIn>

          <FadeIn delay={0.3} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
            <Layers className="text-primary mb-5" size={20} />
            <h4 className="text-primary font-mono text-sm mb-3">Enterprise Platform Transformation (SCD)</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Replaced a legacy investment application with the SCD accounting engine, leading technical integration and production cutover for an enterprise-scale platform.
            </p>
            <p className="text-muted-foreground text-sm"><span className="text-primary">Result:</span> Achieved zero-downtime production cutover with no post-migration issues.</p>
          </FadeIn>
        </div>
      </section>

      {/* ── Social Proof ─────────────────────────────────────────── */}
      <section className="py-32 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn>
            <div className="flex flex-col items-center text-center gap-8">
              <div className="text-primary/40 font-serif text-8xl leading-none select-none">&ldquo;</div>
              <blockquote className="text-2xl md:text-3xl font-serif text-white/90 leading-relaxed -mt-10">
                Chris consistently delivers results in high-stakes environments, balancing technical precision with executive-level strategy.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" />
                <p className="text-primary font-mono text-sm">Ana Soric — Managing Director, UBS</p>
                <div className="w-8 h-px bg-primary/40" />
              </div>
            </div>
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
                  <span className="text-primary">UBS &mdash; Senior Initiative Manager, Global Wealth Americas</span>
                  <span className="hidden md:inline text-white/20">·</span>
                  <span>2020 – Present</span>
                </div>
                <h4 className="text-3xl font-serif text-white mb-8">Senior Initiative Manager, Global Wealth Americas</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-white/80">·</strong> Delivered a scalable control utilizing autonomous agents to synthesize transaction behavior and customer risk into reviewer-ready outputs. Embedding agentic pattern recognition and narrative generation positioned AI as a force multiplier, driving a step-change in execution, analyst capacity, and global consistency.</p>
                  <p><strong className="text-white/80">·</strong> Led the transformation of a locally hosted monolith into cloud-based microservices on Microsoft Azure, improving scalability, resilience, and speed-to-market while reducing infrastructure costs.</p>
                  <p><strong className="text-primary">·</strong> Led the end-to-end execution of a fraud-prevention solution RFP, including vendor evaluation and rollout, to strengthen security controls.</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                  <Link
                    href="/projects/onepass-pkr-transaction-review"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors font-mono"
                    data-testid="link-case-study-pkr"
                  >
                    View Case Study: Agentic Transaction Review Capability
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/projects/fraud-prevention-rfp"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors font-mono"
                    data-testid="link-case-study-fraud"
                  >
                    View Case Study: Fraud Prevention Request For Proposal (RFP) and Implementation
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
                  <span>UBS &mdash; Senior Delivery Lead, Asset Management</span>
                  <span className="hidden md:inline text-white/20">·</span>
                  <span>2014 – 2020</span>
                </div>
                <h4 className="text-3xl font-serif text-white mb-8">Senior Delivery Lead, Asset Management</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-white/80">·</strong> Replaced a legacy investment application with the SimCorp Dimension (SCD) accounting engine. Partnered with the vendor to lead technical integration and production cutover for an enterprise-scale platform, achieving zero-downtime with no post-migration issues.</p>
                  <p><strong className="text-white/80">·</strong> Directed cross-functional teams across product, engineering, risk, operations, and communications to streamline processes and improve the client experience, scaling from a 5K account pilot to a 3M account rollout, the year's marquee launch.</p>
                  <p><strong className="text-primary">·</strong> Managed $5M portfolios while championing Agile planning to maximize ROI, guiding 40+ global team members to increase delivery velocity 10x.</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                  <Link
                    href="/projects/simcorp-dimension-integration"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors font-mono"
                    data-testid="link-case-study-simcorp-era2"
                  >
                    View Case Study: Enterprise Platform Transformation
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/projects/legacy-cloud-transformation"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors font-mono"
                    data-testid="link-case-study-cloud-era2"
                  >
                    View Case Study: Legacy Platform Migration to Cloud
                    <ArrowRight size={14} />
                  </Link>
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
                <h4 className="text-3xl font-serif text-white mb-8">Program Manager</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-white/80">·</strong> Delivered core research platform for $40B AUM fund-of-funds, aligning technology roadmaps with business growth.</p>
                  <p><strong className="text-white/80">·</strong> Led major Client Reporting refresh and implemented metrics dashboards to improve executive transparency.</p>
                  <p><strong className="text-primary">·</strong> Introduced dashboard metrics that improved executive transparency and enabled data-driven decisions.</p>
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
                <h4 className="text-3xl font-serif text-white mb-8">Agile Project Manager / ScrumMaster</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong className="text-white/80">·</strong> Led global C++ exchange connectivity for high-frequency trading gateways via FIX and proprietary APIs.</p>
                  <p><strong className="text-white/80">·</strong> Managed modernization of the algorithmic trading platform.</p>
                  <p><strong className="text-primary">·</strong> Optimized portfolio planning by prioritizing project initiatives with the highest ROI.</p>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* MSCS */}
          <FadeIn delay={0.1} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col">
            <GraduationCap className="text-primary mb-5" size={20} />
            <h4 className="text-primary font-mono text-sm mb-3">Academic</h4>
            <p className="text-white font-medium mb-2">Master of Science in Computer Science</p>
            <div className="space-y-1 text-sm">
              <p className="text-muted-foreground">Illinois Institute of Technology</p>
              <p className="text-muted-foreground/70">Focus: Software Engineering & Enterprise Architecture</p>
            </div>
          </FadeIn>

          {/* MBA */}
          <FadeIn delay={0.2} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col">
            <GraduationCap className="text-primary mb-5" size={20} />
            <h4 className="text-primary font-mono text-sm mb-3">Academic</h4>
            <p className="text-white font-medium mb-2">Master of Business Administration (MBA)</p>
            <div className="space-y-1 text-sm">
              <p className="text-muted-foreground">Dominican University &mdash; Brennan School of Business</p>
              <p className="text-muted-foreground/70">Most Outstanding Student Award</p>
            </div>
          </FadeIn>

          {/* BS CS */}
          <FadeIn delay={0.3} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col">
            <GraduationCap className="text-primary mb-5" size={20} />
            <h4 className="text-primary font-mono text-sm mb-3">Academic</h4>
            <p className="text-white font-medium mb-2">Bachelor of Science in Computer Science</p>
            <div className="space-y-1 text-sm">
              <p className="text-muted-foreground">Dominican University</p>
              <p className="text-muted-foreground/70">Graduated cum laude</p>
            </div>
          </FadeIn>

          {/* PMP */}
          <FadeIn delay={0.4} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col">
            <BadgeCheck className="text-primary mb-5" size={20} />
            <h4 className="text-primary font-mono text-sm mb-3">Certification</h4>
            <p className="text-white font-medium mb-1">Project Management Professional (PMP)®</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-auto">PMI Certified &mdash; Expert in large-scale program execution and structured delivery governance.</p>
            <a
              href="https://www.credly.com/badges/e9a631ba-311f-4fa2-a9a2-ecb30df393b5/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-white transition-colors mt-5"
            >
              Verify Credential <ArrowRight size={11} />
            </a>
          </FadeIn>

          {/* CSP */}
          <FadeIn delay={0.5} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col">
            <BadgeCheck className="text-primary mb-5" size={20} />
            <h4 className="text-primary font-mono text-sm mb-3">Certification</h4>
            <p className="text-white font-medium mb-1">Certified Scrum Professional® (CSP-SM)</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-auto">Scrum Alliance Certified &mdash; Expert in Agile transformation and iterative delivery at enterprise scale.</p>
            <a
              href="https://bcert.me/siqjxeop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-white transition-colors mt-5"
            >
              Verify Credential <ArrowRight size={11} />
            </a>
          </FadeIn>

          {/* UBS Certified Initiative Manager */}
          <FadeIn delay={0.6} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 flex flex-col">
            <ShieldCheck className="text-primary mb-5" size={20} />
            <h4 className="text-primary font-mono text-sm mb-3">Certification</h4>
            <p className="text-white font-medium mb-1">UBS Certified Initiative Manager</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-auto">Internal elite certification for high-impact initiative delivery and strategic leadership within global financial services.</p>
            <a
              href="https://www.credly.com/badges/c8a28f1f-ba9e-41e5-8cd0-657a6fc0dedc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-white transition-colors mt-5"
            >
              Verify via Credly <ArrowRight size={11} />
            </a>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
              <Sparkles className="text-primary mb-5" size={20} />
              <h4 className="text-primary font-mono text-sm mb-4">AI Strategy & Autonomous Agents</h4>
              <ul className="space-y-2 text-white/80 text-base leading-relaxed">
                <li>Autonomous Agent Workflows</li>
                <li>LLM Orchestration</li>
                <li>Prompt Engineering</li>
                <li>Agentic RAG Architectures</li>
                <li>Replit Rapid Prototyping</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
              <Target className="text-primary mb-5" size={20} />
              <h4 className="text-primary font-mono text-sm mb-4">Initiative Leadership & Delivery</h4>
              <ul className="space-y-2 text-white/80 text-base leading-relaxed">
                <li>Initiative Strategy</li>
                <li>Operational Excellence</li>
                <li>Executive Communication</li>
                <li>Change Management</li>
                <li>Retrospection & Continuous Improvement</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
              <BookOpen className="text-primary mb-5" size={20} />
              <h4 className="text-primary font-mono text-sm mb-4">Coaching & Organizational Playbook</h4>
              <ul className="space-y-2 text-white/80 text-base leading-relaxed">
                <li>Agile Transformation</li>
                <li>UBS Key Talent Program</li>
                <li>Mentorship</li>
                <li>Stakeholder Influence</li>
                <li>Emotional Intelligence (EQ)</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
              <Layers className="text-primary mb-5" size={20} />
              <h4 className="text-primary font-mono text-sm mb-4">Modern Methodologies</h4>
              <ul className="space-y-2 text-white/80 text-base leading-relaxed">
                <li>Agile Delivery (Scrum, Kanban, Lean)</li>
                <li>DevOps & CI/CD</li>
                <li>Program & Portfolio Management (PMP)</li>
                <li>Scaled Agile Model (Pods, Crews, Chapters, Guilds)</li>
                <li>Objectives & Key Results (OKRs)</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.5} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
              <Database className="text-primary mb-5" size={20} />
              <h4 className="text-primary font-mono text-sm mb-4">Technical & Tooling Strategy</h4>
              <ul className="space-y-2 text-white/80 text-base leading-relaxed">
                <li>Microsoft Azure</li>
                <li>Python Ecosystem</li>
                <li>C++ Trading Gateways</li>
                <li>FIX & Proprietary APIs</li>
                <li>GitLab, Jira, Confluence</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.6} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
              <Scale className="text-primary mb-5" size={20} />
              <h4 className="text-primary font-mono text-sm mb-4">Strategic Governance & Risk</h4>
              <ul className="space-y-2 text-white/80 text-base leading-relaxed">
                <li>Regulatory Alignment</li>
                <li>Audit Defensibility</li>
                <li>Model Risk Management (MRM)</li>
                <li>Strategic Compliance</li>
                <li>Governance, Risk & Compliance (GRC) Frameworks</li>
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
          <FadeIn delay={0.1} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
            <h4 className="text-primary font-mono text-sm mb-4">Endurance & Discipline</h4>
            <p className="text-white leading-relaxed">Completed my first half-marathon in 2025 and currently training for my first full marathon (October 2026). The sustained commitment marathon training demands — managing fatigue, maintaining form across miles — mirrors the stamina required to shepherd multi-year enterprise programs through complexity without losing momentum.</p>
          </FadeIn>
          <FadeIn delay={0.2} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
            <h4 className="text-primary font-mono text-sm mb-4">Strategic Mentorship</h4>
            <p className="text-white leading-relaxed">Chess teacher for elementary and middle school students. Teaching chess is fundamentally an exercise in developing strategic thinkers — the same skill I apply when mentoring engineers and PMs. Both require patience, pattern recognition, and the ability to make complex cause-and-effect visible to someone learning to see it for the first time.</p>
          </FadeIn>
          <FadeIn delay={0.3} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
            <h4 className="text-primary font-mono text-sm mb-4">Process</h4>
            <p className="text-white leading-relaxed">Artisan Pitmaster & Wood-Fire Specialist: Dedicated to the precision and patience of low-and-slow meat smoking, applying the same focus on process and procedure found in software leadership.</p>
          </FadeIn>
          <FadeIn delay={0.4} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/25 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
            <h4 className="text-primary font-mono text-sm mb-4">Growth</h4>
            <p className="text-white leading-relaxed">Residential Landscape Engineering: A technical approach to lawn restoration and ecosystem management.</p>
          </FadeIn>
        </div>
      </section>
      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className="py-32 bg-white/5 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Let's Connect</h3>
            <p className="text-muted-foreground text-xl mb-10 max-w-xl mx-auto">
              Open to strategic leadership conversations, advisory opportunities, and executive collaboration.
            </p>
            <a
              href="mailto:albrchri@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 text-base bg-white text-background font-semibold rounded-sm hover:bg-gray-100 transition-colors"
              data-testid="link-bottom-contact"
            >
              Get in Touch
              <ArrowRight size={18} />
            </a>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
