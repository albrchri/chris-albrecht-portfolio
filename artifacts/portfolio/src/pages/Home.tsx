import { useState, useCallback } from "react";
import { useSeo } from "@/hooks/use-seo";
import { PageTransition, FadeIn } from "@/components/PageTransition";
import { DetailDrawer } from "@/components/DetailDrawer";
import { ScrollSpy } from "@/components/ScrollSpy";
import {
  ArrowRight, Target, BookOpen, Layers, Database,
  GraduationCap, BadgeCheck, Cloud, ShieldCheck, Sparkles, Scale, Plus, Users, Zap, ExternalLink
} from "lucide-react";

const CREDENTIALS = "MSCS, MBA, PMP, CSP";

interface DrawerState {
  isOpen: boolean;
  title: string;
  subtitle?: string;
  jobTitle?: string;
  content: React.ReactNode;
}

const CLOSED_DRAWER: DrawerState = { isOpen: false, title: "", content: null };

export default function Home() {
  useSeo({
    title: "Chris Albrecht | AI-Native Strategic Delivery Leader",
    description: "Strategic product and technology leader with 15+ years delivering enterprise transformation in global financial services."
  });

  const [drawer, setDrawer] = useState<DrawerState>(CLOSED_DRAWER);

  const openDrawer = useCallback((title: string, content: React.ReactNode, subtitle?: string, jobTitle?: string) => {
    setDrawer({ isOpen: true, title, subtitle, jobTitle, content });
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawer(prev => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <PageTransition>
      <ScrollSpy />
      <DetailDrawer
        isOpen={drawer.isOpen}
        onClose={closeDrawer}
        title={drawer.title}
        subtitle={drawer.subtitle}
        jobTitle={drawer.jobTitle}
      >
        {drawer.content}
      </DetailDrawer>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section id="intro" className="scroll-mt-20 min-h-screen flex flex-col justify-center container mx-auto px-6 md:px-12 relative pt-24">
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
            AI-native delivery leader driving platform transformations, cloud migrations, and AI-enabled solutions at enterprise scale.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#philosophy"
              className="inline-flex items-center gap-2 px-7 py-[14px] text-base font-sans font-medium border border-white text-white rounded-sm hover:bg-white hover:text-black transition-all duration-200"
              data-testid="link-hero-experience"
            >
              ↓ Explore Profile
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── Leadership Philosophy ────────────────────────────────── */}
      <section id="philosophy" className="scroll-mt-20 pt-16 pb-32 container mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest mb-4">Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-20">Leadership Philosophy</h3>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-6">

          <FadeIn delay={0.1} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <div className="text-[#A1A1A6] font-mono text-2xl mb-5 leading-none">I.</div>
            <h4 className="text-white font-serif text-xl mb-4">Operational Excellence</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Apply proven methodologies with disciplined execution to ensure consistent, high-quality delivery at any scale.
            </p>
            <button
              onClick={() => openDrawer(
                "Operational Excellence",
                <>
                  <p>High-quality delivery isn't an accident. It's the result of a culture built on discipline and consistency. I focus on the practical foundations of every initiative, aligning governance and best practices to remove friction.</p>
                  <p>Ultimately, I believe the best outcomes occur when we instill purpose in our mission. Tackling hard problems should be meaningful and even enjoyable. When a team is motivated by a shared mission and mutual accountability, they consistently deliver at their best.</p>
                </>,
                "Leadership Philosophy"
              )}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white transition-colors group"
            >
              <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
              Details
            </button>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <div className="text-[#A1A1A6] font-mono text-2xl mb-5 leading-none">II.</div>
            <h4 className="text-white font-serif text-xl mb-4">Stakeholder Alignment</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Drive data-informed decisions that build trust and sustain momentum across complex, multi-year initiatives.
            </p>
            <button
              onClick={() => openDrawer(
                "Stakeholder Alignment",
                <>
                  <p>Trust is the primary currency in multi-year initiatives. I prioritize data-driven decisions and transparency in reporting to ensure stakeholders are never surprised. By surfacing risk early and using objective metrics, I build the political and operational capital needed to maintain momentum through complex transformations.</p>
                  <p>Alignment is about more than just status updates. It is about creating a shared understanding of success so that every stakeholder remains invested in the final outcome.</p>
                </>,
                "Leadership Philosophy"
              )}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white transition-colors group"
            >
              <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
              Details
            </button>
          </FadeIn>

          <FadeIn delay={0.3} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <div className="text-[#A1A1A6] font-mono text-2xl mb-5 leading-none">III.</div>
            <h4 className="text-white font-serif text-xl mb-4">Adaptive Leadership</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Build high-performing, resilient teams through active development, engagement, and empowerment.
            </p>
            <button
              onClick={() => openDrawer(
                "Adaptive Leadership",
                <>
                  <p>Systems are only as resilient as the people who build them. My leadership focuses on developing high-performing teams by fostering a culture of continuous improvement. I believe that the most robust solutions come from an environment where it is safe to experiment, learn quickly, and iterate based on real feedback.</p>
                  <p>I view my role as a force multiplier, unblocking talent and instilling a sense of purpose so that teams remain motivated and effective even when navigating the complexities of technical environments.</p>
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
      <section id="accomplishments" className="scroll-mt-20 pt-16 pb-24 bg-[#0C0C0C]">
        <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest mb-4">Highlights</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-20">Signature Accomplishments</h3>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">

          {/* Card 1 */}
          <FadeIn delay={0.1} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/30 hover:scale-[1.02] transition-all duration-200 flex flex-col h-full">
            <Sparkles className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-white font-sans font-semibold text-sm mb-4">AI-Enabled Transaction Review</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Operationalized autonomous agents summarizing transaction behavior and risk into reviewer-ready outputs, significantly increasing analyst capacity and consistency.
            </p>
            <button
              onClick={() => openDrawer(
                "AI-Enabled Transaction Review",
                <>
                  <p><strong className="text-white font-sans font-medium">The Problem:</strong> Periodic transaction reviews were manual, inconsistent across geographies, and created unsustainable analyst workloads during peak cycles.</p>
                  <p><strong className="text-white font-sans font-medium">The Approach:</strong> Designed and implemented a control using autonomous LLM agents to analyze transaction histories, surface behavioral anomalies, and generate structured narrative outputs aligned to regulatory review standards. Integrated agentic pipelines to synthesize customer risk profiles across disparate internal data sources.</p>
                  <p><strong className="text-white font-sans font-medium">Technical Nuance:</strong> The solution required model risk governance sign-off, audit-defensible prompt architecture, and a phased rollout that validated output quality against expert-reviewed baselines before production deployment.</p>
                  <p><strong className="text-white font-sans font-medium">Outcome:</strong> Significantly reduced review cycle times. Positioned AI as a force multiplier within the compliance function, enabling analysts to focus on judgment-intensive edge cases rather than routine synthesis.</p>
                </>,
                "Signature Initiative"
              )}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white transition-colors group"
            >
              <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
              View Case Study
            </button>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn delay={0.2} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/30 hover:scale-[1.02] transition-all duration-200 flex flex-col h-full">
            <Cloud className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-white font-sans font-semibold text-sm mb-4">Legacy-to-Cloud Migration</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Led the transformation of an on-premise monolith to cloud-based microservices on Microsoft Azure, improving scalability, resilience, and speed-to-market.
            </p>
            <button
              onClick={() => openDrawer(
                "Legacy-to-Cloud Migration",
                <>
                  <p><strong className="text-white font-sans font-medium">The Problem:</strong> A locally hosted monolithic platform was constraining release velocity, creating infrastructure fragility, and generating unsustainable operational overhead as the business scaled.</p>
                  <p><strong className="text-white font-sans font-medium">The Approach:</strong> Led a phased decomposition of the monolith into domain-aligned microservices on Microsoft Azure. Established a migration pattern to de-risk cutover and maintain production stability throughout the transition.</p>
                  <p><strong className="text-white font-sans font-medium">Technical Nuance:</strong> The program required close coordination across engineering, infrastructure, security, and operations to manage service-level agreements, credential rotation, and regulatory requirements during migration.</p>
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

          {/* Card 3 */}
          <FadeIn delay={0.3} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/30 hover:scale-[1.02] transition-all duration-200 flex flex-col h-full">
            <Layers className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-white font-sans font-semibold text-sm mb-4">Enterprise Platform Transformation</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Replaced a critical legacy investment application with the SimCorp Dimension accounting engine, achieving zero-downtime production cutover with no post-migration issues.
            </p>
            <button
              onClick={() => openDrawer(
                "Enterprise Platform Transformation",
                <>
                  <p><strong className="text-white font-sans font-medium">The Problem:</strong> A legacy investment accounting application had reached end-of-life, creating regulatory risk and blocking the Asset Management division from adopting modern portfolio capabilities.</p>
                  <p><strong className="text-white font-sans font-medium">The Approach:</strong> Partnered with SimCorp and internal engineering teams to lead a full technical integration of the SCD accounting engine. Designed and executed a cutover strategy that maintained dual-run reconciliation until production confidence was validated.</p>
                  <p><strong className="text-white font-sans font-medium">Technical Nuance:</strong> The program required deep coordination with SimCorp's professional services team, extensive data migration validation, and integration testing across downstream risk and reporting systems.</p>
                  <p><strong className="text-white font-sans font-medium">Outcome:</strong> I led a global deployment team through a 60-hour weekend cutover with zero SLA downtime and no post-migration incidents. The platform has since operated without regression and unlocked modern portfolio analytics capabilities for the division.</p>
                </>,
                "Signature Initiative"
              )}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white transition-colors group"
            >
              <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
              View Case Study
            </button>
          </FadeIn>

          {/* Card 4 */}
          <FadeIn delay={0.4} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/30 hover:scale-[1.02] transition-all duration-200 flex flex-col h-full">
            <ShieldCheck className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-white font-sans font-semibold text-sm mb-4">Fraud Prevention RFP & Rollout</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Led end-to-end RFP execution for a fraud-prevention solution strengthening security controls and client protection across the division.
            </p>
            <button
              onClick={() => openDrawer(
                "Fraud Prevention RFP & Rollout",
                <>
                  <p><strong className="text-white font-sans font-medium">The Problem:</strong> The existing security landscape had critical gaps in fraud detection for high-stakes transactions, creating a vulnerability that required a modern solution to strengthen institutional controls and prevent unauthorized access.</p>
                  <p><strong className="text-white font-sans font-medium">The Approach:</strong> Orchestrated an end-to-end RFP process and vendor engagement to identify a robust Two-Factor Authentication (2FA) solution. I aligned business, security, and compliance stakeholders on a unified requirement set and designed an implementation roadmap for seamless integration into existing client workflows.</p>
                  <p><strong className="text-white font-sans font-medium">Technical Nuance:</strong> The initiative required evaluating vendor capabilities against strict regulatory standards and internal model risk management protocols to ensure full audit defensibility.</p>
                  <p><strong className="text-white font-sans font-medium">Outcome:</strong> Successfully delivered a high-impact security solution that strengthened client protection across the division and reduced material risk by mandating Two-Factor Authentication.</p>
                </>,
                "Signature Initiative"
              )}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white transition-colors group"
            >
              <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
              View Case Study
            </button>
          </FadeIn>

          {/* Card 5 */}
          <FadeIn delay={0.5} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/30 hover:scale-[1.02] transition-all duration-200 flex flex-col h-full">
            <Users className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-white font-sans font-semibold text-sm mb-4">Cross-Functional Client Experience Launch</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Directed global cross-functional teams to streamline onboarding and review processes, scaling a critical client experience from a 5K pilot to full global rollout.
            </p>
            <button
              onClick={() => openDrawer(
                "Cross-Functional Client Experience Launch",
                <>
                  <p><strong className="text-white font-sans font-medium">The Problem:</strong> Onboarding new clients and conducting the regular review process had become excessively cumbersome, creating significant friction and taking too long to execute.</p>
                  <p><strong className="text-white font-sans font-medium">The Approach:</strong> I directed global cross-functional teams to streamline internal processes and simplify the client questionnaire to reduce onboarding friction. I unified stakeholders across product, engineering, risk, and operations to ensure a seamless transition from pilot to full-scale production.</p>
                  <p><strong className="text-white font-sans font-medium">Technical Nuance:</strong> The initiative required synchronizing an immense number of distinct domains, ranging from backend services and data pipelines to multiple front-end systems. This was balanced against strict model risk governance frameworks, legal reviews, and coordinated communication and training for front-facing field teams to ensure operational readiness.</p>
                  <p><strong className="text-white font-sans font-medium">Outcome:</strong> Successfully executed the marquee launch for the division that year, scaling the experience from a limited pilot to millions of accounts with zero service disruption.</p>
                </>,
                "Signature Initiative"
              )}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#A1A1A6] hover:text-white transition-colors group"
            >
              <Plus size={12} className="group-hover:rotate-45 transition-transform duration-200" />
              View Case Study
            </button>
          </FadeIn>

          {/* Card 6 */}
          <FadeIn delay={0.6} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/30 hover:scale-[1.02] transition-all duration-200 flex flex-col h-full">
            <Zap className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-white font-sans font-semibold text-sm mb-4">High-Velocity Agile Evolution</h4>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-6 flex-1">
              Evolved waterfall development into high-velocity Agile delivery, increasing deployment cadence from quarterly to weekly through CI/CD and modern standards.
            </p>
            <button
              onClick={() => openDrawer(
                "High-Velocity Agile Evolution",
                <>
                  <p><strong className="text-white font-sans font-medium">The Problem:</strong> The existing software development teams operated under rigid, waterfall-based methodologies, resulting in a slow quarterly deployment cadence. This lack of agility created significant bottlenecks, high lead times for new features, and an inability to respond rapidly to critical ad-hoc fixes or changing market demands.</p>
                  <p><strong className="text-white font-sans font-medium">The Approach:</strong> I spearheaded a strategic, comprehensive shift to an iterative, high-velocity model by integrating Agile techniques from planning through execution and retrospection. I championed a culture of mutual accountability, frequent iterative feedback, and automation to shift the team's mindset from task management to rapid value delivery.</p>
                  <p><strong className="text-white font-sans font-medium">Technical Nuance:</strong> The transformation required a deep architectural and process overhaul, including the implementation of modern CI/CD DevOps pipelines and comprehensive automated testing tools. We adopted the Scaled Agile Model (Pods, Crews, Chapters, Guilds) and integrated Objectives & Key Results (OKRs) to align technical velocity with business-value ROI.</p>
                  <p><strong className="text-white font-sans font-medium">Outcome:</strong> Successfully moved the deployment cadence from quarterly to monthly, and ultimately to weekly releases. This delivered a 10x increase in delivery velocity while providing the team with the capability to deploy high-priority ad-hoc fixes immediately without platform regression.</p>
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
        </div>
      </section>

      {/* ── Social Proof ─────────────────────────────────────────── */}
      <section id="endorsements" className="scroll-mt-20 py-32 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest mb-4">Endorsements</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-20">What Leaders Say</h3>
          </FadeIn>
          <div className="max-w-3xl py-16">
            <FadeIn delay={0.1}>
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
        </div>
      </section>

      {/* ── Professional Tenure ──────────────────────────────────── */}
      <section id="experience" className="scroll-mt-20 pt-20 pb-28 bg-black">
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
                  <span className="text-white">UBS — Global Wealth Americas</span>
                  <span className="hidden md:inline text-white/20">·</span>
                  <span>2020 – Present</span>
                </div>
                <h4 className="text-3xl font-serif text-white mb-6">Senior Initiative Manager</h4>
                <p className="text-[#A1A1A6] font-sans text-base leading-relaxed mb-8">
                  Managed strategic enterprise transformations including a global AI-enabled transaction review capability, the migration of legacy platforms to Microsoft Azure, a marquee client experience rollout, and the end-to-end execution of a fraud-prevention RFP.
                </p>
                <button
                  onClick={() => openDrawer(
                    "UBS — Global Wealth Americas",
                    <>
                      <p className="text-xs font-sans uppercase tracking-widest text-white/40 mb-4">2020 – Present</p>
                      <p>Managed strategic enterprise transformations including a global AI-enabled transaction review capability, the migration of legacy platforms to Microsoft Azure, a marquee client experience rollout, and the end-to-end execution of a fraud-prevention RFP.</p>
                      <ul className="mt-4 space-y-4 list-none">
                        <li><strong className="text-white font-sans font-medium">AI-Enabled Transaction Review Capability:</strong> Delivered a scalable control utilizing autonomous agents to synthesize transaction behavior and customer risk into reviewer-ready outputs. Embedding agentic pattern recognition and narrative generation positioned AI as a force multiplier, driving a step-change in analyst capacity and global consistency.</li>
                        <li><strong className="text-white font-sans font-medium">Legacy-to-Cloud Transformation:</strong> Led the transformation of a locally hosted monolith into cloud-based microservices on Microsoft Azure, improving scalability, resilience, and speed-to-market while significantly reducing infrastructure costs.</li>
                        <li><strong className="text-white font-sans font-medium">Global Marquee Client Launch:</strong> Directed cross-functional teams across product, engineering, risk, and operations to streamline onboarding and review processes, scaling a wealth management experience from a 5K pilot to a global rollout.</li>
                        <li><strong className="text-white font-sans font-medium">Fraud Prevention RFP & Rollout:</strong> Led the end-to-end execution of a fraud-prevention solution RFP, including requirements gathering, vendor evaluation, and global implementation to strengthen enterprise security controls.</li>
                      </ul>
                    </>,
                    "Professional Tenure",
                    "Senior Initiative Manager"
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
                  <span>UBS — Asset Management</span>
                  <span className="hidden md:inline text-white/20">·</span>
                  <span>2014 – 2020</span>
                </div>
                <h4 className="text-3xl font-serif text-white mb-6">Senior Delivery Lead</h4>
                <p className="text-[#A1A1A6] font-sans text-base leading-relaxed mb-8">
                  Directed the enterprise-scale integration of a modern accounting engine, led a global digital portal modernization program, and transitioned traditional waterfall development into a high-velocity Agile organization.
                </p>
                <button
                  onClick={() => openDrawer(
                    "UBS — Asset Management",
                    <>
                      <p className="text-xs font-sans uppercase tracking-widest text-white/40 mb-4">2014 – 2020</p>
                      <p>Directed the enterprise-scale integration of a modern accounting engine, led a global digital portal modernization program, and transitioned traditional waterfall development into a high-velocity Agile organization.</p>
                      <ul className="mt-4 space-y-4 list-none">
                        <li><strong className="text-white font-sans font-medium">Enterprise Platform Transformation:</strong> Orchestrated the replacement of a critical legacy investment application with the SimCorp Dimension (SCD) accounting engine, achieving a flawless production cutover with no post-migration incidents.</li>
                        <li><strong className="text-white font-sans font-medium">Digital Portal Modernization:</strong> Executed a unified client portal vision across a fragmented 20+ application landscape, leading the decommissioning of legacy apps and streamlining user journeys across the global client lifecycle.</li>
                        <li><strong className="text-white font-sans font-medium">High-Velocity Agile Evolution:</strong> Transitioned rigid waterfall methodologies to a rapid, iterative delivery model, integrating modern CI/CD pipelines to accelerate deployment cadence from quarterly to weekly.</li>
                      </ul>
                    </>,
                    "Professional Tenure",
                    "Senior Delivery Lead"
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
                  Managed the strategic upgrade and maintenance of a core research platform for a $40B AUM fund-of-funds, led a major client reporting refresh, and introduced executive metrics to enable data-driven portfolio decisions.
                </p>
                <button
                  onClick={() => openDrawer(
                    "Grosvenor Capital Management",
                    <>
                      <p className="text-xs font-sans uppercase tracking-widest text-white/40 mb-4">Dec 2012 – Mar 2014</p>
                      <p>Managed the strategic upgrade and maintenance of a core research platform for a $40B AUM fund-of-funds, led a major client reporting refresh, and introduced executive metrics to enable data-driven portfolio decisions.</p>
                      <ul className="mt-4 space-y-4 list-none">
                        <li><strong className="text-white font-sans font-medium">Core Research Platform Evolution:</strong> Responsible for the upgrade and maintenance of the core research platform, closely aligning technology roadmaps with business growth priorities and investment research workflows.</li>
                        <li><strong className="text-white font-sans font-medium">Institutional Client Reporting Refresh:</strong> Led a major Client Reporting refresh that standardized data architecture to improve accuracy, presentation quality, and turnaround times for global institutional deliverables.</li>
                        <li><strong className="text-white font-sans font-medium">Executive Transparency:</strong> Introduced executive dashboard metrics that improved transparency across the senior leadership team, enabling data-driven portfolio management decisions at the program level.</li>
                      </ul>
                    </>,
                    "Professional Tenure",
                    "Program Manager"
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
                <h4 className="text-3xl font-serif text-white mb-6">Agile Project Manager</h4>
                <p className="text-[#A1A1A6] font-sans text-base leading-relaxed mb-8">
                  Led global C++ exchange connectivity development for high-frequency trading gateways, managed the modernization of an algorithmic trading platform, and optimized portfolio planning through ROI-driven prioritization.
                </p>
                <button
                  onClick={() => openDrawer(
                    "RTS Realtime Systems",
                    <>
                      <p className="text-xs font-sans uppercase tracking-widest text-white/40 mb-4">Feb 2011 – Dec 2012</p>
                      <p>Led global C++ exchange connectivity development for high-frequency trading gateways, managed the modernization of an algorithmic trading platform, and optimized portfolio planning through ROI-driven prioritization.</p>
                      <ul className="mt-4 space-y-4 list-none">
                        <li><strong className="text-white font-sans font-medium">High-Frequency Trading Connectivity:</strong> Led global C++ exchange connectivity development for high-frequency trading gateways, coordinating delivery across FIX protocol and proprietary exchange APIs for institutional trading clients.</li>
                        <li><strong className="text-white font-sans font-medium">Algorithmic Platform Modernization:</strong> Managed the modernization of the algorithmic trading platform, establishing Agile delivery practices in a highly technical, latency-sensitive environment.</li>
                        <li><strong className="text-white font-sans font-medium">Strategic Backlog Optimization:</strong> Optimized portfolio planning by applying ROI-driven prioritization to a constrained engineering backlog, maximizing throughput for the highest-value exchange connectivity initiatives.</li>
                      </ul>
                    </>,
                    "Professional Tenure",
                    "Agile Project Manager"
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
      <section id="credentials" className="scroll-mt-20 pt-16 pb-28 bg-[#0C0C0C]">
        <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest mb-4">Credentials</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-20">Credentials & Expertise</h3>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <FadeIn delay={0.1} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <GraduationCap className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-3">Academic</h4>
            <p className="text-white font-sans font-medium mb-2">Master of Science in Computer Science</p>
            <div className="space-y-1 text-sm font-sans">
              <p className="text-[#A1A1A6]">Illinois Institute of Technology</p>
              <p className="text-[#A1A1A6]/60">Focus: Software Engineering & Enterprise Architecture</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <GraduationCap className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-3">Academic</h4>
            <p className="text-white font-sans font-medium mb-2">Master of Business Administration</p>
            <div className="space-y-1 text-sm font-sans">
              <p className="text-[#A1A1A6]">Dominican University — Brennan School of Business</p>
              <p className="text-[#A1A1A6]/60">Most Outstanding Student Award</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <GraduationCap className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-3">Academic</h4>
            <p className="text-white font-sans font-medium mb-2">Bachelor of Science in Computer Science</p>
            <div className="space-y-1 text-sm font-sans">
              <p className="text-[#A1A1A6]">Dominican University</p>
              <p className="text-[#A1A1A6]/60">Graduated cum laude</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
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
              Verify Credential <ExternalLink size={11} />
            </a>
          </FadeIn>

          <FadeIn delay={0.5} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
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
              Verify Credential <ExternalLink size={11} />
            </a>
          </FadeIn>

          <FadeIn delay={0.6} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200 flex flex-col">
            <BadgeCheck className="text-[#A1A1A6] mb-5" size={20} />
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-3">Certification</h4>
            <p className="text-white font-sans font-medium mb-1">UBS Certified Initiative Manager</p>
            <p className="text-[#A1A1A6] font-sans text-sm leading-relaxed mb-auto">Internal elite certification for high-impact initiative delivery and strategic leadership within global financial services.</p>
            <a
              href="https://www.credly.com/badges/c8a28f1f-ba9e-41e5-8cd0-657a6fc0dedc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-sans text-[#A1A1A6]/50 hover:text-white transition-colors mt-5"
            >
              Verify Credential <ExternalLink size={11} />
            </a>
          </FadeIn>

        </div>
        </div>
      </section>

      {/* ── Stack & Skills ───────────────────────────────────────── */}
      <section id="skills" className="scroll-mt-20 pt-16 pb-28 bg-[#0C0C0C]">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="mb-20">
              <h2 className="text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest mb-4">Toolset</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Stack & Skills</h3>
              <p className="text-[#A1A1A6] font-sans max-w-xl">Leadership frameworks, modern methodologies, and technical capabilities.</p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200">
              <Sparkles className="text-[#A1A1A6] mb-5" size={20} />
              <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">AI Strategy & Autonomous Agents</h4>
              <ul className="space-y-2 text-white font-sans text-sm leading-relaxed">
                <li>Autonomous Agent Workflows</li>
                <li>LLM Orchestration</li>
                <li>Prompt Engineering</li>
                <li>Human-in-the-Loop Systems</li>
                <li>Replit Rapid Prototyping</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200">
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

            <FadeIn delay={0.3} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200">
              <BookOpen className="text-[#A1A1A6] mb-5" size={20} />
              <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Coaching & Organizational Playbook</h4>
              <ul className="space-y-2 text-white font-sans text-sm leading-relaxed">
                <li>Agile Transformation</li>
                <li>UBS Key Talent Program</li>
                <li>Empathy-Led Mentorship</li>
                <li>Stakeholder Influence</li>
                <li>Emotional Intelligence (EQ)</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.4} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200">
              <Layers className="text-[#A1A1A6] mb-5" size={20} />
              <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Modern Methodologies</h4>
              <ul className="space-y-2 text-white font-sans text-sm leading-relaxed">
                <li>Agile Delivery (Scrum, Kanban, Lean)</li>
                <li>DevOps & CI/CD</li>
                <li>Program & Portfolio Management</li>
                <li>Scaled Agile Model (Pods, Crews, Chapters, Guilds)</li>
                <li>Objectives & Key Results (OKRs)</li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.5} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200">
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

            <FadeIn delay={0.6} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200">
              <Scale className="text-[#A1A1A6] mb-5" size={20} />
              <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Strategic Governance & Risk</h4>
              <ul className="space-y-2 text-white font-sans text-sm leading-relaxed">
                <li>Regulatory Alignment</li>
                <li>Audit Defensibility</li>
                <li>Model Risk Management</li>
                <li>Strategic Compliance</li>
                <li>RAID Log & Risk Mitigation</li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Beyond the Boardroom ─────────────────────────────────── */}
      <section id="personal" className="scroll-mt-20 py-28 container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="text-center mb-28 max-w-2xl mx-auto">
            <h2 className="text-xs font-sans font-medium text-[#A1A1A6] uppercase tracking-widest mb-4">Personal Pursuits</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-white mb-6">Beyond the Boardroom</h3>
            <p className="text-[#A1A1A6] font-sans">Strategy, endurance, and process applied outside the office.</p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn delay={0.1} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200">
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Discipline</h4>
            <p className="text-white font-sans text-sm leading-relaxed">Completed my first half-marathon in 2025. Training for a full marathon in the fall of 2026. The sustained commitment mirrors the stamina required to shepherd multi-year enterprise programs without losing momentum.</p>
          </FadeIn>
          <FadeIn delay={0.2} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200">
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Mentorship</h4>
            <p className="text-white font-sans text-sm leading-relaxed">Chess teacher for elementary and middle school students. Teaching strategic thinking applies the same patience and pattern recognition I use mentoring engineers and PMs.</p>
          </FadeIn>
          <FadeIn delay={0.3} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200">
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Process</h4>
            <p className="text-white font-sans text-sm leading-relaxed">Wood-Fire BBQ Enthusiast. The precision and patience of low-and-slow smoking mirrors the process discipline I bring to software delivery.</p>
          </FadeIn>
          <FadeIn delay={0.4} className="bg-[#1C1C1E] border border-[#2C2C2E] p-8 rounded-sm hover:border-white/25 transition-all duration-200">
            <h4 className="text-[#A1A1A6] font-sans font-medium text-xs uppercase tracking-widest mb-4">Growth</h4>
            <p className="text-white font-sans text-sm leading-relaxed">Exploring how blockchain technologies, smart contracts, and decentralized finance can reshape global markets, including as an Ethereum home staker.</p>
          </FadeIn>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-20 py-24 bg-black">
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
