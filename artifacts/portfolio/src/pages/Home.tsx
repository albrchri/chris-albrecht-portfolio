import { useState, useCallback } from "react";
import { useSeo } from "@/hooks/use-seo";
import { PageTransition, FadeIn } from "@/components/PageTransition";
import { DetailDrawer } from "@/components/DetailDrawer";
import {
  ArrowRight, Target, BookOpen, Layers, Database,
  GraduationCap, BadgeCheck, Cloud, ShieldCheck, Sparkles, Scale, Plus
} from "lucide-react";

const CREDENTIALS = "MSCS, MBA, PMP, CSP";

interface DrawerState {
  isOpen: boolean;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

const CLOSED_DRAWER: DrawerState = { isOpen: false, title: "", content: null };

export default function Home() {
  useSeo({
    title: "Chris Albrecht | AI-Native Strategic Product & Technology Leader",
    description: "Strategic product and technology leader with 15+ years delivering enterprise transformation in global financial services."
  });

  const [drawer, setDrawer] = useState<DrawerState>(CLOSED_DRAWER);

  const openDrawer = useCallback((title: string, content: React.ReactNode, subtitle?: string) => {
    setDrawer({ isOpen: true, title, subtitle, content });
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawer(prev => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <PageTransition>
      <DetailDrawer
        isOpen={drawer.isOpen}
        onClose={closeDrawer}
        title={drawer.title}
        subtitle={drawer.subtitle}
      >
        {drawer.content}
      </DetailDrawer>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center container mx-auto px-6 md:px-12 relative pt-24">
        <FadeIn className="max-w-4xl relative z-10 -translate-y-16">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-14">
            <span className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">Chris Albrecht</span>
            <span className="text-2xl md:text-3xl font-serif font-normal text-white/30 tracking-tight">{CREDENTIALS}</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Bridging Software <br className="hidden md:block" />
            <span className="text-[#A1A1A6] italic">Strategy</span> & Execution.
          </h1>
          <p className="text-xl md:text-2xl text-[#A1A1A6] font-sans font-light max-w-2xl leading-relaxed mb-12">
            AI-native strategic product and technology leader. 15+ years of enterprise transformation in global financial services.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#philosophy"
              className="inline-flex items-center gap-2 px-7 py-[14px] text-base font-sans font-medium border border-white text-white rounded-sm hover:bg-white hover:text-black transition-all duration-200"
              data-testid="link-hero-experience"
            >
              Career Overview
              <ArrowRight size={18} />
            </a>
            <a
              href="mailto:albrchri@gmail.com"
              className="inline-flex items-center gap-1 px-6 py-[14px] text-base font-sans border border-white/20 text-[#A1A1A6] rounded-sm hover:border-white/60 hover:text-white transition-all duration-200"
              data-testid="link-hero-contact"
            >
              Get in Touch
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── Leadership Philosophy ────────────────────────────────── */}
      <section id="philosophy" className="py-48 container mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest mb-4">Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-20">Leadership Philosophy</h3>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-6">

          <FadeIn delay={0.1} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <div className="text-[#A1A1A6] font-mono text-2xl mb-5 leading-none">I.</div>
            <h4 className="text-white font-serif text-xl mb-4">Scalable Execution</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Eliminating technical debt to unlock operational velocity at enterprise scale.
            </p>
            <button
              onClick={() => openDrawer(
                "Scalable Execution",
                <>
                  <p>In global financial services, technical debt is not an abstract risk — it is a daily tax on delivery speed, engineer morale, and client trust. My approach systematically identifies and retires legacy constraints before they become blockers.</p>
                  <p>This means establishing rigorous backlog hygiene, partnering with architects to deprecate aging integrations, and building delivery frameworks that prioritize long-term platform health alongside near-term feature output.</p>
                  <p>The result: teams that accelerate quarter over quarter instead of slowing under accumulated complexity. At UBS, this approach directly enabled a 10x increase in delivery velocity across a 40-person global program.</p>
                </>,
                "Leadership Philosophy"
              )}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white transition-colors group"
            >
              <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
              Details
            </button>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <div className="text-[#A1A1A6] font-mono text-2xl mb-5 leading-none">II.</div>
            <h4 className="text-white font-serif text-xl mb-4">Radical Transparency</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Data-driven communication that builds trust across complex, multi-year initiatives.
            </p>
            <button
              onClick={() => openDrawer(
                "Radical Transparency",
                <>
                  <p>Multi-stakeholder programs fail most often not from technical errors, but from information asymmetry. Executives make decisions on stale data. Engineers lose context on strategic intent. Trust erodes.</p>
                  <p>Radical Transparency means establishing single sources of truth — structured dashboards, cadenced reporting, and explicit escalation paths — so every stakeholder, from engineer to MD, operates from the same picture.</p>
                  <p>In practice, this looks like weekly metric reviews that surface risk before it becomes incident, and initiative status reports that eliminate ambiguity rather than paper over it. This discipline has been a consistent differentiator across every program I have led at UBS and Grosvenor Capital.</p>
                </>,
                "Leadership Philosophy"
              )}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white transition-colors group"
            >
              <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
              Details
            </button>
          </FadeIn>

          <FadeIn delay={0.3} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <div className="text-[#A1A1A6] font-mono text-2xl mb-5 leading-none">III.</div>
            <h4 className="text-white font-serif text-xl mb-4">Empathy-Led Mentorship</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Coaching-trained leadership that cultivates high-performing, resilient teams.
            </p>
            <button
              onClick={() => openDrawer(
                "Empathy-Led Mentorship",
                <>
                  <p>Technical skill alone does not build durable teams. The highest-performing engineers and PMs I have worked with share one trait: they felt genuinely seen and invested in.</p>
                  <p>Drawing on professional coaching training, I apply structured 1:1 frameworks, individualized growth plans, and psychological safety practices that allow team members to raise risk early and take ownership confidently.</p>
                  <p>This approach builds organizational resilience. Teams mentored this way navigate ambiguity, absorb change, and deliver consistently — not because they are managed more tightly, but because they are trusted more fully. At UBS, members of my extended teams have gone on to senior leadership roles across global technology organizations.</p>
                </>,
                "Leadership Philosophy"
              )}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white transition-colors group"
            >
              <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
              Details
            </button>
          </FadeIn>

        </div>
      </section>

      {/* ── Signature Initiatives ────────────────────────────────── */}
      <section className="pt-48 pb-[264px] container mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest mb-4">Highlights</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-20">Signature Initiatives</h3>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-6">

          <FadeIn delay={0.1} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <Sparkles className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-white font-sans font-medium text-sm mb-3">AI-Enabled Transaction Review</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Deployed autonomous agents to synthesize transaction behavior and customer risk into standardized, reviewer-ready outputs — driving a step-change in analyst capacity and global consistency.
            </p>
            <button
              onClick={() => openDrawer(
                "AI-Enabled Transaction Review (OnePass PKR)",
                <>
                  <p><strong className="text-white font-sans font-medium">The Problem:</strong> Periodic Know-Your-Risk (PKR) reviews were manual, inconsistent across geographies, and created unsustainable analyst workloads during peak cycles.</p>
                  <p><strong className="text-white font-sans font-medium">The Approach:</strong> Architected a control utilizing autonomous LLM agents to analyze transaction histories, surface behavioral anomalies, and generate structured narrative outputs aligned to regulatory review standards. Integrated agentic RAG pipelines to synthesize customer risk profiles across disparate internal data sources.</p>
                  <p><strong className="text-white font-sans font-medium">Technical Nuance:</strong> The solution required model risk governance sign-off, audit-defensible prompt architecture, and a phased rollout that validated output quality against expert-reviewed baselines before production deployment.</p>
                  <p><strong className="text-white font-sans font-medium">Outcome:</strong> Significantly reduced periodic review cycle times. Positioned AI as a force multiplier within the compliance function, enabling analysts to focus on judgment-intensive edge cases rather than routine synthesis.</p>
                </>,
                "Signature Initiative"
              )}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white transition-colors group"
            >
              <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
              View Case Study
            </button>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <Cloud className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-white font-sans font-medium text-sm mb-3">Legacy-to-Cloud Transformation</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Led the migration of a locally hosted monolith to cloud-based microservices on Microsoft Azure, improving scalability, resilience, and speed-to-market.
            </p>
            <button
              onClick={() => openDrawer(
                "Legacy-to-Cloud Transformation (Microsoft Azure)",
                <>
                  <p><strong className="text-white font-sans font-medium">The Problem:</strong> A locally hosted monolithic platform was constraining release velocity, creating infrastructure fragility, and generating unsustainable operational overhead as the business scaled.</p>
                  <p><strong className="text-white font-sans font-medium">The Approach:</strong> Led a phased decomposition of the monolith into domain-aligned microservices on Microsoft Azure. Established a strangler-fig migration pattern to de-risk cutover and maintain production stability throughout the transition.</p>
                  <p><strong className="text-white font-sans font-medium">Technical Nuance:</strong> The program required close coordination across engineering, infrastructure, security, and operations to manage service-level agreements, credential rotation, and regulatory data residency requirements during migration.</p>
                  <p><strong className="text-white font-sans font-medium">Outcome:</strong> Significantly reduced infrastructure costs while improving platform resilience and enabling independent service deployments that reduced time-to-production for new features.</p>
                </>,
                "Signature Initiative"
              )}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white transition-colors group"
            >
              <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
              View Case Study
            </button>
          </FadeIn>

          <FadeIn delay={0.3} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <Layers className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-white font-sans font-medium text-sm mb-3">Enterprise Platform Transformation (SCD)</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Replaced a legacy investment application with the SimCorp Dimension accounting engine, achieving zero-downtime production cutover with no post-migration issues.
            </p>
            <button
              onClick={() => openDrawer(
                "Enterprise Platform Transformation — SimCorp Dimension",
                <>
                  <p><strong className="text-white font-sans font-medium">The Problem:</strong> A legacy investment accounting application had reached end-of-life, creating regulatory risk and blocking the Asset Management division from adopting modern portfolio capabilities.</p>
                  <p><strong className="text-white font-sans font-medium">The Approach:</strong> Partnered with SimCorp and internal engineering teams to lead a full technical integration of the SCD accounting engine. Designed and executed a cutover strategy that maintained dual-run reconciliation until production confidence was validated.</p>
                  <p><strong className="text-white font-sans font-medium">Technical Nuance:</strong> The program required deep coordination with SimCorp's professional services team, extensive data migration validation, and integration testing across downstream risk and reporting systems — all within strict regulatory reporting timelines.</p>
                  <p><strong className="text-white font-sans font-medium">Outcome:</strong> Zero-downtime production cutover with no post-migration incidents. The platform has operated without regression and unlocked a new generation of portfolio analytics capabilities for the division.</p>
                </>,
                "Signature Initiative"
              )}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white transition-colors group"
            >
              <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
              View Case Study
            </button>
          </FadeIn>

        </div>
      </section>

      {/* ── Social Proof ─────────────────────────────────────────── */}
      <section className="py-32 bg-[#121212] border-y border-white/8">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <FadeIn>
            <div className="flex flex-col gap-8">
              <blockquote className="text-2xl md:text-3xl font-serif text-white leading-relaxed">
                "Chris consistently delivers results in high-stakes environments, balancing technical precision with executive-level strategy."
              </blockquote>
              <p className="text-sm font-sans font-medium text-[#A1A1A6] uppercase tracking-widest">
                Ana Soric — Managing Director, UBS
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Professional Tenure ──────────────────────────────────── */}
      <section id="experience" className="py-64 bg-[#121212] border-y border-white/8">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest mb-4">Experience</h2>
            <h3 className="text-5xl md:text-6xl font-serif mb-24 text-white">Professional Tenure</h3>
          </FadeIn>

          <div className="max-w-4xl border-l border-white/10 pl-6 md:pl-12 space-y-40">

            {/* UBS — Era 3 */}
            <FadeIn delay={0.1}>
              <div className="relative">
                <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full bg-white ring-4 ring-black" />
                <div className="mb-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest">
                  <span className="text-white">UBS — Senior Initiative Manager, Global Wealth Americas</span>
                  <span className="hidden md:inline text-white/20">·</span>
                  <span>2020 – Present</span>
                </div>
                <h4 className="text-3xl font-serif text-white mb-6">Senior Initiative Manager, Global Wealth Americas</h4>
                <p className="text-[#A1A1A6] font-sans text-base leading-relaxed mb-8">
                  Driving AI-native transformation and enterprise program delivery across Global Wealth Management Americas, from autonomous compliance tooling to major platform migrations.
                </p>
                <button
                  onClick={() => openDrawer(
                    "UBS — Senior Initiative Manager, Global Wealth Americas",
                    <>
                      <p className="text-xs font-sans uppercase tracking-widest text-white/40 mb-4">2020 – Present</p>
                      <p>Delivered a scalable control utilizing autonomous agents to synthesize transaction behavior and customer risk into reviewer-ready outputs. Embedding agentic pattern recognition and narrative generation positioned AI as a force multiplier, driving a step-change in execution, analyst capacity, and global consistency.</p>
                      <p>Led the transformation of a locally hosted monolith into cloud-based microservices on Microsoft Azure, improving scalability, resilience, and speed-to-market while significantly reducing infrastructure costs.</p>
                      <p>Led the end-to-end execution of a fraud-prevention solution RFP — including vendor evaluation, due diligence, and rollout — to strengthen security controls across the Americas wealth platform.</p>
                    </>,
                    "Professional Tenure"
                  )}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white border border-white/20 hover:border-white/60 px-4 py-2 rounded-sm transition-all duration-200 group"
                >
                  <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
                  Details
                </button>
              </div>
            </FadeIn>

            {/* UBS — Era 2 */}
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full border-2 border-white/20 bg-black" />
                <div className="mb-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest">
                  <span>UBS — Senior Delivery Lead, Asset Management</span>
                  <span className="hidden md:inline text-white/20">·</span>
                  <span>2014 – 2020</span>
                </div>
                <h4 className="text-3xl font-serif text-white mb-6">Senior Delivery Lead, Asset Management</h4>
                <p className="text-[#A1A1A6] font-sans text-base leading-relaxed mb-8">
                  Led enterprise platform transformation and scaled Agile delivery across Asset Management — from a zero-downtime platform cutover to the year's marquee product launch scaling to 3M accounts.
                </p>
                <button
                  onClick={() => openDrawer(
                    "UBS — Senior Delivery Lead, Asset Management",
                    <>
                      <p className="text-xs font-sans uppercase tracking-widest text-white/40 mb-4">2014 – 2020</p>
                      <p>Replaced a legacy investment application with the SimCorp Dimension (SCD) accounting engine. Partnered with the vendor to lead technical integration and production cutover for an enterprise-scale platform, achieving zero-downtime with no post-migration issues.</p>
                      <p>Directed cross-functional teams across product, engineering, risk, operations, and communications to streamline processes and improve the client experience — scaling from a 5K account pilot to a 3M account rollout, the year's marquee launch.</p>
                      <p>Managed $5M portfolios while championing Agile planning to maximize ROI, guiding 40+ global team members to increase delivery velocity 10x.</p>
                    </>,
                    "Professional Tenure"
                  )}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white border border-white/20 hover:border-white/60 px-4 py-2 rounded-sm transition-all duration-200 group"
                >
                  <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
                  Details
                </button>
              </div>
            </FadeIn>

            {/* Grosvenor Capital Management */}
            <FadeIn delay={0.3}>
              <div className="relative">
                <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full border-2 border-white/20 bg-black" />
                <div className="mb-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest">
                  <span>Grosvenor Capital Management</span>
                  <span className="hidden md:inline text-white/20">·</span>
                  <span>Dec 2012 – Mar 2014</span>
                </div>
                <h4 className="text-3xl font-serif text-white mb-6">Program Manager</h4>
                <p className="text-[#A1A1A6] font-sans text-base leading-relaxed mb-8">
                  Delivered core research platform and client reporting infrastructure for a $40B AUM fund-of-funds, aligning technology roadmaps to business growth.
                </p>
                <button
                  onClick={() => openDrawer(
                    "Grosvenor Capital Management — Program Manager",
                    <>
                      <p className="text-xs font-sans uppercase tracking-widest text-white/40 mb-4">Dec 2012 – Mar 2014</p>
                      <p>Delivered the core research platform for a $40B AUM fund-of-funds, closely aligning technology roadmaps with business growth priorities and investment research workflows.</p>
                      <p>Led a major Client Reporting refresh that improved data accuracy, presentation quality, and turnaround times for institutional client deliverables.</p>
                      <p>Introduced executive dashboard metrics that improved transparency across the senior leadership team, enabling data-driven portfolio management decisions at the program level.</p>
                    </>,
                    "Professional Tenure"
                  )}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white border border-white/20 hover:border-white/60 px-4 py-2 rounded-sm transition-all duration-200 group"
                >
                  <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
                  Details
                </button>
              </div>
            </FadeIn>

            {/* RTS Realtime Systems */}
            <FadeIn delay={0.4}>
              <div className="relative">
                <div className="absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full border-2 border-white/20 bg-black" />
                <div className="mb-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest">
                  <span>RTS Realtime Systems</span>
                  <span className="hidden md:inline text-white/20">·</span>
                  <span>Feb 2011 – Dec 2012</span>
                </div>
                <h4 className="text-3xl font-serif text-white mb-6">Agile Project Manager / ScrumMaster</h4>
                <p className="text-[#A1A1A6] font-sans text-base leading-relaxed mb-8">
                  Led global C++ exchange connectivity and algorithmic trading platform modernization for high-frequency trading gateways via FIX and proprietary APIs.
                </p>
                <button
                  onClick={() => openDrawer(
                    "RTS Realtime Systems — Agile Project Manager / ScrumMaster",
                    <>
                      <p className="text-xs font-sans uppercase tracking-widest text-white/40 mb-4">Feb 2011 – Dec 2012</p>
                      <p>Led global C++ exchange connectivity development for high-frequency trading gateways, coordinating delivery across FIX protocol and proprietary exchange APIs for institutional trading clients.</p>
                      <p>Managed the modernization of the algorithmic trading platform, establishing Agile delivery practices in a highly technical, latency-sensitive environment.</p>
                      <p>Optimized portfolio planning by applying ROI-driven prioritization to a constrained engineering backlog, maximizing throughput for the highest-value exchange connectivity initiatives.</p>
                    </>,
                    "Professional Tenure"
                  )}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white border border-white/20 hover:border-white/60 px-4 py-2 rounded-sm transition-all duration-200 group"
                >
                  <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
                  Details
                </button>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Credentials & Expertise ──────────────────────────────── */}
      <section className="py-48 container mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest mb-4">Credentials</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-20">Credentials & Expertise</h3>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <FadeIn delay={0.1} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <GraduationCap className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-3">Academic</h4>
            <p className="text-white font-sans font-medium mb-2">Master of Science in Computer Science</p>
            <div className="space-y-1 text-sm font-sans">
              <p className="text-[#A1A1A6]">Illinois Institute of Technology</p>
              <p className="text-[#A1A1A6]/60">Focus: Software Engineering & Enterprise Architecture</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <GraduationCap className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-3">Academic</h4>
            <p className="text-white font-sans font-medium mb-2">Master of Business Administration</p>
            <div className="space-y-1 text-sm font-sans">
              <p className="text-[#A1A1A6]">Dominican University — Brennan School of Business</p>
              <p className="text-[#A1A1A6]/60">Most Outstanding Student Award</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <GraduationCap className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-3">Academic</h4>
            <p className="text-white font-sans font-medium mb-2">Bachelor of Science in Computer Science</p>
            <div className="space-y-1 text-sm font-sans">
              <p className="text-[#A1A1A6]">Dominican University</p>
              <p className="text-[#A1A1A6]/60">Graduated cum laude</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <BadgeCheck className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-3">Certification</h4>
            <p className="text-white font-sans font-medium mb-1">Project Management Professional (PMP)®</p>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-auto">PMI Certified — Expert in large-scale program execution and structured delivery governance.</p>
            <a
              href="https://www.credly.com/badges/e9a631ba-311f-4fa2-a9a2-ecb30df393b5/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-sans text-[#A1A1A6]/50 hover:text-white transition-colors mt-5"
            >
              Verify Credential <ArrowRight size={11} />
            </a>
          </FadeIn>

          <FadeIn delay={0.5} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <BadgeCheck className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-3">Certification</h4>
            <p className="text-white font-sans font-medium mb-1">Certified Scrum Professional® (CSP-SM)</p>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-auto">Scrum Alliance Certified — Expert in Agile transformation and iterative delivery at enterprise scale.</p>
            <a
              href="https://bcert.me/siqjxeop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-sans text-[#A1A1A6]/50 hover:text-white transition-colors mt-5"
            >
              Verify Credential <ArrowRight size={11} />
            </a>
          </FadeIn>

          <FadeIn delay={0.6} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <ShieldCheck className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-3">Certification</h4>
            <p className="text-white font-sans font-medium mb-1">UBS Certified Initiative Manager</p>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-auto">Internal elite certification for high-impact initiative delivery and strategic leadership within global financial services.</p>
            <a
              href="https://www.credly.com/badges/c8a28f1f-ba9e-41e5-8cd0-657a6fc0dedc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-sans text-[#A1A1A6]/50 hover:text-white transition-colors mt-5"
            >
              Verify via Credly <ArrowRight size={11} />
            </a>
          </FadeIn>

        </div>
      </section>

      {/* ── Stack & Skills ───────────────────────────────────────── */}
      <section className="py-48 bg-[#121212] border-y border-white/8">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="mb-20">
              <h2 className="text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest mb-4">Toolset</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Stack & Skills</h3>
              <p className="text-[#A1A1A6] font-sans max-w-xl">Leadership frameworks, modern methodologies, and technical capabilities — built for enterprise scale.</p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1} className="bg-black border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200">
              <Sparkles className="text-[#A1A1A6] mb-5" size={20} />
              <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">AI Strategy & Autonomous Agents</h4>
              <ul className="space-y-2 text-white font-sans text-sm leading-relaxed">
                <li>Autonomous Agent Workflows</li>
                <li>LLM Orchestration</li>
                <li>Prompt Engineering</li>
                <li>Agentic RAG Architectures</li>
                <li>Replit Rapid Prototyping</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-black border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200">
              <Target className="text-[#A1A1A6] mb-5" size={20} />
              <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Initiative Leadership & Delivery</h4>
              <ul className="space-y-2 text-white font-sans text-sm leading-relaxed">
                <li>Initiative Strategy</li>
                <li>Operational Excellence</li>
                <li>Executive Communication</li>
                <li>Change Management</li>
                <li>Retrospection & Continuous Improvement</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-black border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200">
              <BookOpen className="text-[#A1A1A6] mb-5" size={20} />
              <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Coaching & Organizational Playbook</h4>
              <ul className="space-y-2 text-white font-sans text-sm leading-relaxed">
                <li>Agile Transformation</li>
                <li>UBS Key Talent Program</li>
                <li>Mentorship</li>
                <li>Stakeholder Influence</li>
                <li>Emotional Intelligence (EQ)</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-black border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200">
              <Layers className="text-[#A1A1A6] mb-5" size={20} />
              <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Modern Methodologies</h4>
              <ul className="space-y-2 text-white font-sans text-sm leading-relaxed">
                <li>Agile Delivery (Scrum, Kanban, Lean)</li>
                <li>DevOps & CI/CD</li>
                <li>Program & Portfolio Management (PMP)</li>
                <li>Scaled Agile Model (Pods, Crews, Chapters, Guilds)</li>
                <li>Objectives & Key Results (OKRs)</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.5} className="bg-black border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200">
              <Database className="text-[#A1A1A6] mb-5" size={20} />
              <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Technical & Tooling Strategy</h4>
              <ul className="space-y-2 text-white font-sans text-sm leading-relaxed">
                <li>Microsoft Azure</li>
                <li>Python Ecosystem</li>
                <li>C++ Trading Gateways</li>
                <li>FIX & Proprietary APIs</li>
                <li>GitLab, Jira, Confluence</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.6} className="bg-black border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200">
              <Scale className="text-[#A1A1A6] mb-5" size={20} />
              <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Strategic Governance & Risk</h4>
              <ul className="space-y-2 text-white font-sans text-sm leading-relaxed">
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
      <section className="py-64 container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center mb-28 max-w-2xl mx-auto">
            <h2 className="text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest mb-4">Personal Pursuits</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-white mb-6">Beyond the Boardroom</h3>
            <p className="text-[#A1A1A6] font-sans">Strategy, endurance, and process — applied outside the office.</p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn delay={0.1} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200">
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Endurance & Discipline</h4>
            <p className="text-white font-sans text-sm leading-relaxed">Completed first half-marathon in 2025. Training for a full marathon in October 2026. The sustained commitment mirrors the stamina required to shepherd multi-year enterprise programs without losing momentum.</p>
          </FadeIn>
          <FadeIn delay={0.2} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200">
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Strategic Mentorship</h4>
            <p className="text-white font-sans text-sm leading-relaxed">Chess teacher for elementary and middle school students. Teaching strategic thinking to young minds applies the same patience and pattern recognition I use mentoring engineers and PMs.</p>
          </FadeIn>
          <FadeIn delay={0.3} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200">
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Process</h4>
            <p className="text-white font-sans text-sm leading-relaxed">Artisan Pitmaster & Wood-Fire Specialist. The precision and patience of low-and-slow smoking mirrors the process discipline I bring to software delivery.</p>
          </FadeIn>
          <FadeIn delay={0.4} className="bg-[#121212] border border-white/10 p-8 rounded-sm hover:border-white/25 transition-all duration-200">
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Growth</h4>
            <p className="text-white font-sans text-sm leading-relaxed">Residential Landscape Engineering — a technical approach to lawn restoration and ecosystem management.</p>
          </FadeIn>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className="py-40 bg-[#121212] border-t border-white/8">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Let's Connect</h3>
            <p className="text-[#A1A1A6] font-sans text-lg mb-10 max-w-xl mx-auto">
              Open to strategic leadership conversations, advisory opportunities, and executive collaboration.
            </p>
            <a
              href="mailto:albrchri@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-sans font-medium border border-white text-white rounded-sm hover:bg-white hover:text-black transition-all duration-200"
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
