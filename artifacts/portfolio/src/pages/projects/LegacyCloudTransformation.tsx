import { useSeo } from "@/hooks/use-seo";
import { PageTransition, FadeIn } from "@/components/PageTransition";
import { ArrowRight, Users, TrendingUp, Layers, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function LegacyCloudTransformation() {
  useSeo({
    title: "Case Study: Legacy-to-Cloud Transformation | Chris Albrecht",
    description: "How Chris Albrecht led the transformation of a locally hosted monolith into scalable Azure microservices at UBS."
  });

  return (
    <PageTransition>
      <section className="container mx-auto px-6 md:px-12 py-20 md:py-36 max-w-4xl">

        <FadeIn>
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Case Study</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
            Legacy-to-Cloud Transformation
          </h1>
          <div className="flex flex-wrap gap-6 text-sm font-mono text-muted-foreground border-b border-white/10 pb-12 mb-20">
            <span>UBS · Global Technology</span>
            <span className="text-white/20">·</span>
            <span>2020 – Present</span>
            <span className="text-white/20">·</span>
            <span>Senior Initiative Manager</span>
          </div>
        </FadeIn>

        <div className="space-y-24">

          <FadeIn delay={0.1}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 text-muted-foreground font-mono text-sm pt-2 uppercase tracking-widest">
                Executive Summary
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  [Replace with a 2–3 sentence executive summary. Describe the scope, the business stakes, and the ultimate outcome in concise, board-ready language.]
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Example: Led migration of UBS's core [platform name] monolith to a resilient Microsoft Azure microservices architecture, reducing infrastructure costs by X% and improving deployment frequency from monthly to weekly releases.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 flex items-start gap-3 pt-2">
                <Users className="text-primary shrink-0" size={18} />
                <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest">The Challenge</span>
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-2xl font-serif text-white mb-6">Stakeholders, Scale & Complexity</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>[Describe the technical and organizational challenge. What was the legacy state? How many teams, geographies, and stakeholders were involved?]</p>
                  <p>[Example: The platform had accumulated N years of technical debt across X business units, with zero cloud infrastructure expertise in the existing engineering teams and strict regulatory requirements governing data residency and audit trails.]</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 flex items-start gap-3 pt-2">
                <Layers className="text-primary shrink-0" size={18} />
                <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest">Approach</span>
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-2xl font-serif text-white mb-6">The Initiative Management Approach</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>[Describe your methodology. How did you structure the migration? What governance, risk management, and communication patterns did you apply?]</p>
                  <p>[Example: Adopted a strangler-fig migration pattern with parallel run periods to de-risk cutover. Established cloud governance framework, trained N engineers on Azure, and ran bi-weekly architecture review boards with senior technology leadership.]</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-start">
              <div className="md:col-span-1 flex items-start gap-3 pt-2">
                <TrendingUp className="text-primary shrink-0" size={18} />
                <span className="text-muted-foreground font-mono text-sm uppercase tracking-widest">Results</span>
              </div>
              <div className="md:col-span-3 bg-white/5 border border-white/10 p-10 rounded-sm">
                <h3 className="text-2xl font-serif text-white mb-8">Key Results & Leadership Impact</h3>
                <ul className="space-y-4">
                  {[
                    "[Result 1 — Replace with quantified outcome. E.g., Reduced infrastructure costs by X% through elimination of on-premise hosting and license consolidation.]",
                    "[Result 2 — Replace with quantified outcome. E.g., Improved deployment frequency from monthly to weekly, reducing time-to-market for new features by X%.]",
                    "[Result 3 — Replace with a risk/resilience outcome. E.g., Achieved 99.9% uptime SLA post-migration with zero regulatory incidents during cutover.]",
                    "[Result 4 — Replace with a leadership impact. E.g., Upskilled N engineers on Azure cloud architecture, establishing a cloud-native engineering culture across the division.]"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

        </div>

        <FadeIn delay={0.5} className="mt-36 pt-16 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm"
            data-testid="link-case-study-back"
          >
            <ArrowRight size={14} className="rotate-180" />
            Back to Portfolio
          </Link>
          <Link
            href="/projects/simcorp-dimension-integration"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
            data-testid="link-case-study-next"
          >
            Next Case Study: SimCorp Dimension Integration
            <ArrowRight size={14} />
          </Link>
        </FadeIn>

      </section>
    </PageTransition>
  );
}
